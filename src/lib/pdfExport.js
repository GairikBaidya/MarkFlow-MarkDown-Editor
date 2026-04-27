import html2pdf from "html2pdf.js";

export async function exportToPDF(previewRef, filename = "markflow-document") {
  const element = previewRef.current;
  if (!element) {
    console.error("Preview element not found");
    return;
  }

  const opt = {
    margin: [10, 15],
    filename: `${filename}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#0d1117"
          : "#ffffff",
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.error("PDF export failed:", err);
    throw err;
  }
}
