# OEIF B1 Speaking Exam Prep Website

SEO-focused website for the OEIF B1 speaking exam prep book. Built with Eleventy (11ty) and deployed on GitHub Pages.

## Stack

- **Static Site Generator:** Eleventy 3.x
- **Templating:** Nunjucks + Markdown
- **Styling:** Plain CSS (mobile-first, no framework)
- **Deployment:** GitHub Pages
- **Analytics:** Google Analytics 4 (optional, configured via environment)

## Quick Start

```bash
# Install dependencies
npm install

# Run local dev server
npm run dev

# Build for production
npm run build

# Clean build output
npm run clean
```

## Project Structure

```
src/
├── _data/               # Global data files
│   ├── site.json        # Site metadata, URLs, UTM parameters
│   └── analytics.json   # GA4 configuration
├── _includes/           # Reusable components
│   ├── header.njk       # Site navigation
│   ├── footer.njk       # Footer with CTAs
│   ├── cta-primary.njk  # Free sample CTA
│   └── cta-secondary.njk # Full book CTA
├── _layouts/            # Page templates
│   ├── base.njk         # Base HTML layout
│   └── article.njk      # Article page template
├── content/
│   └── articles/        # Article markdown files
├── css/
│   └── main.css         # All styles
└── index.md             # Home page

_site/                   # Generated output (ignored by Git)
```

## Content Architecture

The site follows a **scenario-first approach**:

- **Home page**: Hero CTA, proof points, article navigation
- **4 SEO articles**: Specific scenarios that match learner search intent
  - Doctor appointment dialogue
  - Hotel booking dialogue  
  - Picture description technique (multi-example)
  - Opinion & discussion phrases

Each article follows the book structure:
- Situation → Example → Vocabulary → Examiner Questions → CTA

## CTA Strategy

- **Free sample** (ungated, positioned in-article after value demonstration)
- **Full book** (positioned as depth upgrade after trust-building)
- All Gumroad links include UTM parameters for tracking

## Analytics Setup

To enable Google Analytics 4:

1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Update `src/_data/analytics.json`:
   ```json
   {
     "ga_id": "G-XXXXXXXXXX"
   }
   ```

The base layout will automatically inject the GA4 script when `ga_id` is set.

## SEO Features

- Clean URLs (no file extensions)
- Mobile-first responsive design
- Sitemap and robots.txt generated automatically
- RSS/Atom feed at `/feed.xml`
- Semantic HTML with proper heading hierarchy
- Internal linking between related articles

## Development

The dev server watches for changes:

```bash
npm run dev
```

Visit `http://localhost:8080` to preview locally.

## Pre-Launch Checklist

- [ ] Update `src/_data/site.json` with production URL
- [ ] Configure GA4 in `src/_data/analytics.json`
- [ ] Test all internal links
- [ ] Verify mobile responsiveness (Lighthouse >85)
- [ ] Ensure all CTAs link to correct Gumroad products
- [ ] Generate and submit sitemap to Google Search Console

## Deployment

The site is configured for GitHub Pages. Push to the main branch and GitHub Actions will build and deploy automatically.

## Content Standards

Every article page must include:
- **Word count:** 800–1,500 words
- **Structure:** Situation → Task → Example → Vocabulary → Examiner Questions
- **Vocabulary table:** From book, consistent format
- **CTA placement:** One above fold, one at end
- **Internal links:** 2–3 contextual links to related articles
- **No fluff:** Every sentence earns its place

## Team

Built by the Squad team. See `.squad/agents/` for role definitions.

## License

ISC
