# Open Graph Image Generator

This project includes tools to generate a professional Open Graph (OG) image for your portfolio website. The OG image appears when your portfolio is shared on social media platforms.

## 🎨 Design Features

- **Size**: 1200x630px (standard OG image dimensions)
- **Background**: Dark gradient with blue-gray tones matching the portfolio theme
- **Typography**: Modern, high-contrast text with professional styling
- **Content**:
  - Main title: "Mauricio Barragán"
  - Subtitle: "Full Stack Developer"
  - Tagline: "Building high-quality web solutions"
  - Accent line with brand colors
- **Consistency**: Matches the portfolio's dark theme and color palette

## 🛠️ Generation Methods

### Method 1: Python Script (Recommended - No additional dependencies)

```bash
python generate-og-simple.py
```

**Requirements**: Python with PIL (Pillow)

```bash
pip install Pillow
```

### Method 2: Node.js with Puppeteer

```bash
# Install puppeteer
npm install puppeteer

# Generate the image
npm run generate-og
```

### Method 3: Manual HTML to PNG

1. Open `og-image-generator.html` in a browser
2. Take a screenshot at 1200x630px
3. Save as `public/og-image.png`

## 📁 File Structure

```
├── og-image-generator.html    # HTML template for the OG image
├── generate-og-image.js       # Node.js script using Puppeteer
├── generate-og-simple.py      # Python script using PIL
├── public/
│   └── og-image.png          # Generated OG image (created after running scripts)
└── src/app/layout.tsx        # Updated with OG metadata
```

## 🚀 Usage

After generating the image, it will be automatically referenced in your Next.js app's metadata. The image will appear when your site is shared on:

- LinkedIn
- Twitter/X
- WhatsApp
- Facebook
- Other social platforms

## 🎯 Customization

To modify the design, edit the relevant files:

- **Colors**: Update the gradient and text colors in the HTML/CSS to match your brand
- **Typography**: Change font sizes and weights
- **Content**: Modify the text content (name, title, tagline)
- **Layout**: Adjust positioning and spacing
- **Logo**: Add your personal logo or avatar

## 📱 Testing

Test your OG image using these tools:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Open Graph Preview](https://www.opengraph.xyz/)

## 🔧 Troubleshooting

### Python Issues

- Install Pillow: `pip install Pillow`
- If font issues occur, the script will fall back to default fonts
- Ensure you have Python 3.6+ installed

### Node.js Issues

- Ensure Puppeteer is installed: `npm install puppeteer`
- Puppeteer may require additional system dependencies on Linux
- Check Node.js version compatibility

### Manual Generation

- Use browser developer tools to set viewport to 1200x630
- Take a full-page screenshot
- Crop to exact dimensions if needed
- Ensure high DPI for crisp social media display

## 🎨 Design Guidelines

### Color Palette

- **Background**: Dark gradient (#0f172a to #1e293b)
- **Text**: High contrast white (#ffffff)
- **Accent**: Blue gradient (#3b82f6 to #1d4ed8)
- **Secondary**: Subtle gray tones

### Typography

- **Main Title**: Large, bold, high contrast
- **Subtitle**: Medium weight, readable
- **Tagline**: Smaller, subtle but visible
- **Font**: System fonts for maximum compatibility

### Layout

- **Centered**: All content centered vertically and horizontally
- **Spacing**: Generous whitespace for readability
- **Hierarchy**: Clear visual hierarchy with size and weight
- **Responsive**: Maintains quality at different sizes

## 📊 Performance

The generated OG image is optimized for:

- **File Size**: Under 1MB for fast loading
- **Dimensions**: Exact 1200x630px for social media
- **Format**: PNG for maximum compatibility
- **Quality**: High DPI for crisp display on all devices

## 🔄 Updates

When updating your portfolio information:

1. Update the OG image content in the HTML template
2. Regenerate the image using your preferred method
3. Test the new image with social media debuggers
4. Deploy the updated image with your site

## 📝 Notes

- The OG image is automatically referenced in `src/app/layout.tsx`
- No additional configuration needed after generation
- The image will be cached by social media platforms
- Clear cache if testing changes to the image
