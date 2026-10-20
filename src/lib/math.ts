import katex from 'katex';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Plain text with LaTeX in $…$ (inline) or $$…$$ (display) → HTML, rendered at build time.
// Write \$ for a literal dollar sign.
export function renderMath(text: string) {
  return text
    .split(/(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$]+?(?<!\\)\$)/)
    .map(part => {
      const display = part.startsWith('$$') && part.endsWith('$$') && part.length > 4;
      const inline = !display && part.length > 2 && part.startsWith('$') && part.endsWith('$');
      if (!display && !inline) return escape(part.replace(/\\\$/g, '$'));
      const tex = display ? part.slice(2, -2) : part.slice(1, -1);
      return katex.renderToString(tex, { displayMode: display, throwOnError: false });
    })
    .join('');
}

// The same text with the TeX left in but the $ delimiters dropped, for search indexes
export const stripMath = (text: string) => text.replace(/(?<!\\)\$/g, '');
