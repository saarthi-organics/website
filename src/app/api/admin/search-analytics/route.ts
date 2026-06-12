import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    // 1. Authorization checks
    const authHeader = req.headers.get('Authorization') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const expectedPasscode = (process.env.ADMIN_PASSCODE || 'SaarthiAdmin2026').trim();

    if (!token || token !== expectedPasscode) {
      return NextResponse.json({ success: false, message: 'Unauthorized access.' }, { status: 401 });
    }

    const analyticsFile = path.join(process.cwd(), 'data', 'search_analytics.json');
    let analyticsData = {
      searches: {} as Record<string, { count: number; noResults: boolean }>,
      clicks: {} as Record<string, { count: number; queries: string[]; title?: string }>,
      history: [] as Array<{ timestamp: string; query: string; resultsCount: number }>
    };

    if (fs.existsSync(analyticsFile)) {
      try {
        const content = fs.readFileSync(analyticsFile, 'utf8');
        analyticsData = JSON.parse(content);
      } catch (e) {
        console.error('Failed to read search analytics files:', e);
      }
    }

    // Process aggregates
    const topSearches = Object.entries(analyticsData.searches || {})
      .map(([query, data]) => ({ query, count: data.count, noResults: data.noResults }))
      .sort((a, b) => b.count - a.count);

    const noResultSearches = topSearches.filter(item => item.noResults);

    const popularContent = Object.entries(analyticsData.clicks || {})
      .map(([url, data]) => ({
        url,
        title: data.title || url,
        clicks: data.count,
        queries: data.queries || []
      }))
      .sort((a, b) => b.clicks - a.clicks);

    // Summary statistics
    const totalSearches = Object.values(analyticsData.searches || {})
      .reduce((sum, item) => sum + item.count, 0);

    const totalClicks = Object.values(analyticsData.clicks || {})
      .reduce((sum, item) => sum + item.count, 0);

    const totalNoResults = Object.values(analyticsData.searches || {})
      .filter(item => item.noResults)
      .reduce((sum, item) => sum + item.count, 0);

    return NextResponse.json({
      success: true,
      stats: {
        totalSearches,
        totalClicks,
        totalNoResults,
        uniqueQueries: Object.keys(analyticsData.searches || {}).length,
        clickThroughRate: totalSearches > 0 ? Math.round((totalClicks / totalSearches) * 100) : 0
      },
      topSearches,
      noResultSearches,
      popularContent,
      history: (analyticsData.history || []).slice().reverse().slice(0, 100) // latest 100 entries
    });

  } catch (err) {
    console.error('[ADMIN SEARCH ANALYTICS API CRASH]', err);
    return NextResponse.json({ success: false, message: 'Server error retrieving search analytics.' }, { status: 500 });
  }
}
