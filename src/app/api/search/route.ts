import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { articles } from '@/data/blogArticles';

// Synonym/relevance boosters for B2B procurement terms
const RELEVANCE_BOOSTERS: Record<string, string[]> = {
  "molasses": ["/blackstrap-molasses", "/"],
  "blackstrap molasses": ["/blackstrap-molasses"],
  "brix": ["/blackstrap-molasses", "/quality-and-sourcing"],
  "bulk supply": ["/logistics", "/"],
  "tanker supply": ["/logistics", "/"],
  "distillery": ["/molasses-for-distilleries"],
  "ethanol": ["/molasses-for-distilleries"],
  "cattle feed": ["/molasses-for-cattle-feed"],
  "agriculture": ["/molasses-for-agriculture-and-farming"],
  "farming": ["/molasses-for-agriculture-and-farming"],
  "composting": ["/molasses-for-agriculture-and-farming"],
  "food processing": ["/molasses-for-food-processing"],
  "pharma": ["/molasses-for-pharma"],
  "foundry": ["/molasses-for-foundries"],
  "packaging": ["/blackstrap-molasses", "/logistics"],
  "logistics": ["/logistics"],
  "delivery": ["/logistics"],
  "gst billing": ["/quality-and-sourcing", "/blog/gst-compliance-input-tax-credit-sugarcane-molasses"],
  "pricing": ["/contact", "/"],
  "quote": ["/contact"]
};

// Helper to log searches to local JSON file
function logSearchToAnalytics(query: string, resultsCount: number) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const analyticsFile = path.join(dataDir, 'search_analytics.json');
    let analyticsData = {
      searches: {} as Record<string, { count: number; noResults: boolean }>,
      clicks: {} as Record<string, { count: number; queries: string[] }>,
      history: [] as Array<{ timestamp: string; query: string; resultsCount: number }>
    };

    if (fs.existsSync(analyticsFile)) {
      try {
        const content = fs.readFileSync(analyticsFile, 'utf8');
        analyticsData = JSON.parse(content);
        if (!analyticsData.searches) analyticsData.searches = {};
        if (!analyticsData.clicks) analyticsData.clicks = {};
        if (!analyticsData.history) analyticsData.history = [];
      } catch (e) {
        console.error('Failed to parse search analytics file, resetting:', e);
      }
    }

    const normQuery = query.toLowerCase().trim();
    if (normQuery) {
      // Update aggregate searches
      if (!analyticsData.searches[normQuery]) {
        analyticsData.searches[normQuery] = { count: 0, noResults: false };
      }
      analyticsData.searches[normQuery].count += 1;
      analyticsData.searches[normQuery].noResults = resultsCount === 0;

      // Log trends history
      analyticsData.history.push({
        timestamp: new Date().toISOString(),
        query: normQuery,
        resultsCount
      });

      // Cap history at 5000 items to keep file size small
      if (analyticsData.history.length > 5000) {
        analyticsData.history.shift();
      }

      fs.writeFileSync(analyticsFile, JSON.stringify(analyticsData, null, 2), 'utf8');
    }
  } catch (error) {
    console.error('Error logging search analytics:', error);
  }
}

// Helper to create a snippet around the matched term
function createSnippet(content: string, queryTerms: string[], fallbackDesc: string): string {
  if (!content) return fallbackDesc || '';
  
  const text = content.replace(/\s+/g, ' ');
  const lowerText = text.toLowerCase();
  
  let matchIndex = -1;
  let matchedTerm = '';
  
  // Find first query term match
  for (const term of queryTerms) {
    const idx = lowerText.indexOf(term.toLowerCase());
    if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
      matchIndex = idx;
      matchedTerm = term;
    }
  }
  
  if (matchIndex === -1) {
    // Return early fallback description capped at 160 characters
    return fallbackDesc ? (fallbackDesc.length > 160 ? fallbackDesc.substring(0, 157) + '...' : fallbackDesc) : (text.length > 160 ? text.substring(0, 157) + '...' : text);
  }
  
  const start = Math.max(0, matchIndex - 60);
  const end = Math.min(text.length, matchIndex + matchedTerm.length + 100);
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const rawQuery = searchParams.get('q') || '';
    const query = rawQuery.trim();

    if (!query) {
      return NextResponse.json({ results: [] });
    }

    // 1. Load static pages index
    const staticIndexFile = path.join(process.cwd(), 'src', 'data', 'staticPagesIndex.json');
    let staticPages = [];
    if (fs.existsSync(staticIndexFile)) {
      try {
        staticPages = JSON.parse(fs.readFileSync(staticIndexFile, 'utf8'));
      } catch (err) {
        console.error('Error reading static pages search index:', err);
      }
    }

    // 2. Map blog articles to search format
    const blogPages = articles.map(art => ({
      title: art.title,
      url: `/blog/${art.slug}`,
      description: art.summary,
      content: art.content.join(' '),
      type: 'blog'
    }));

    // 3. Combine both indexes
    const documents = [...staticPages, ...blogPages];
    const queryTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const queryLower = query.toLowerCase();

    const results = [];

    for (const doc of documents) {
      const docTitleLower = doc.title.toLowerCase();
      const docDescLower = (doc.description || '').toLowerCase();
      const docContentLower = doc.content.toLowerCase();
      
      let score = 0;
      const matchingTerms: string[] = [];

      // Check full query exact match in title
      if (docTitleLower.includes(queryLower)) {
        score += 100;
        matchingTerms.push(query);
      }
      
      // Check full query in description
      if (docDescLower.includes(queryLower)) {
        score += 30;
        if (!matchingTerms.includes(query)) matchingTerms.push(query);
      }

      // Check terms individually
      for (const term of queryTerms) {
        let matched = false;
        
        if (docTitleLower.includes(term)) {
          score += 15;
          matched = true;
        }
        if (docDescLower.includes(term)) {
          score += 8;
          matched = true;
        }
        
        // Term frequency in content
        if (docContentLower.includes(term)) {
          matched = true;
          // Count occurrences
          const regex = new RegExp(term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
          const count = (docContentLower.match(regex) || []).length;
          score += Math.min(20, count * 1.5); // Cap term frequency score at 20 per term to prevent keyword stuffing
        }

        if (matched && !matchingTerms.includes(term)) {
          matchingTerms.push(term);
        }
      }

      // Apply B2B relevance boosters
      for (const [boosterKey, destUrls] of Object.entries(RELEVANCE_BOOSTERS)) {
        if (queryLower.includes(boosterKey) || boosterKey.includes(queryLower)) {
          if (destUrls.includes(doc.url)) {
            score += 60; // Significant boost
            if (!matchingTerms.includes(boosterKey)) {
              matchingTerms.push(boosterKey);
            }
          }
        }
      }

      if (score > 0) {
        results.push({
          title: doc.title,
          url: doc.url,
          description: doc.description || '',
          snippet: createSnippet(doc.content, queryTerms, doc.description),
          type: doc.type,
          matchingTerms,
          score
        });
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    // Track analytics
    logSearchToAnalytics(query, results.length);

    return NextResponse.json({ results });

  } catch (error) {
    console.error('[SEARCH API ERROR]', error);
    return NextResponse.json({ error: 'Internal server error during search.' }, { status: 500 });
  }
}
