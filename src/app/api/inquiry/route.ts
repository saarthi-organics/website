import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Sync submission to Google Sheets (Direct Sheets API or Webhook fallback)
async function syncToGoogleSheets(record: Record<string, string | undefined>): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (webhookUrl) {
    try {
      console.log('[GOOGLE SHEETS] Attempting sync via Webhook...');
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateTime: record.dateTime,
          contactPerson: record.contactPerson,
          companyName: record.companyName,
          phone: record.phone,
          email: record.email,
          industryType: record.industryType,
          message: record.message,
          pageSource: record.formPageUrl || record.sourcePage || '/'
        })
      });

      if (response.ok) {
        console.log('[GOOGLE SHEETS] Webhook sync succeeded!');
        return true;
      }
      console.warn(`[GOOGLE SHEETS] Webhook sync returned status ${response.status}`);
    } catch (err) {
      console.error('[GOOGLE SHEETS ERROR] Webhook sync failed:', err);
    }
  }

  if (email && privateKey && spreadsheetId) {
    try {
      console.log('[GOOGLE SHEETS] Attempting sync via Direct Sheets API...');
      const formattedKey = privateKey.replace(/\\n/g, '\n');
      const auth = new google.auth.JWT({
        email,
        key: formattedKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const rowValues = [
        record.dateTime,
        record.contactPerson,
        record.companyName,
        record.phone,
        record.email,
        record.industryType,
        record.message,
        record.formPageUrl || record.sourcePage || '/'
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowValues]
        }
      });

      console.log('[GOOGLE SHEETS] Direct Sheets API sync succeeded!');
      return true;
    } catch (err) {
      console.error('[GOOGLE SHEETS ERROR] Direct Sheets API sync failed:', err);
      throw err;
    }
  }

  if (!webhookUrl && (!email || !privateKey || !spreadsheetId)) {
    console.log('[GOOGLE SHEETS SIMULATION] No credentials set. Simulating Sheets append:');
    console.log('Row values:', [
      record.dateTime,
      record.contactPerson,
      record.companyName,
      record.phone,
      record.email,
      record.industryType,
      record.message,
      record.formPageUrl || record.sourcePage || '/'
    ]);
    return true; // Return true as simulated success for validation
  }

  return false;
}

// Helper to sanitize fields for CSV representation
function escapeCSV(val: unknown): string {
  if (val === undefined || val === null) return '';
  const str = String(val).trim();
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Lightweight server-side user-agent parser
function parseUserAgent(userAgentStr: string) {
  const ua = userAgentStr || '';
  let browser = 'Unknown Browser';
  let deviceType = 'Desktop';
  let mobileDesktop = 'Desktop';

  if (/mobi|android|iphone|ipad|ipod/i.test(ua)) {
    mobileDesktop = 'Mobile';
    if (/iphone/i.test(ua)) {
      deviceType = 'iPhone';
    } else if (/ipad/i.test(ua)) {
      deviceType = 'iPad';
    } else if (/android/i.test(ua)) {
      deviceType = 'Android Device';
    } else {
      deviceType = 'Mobile Device';
    }
  } else {
    if (/macintosh|mac os x/i.test(ua)) {
      deviceType = 'Macintosh';
    } else if (/windows/i.test(ua)) {
      deviceType = 'Windows PC';
    } else if (/linux/i.test(ua)) {
      deviceType = 'Linux PC';
    }
  }

  if (/chrome|crios/i.test(ua) && !/edge|edg/i.test(ua) && !/opr/i.test(ua)) {
    browser = 'Google Chrome';
  } else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) {
    browser = 'Apple Safari';
  } else if (/firefox|fxios/i.test(ua)) {
    browser = 'Mozilla Firefox';
  } else if (/edge|edg/i.test(ua)) {
    browser = 'Microsoft Edge';
  } else if (/opr/i.test(ua)) {
    browser = 'Opera';
  }

  return { browser, deviceType, mobileDesktop };
}

// Self-healing database migration helper
function migrateCSVIfRequired(jsonPath: string, csvPath: string): boolean {
  try {
    const headers = [
      'Submission ID',
      'Date',
      'Time',
      'Company Name',
      'Contact Person',
      'Phone',
      'Email',
      'Industry',
      'Quantity',
      'Location',
      'Packaging Requirement',
      'Monthly Requirement',
      'Message',
      'Landing Page',
      'Form Page URL',
      'Referring URL',
      'Website Page Name',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'UTM Term',
      'UTM Content',
      'Traffic Source',
      'Device Type',
      'Mobile/Desktop',
      'Browser Type',
      'Visitor IP Address',
      'Country',
      'State/Region'
    ];

    let rewrite = false;
    if (fs.existsSync(csvPath)) {
      const firstLine = fs.readFileSync(csvPath, 'utf8').split('\n')[0];
      if (!firstLine.includes('Landing Page') || !firstLine.includes('Device Type')) {
        rewrite = true;
      }
    } else {
      rewrite = true;
    }

    if (rewrite && fs.existsSync(jsonPath)) {
      const records = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (Array.isArray(records)) {
        const rows = records.map((record: Record<string, unknown>) => {
          let dateVal = String(record.date || '');
          let timeVal = String(record.time || '');
          if (!dateVal && record.dateTime) {
            const parts = String(record.dateTime).split(', ');
            dateVal = parts[0] || '';
            timeVal = parts[1] || '';
          }

          return [
            escapeCSV(record.submissionId),
            escapeCSV(dateVal),
            escapeCSV(timeVal),
            escapeCSV(record.companyName),
            escapeCSV(record.contactPerson),
            escapeCSV(record.phone),
            escapeCSV(record.email),
            escapeCSV(record.industryType),
            escapeCSV(record.requiredQuantity),
            escapeCSV(record.deliveryLocation),
            escapeCSV(record.packagingRequirement || ''),
            escapeCSV(record.monthlyRequirement || ''),
            escapeCSV(record.message),
            escapeCSV(record.landingPageUrl || ''),
            escapeCSV(record.formPageUrl || ''),
            escapeCSV(record.referringUrl || ''),
            escapeCSV(record.pageName || ''),
            escapeCSV(record.utmSource || ''),
            escapeCSV(record.utmMedium || ''),
            escapeCSV(record.utmCampaign || ''),
            escapeCSV(record.utmTerm || ''),
            escapeCSV(record.utmContent || ''),
            escapeCSV(record.trafficSource || 'Direct Visit'),
            escapeCSV(record.deviceType || 'Desktop'),
            escapeCSV(record.mobileDesktop || 'Desktop'),
            escapeCSV(record.browserType || 'Unknown Browser'),
            escapeCSV(record.ipAddress || '127.0.0.1'),
            escapeCSV(record.country || 'N/A'),
            escapeCSV(record.stateRegion || 'N/A')
          ].join(',');
        });

        const csvContent = headers.join(',') + '\n' + rows.join('\n') + '\n';
        fs.writeFileSync(csvPath, csvContent, 'utf8');
        console.log('[CSV MIGRATION] CSV spreadsheet migrated successfully to full marketing attribution schema!');
        return true;
      }
    }
  } catch (err) {
    console.error('[CSV MIGRATION ERROR] Failed to migrate CSV headers:', err);
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName = '',
      contactPerson = '',
      phone = '',
      email = '',
      industryType = '',
      requiredQuantity = '',
      deliveryLocation = '',
      packagingRequirement = '',
      monthlyRequirement = '',
      message = '',
      website = '', // Honeypot field

      // Client Marketing Attribution Parameters
      landingPageUrl = '',
      formPageUrl = '',
      referringUrl = '',
      pageName = '',
      utmSource = '',
      utmMedium = '',
      utmCampaign = '',
      utmTerm = '',
      utmContent = '',
      trafficSource = 'Direct Visit'
    } = body;

    // 1. Honeypot Validation
    if (website) {
      console.warn('[SPAM BLOCK] Submission rejected due to honeypot field being populated:', website);
      return NextResponse.json({ success: true, spam: true, message: 'Processed successfully (spam blocked)' });
    }

    // 2. Server-side Visitor Parameters Resolving
    const userAgentHeader = req.headers.get('user-agent') || '';
    const { browser, deviceType, mobileDesktop } = parseUserAgent(userAgentHeader);

    // Resolve IP address
    const ipAddress = (
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1'
    ).trim();

    // Resolve Location Geolocation headers (Vercel/Cloudflare standards)
    const country = req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry') || 'Unknown';
    const stateRegion = req.headers.get('x-vercel-ip-country-region') || 'Unknown';

    // 3. Metadata Generation
    const timestamp = new Date();
    const dateStr = timestamp.toISOString().split('T')[0].replace(/-/g, '');
    const randSuffix = Math.floor(1000 + Math.random() * 9000);
    const submissionId = `INQ-${dateStr}-${randSuffix}`;

    const dateVal = timestamp.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timeVal = timestamp.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
    const formattedDate = `${dateVal}, ${timeVal}`;

    const newRecord = {
      submissionId,
      dateTime: formattedDate,
      date: dateVal,
      time: timeVal,
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      phone: phone.trim(),
      email: email.trim(),
      industryType: industryType.trim(),
      requiredQuantity: requiredQuantity.trim(),
      deliveryLocation: deliveryLocation.trim(),
      packagingRequirement: packagingRequirement.trim(),
      monthlyRequirement: monthlyRequirement.trim(),
      message: message.trim(),

      // Attribution
      landingPageUrl,
      formPageUrl,
      referringUrl,
      pageName,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      trafficSource,

      // Environment
      ipAddress,
      browserType: browser,
      deviceType,
      mobileDesktop,
      country,
      stateRegion
    };

    let localSaveSuccess = false;
    let emailSendSuccess = false;
    let sheetsSyncSuccess = false;
    let localError: unknown = null;

    // 4. Local Database Logging & Self-Healing CSV Update
    const dataDir = path.join(process.cwd(), 'data');
    const jsonPath = path.join(dataDir, 'submissions.json');
    const csvPath = path.join(dataDir, 'submissions.csv');

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // JSON logging
      let records = [];
      if (fs.existsSync(jsonPath)) {
        const fileContent = fs.readFileSync(jsonPath, 'utf8');
        try {
          records = JSON.parse(fileContent);
          if (!Array.isArray(records)) records = [];
        } catch {
          records = [];
        }
      }
      records.push(newRecord);
      fs.writeFileSync(jsonPath, JSON.stringify(records, null, 2), 'utf8');

      // Check and Rebuild/Migrate CSV headers if needed
      const migrated = migrateCSVIfRequired(jsonPath, csvPath);

      if (!migrated) {
        // Append row to CSV
        const csvRow = [
          escapeCSV(submissionId),
          escapeCSV(dateVal),
          escapeCSV(timeVal),
          escapeCSV(newRecord.companyName),
          escapeCSV(newRecord.contactPerson),
          escapeCSV(newRecord.phone),
          escapeCSV(newRecord.email),
          escapeCSV(newRecord.industryType),
          escapeCSV(newRecord.requiredQuantity),
          escapeCSV(newRecord.deliveryLocation),
          escapeCSV(newRecord.packagingRequirement),
          escapeCSV(newRecord.monthlyRequirement),
          escapeCSV(newRecord.message),
          escapeCSV(landingPageUrl),
          escapeCSV(formPageUrl),
          escapeCSV(referringUrl),
          escapeCSV(pageName),
          escapeCSV(utmSource),
          escapeCSV(utmMedium),
          escapeCSV(utmCampaign),
          escapeCSV(utmTerm),
          escapeCSV(utmContent),
          escapeCSV(trafficSource),
          escapeCSV(deviceType),
          escapeCSV(mobileDesktop),
          escapeCSV(browser),
          escapeCSV(ipAddress),
          escapeCSV(country),
          escapeCSV(stateRegion)
        ].join(',');

        fs.appendFileSync(csvPath, csvRow + '\n', 'utf8');
      }
      localSaveSuccess = true;
      
      // Sync to Google Sheets
      try {
        sheetsSyncSuccess = await syncToGoogleSheets(newRecord);
      } catch (err) {
        console.error('[GOOGLE SHEETS PIPELINE ERROR] Sheets sync failed:', err);
      }
    } catch (err) {
      localError = err;
      console.error('[DATABASE ERROR] Failed to save submission locally:', err);
    }

    // 5. Email Notification HTML Generation (with marketing summary)
    const emailSubject = 'New Website Inquiry - Saarthi Organics';
    const emailBodyHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2d9cd; border-top: 5px solid #d4af37; padding: 24px; border-radius: 8px; background-color: #faf7f2;">
        <h2 style="color: #352317; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-top: 0;">New Sourcing Inquiry Received</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; width: 180px; border-bottom: 1px solid #eee;">Submission ID:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${submissionId}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Date & Time:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Company Name:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${newRecord.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Contact Person:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${newRecord.contactPerson}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Phone Number:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;"><a href="tel:${newRecord.phone}">${newRecord.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Email Address:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;"><a href="mailto:${newRecord.email}">${newRecord.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Industry Segment:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee; text-transform: capitalize;">${newRecord.industryType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Required Quantity:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${newRecord.requiredQuantity}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Delivery Location:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${newRecord.deliveryLocation}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Packaging Format:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee; text-transform: capitalize;">${newRecord.packagingRequirement}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Monthly Commitment:</td>
            <td style="padding: 8px 0; color: #130f0c; border-bottom: 1px solid #eee;">${newRecord.monthlyRequirement || 'None stated'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px;">
          <p style="font-weight: bold; color: #352317; margin-bottom: 5px;">Additional Message / Requirements:</p>
          <div style="background-color: #ffffff; border: 1px solid #e2d9cd; padding: 15px; border-radius: 4px; color: #130f0c; white-space: pre-wrap; font-size: 0.95rem; line-height: 1.5;">${newRecord.message || 'No custom message.'}</div>
        </div>

        <h3 style="color: #352317; border-bottom: 2px solid #d4af37; padding-bottom: 6px; margin-top: 25px; margin-bottom: 10px;">Lead Sourcing & Attribution</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; width: 180px; border-bottom: 1px solid #eee;">Lead Source:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee; font-weight: bold;">${trafficSource}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Landing Page:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee; font-size: 0.9rem; word-break: break-all;">${landingPageUrl || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Form Page URL:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee; font-size: 0.9rem; word-break: break-all;">${formPageUrl || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Referrer:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee; font-size: 0.9rem; word-break: break-all;">${referringUrl || 'Direct Visit'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">UTM parameters:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee; font-size: 0.9rem;">
              Source: ${utmSource || 'N/A'} | Medium: ${utmMedium || 'N/A'} | Campaign: ${utmCampaign || 'N/A'}
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Device / Browser:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee;">
              ${mobileDesktop} (${deviceType}) / ${browser}
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #352317; border-bottom: 1px solid #eee;">Visitor Geo & IP:</td>
            <td style="padding: 6px 0; color: #130f0c; border-bottom: 1px solid #eee;">
              Region: ${stateRegion} | Country: ${country} | IP: ${ipAddress}
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; border-top: 1px solid #e2d9cd; padding-top: 12px; font-size: 0.8rem; color: #9c7a28; text-align: center;">
          This email was auto-generated by Saarthi Organics Portal. Do not reply directly to this mailer.
        </div>
      </div>
    `;

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT) || 587,
          secure: Number(SMTP_PORT) === 465,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"Saarthi Sourcing System" <${SMTP_USER}>`,
          to: 'organicssaarthi@gmail.com',
          subject: emailSubject,
          html: emailBodyHTML
        });

        emailSendSuccess = true;
      } catch (err) {
        console.error('[EMAIL ERROR] Failed to dispatch SMTP email:', err);
      }
    } else {
      console.warn('[EMAIL WARNING] SMTP credentials are not configured. Logging submission content instead:');
      console.log('--- EMAIL SIMULATION START ---');
      console.log('To: organicssaarthi@gmail.com');
      console.log('Subject:', emailSubject);
      console.log('Data:', JSON.stringify(newRecord, null, 2));
      console.log('--- EMAIL SIMULATION END ---');
      emailSendSuccess = true;
    }

    if (localSaveSuccess && emailSendSuccess && sheetsSyncSuccess) {
      return NextResponse.json({
        success: true,
        submissionId,
        message: 'Thank you for contacting Saarthi Organics. Our team will review your requirement and get back to you shortly.'
      });
    }

    if (!localSaveSuccess) {
      return NextResponse.json({
        success: false,
        message: 'System error processing request. Sourcing team notified. Please contact directly by phone.',
        errors: {
          local: localError instanceof Error ? localError.message : String(localError)
        }
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      partial: true,
      submissionId,
      message: 'Thank you for contacting Saarthi Organics. Our team will review your requirement and get back to you shortly.',
      warning: 'One of the dispatch pipeline steps completed with warnings, but your inquiry has been secured.',
      deliveryStatus: {
        email: emailSendSuccess,
        sheets: sheetsSyncSuccess
      }
    });

  } catch (err) {
    console.error('[API CRASH] Critical failure in form submission handler:', err);
    return NextResponse.json({
      success: false,
      message: 'A critical processing error occurred. Please contact our procurement desk directly.'
    }, { status: 500 });
  }
}
