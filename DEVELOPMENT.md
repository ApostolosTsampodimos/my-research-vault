# Development

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

The `abstract` field is shown under **Abstract** (**Description** for animations).
Everything below the closing `---` is shown under **Notes & comments**, for your own
comments. The section appears on every page; while the body is empty (or only HTML comments) it shows as blank space.

Both the abstract and the notes accept LaTeX: `$…$` inline and `$$…$$` displayed, rendered
with KaTeX at build time. Write `\$` for a literal dollar sign.

### Talks with an expanded version

Give a talk both `pdf` (the slides as presented) and `pdfExpanded` (the longer cut).
The page then shows a **Slides** section with the title slide (`thumbnail`) and a
download card for each version, labelled *Normal* and *Expanded*:

```markdown
pdf: /assets/pdfs/talk-name.pdf
pdfExpanded: /assets/pdfs/talk-name-expanded.pdf
thumbnail: /assets/thumbnails/talk-name.jpg   # also used as the card image on the front page
```

Render the title slide with:

```bash
pdftoppm -f 1 -l 1 -singlefile -scale-to 1600 -jpeg -jpegopt quality=85 \
  public/assets/pdfs/talk-name.pdf public/assets/thumbnails/talk-name
```

### Papers

Papers use the same fields plus `authors`, `arxiv` and `doi` (all optional).
`venue` holds the journal, or "Preprint". Copy `src/content/materials/example-paper.md` as a starting point:

```markdown
---
title: "Your Paper Title"
date: 2026-02-01
type: paper
venue: "Phys. Rev. D 109, 024001"
authors: ["A. Tsampodimos", "Co-Author"]
arxiv: "2401.01234"                       # → link to arxiv.org/abs/2401.01234
doi: "10.1103/PhysRevD.109.024001"        # → link to doi.org/...
pdf: /assets/pdfs/your-paper.pdf          # optional — your own copy
abstract: "The paper's abstract."
tags: ["tag1", "tag2"]
---
```

## Adding assets

| Asset type | Where to put it | Referenced as |
|---|---|---|
| Reveal.js slides | `public/slides/your-talk/index.html` | `/slides/your-talk/` |
| Beamer or paper PDF | `public/assets/pdfs/name.pdf` | `/assets/pdfs/name.pdf` |
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
