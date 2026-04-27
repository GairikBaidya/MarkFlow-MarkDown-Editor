import { forwardRef } from "react";

const EditorPane = forwardRef(function EditorPane(
  { content, onChange, onScroll },
  ref
) {
  return (
    <div className="pane" id="editor-pane">
      <div className="pane-header">
        <span className="pane-header__label">Markdown</span>
      </div>
      <div className="editor-textarea-wrapper">
        <textarea
          ref={ref}
          className="editor-textarea"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          onScroll={onScroll}
          placeholder="Start writing Markdown here..."
          spellCheck={false}
          id="markdown-editor"
        />
      </div>
    </div>
  );
});

export default EditorPane;
