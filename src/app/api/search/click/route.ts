import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, url, title } = body;

    if (!url) {
      return NextResponse.json({ success: false, error: 'Missing destination URL' }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const analyticsFile = path.join(dataDir, 'search_analytics.json');
    let analyticsData = {
      searches: {} as Record<string, { count: number; noResults: boolean }>,
      clicks: {} as Record<string, { count: number; queries: string[]; title?: string }>,
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
        console.error('Failed to parse analytics file on click log:', e);
      }
    }

    // Update click count for URL
    if (!analyticsData.clicks[url]) {
      analyticsData.clicks[url] = { count: 0, queries: [], title };
    }
    
    analyticsData.clicks[url].count += 1;
    if (title && !analyticsData.clicks[url].title) {
      analyticsData.clicks[url].title = title;
    }

    const normQuery = (query || '').toLowerCase().trim();
    if (normQuery && !analyticsData.clicks[url].queries.includes(normQuery)) {
      analyticsData.clicks[url].queries.push(normQuery);
    }

    fs.writeFileSync(analyticsFile, JSON.stringify(analyticsData, null, 2), 'utf8');

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[CLICK API ERROR]', error);
    return NextResponse.json({ success: false, error: 'Internal server error logging click event.' }, { status: 500 });
  }
}
