# research-archive

A browsable archive of research materials — talks, animations, lecture notes, and papers.  
Built with Astro, deployed to GitHub Pages.

## Adding a new entry

Create a file in `src/content/materials/your-slug.md`:

```markdown
---
title: "Your Talk Title"
date: 2026-03-10
type: talk              # talk | poster | animation | lecture | paper
venue: "Conference Name"
slides: /slides/your-talk/          # optional — Reveal.js folder in public/slides/
pdf: /assets/pdfs/your-talk.pdf     # optional — PDF in public/assets/pdfs/
video: /assets/animations/anim.mp4  # optional — video in public/assets/animations/
abstract: "One-paragraph summary."
tags: ["tag1", "tag2"]
draft: false
---

Optional extended notes in Markdown.
```

## Adding assets

| Asset type | Where to put it | Referenced as |
|---|---|---|
| Reveal.js slides | `public/slides/your-talk/index.html` | `/slides/your-talk/` |
| Beamer PDF | `public/assets/pdfs/name.pdf` | `/assets/pdfs/name.pdf` |
| Manim video | `public/assets/animations/name.mp4` | `/assets/animations/name.mp4` |
| Manim source | `src-manim/name.py` | not served |
| LaTeX source | `src-latex/name.tex` | not served |

## Deploy to GitHub Pages

1. Create the GitHub repo and push.
2. In `astro.config.mjs`, set:
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   base: '/phd-materials',
   ```
3. In GitHub → Settings → Pages, set Source to **GitHub Actions**.
4. Push to `main` — the workflow deploys automatically.

## Dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview dist/
```
