# Google Search Console Setup Guide

## Step 1: Add Your Site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property" 
3. Choose "URL prefix" and enter: `https://tarang75490.github.io`
4. Click "Continue"

## Step 2: Verify Ownership

### Method 1: HTML File Upload (Recommended)
1. Download the verification HTML file from Google
2. Upload it to your `portfolio-nextjs/public/` directory
3. Deploy your site (it will be available at `https://tarang75490.github.io/google[verification-code].html`)
4. Click "Verify" in Google Search Console

### Method 2: HTML Meta Tag
1. Copy the meta tag provided by Google
2. Add it to your `layout.tsx` file in the `verification.google` field (line 39)
3. Replace `'your-google-verification-code'` with your actual code
4. Deploy and verify

## Step 3: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"

## Step 4: Request Indexing

1. Go to "URL Inspection" in Google Search Console
2. Enter your homepage URL: `https://tarang75490.github.io`
3. Click "Request Indexing"
4. Repeat for important pages:
   - `https://tarang75490.github.io/about/`
   - `https://tarang75490.github.io/projects/`
   - `https://tarang75490.github.io/experience/`
   - `https://tarang75490.github.io/contact/`

## Step 5: Monitor Performance

- Check "Performance" tab to see search queries
- Monitor "Coverage" for indexing issues
- Review "Enhancements" for structured data validation

## Expected Timeline

- **Indexing**: 1-7 days for Google to discover and index your site
- **Ranking**: 2-4 weeks to start appearing in search results for "Tarang Khetan"
- **Optimization**: 1-3 months for full SEO benefits

## Additional Tips

1. **Share your portfolio** on LinkedIn, GitHub profile, and social media
2. **Link from other sites** - ask colleagues to link to your portfolio
3. **Create content** - consider adding a blog section with technical articles
4. **Update regularly** - keep your projects and experience current

Your portfolio is now optimized for search engines! 🚀
