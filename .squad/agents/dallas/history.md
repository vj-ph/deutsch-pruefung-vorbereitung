# Dallas History

## Context

- User: vj-ph
- Project: Eleventy site for ÖIF B1 exam-prep books
- Stack: Eleventy 3, Markdown, Nunjucks, plain CSS
- Current goal: rebalance the homepage to market both books instead of only the speaking workbook

## Learnings

- The homepage currently focuses on the speaking book's real-dialogue value proposition.
- `src\index.md` can carry a full conversion-oriented homepage with raw HTML sections inside Markdown, but the block HTML must stay tightly grouped to avoid Eleventy/Markdown wrapping layout containers in stray `<p>` tags.
- For dual-book promotion, a balanced hero with one speaking card and one writing card works well, followed by separate proof/feature sections and repeated sample/full-book CTAs for each product.
- The writing workbook copy should stay anchored to `..\b1\writing\book.md`: 30 units, 4 chapters, Austria-based situations, a 4-week study plan, 4 mock tasks, and the 5-sentence rescue pattern.
- Key files for homepage product marketing are `src\index.md`, `src\css\main.css`, and `src\_data\site.json`, but page-local links can be used when scope does not allow a broader shared-data refactor.

## 2026-03-11 Cross-Agent Update

**Session:** Dual-Book Redesign complete. Orchestration logs filed. Decisions merged.

- **Ripley:** Dual-book IA documented. Data model uses `site.books` + legacy aliases.
- **Lambert:** Shared data model implemented. Homepage writing CTAs wired to canonical `site.books.writing.gumroad.*`. Build passes.
- **Bishop:** QA validated. Rejected hardcoded URLs (integration risk). Approved after correction.
- **Ash:** Deployment workflow documentation and squad automation recommendation filed.

**Status:** Ready for production deployment.
