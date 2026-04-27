import { useState, useRef, useCallback, useEffect } from "react";
import { useMarkdown } from "../hooks/useMarkdown";
import { useAutosave, loadSaved } from "../hooks/useAutosave";
import { useScrollSync } from "../hooks/useScrollSync";
import { useResizablePanes } from "../hooks/useResizablePanes";
import EditorHeader from "../components/editor/EditorHeader";
import EditorPane from "../components/editor/EditorPane";
import PreviewPane from "../components/editor/PreviewPane";
import ResizeHandle from "../components/editor/ResizeHandle";
import StatusBar from "../components/editor/StatusBar";
import MobileTabBar from "../components/editor/MobileTabBar";
import "../styles/editor.css";
import "../styles/highlight.css";

const DEFAULT_CONTENT = `# Welcome to MarkFlow ✨

Start writing your **Markdown** here and see it rendered in real-time.

## Features

- **Bold**, *italic*, \`code\`, and more
- Syntax highlighted code blocks
- Tables, blockquotes, and lists
- PDF export with one click

## Code Example

\`\`\`javascript
function hello() {
  console.log("Hello from MarkFlow!");
}
\`\`\`

> MarkFlow — the fastest way to write beautiful documents.

---

Happy writing! 🚀
`;

export default function EditorPage() {
  const saved = loadSaved();
  const { raw, html, handleChange, setRaw } = useMarkdown(saved || DEFAULT_CONTENT);
  const { editorRef, previewRef, syncFromEditor, syncFromPreview } = useScrollSync();
  const { splitPercent, handleMouseDown, containerRef, isDragging } = useResizablePanes(50);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileTab, setMobileTab] = useState("edit");
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const textareaRef = useRef(null);

  useAutosave(raw);

  // Combine refs
  const setEditorRef = useCallback((node) => {
    editorRef.current = node;
    textareaRef.current = node;
  }, [editorRef]);

  // File drag & drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDraggingFile(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDraggingFile(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".md")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setRaw(ev.target.result);
      };
      reader.readAsText(file);
    }
  }, [setRaw]);

  // Keyboard shortcut for fullscreen
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "F11") {
        e.preventDefault();
        setIsFullscreen((f) => !f);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className={`editor-page ${isFullscreen ? "editor-page--fullscreen" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDraggingFile && (
        <div className="file-drop-overlay">
          <div className="file-drop-overlay__text">Drop .md file here</div>
        </div>
      )}

      <EditorHeader
        textareaRef={textareaRef}
        onContentChange={handleChange}
        previewRef={previewRef}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => setIsFullscreen((f) => !f)}
      />

      <div className="editor-layout" ref={containerRef}>
        <div style={{ width: `${splitPercent}%`, display: mobileTab === "preview" ? "none" : undefined }} className="pane-wrapper flex flex-col min-w-0">
          <EditorPane ref={setEditorRef} content={raw} onChange={handleChange} onScroll={syncFromEditor} />
        </div>

        <ResizeHandle onMouseDown={handleMouseDown} isActive={isDragging.current} />

        <div style={{ width: `${100 - splitPercent}%`, display: mobileTab === "edit" ? "none" : undefined }} className="pane-wrapper flex flex-col min-w-0 md:!flex">
          <PreviewPane ref={previewRef} html={html} onScroll={syncFromPreview} />
        </div>
      </div>

      <StatusBar content={raw} />
      <MobileTabBar activeTab={mobileTab} onTabChange={setMobileTab} />
    </div>
  );
}
