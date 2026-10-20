import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['talk', 'poster', 'animation', 'lecture', 'paper']),
    venue: z.string().optional(),
    // Paths under public/ — e.g. /slides/talk-name/ or /assets/pdfs/talk.pdf
    slides: z.string().optional(),
    pdf: z.string().optional(),
    pdfExpanded: z.string().optional(), // talks: longer cut of the slides, shown beside `pdf`
    video: z.string().optional(),
    thumbnail: z.string().optional(),
    abstract: z.string().optional(),
    // Papers
    authors: z.array(z.string()).default([]),
    arxiv: z.string().optional(),   // arXiv id, e.g. 2401.01234
    doi: z.string().optional(),     // e.g. 10.1103/PhysRevD.109.024001
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { materials };
