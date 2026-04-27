import { Download } from "lucide-react";
import { exportToPDF } from "../../lib/pdfExport";
import { useState } from "react";

export default function ExportButton({ previewRef }) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportToPDF(previewRef);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      className="header-action-btn header-action-btn--export"
      onClick={handleExport}
      disabled={exporting}
      title="Export as PDF"
      aria-label="Export PDF"
      id="export-pdf-btn"
    >
      <Download size={16} />
      <span>{exporting ? "Exporting..." : "PDF"}</span>
    </button>
  );
}
