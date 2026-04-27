import { useMemo } from "react";

export default function StatusBar({ content }) {
  const stats = useMemo(() => {
    const text = content || "";
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const lines = text ? text.split("\n").length : 0;
    return { words, chars, lines };
  }, [content]);

  return (
    <div className="status-bar" id="status-bar">
      <div className="status-bar__item">
        <span className="status-bar__dot" />
        <span>Autosaved</span>
      </div>
      <div className="status-bar__item">
        <span>{stats.words} words</span>
      </div>
      <div className="status-bar__item">
        <span>{stats.chars} chars</span>
      </div>
      <div className="status-bar__item">
        <span>{stats.lines} lines</span>
      </div>
    </div>
  );
}
