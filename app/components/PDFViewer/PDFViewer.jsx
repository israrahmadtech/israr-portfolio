"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// React PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.2); // Zoom

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            {/* PDF Document */}
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={scale} />
            </Document>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-4">
                {/* Pagination */}
                <button
                    onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                    className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
                >
                    Prev
                </button>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Page {pageNumber} / {numPages || 1}
                </span>
                <button
                    onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                    className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
                >
                    Next
                </button>

                {/* Zoom */}
                <button
                    onClick={() => setScale(prev => prev + 0.2)}
                    className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
                >
                    +
                </button>
                <button
                    onClick={() => setScale(prev => Math.max(prev - 0.2, 0.5))}
                    className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
                >
                    -
                </button>
            </div>
        </div>
    );
}
