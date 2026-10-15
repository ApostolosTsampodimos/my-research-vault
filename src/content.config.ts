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
    video: z.string().optional(),
    thumbnail: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { materials };
