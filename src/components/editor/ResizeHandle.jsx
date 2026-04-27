export default function ResizeHandle({ onMouseDown, isActive }) {
  return (
    <div
      className={`resize-handle ${isActive ? "resize-handle--active" : ""}`}
      onMouseDown={onMouseDown}
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize panes"
      id="resize-handle"
    />
  );
}
