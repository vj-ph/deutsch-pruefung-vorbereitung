# Lambert History

## Context

- User: vj-ph
- Project: Eleventy site for ÖIF B1 exam-prep books
- Stack: Eleventy 3, Markdown, Nunjucks, plain CSS
- Current goal: integrate writing-book marketing content and links into the site

## Learnings

- Shared Gumroad and UTM data currently describe only the speaking book.
- Shared Eleventy marketing data now uses `site.books.{speaking,writing}` plus `site.bookOrder`, while keeping `site.gumroad.*` as a legacy alias for older speaking-page markdown.
- Shared CTA partials can now target a book via `ctaBookKey`, so new templates can reuse the same primary/secondary includes for either speaking or writing offers.
- When importing `ctaLink` from `src\_includes\cta-helpers.njk`, use `with context` or the macro loses access to `site.utm` and renders blank tracking parameters.
- Key shared paths for dual-book promotion are `src\_data\site.json`, `src\_includes\cta-helpers.njk`, `src\_includes\cta-primary.njk`, `src\_includes\cta-secondary.njk`, `src\_includes\header.njk`, `src\_includes\footer.njk`, and `src\_layouts\base.njk`.
- Homepage writing CTAs in `src\index.md` should read canonical outbound links from `site.books.writing.gumroad.{freeSample,fullBook}` instead of repeating raw Gumroad URLs, while keeping existing UTM copy and homepage messaging intact.

## 2026-03-11 Cross-Agent Update

**Session:** Dual-Book Redesign complete. Orchestration logs filed. Decisions merged.

- **Ripley:** IA documented. `site.books` + legacy alias structure approved.
- **Dallas:** Homepage rewritten. Two-column CTA layout implemented. CSS updated.
- **Bishop:** QA cycle: rejected hardcoded URLs, approved after Lambert correction.
- **Ash:** Documented deploy workflow criticality and squad automation cleanup.

**Implementation completed:**
- `src\_data\site.json`: `site.books.{speaking,writing}` with `site.bookOrder`
- `src\index.md`: Writing CTAs read from `site.books.writing.gumroad.*`
- `.eleventy.js`: `pageUrl` filter for GitHub Pages directory-style permalinks
- Header/footer: Loop over `site.books` for dual-product navigation

**Status:** Build passes. Ready for production.
