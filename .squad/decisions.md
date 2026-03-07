# Decisions

## 2026-03-11

### Ripley — Dual-Book Hub Architecture (Active)

The website transitions from single-book (speaking) to dual-book (speaking + writing) marketing. Homepage becomes a two-section hub with parallel CTAs. Navigation and footer updated for both products. Data model uses `site.books` with legacy `site.gumroad.*` aliases for backward compatibility. Phased implementation (Phase 1–4) guards against scope creep. All four Gumroad links validated.

**Related decision file:** `.squad/decisions/inbox/ripley-dual-book-ia.md`

### Dallas — Topic Link Review (Approved)

Homepage topic-link fix approved for release. Quick links now resolve to clean GitHub Pages URLs (`/deutsch-pruefung-vorbereitung/`) instead of markdown-like downloads. Production build confirmed. Smoke testing validated all links. Count copy corrected to 30 dialogues and 30 topics. Footer year is 2026.

**Related decision file:** `.squad/decisions/inbox/dallas-topic-link-review.md`

### Lambert — Shared Dual-Book Marketing Data (Approved)

Structured `site.books` model introduced with `speaking` and `writing` entries. Each carries metadata, Gumroad links (free + full), and CTA copy. `site.bookOrder` defines display sequence. Legacy `site.gumroad.*` aliases maintained for backward compatibility during markdown migration. Shared templates now loop over `site.books` for header, footer, and JSON-LD.

**Related decision file:** `.squad/decisions/inbox/lambert-shared-book-data.md`

### Lambert — Homepage Writing CTAs Use Canonical Book Data (Approved)

Homepage writing-book CTA links now read from `site.books.writing.gumroad.freeSample` and `site.books.writing.gumroad.fullBook` instead of hardcoded URLs. Prevents URL drift if Gumroad destinations change. Speaking CTAs use documented legacy alias `site.gumroad.*`. Build succeeded; `_site/index.html` renders expected targets.

**Related decision file:** `.squad/decisions/inbox/lambert-homepage-data-fix.md`

### Lambert — Topic Page URL Rendering on GitHub Pages (Approved)

Article permalinks changed to directory-style (`/{fileSlug}/`) for reliable rendering on GitHub Pages. `.eleventy.js` adds `pageUrl` filter applying `pathPrefix` and trailing slash. Internal links updated across homepage, header, and cross-references. `package.json` cleans `_site/` before production build to prevent stale extensionless files conflicting with new directory output.

**Related decision file:** `.squad/decisions/inbox/lambert-topic-page-url-fix.md`

### Bishop — Review Findings → Re-Review Findings (Approved)

First pass rejected homepage for hardcoded writing Gumroad URLs (4 instances) instead of reading canonical `site.books.writing.gumroad.*`. Issue: integration inconsistency, not build failure. Lambert corrected. Second pass approved after validation: writing CTAs now source from shared data, no hardcoded URLs remain, build succeeds, `_site/index.html` renders correctly.

**Related decision files:** `.squad/decisions/inbox/bishop-review-findings.md`, `bishop-rereview-findings.md`

### Ash — Live Deploy Mismatch (Documented)

GitHub Pages workflow tracking is launch-critical. Live site served old root-relative links after local fix because last successful Pages deploy came from older commit. Lesson: keep `deploy-pages.yml` tracked in git, push workflow restoration, confirm GitHub Pages source remains "GitHub Actions", verify next deploy serves correct links.

**Related decision file:** `.squad/decisions/inbox/ash-live-deploy-mismatch.md`

### Ash — Squad Workflows: Keep or Remove? (Recommendation)

For 1-owner, 1-developer project at this scale, Squad automation workflows are overkill. Recommendation: keep only `deploy-pages.yml` (site delivery) and `squad-ci.yml` (quality gates); remove 11 other squad-*.yml automation workflows (team coordination). Manual triage and release process simpler than maintaining automation. `.squad/` kept in git for team context.

**Related decision file:** `.squad/decisions/inbox/ash-squad-workflow-advice.md`

---

## 2026-03-07

- Squad initialized for this repository with a persistent cast-based roster.
- The immediate product goal is to evolve the site from a speaking-book landing page into a dual-book marketing site for ÖIF B1 speaking and writing preparation.
