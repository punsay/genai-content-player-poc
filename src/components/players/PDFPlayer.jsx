import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


export default function PDFPlayer({ src }) {
  const [numPages, setNumPages] = React.useState(0);

  return (
    <div className="player-container">
      <Document file={src} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        {Array.from({ length: numPages }, (_, i) => (
          <Page key={i + 1} pageNumber={i + 1} />
        ))}
      </Document>
    </div>
  );
}
