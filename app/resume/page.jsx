"use client";
import Link from "next/link";
import React from "react";
// import PDFViewer from "../components/PDFViewer/PDFViewer";

function ResumePage() {
  return (
    <div id="resume" className="w-full py-20 flex justify-center items-center flex-col gap-2 min-h-[52vh]">
      {/* <PDFViewer file="/resume.pdf" /> */}
      <h2 className="text-2xl font-semibold">Coming Soon...</h2>
      <p className="text-lg">Go to <Link href='/' className="text-violet-400 underline">Home</Link></p>
    </div>
  );
}

export default ResumePage;
