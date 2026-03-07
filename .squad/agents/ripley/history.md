# Ripley History

## Context

- User: vj-ph
- Project: Eleventy site for ÖIF B1 exam-prep books
- Stack: Eleventy 3, Markdown, Nunjucks, plain CSS
- Current goal: restructure the site to promote both the speaking and writing workbooks

## Learnings

- The existing homepage is highly centered on the speaking book.
- The writing workbook source is available at `C:\Users\ronggong\lang\german\b1\writing\book.md`.
- **Writing book structure:** 4 chapters (30 units total) covering informal messages, formal/functional messages, complaints/apologies, and short opinions. Austria-focused, practical scenarios.
- **Dual-book IA principle:** Homepage should become a hub showing both products side-by-side with equal visual weight. CTAs must be keyed by product type (speaking vs writing) to route to correct Gumroad links.
- **CTA component strategy:** Generic CTA blocks (cta-primary.njk, cta-secondary.njk) work best when parameterized by product rather than creating separate files per product.
- **Footer pattern:** Two-column resources layout (Speaking | Writing) maintains symmetry and prevents users from missing the second product.
- **File paths critical:** Speaking book links are in site.json `site.gumroad.freeSample` and `site.gumroad.fullBook`; writing book links need new keys (suggest `site.gumroad.speaking.*` and `site.gumroad.writing.*` structure).
- **Phased rollout:** Separate data structure update from messaging updates from new page creation, to avoid merge conflicts and enable parallel work.

## 2026-03-11 Cross-Agent Update

**Session:** Dual-Book Redesign complete. Orchestration logs filed. Decisions merged.

- **Dallas:** Homepage and CSS rewritten for dual-book promotion. Two-column layout implemented. Topic link fixes validated.
- **Lambert:** Shared `site.books` data model implemented. Homepage writing CTAs wired to `site.books.writing.gumroad.*`. Topic page URLs fixed for GitHub Pages directory-style permalinks. Build passes.
- **Bishop:** QA validated. First pass rejected hardcoded URLs (integration risk). Lambert corrected. Re-review approved.
- **Ash:** Documented deployment workflow criticality and squad automation recommendation (keep deploy-pages.yml and squad-ci.yml only).

**Status:** Ready for production deployment.
