# 🎓 GIKI Alumni Reunion 2025 - Registration Form

A beautiful, responsive registration form for the GIKI School & College Alumni Reunion 2025. This elegant web application allows alumni students, current teachers, and alumni teachers to register for the reunion event with automatic data submission to Google Sheets.

![GIKI Alumni Reunion Form](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **🎨 Modern Light Theme** - Soft, eye-friendly color scheme with academic burgundy and gold accents
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎯 Dynamic Form Fields** - Fields change based on registration type (Alumni Student, Current Teacher, Alumni Teacher)
- **✅ Real-time Validation** - Instant feedback on form inputs
- **📊 Google Sheets Integration** - Automatic data submission to Google Sheets via Google Apps Script
- **🎓 Professional Design** - Clean, scholarly aesthetic appropriate for educational institutions
- **♿ Accessible** - Touch-friendly with proper contrast and semantic HTML
- **⚡ Lightweight** - No external dependencies, pure HTML/CSS/JavaScript

## 🖼️ Preview

The form features:
- Official GIKI logo with elegant circular frame
- Smooth animations and transitions
- Intuitive radio button selection for registration types
- Conditional fields based on user selection
- Success message with automatic form reset
- Professional color palette with burgundy and gold

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/giki-reunion-form.git
cd giki-reunion-form
```

### 2. Open Locally

Simply open `index.html` in your web browser:

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

Then navigate to `http://localhost:8000` in your browser.

## ⚙️ Google Sheets Integration Setup

To connect the form to your Google Sheets spreadsheet:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "GIKI Reunion 2025 Registrations" (or any name you prefer)
4. Add the following headers in the first row:
   ```
   Timestamp | Registration Type | Full Name | Email | Phone | Batch Year | Department | Years Taught | Number of Guests | Comments
   ```

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.registrationType,
      data.fullName,
      data.email,
      data.phone,
      data.batch || 'N/A',
      data.department || 'N/A',
      data.yearsTaught || 'N/A',
      data.guests,
      data.comments || 'N/A'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Registration received'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click `Deploy` → `New deployment`
4. Select type: `Web app`
5. Configure:
   - **Description**: GIKI Reunion Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
6. Click `Deploy`
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...`)

### Step 3: Update the Form

1. Open `index.html` in a text editor
2. Find this line (around line 815):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_SCRIPT_URL_HERE'` with your copied Web app URL
4. Save the file

### Step 4: Test the Integration

1. Open the form in your browser
2. Fill out and submit a test registration
3. Check your Google Sheet - the data should appear in a new row!

## 📋 Form Fields

### All Registrants
- **Registration Type*** (Select one: Alumni Student, Current Teacher, Alumni Teacher)
- **Full Name***
- **Email Address***
- **Phone Number***
- **Number of Guests*** (1-5, including yourself)
- **Additional Comments** (Optional)

### Conditional Fields
- **Batch Year*** - Shows for Alumni Students
- **Department*** - Shows for Current Teachers and Alumni Teachers
- **Years Taught*** - Shows for Alumni Teachers only

*Required fields

## 🎨 Customization

### Colors

The color scheme is defined in CSS variables at the top of the `<style>` section:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #a8304e 0%, #8b2d4a 100%);
    --secondary-gradient: linear-gradient(135deg, #d4b578 0%, #c0a565 100%);
    --gold: #d4b578;
    --burgundy: #a8304e;
    /* ... more variables */
}
```

### Logo

To use your own logo, replace the image URL in the HTML:

```html
<img src="YOUR_LOGO_URL" alt="GIKI Logo">
```

### Event Details

Update the title, subtitle, and badges in the HTML:

```html
<h1>Alumni Reunion 2025</h1>
<p class="subtitle">GIKI School & College</p>
<span class="event-badge">Registration Form</span>
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your branch (usually `main`)
4. Click Save
5. Your form will be available at `https://yourusername.github.io/repository-name/`

### Netlify

1. Create a [Netlify](https://netlify.com) account
2. Drag and drop your project folder
3. Your site is live!

### Vercel

```bash
npm i -g vercel
vercel
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, and responsive design
- **Vanilla JavaScript** - Form validation and submission
- **Google Apps Script** - Backend integration with Google Sheets
- **Google Fonts** - Inter, Crimson Text, and Outfit typefaces

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the form:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muhammad Shahkaar** - Batch 2024
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- GIKI School & College for inspiring the design
- The alumni community for their feedback and support

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/giki-reunion-form/issues) page
2. Create a new issue with a detailed description
3. Contact: [your.email@example.com](mailto:your.email@example.com)

---

Made with ❤️ for GIKI Alumni Reunion 2025
