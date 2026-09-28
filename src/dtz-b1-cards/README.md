# DTZ Card Supplement Website

This folder is a self-contained static website containing 57 pages:

- `index.html`: German card 001 instructions and the complete card directory
- `instructions-en.html`, `instructions-ar.html`,
  `instructions-uk.html`, and `instructions-tr.html`: translated card 001
  instructions; the card directory remains German
- `002/index.html` through `053/index.html`: exercise supplements with
  clean public URLs such as `/dtz-b1-cards/002/`
- `assets/styles.css`: shared responsive styling
- `assets/practice.js`: prompt copying and ChatGPT opening
- `assets/logo.png`: DeutschKompass logo
- `assets/images/`: web-optimized Teil 2 exercise images
- `assets/audio/`: 52 Modellantwort and Modelldialog MP3 files

## Hosting

Upload the complete contents of this folder to any static host. No database,
server-side runtime, package installation, or build step is required.

All links and assets use relative paths, so the folder can be hosted:

- at the root of a domain;
- inside a subdirectory;
- on GitHub Pages, Netlify, Cloudflare Pages, or similar static hosting;
- locally by opening `index.html`.

Each page includes a card-specific DTZ practice prompt. The primary button
copies that prompt and follows a normal HTTPS link to ChatGPT. No OpenAI API,
API key, server integration, automatic prompt submission, or microphone access
is included.

## Regeneration

From the project root:

```bash
node design/generate-website.js
```

The generator reads the DTZ book through `design/extract-card-content.js`.
Edit the source book or generator rather than editing generated HTML pages
individually.
