import { useState, useMemo } from "react";
import { processMarkdown } from "../../lib/markdownProcessor";

const SAMPLE_MD = `# Welcome to MarkFlow

A **fast**, beautiful Markdown editor.

## Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> "The best Markdown editor on the web."

| Feature | Status |
| ------- | ------ |
| Preview | ✅     |
| Export  | ✅     |
`;

export default function LiveDemoSection() {
  const [markdown, setMarkdown] = useState(SAMPLE_MD);
  const html = useMemo(() => processMarkdown(markdown), [markdown]);

  return (
    <section className="relative py-24 sm:py-32 bg-void" id="demo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Try it <span className="gradient-text">right here</span>
          </h2>
          <p className="text-gray-400 text-lg">No signup needed.</p>
        </div>
        <div className="glass-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-raised border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-gray-500 font-mono">live-demo.md</span>
          </div>
          <div className="flex flex-col md:flex-row min-h-[400px]">
            <div className="flex-1 relative">
              <div className="absolute top-0 left-0 right-0 px-4 py-2 text-[10px] uppercase tracking-wider text-gray-500 font-semibold bg-surface-overlay/50 border-b border-white/5">Markdown</div>
              <textarea className="w-full h-full pt-10 p-4 bg-surface-base text-gray-300 font-mono text-sm resize-none outline-none border-none leading-relaxed" value={markdown} onChange={(e) => setMarkdown(e.target.value)} spellCheck={false} id="demo-editor" />
            </div>
            <div className="w-px bg-white/5 hidden md:block" />
            <div className="flex-1 relative">
              <div className="absolute top-0 left-0 right-0 px-4 py-2 text-[10px] uppercase tracking-wider text-gray-500 font-semibold bg-surface-overlay/50 border-b border-white/5">Preview</div>
              <div className="preview-content pt-10 p-4 h-full overflow-auto" dangerouslySetInnerHTML={{ __html: html }} id="demo-preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
