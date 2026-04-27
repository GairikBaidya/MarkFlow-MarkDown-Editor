import { PenLine, Eye } from "lucide-react";

export default function MobileTabBar({ activeTab, onTabChange }) {
  return (
    <div className="mobile-tab-bar" id="mobile-tab-bar">
      <button
        className={`mobile-tab ${activeTab === "edit" ? "mobile-tab--active" : ""}`}
        onClick={() => onTabChange("edit")}
        id="mobile-tab-edit"
      >
        <PenLine size={16} />
        Edit
      </button>
      <button
        className={`mobile-tab ${activeTab === "preview" ? "mobile-tab--active" : ""}`}
        onClick={() => onTabChange("preview")}
        id="mobile-tab-preview"
      >
        <Eye size={16} />
        Preview
      </button>
    </div>
  );
}
