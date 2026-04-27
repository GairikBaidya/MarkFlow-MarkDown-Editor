import { Link } from "react-router-dom";
import { Maximize2, Minimize2 } from "lucide-react";
import Toolbar from "./Toolbar";
import ThemeToggle from "./ThemeToggle";
import ExportButton from "./ExportButton";

export default function EditorHeader({
  textareaRef,
  onContentChange,
  previewRef,
  isFullscreen,
  onToggleFullscreen,
}) {
  return (
    <header className="editor-header" id="editor-header">
      <Link to="/" className="editor-header__logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#logo-grad)" />
          <path
            d="M6 8h12M6 12h8M6 16h10"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="#00d4ff" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
        <span className="editor-header__logo-text">MarkFlow</span>
      </Link>

      <Toolbar textareaRef={textareaRef} onContentChange={onContentChange} />

      <div className="header-actions">
        <ThemeToggle />
        <ExportButton previewRef={previewRef} />
        <button
          className="header-action-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          aria-label="Toggle fullscreen"
          id="fullscreen-btn"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>
    </header>
  );
}
