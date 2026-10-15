# Research Archive

A personal archive of physics and cosmology research materials — talks, posters, animations, lecture notes, and papers.
Built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** https://ApostolosTsampodimos.github.io/research-archive/

## Project structure

```
src/
  pages/           # index (grid + filter) and [id] detail pages
  layouts/         # shared Base layout
  content/
    materials/     # Markdown entries (one .md per item)
  styles/          # global CSS
public/
  slides/          # Reveal.js slide decks
  assets/
    pdfs/          # Beamer / paper PDFs
    animations/    # Manim videos
src-latex/         # LaTeX source files (not served)
src-manim/         # Manim source files (not served)
```

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

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview dist/
```
