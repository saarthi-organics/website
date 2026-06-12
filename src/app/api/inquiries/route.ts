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

    // 2. Fetch logged data
    const jsonPath = path.join(process.cwd(), 'data', 'submissions.json');
    let records = [];

    if (fs.existsSync(jsonPath)) {
      try {
        const fileContent = fs.readFileSync(jsonPath, 'utf8');
        records = JSON.parse(fileContent);
        if (!Array.isArray(records)) records = [];
      } catch (err) {
        console.error('[DATABASE FETCH ERROR] JSON parse failed on database retrieval:', err);
        records = [];
      }
    }

    return NextResponse.json({ success: true, records });

  } catch (err: any) {
    console.error('[API CRASH] Critical error fetching inquiries:', err);
    return NextResponse.json({ success: false, message: 'Server error processing request.' }, { status: 500 });
  }
}
