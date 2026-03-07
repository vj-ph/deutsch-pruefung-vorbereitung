# Bishop History

## Context

- User: vj-ph
- Project: Eleventy site for ÖIF B1 exam-prep books
- Stack: Eleventy 3, Markdown, Nunjucks, plain CSS
- Current goal: verify the dual-book restructure works and does not break the site

## Learnings

- Validation should use the existing `npm run build` script.
- Shared global marketing data now lives in `src/_data/site.json` under `site.bookOrder` and `site.books.{speaking|writing}`, while legacy `site.gumroad.*` aliases still point to the speaking book for older content.
- Shared navigation and footer links are generated from `src/_includes/header.njk` and `src/_includes/footer.njk`, so homepage book links should also read from shared data to avoid Gumroad URL drift.
- Existing speaking lesson pages still build at `_site\planning-dialogue-doctor-appointment\index.html`, `_site\planning-dialogue-hotel-booking\index.html`, `_site\picture-description-technique\index.html`, and `_site\opinion-discussion-phrases\index.html`.
- Homepage CTA re-reviews should inspect `src\index.md` for shared data references rather than raw Gumroad URLs; the current homepage binds writing CTAs to `site.books.writing.gumroad.*` and speaking CTAs to the documented legacy alias `site.gumroad.*`.
- Validation for homepage changes should spot-check `_site\index.html` after build to confirm the rendered writing CTAs point at the writing sample/full-book URLs from `src\_data\site.json` and that homepage internal lesson links still render with the configured path prefix.

## 2026-03-11 Cross-Agent Update

**Session:** Dual-Book Redesign complete. Orchestration logs filed. Decisions merged.

- **Ripley:** Dual-book IA approved. Data model structure finalized.
- **Dallas:** Homepage and CSS rewritten. Two-column layout for side-by-side CTAs.
- **Lambert:** `site.books` model implemented. Homepage writing CTAs wired to shared data.
- **Ash:** Deploy workflow and squad automation recommendations documented.

**QA findings:**
- First pass: rejected hardcoded writing URLs in `src\index.md` (integration risk)
- Resolution: Lambert corrected; writing CTAs now read from `site.books.writing.gumroad.*`
- Second pass: approved after build validation and spot-check of rendered output

**Status:** Production ready. All Gumroad links pointing to canonical data sources.
