// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://ApostolosTsampodimos.github.io',
  base: '/my-research-vault',
  output: 'static',
  // $…$ and $$…$$ in Markdown bodies (Notes & comments) render as KaTeX
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
