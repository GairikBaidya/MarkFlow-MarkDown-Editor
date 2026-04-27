import { forwardRef } from "react";

const PreviewPane = forwardRef(function PreviewPane({ html, onScroll }, ref) {
  return (
    <div className="pane" id="preview-pane">
      <div className="pane-header">
        <span className="pane-header__label">Preview</span>
      </div>
      <div
        ref={ref}
        className="preview-content"
        onScroll={onScroll}
        dangerouslySetInnerHTML={{ __html: html }}
        id="markdown-preview"
      />
    </div>
  );
});

export default PreviewPane;
