# Google Sheets Integration Setup Instructions

Follow these steps to connect your registration form to Google Sheets:

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it **"GIKI Alumni Reunion Registrations"** (or any name you prefer)

## Step 2: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. This will open the Google Apps Script editor in a new tab

## Step 3: Add the Script Code

1. Delete any existing code in the editor
2. Open the file `google-apps-script.js` from your project folder
3. Copy ALL the code from that file
4. Paste it into the Apps Script editor
5. Click **Save** (the disk icon) and name your project (e.g., "Alumni Registration API")

## Step 4: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Alumni Registration Form API" (optional)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**

## Step 5: Authorize the Script

1. You'll see a message saying "Authorization required"
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** (if you see a warning)
5. Click **Go to [Project Name] (unsafe)** - this is safe, it's your own script
6. Click **Allow** to grant permissions

## Step 6: Copy the Web App URL

1. After deployment, you'll see a **Web app URL** (it looks like: `https://script.google.com/macros/s/...`)
2. Click **Copy** to copy this URL

## Step 7: Update Your HTML Form

1. Open `index.html` in a text editor
2. Find this line near the top of the `<script>` tag (around line 404):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_SCRIPT_URL_HERE'` with your copied URL (keep the quotes):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/.../exec';
   ```
4. Save the file

## Step 8: Test the Form

1. Open `index.html` in your web browser
2. Fill out the registration form
3. Click **Complete Registration**
4. Check your Google Sheet - you should see the data appear in a new row!

## What Happens Automatically

The script will automatically:
- Create column headers on first submission
- Format the header row (bold text, purple background, white text)
- Add timestamps in Pakistan timezone
- Auto-resize columns for readability

## Troubleshooting

### Data not appearing in sheets?
- Make sur you copied the correct web app URL
- Check that you set "Who has access" to "Anyone"
- Verify the script is deployed (not just saved)

### Getting authorization errors?
- Make sure you clicked "Allow" during authorization
- Try re-deploying the script

### Form shows error message?
- Open browser console (F12) and check for errors
- Verify the GOOGLE_SCRIPT_URL is set correctly

## Viewing Your Data

Your Google Sheet will have these columns:
- Timestamp
- Registration Type
- Full Name
- Email
- Phone
- Batch Year
- Department
- Years Taught
- Dietary Preferences
- Number of Guests
- Additional Comments

## Security Note

The form uses `no-cors` mode which is standard for Google Apps Script web apps. This is secure because:
- Only your script can write to your Google Sheet
- The script runs with your authorization
- No sensitive data is exposed in the browser

## Need Help?

If you encounter issues:
1. Check the Apps Script execution log (in Apps Script editor: **Executions** on the left sidebar)
2. Verify your Google Sheet permissions
3. Make sure the script is published as a web app, not just saved
