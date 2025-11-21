/**
 * Google Apps Script for GIKI Alumni Reunion Registration Form
 * This script receives form submissions and saves them to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet for storing registrations
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type "Web app"
 * 6. Set "Execute as": Me
 * 7. Set "Who has access": Anyone
 * 8. Click "Deploy" and copy the web app URL
 * 9. Paste the URL in your index.html where it says "YOUR_SCRIPT_URL_HERE"
 * 10. Authorize the script when prompted
 */

// This function runs when the web app receives a POST request
function doPost(e) {
    try {
        // Parse the incoming JSON data
        const data = JSON.parse(e.postData.contents);

        // Get the active spreadsheet
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Check if headers exist, if not create them
        if (sheet.getLastRow() === 0) {
            const headers = [
                'Timestamp',
                'Registration Type',
                'Full Name',
                'Email',
                'Phone',
                'Batch Year',
                'Department',
                'Years Taught',
                'Number of Guests',
                'Additional Comments'
            ];
            sheet.appendRow(headers);

            // Format header row
            const headerRange = sheet.getRange(1, 1, 1, headers.length);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#667eea');
            headerRange.setFontColor('#ffffff');
        }

        // Prepare the row data
        const row = [
            new Date(data.timestamp).toLocaleString('en-US', {
                timeZone: 'Asia/Karachi',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
            data.registrationType || '',
            data.fullName || '',
            data.email || '',
            data.phone || '',
            data.batch || '',
            data.department || '',
            data.yearsTaught || '',
            data.guests || '1',
            data.comments || ''
        ];

        // Append the row to the sheet
        sheet.appendRow(row);

        // Auto-resize columns for better readability
        sheet.autoResizeColumns(1, 10);

        // Send success response
        return ContentService
            .createTextOutput(JSON.stringify({
                'status': 'success',
                'message': 'Registration saved successfully'
            }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Send error response
        return ContentService
            .createTextOutput(JSON.stringify({
                'status': 'error',
                'message': error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// This function runs when the web app receives a GET request (for testing)
function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({
            'status': 'ok',
            'message': 'GIKI Alumni Registration API is running'
        }))
        .setMimeType(ContentService.MimeType.JSON);
}
