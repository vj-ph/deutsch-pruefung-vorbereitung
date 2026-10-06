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
│   ├── site.js          # Site metadata, catalog, URLs, UTM parameters
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
- On-site sample pages and Amazon full-book links include UTM parameters for tracking

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

## DTZ B1 speaking book materials

The German-language exercise directory is at `/dtz-b1-speaking/`. It contains
52 exercises from the speaking book, arranged by the book's Teil and Übung
numbers; eight exercises from Teil 1 without matching card audio are omitted.
The exercise pages offer ChatGPT speaking practice and model audio; Teil 2
also displays its exercise image. Tasks, model texts, vocabulary and
Schnelltraining stay in the book rather than being repeated online. Pages
reference the existing audio and optimized Teil 2 images in
`src/dtz-b1-cards/assets/` instead of copying them. The book-specific prompts
use the cards' practice script for the copy button.

The generated Markdown exercises and directory data are committed, so normal
site builds do not need the book repository. To update them when the book
changes, place `german_exam_books` alongside this repository and run
`node scripts/generate-dtz-b1-speaking.js` from the project root before building.

## ÖIF and fide speaking book materials

`/oeif-a2-speaking/`, `/oeif-b1-speaking/`, `/oeif-b2-speaking/`,
`/fide-a2-speaking/` and `/fide-b1-speaking/` are book companions with
ChatGPT voice-practice prompts and locally copied model MP3s. Image exercises
also include the book's picture where available. The pages leave task text,
model transcripts, and vocabulary in the books. The copyable prompts contain
the relevant situation, roles, speaking points and/or examiner questions from
the book so ChatGPT can start the exercise without asking learners to
transcribe the task. For B2 discussions the longer reading text stays in the
book and is also included in the copyable prompt, along with the discussion
goals, so ChatGPT can refer to the complete passage.

The five books have 38, 72, 58, 86, and 64 exercise pages respectively.
ÖIF A2 picture exercises group the picture-description and personal-experience
clips on one page. The ÖIF B1 restaurant role-play has two dialogue clips on
one page. ÖIF B2 simulation sets have one page for each of their three parts;
their titles and prompts identify the presentation, discussion and joint
problem-solving parts. The unscored contact-opening exercises are not included online.
Skipped audio: ÖIF B1 track 001 and `-fragen`, ÖIF A2 `_fragen`,
ÖIF B2 mini-drills, mini-dialogues, upgrades and contact reactions, fide B1
track 001 and `-followups`, and fide A2 `-conversation`. The generated pages
and copied MP3s/images are in `src/`, so ordinary builds need no sibling book
repository.
To regenerate after changing the source books or audio, run
`node scripts/generate-speaking-companions.js` with `german_exam_books`
alongside this repository, then run `npm run build`.
Run `node --test scripts/test-speaking-companion-prompts.js` to check that
all generated speaking prompts retain book-specific task context.

## DTZ B1 writing book materials

The companion directory at `/dtz-b1-writing/` contains one page for each of
the 30 numbered units in the writing book (including six transfer units, which
are labeled as practice outside the typical DTZ core task). Learners draft in
an on-page text area, copy their text, then copy a task-specific feedback prompt
under it in the same unsent ChatGPT message. Each prompt includes the four
content points from the book and requests targeted feedback and self-revision
instead of a complete rewritten answer. Drafts are not sent or stored by the
site; copying uses the same script as the speaking pages.

The pages and prompt data are checked in so regular builds need no book source.
To regenerate after changes to the book, place `german_exam_books` alongside
this repository and run `node scripts/generate-dtz-b1-writing.js` before building.

## ÖIF A2, B1 and B2 writing companions

`/oeif-a2-writing/`, `/oeif-b1-writing/` and `/oeif-b2-writing/` offer the
same draft/copy/ChatGPT-feedback workflow as the DTZ writing companion, using
the shared copy script and responsive writing design. The generated pages
follow the corresponding books: A2 has 16 units with three content points
each; the website sets a 25-minute practice limit and a goal of at least
50 words, aiming for around 80 (the book's guide), with a suitable greeting
and closing. B1 has 30 units with four points each (units 25–30 are labeled
as additional transfer training); the website sets a 30-minute practice
limit and a 100-word minimum, although the book states no fixed word count.
B2 has 16 essay topics and six individual topic choices from three mock
exams. B2 practice sets 40 minutes and at least 200 words; feedback checks
the heading and essay structure and whether three of four aspects are developed.
The B2 book's five short technique drills are not included online. Each
prompt asks the learner to revise their own text rather than receiving a
replacement answer. Tasks and model texts remain in the books.

Generated pages, directories and prompts are committed, so a regular site
build does not depend on the book repository. After changing an ÖIF writing
book in the sibling `german_exam_books` repository, run
`node scripts/generate-oeif-writing.js` before `npm run build`.

## fide A2 and B1 writing companions

`/fide-a2-writing/` and `/fide-b1-writing/` use the same draft/copy/feedback
workflow as the ÖIF writing pages, but follow the formats in the fide books.
A2 has 44 exercises across eleven chapters: two sets of a form with remarks
and an email in each chapter. The book gives 30–50 words for form remarks and
40–60 words for emails as guides, not minimums. B1 has 69 exercises: two sets
of three task types per chapter (email reply, formal letter, informal email),
plus the three mock-exam tasks. The B1 book sets minimums of 30 words for email
replies and 50 for informal emails; 50–70 words for formal letters is a
training guide. Its 60-minute A2–B1 module includes reading and writing, not
60 minutes for each writing task. Form pages do not require a greeting;
emails and letters do. Neither book’s model answers are shown on the pages.

The companion content is generated and checked in so site builds do not need
the sibling book repository. After book changes, regenerate with
`node scripts/generate-fide-writing.js` before building.

## Pre-Launch Checklist

- [ ] Update `src/_data/site.js` with production URL
- [ ] Configure GA4 in `src/_data/analytics.json`
- [ ] Test all internal links
- [ ] Verify mobile responsiveness (Lighthouse >85)
- [ ] Ensure sample CTAs open on-site sample pages and full-book CTAs open the correct Amazon products
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
