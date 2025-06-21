# PDF Converter - Privacy Policy Website

A modern, minimal website containing privacy policy, terms and conditions, and contact pages for the PDF Converter iOS app.

## Features

- **Privacy Policy**: Comprehensive privacy policy explaining local data processing
- **Terms and Conditions**: Detailed terms of service for the app
- **Contact Form**: Functional contact form with validation
- **Modern Design**: Clean, minimal design inspired by shadcn
- **Responsive**: Mobile-friendly responsive design
- **Accessible**: Proper semantic HTML and accessibility features

## Pages

### 1. Privacy Policy (`index.html`)
- Explains local data processing
- No server data storage policy
- User rights and data handling
- Contact information for privacy questions

### 2. Terms and Conditions (`terms.html`)
- App usage terms
- License and permissions
- User responsibilities
- Liability limitations

### 3. Contact Us (`contact.html`)
- Contact form with validation
- Required fields: Full Name, Email, Message
- Optional subject selection
- FAQ section
- Direct email: mbansode7696@gmail.com

## Design

The website uses a modern, minimal design with:
- **Typography**: Inter font family
- **Color Scheme**: Clean black and white with subtle grays
- **Layout**: Centered content with proper spacing
- **Components**: Card-based sections with subtle borders
- **Interactions**: Smooth transitions and hover effects

## Technical Details

### Form Functionality
- Client-side validation
- Real-time error checking
- Character counting for message field
- Auto-resizing textarea
- Email composition via mailto links

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Optimized navigation for mobile

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (for mobile app users)
- Progressive enhancement

## File Structure

```
/
├── index.html          # Privacy Policy page
├── terms.html          # Terms and Conditions page
├── contact.html        # Contact Us page
├── styles.css          # Main stylesheet
├── contact.js          # Contact form functionality
└── README.md          # This file
```

## Deployment

This is a static website that can be deployed to any web hosting service:

1. **GitHub Pages**: Commit to a repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder or connect to a git repository
3. **Vercel**: Deploy directly from git or upload files
4. **Traditional Web Hosting**: Upload files via FTP

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --background: #ffffff;
    --foreground: #0f172a;
    --primary: #0f172a;
    /* ... other colors */
}
```

### Content
- Update company information in all HTML files
- Modify privacy policy details as needed
- Adjust terms and conditions for your specific app
- Update contact email from `mbansode7696@gmail.com`

### Branding
- Replace "PDF Converter" with your app name
- Add your logo by updating the nav-brand section
- Customize the color scheme to match your brand

## App Store Requirements

This website satisfies common App Store requirements:
- Clear privacy policy
- Terms of service
- Contact information
- Data handling explanation
- User rights documentation

## Legal Note

These documents are templates and should be reviewed by legal counsel before use in production. Customize the content to match your specific app functionality and data handling practices.

## Support

For questions about this website template, contact: mbansode7696@gmail.com
