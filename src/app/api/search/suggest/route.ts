import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { articles } from '@/data/blogArticles';

// Predefined suggestion targets matching the required examples and typical search queries
const SUGGESTION_POOL = [
  "Blackstrap Molasses",
  "Molasses Specifications",
  "Molasses for Distilleries",
  "Molasses for Cattle Feed",
  "Molasses for Agriculture",
  "Molasses for Yeast Industry",
  "Molasses for Food Processing",
  "Molasses for Pharma",
  "Molasses for Foundries",
  "Molasses for Tobacco Industry",
  "Logistics & Delivery",
  "Bulk Tanker Supply",
  "Delivery Coverage",
  "Brix 82-88 Specifications",
  "Product Specifications",
  "Sourcing QA Quality Standards",
  "GST Billing & Input Tax Credit",
  "Request Sourcing Quote",
  "Custom Packaging Options",
  "Direct Sugar Mill Sourcing",
  "About Saarthi Organics",
  "Frequently Asked Questions"
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get('q') || '').trim().toLowerCase();

    if (!q) {
      return NextResponse.json({ suggestions: [] });
    }

    const matchedSuggestions = new Set<string>();

    // 1. Check matching elements in our static pool
    for (const term of SUGGESTION_POOL) {
      if (term.toLowerCase().includes(q)) {
        matchedSuggestions.add(term);
      }
    }

    // 2. Load page titles dynamically
    const staticIndexFile = path.join(process.cwd(), 'src', 'data', 'staticPagesIndex.json');
    if (fs.existsSync(staticIndexFile)) {
      try {
        const staticPages = JSON.parse(fs.readFileSync(staticIndexFile, 'utf8'));
        for (const page of staticPages) {
          if (page.title.toLowerCase().includes(q)) {
            // Trim standard brand suffix to make suggestions clean
            const cleanTitle = page.title.split(' | ')[0].split(' - ')[0];
            matchedSuggestions.add(cleanTitle);
          }
        }
      } catch (err) {
        console.error('Error reading static index for suggestions:', err);
      }
    }

    // 3. Load blog articles titles
    for (const art of articles) {
      if (art.title.toLowerCase().includes(q)) {
        matchedSuggestions.add(art.title);
      }
    }

    // 4. Sort suggestions: items starting with the query first, then others
    const suggestionsArray = Array.from(matchedSuggestions);
    suggestionsArray.sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      const aStarts = aLower.startsWith(q);
      const bStarts = bLower.startsWith(q);
      
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return aLower.localeCompare(bLower);
    });

    // Limit to top 7 items
    const limitedSuggestions = suggestionsArray.slice(0, 7);

    return NextResponse.json({ suggestions: limitedSuggestions });

  } catch (error) {
    console.error('[SUGGEST API ERROR]', error);
    return NextResponse.json({ error: 'Internal server error during suggestion compilation.' }, { status: 500 });
  }
}
