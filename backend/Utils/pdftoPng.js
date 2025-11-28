import path from "path";
import * as pdfPoppler from "pdf-poppler";

export const convertPdfToPng = async (pdfPath) => {
  try {
    const outputDir = path.dirname(pdfPath);
    const prefix = `resume_${Date.now()}`;

    let options = {
      format: "png",
      out_dir: outputDir,
      out_prefix: prefix,
      page: 1,
    };

    await pdfPoppler.convert(pdfPath, options);

    const finalPngPath = path.join(outputDir, `${prefix}-1.png`);
    return finalPngPath;

  } catch (error) {
    console.error("PDF to PNG conversion error:", error);
    throw error;
  }
};
