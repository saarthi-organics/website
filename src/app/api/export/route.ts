import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

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

    // 2. Determine format and generate response
    const format = (searchParams.get('format') || 'csv').trim();

    if (format === 'xlsx') {
      const jsonPath = path.join(process.cwd(), 'data', 'submissions.json');
      let records: Record<string, string | undefined>[] = [];

      if (fs.existsSync(jsonPath)) {
        try {
          records = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        } catch {
          records = [];
        }
      }

      // Format records as flat objects for the Excel sheet
      const worksheetData = records.map((record) => ({
        'Submission ID': record.submissionId || '',
        'Date & Time': record.dateTime || '',
        'Company Name': record.companyName || '',
        'Contact Person': record.contactPerson || '',
        'Phone Number': record.phone || '',
        'Email Address': record.email || '',
        'Industry Type': record.industryType || '',
        'Required Quantity': record.requiredQuantity || '',
        'Delivery Location': record.deliveryLocation || '',
        'Packaging Requirement': record.packagingRequirement || '',
        'Monthly Requirement': record.monthlyRequirement || '',
        'Message': record.message || '',
        'Source Page': record.formPageUrl || record.sourcePage || '/'
      }));

      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Inquiries');

      // Generate buffer
      const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

      return new Response(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': 'attachment; filename="saarthi_inquiries.xlsx"',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    // Default: Return CSV attachment
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

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="saarthi_inquiries.csv"',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (err) {
    console.error('[API CRASH] Critical error exporting data:', err);
    return new Response('Server error generating export.', { status: 500 });
  }
}
