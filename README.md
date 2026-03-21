# OEIF B1 Speaking Exam Prep Website

SEO-focused static site for the OEIF B1 speaking exam prep book. Built with Eleventy, deployed to GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

Visit `http://localhost:8080` to preview locally.

## Project Structure

```
website-repo/
├── src/                        # Source files
│   ├── _data/                  # Global data (site config, metadata)
│   ├── _includes/              # Reusable templates (analytics, CTAs)
│   ├── _layouts/               # Page layouts (to be created by Lambert)
│   ├── index.md                # Home page
│   └── *.md                    # Content pages
├── _site/                      # Build output (git-ignored)
├── .eleventy.js                # Eleventy configuration
├── .github/workflows/          # GitHub Actions deployment
├── DEPLOYMENT.md               # Deployment guide
└── ANALYTICS.md                # Measurement strategy
```

## Configuration

### Site Settings

Edit `src/_data/site.json`:

```json
{
  "url": "https://your-domain.com",
  "analytics": {
    "ga4": {
      "measurementId": "G-XXXXXXXXXX",
      "enabled": true
    }
  }
}
```

### UTM Parameters

All CTA links are auto-tagged. Sample-page links stay on-site, and full-book links still go to Gumroad. Configure the shared tracking values in `src/_data/site.json`:

```json
{
  "utm": {
    "source": "website",
    "medium": "organic",
    "campaign": "oeif-b1"
  }
}
```

## Deployment

Push to `main` triggers automatic deployment to GitHub Pages.

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for:
- GitHub Pages setup
- Pre-launch checklist
- Troubleshooting

## Analytics

Google Analytics 4 and UTM tracking are built-in.

See **[ANALYTICS.md](ANALYTICS.md)** for:
- GA4 setup
- Success metrics
- Monthly review checklist

## Content Guidelines

See **[plan.md](plan.md)** for:
- Content architecture (scenario-first approach)
- SEO standards (800-1,500 words per page)
- CTA placement strategy
- Internal linking rules

## Team Decisions

See **[.squad/decisions.md](.squad/decisions.md)** for approved product, UX, and SEO decisions.

## Pre-Launch Checklist

- [ ] Update `site.url` in `src/_data/site.json`
- [ ] Add GA4 Measurement ID and enable tracking
- [ ] Verify on-site sample pages and Gumroad full-book links are live
- [ ] Test GA4 firing (use Google Analytics Debugger)
- [ ] Run Lighthouse audit (target >85)
- [ ] Verify sitemap generates (`/sitemap.xml`)
- [ ] Submit sitemap to Google Search Console post-launch

## Scripts

- `npm start` — Development server with live reload
- `npm run build` — Production build
- `npm run clean` — Remove build output

## Technology

- **Static Site Generator:** Eleventy 3.x
- **Templating:** Markdown + Nunjucks
- **Styling:** Plain CSS (to be created by Lambert)
- **Deployment:** GitHub Actions → GitHub Pages
- **Analytics:** Google Analytics 4 + UTM parameters

## Support

- Eleventy: [11ty.dev/docs](https://www.11ty.dev/docs/)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Squad Team: See `.squad/team.md`

## License

ISC
