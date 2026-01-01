
export default function ResumePage() {
  return (
    <div
      id="resume"
      className="w-full py-20 flex flex-col items-center gap-4 min-h-[52vh]"
    >
      {/* Download Button */}
      <a
        href="/IsrarAhmadResume.pdf"
        download="IsrarAhmadResume.pdf"
        className="inline-flex items-center gap-2 text-sm sm:text-md font-semibold rounded-xl border border-violet-500/40
                            px-4 sm:px-6 py-3 text-violet-600 dark:text-white
                            bg-violet-500/10 transition"
      >
        Download Resume
      </a>
      
      <div className="w-full flex justify-center">
        <img
          src="/images/portfolio/IsrarAhmadResumeImage.webp"
          title="Resume"
          className="bg-white w-[95%] lg:w-[70%] border shadow-lg"
        />
      </div>
    </div>
  );
}
