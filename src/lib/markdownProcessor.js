import { marked } from "marked";
import hljs from "highlight.js";
import DOMPurify from "dompurify";

// Configure marked with highlight.js
marked.setOptions({
  breaks: true,
  gfm: true,
  pedantic: false,
});

// Custom renderer for code highlighting
const renderer = new marked.Renderer();
renderer.code = function({ text, lang }) {
  let highlighted;
  if (lang && hljs.getLanguage(lang)) {
    highlighted = hljs.highlight(text, { language: lang }).value;
  } else {
    highlighted = hljs.highlightAuto(text).value;
  }
  return `<pre><code class="hljs language-${lang || 'plaintext'}">${highlighted}</code></pre>`;
};

marked.use({ renderer });

/**
 * processMarkdown
 * @param {string} raw - Raw markdown input
 * @returns {string} - Sanitized HTML string
 */
export function processMarkdown(raw) {
  if (!raw) return "";
  const dirty = marked.parse(raw);
  return DOMPurify.sanitize(dirty, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "class"],
  });
}
