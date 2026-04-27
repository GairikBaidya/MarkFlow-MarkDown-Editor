import { Bold, Italic, Code, Link, Image, Table2, Minus } from "lucide-react";

const TOOLS = [
  { icon: Bold, action: "bold", wrap: ["**", "**"], label: "Bold" },
  { icon: Italic, action: "italic", wrap: ["_", "_"], label: "Italic" },
  { icon: Code, action: "code", wrap: ["`", "`"], label: "Code" },
  { icon: Link, action: "link", wrap: ["[", "](url)"], label: "Link" },
  { icon: Image, action: "image", wrap: ["![alt](", ")"], label: "Image" },
  { divider: true },
  { icon: Table2, action: "table", label: "Table" },
  { icon: Minus, action: "hr", label: "Horizontal Rule" },
];

const TABLE_TEMPLATE = `| Header | Header | Header |
| ------ | ------ | ------ |
| Cell   | Cell   | Cell   |
| Cell   | Cell   | Cell   |`;

export default function Toolbar({ textareaRef, onContentChange }) {
  const insertMarkdown = (tool) => {
    const textarea = textareaRef?.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.substring(start, end);

    let newText;
    let cursorPos;

    if (tool.action === "table") {
      newText = value.substring(0, start) + "\n" + TABLE_TEMPLATE + "\n" + value.substring(end);
      cursorPos = start + TABLE_TEMPLATE.length + 2;
    } else if (tool.action === "hr") {
      newText = value.substring(0, start) + "\n---\n" + value.substring(end);
      cursorPos = start + 5;
    } else if (tool.wrap) {
      const [pre, post] = tool.wrap;
      newText = value.substring(0, start) + pre + (selected || tool.action) + post + value.substring(end);
      cursorPos = start + pre.length + (selected || tool.action).length + post.length;
    } else {
      return;
    }

    onContentChange(newText);

    // Restore focus + cursor
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(cursorPos, cursorPos);
    });
  };

  return (
    <div className="toolbar">
      {TOOLS.map((tool, i) =>
        tool.divider ? (
          <div key={`div-${i}`} className="toolbar-divider" />
        ) : (
          <button
            key={tool.action}
            className="toolbar-btn"
            onClick={() => insertMarkdown(tool)}
            title={tool.label}
            aria-label={tool.label}
            id={`toolbar-${tool.action}`}
          >
            <tool.icon size={16} />
          </button>
        )
      )}
    </div>
  );
}
