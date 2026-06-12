import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

export async function GET(req: NextRequest) {
  try {
    // 1. Authorize via query parameter
    const { searchParams } = new URL(req.url);
    const code = (searchParams.get('code') || '').trim();
    const format = (searchParams.get('format') || 'csv').trim().toLowerCase();

    const expectedPasscode = (process.env.ADMIN_PASSCODE || 'SaarthiAdmin2026').trim();

    if (!code || code !== expectedPasscode) {
      return new Response('Unauthorized access. Invalid admin passcode.', { status: 401 });
    }

    // 2. Read search analytics database
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
      } catch (err) {
        console.error('Failed to parse search analytics during export:', err);
      }
    }

    const topSearches = Object.entries(analyticsData.searches || {})
      .map(([query, data]) => ({
        'Search Query': query,
        'Search Count': data.count,
        'No Results Returned': data.noResults ? 'Yes' : 'No'
      }))
      .sort((a, b) => b['Search Count'] - a['Search Count']);

    const noResultSearches = topSearches.filter(item => item['No Results Returned'] === 'Yes');

    const popularContent = Object.entries(analyticsData.clicks || {})
      .map(([url, data]) => ({
        'Destination URL': url,
        'Page Title': data.title || url,
        'Click Count': data.count,
        'Source Search Queries': (data.queries || []).join(', ')
      }))
      .sort((a, b) => b['Click Count'] - a['Click Count']);

    const historyLog = (analyticsData.history || []).map(item => ({
      'Timestamp (UTC)': item.timestamp,
      'Search Query': item.query,
      'Results Count': item.resultsCount
    })).reverse();

    // 3. Export XLSX
    if (format === 'xlsx') {
      const wb = XLSX.utils.book_new();

      // Sheet 1: Top Searches
      const wsTop = XLSX.utils.json_to_sheet(topSearches.length > 0 ? topSearches : [{'Search Query': 'No searches logged yet', 'Search Count': 0, 'No Results Returned': 'N/A'}]);
      XLSX.utils.book_append_sheet(wb, wsTop, 'Top Searches');

      // Sheet 2: Failed Searches
      const wsFailed = XLSX.utils.json_to_sheet(noResultSearches.length > 0 ? noResultSearches : [{'Search Query': 'No failed searches logged', 'Search Count': 0, 'No Results Returned': 'N/A'}]);
      XLSX.utils.book_append_sheet(wb, wsFailed, 'No-Result Searches');

      // Sheet 3: Popular Content
      const wsPopular = XLSX.utils.json_to_sheet(popularContent.length > 0 ? popularContent : [{'Destination URL': 'No clicks logged yet', 'Page Title': 'N/A', 'Click Count': 0, 'Source Search Queries': ''}]);
      XLSX.utils.book_append_sheet(wb, wsPopular, 'Clicked Content');

      // Sheet 4: Search Logs
      const wsHistory = XLSX.utils.json_to_sheet(historyLog.length > 0 ? historyLog : [{'Timestamp (UTC)': 'N/A', 'Search Query': 'No logs', 'Results Count': 0}]);
      XLSX.utils.book_append_sheet(wb, wsHistory, 'Search History Log');

      // Generate buffer
      const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

      return new Response(buf, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': 'attachment; filename="saarthi_search_analytics.xlsx"',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    // 4. Export CSV (Default)
    // We package the Top Searches and Search History Log into a single CSV output for simplicity
    let csvContent = '--- SAARTHI ORGANICS SEARCH ANALYTICS ---\n\n';
    
    csvContent += 'TOP SEARCH QUERIES\n';
    csvContent += 'Search Query,Search Count,No Results Returned\n';
    topSearches.forEach(row => {
      csvContent += `"${row['Search Query'].replace(/"/g, '""')}",${row['Search Count']},${row['No Results Returned']}\n`;
    });

    csvContent += '\n\nSEARCH HISTORY LOG\n';
    csvContent += 'Timestamp (UTC),Search Query,Results Count\n';
    historyLog.forEach(row => {
      csvContent += `"${row['Timestamp (UTC)'] || ''}","${(row['Search Query'] || '').replace(/"/g, '""')}",${row['Results Count']}\n`;
    });

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="saarthi_search_analytics.csv"',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (err) {
    console.error('[ADMIN SEARCH EXPORT ERROR]', err);
    return new Response('Server error generating search export.', { status: 500 });
  }
}
