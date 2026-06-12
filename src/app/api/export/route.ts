import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    // 1. Authorize via query parameter
    const { searchParams } = new URL(req.url);
    const code = (searchParams.get('code') || '').trim();

    const expectedPasscode = (process.env.ADMIN_PASSCODE || 'SaarthiAdmin2026').trim();

    if (!code || code !== expectedPasscode) {
      // Return HTML message or 401
      return new Response('Unauthorized access. Invalid admin passcode.', { status: 401 });
    }

    // 2. Read CSV database
    const csvPath = path.join(process.cwd(), 'data', 'submissions.csv');
    let csvContent = '';

    if (fs.existsSync(csvPath)) {
      csvContent = fs.readFileSync(csvPath, 'utf8');
    } else {
      // Empty header row if no data exists yet
      csvContent = [
        'Submission ID',
        'Date & Time',
        'Company Name',
        'Contact Person',
        'Phone Number',
        'Email Address',
        'Industry Type',
        'Required Quantity',
        'Delivery Location',
        'Packaging Requirement',
        'Monthly Requirement',
        'Message',
        'Source Page'
      ].join(',') + '\n';
    }

    // 3. Return CSV attachment
    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="saarthi_inquiries.csv"',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (err: any) {
    console.error('[API CRASH] Critical error exporting CSV data:', err);
    return new Response('Server error generating export.', { status: 500 });
  }
}
