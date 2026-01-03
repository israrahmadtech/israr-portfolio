import Image from "next/image";

export default function ResumePage() {
  return (
    <div
      id="resume"
      className="w-full py-20 flex flex-col items-center gap-4 min-h-[52vh]"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
        My{" "}
        <span className="relative inline-block text-violet-500">
          Resume
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-violet-500/40 rounded-full" />
        </span>
      </h2>
      <p className="text-center mb-3 max-w-2xl px-2 mx-auto text-violet-500 dark:text-violet-300">
        A concise overview of my professional experience, skills, and accomplishments. This section highlights my work, projects, and milestones that demonstrate my growth and expertise in web development.
      </p>
      
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

        <div className="w-full flex justify-center">
          <Image
            src="/IsrarAhmadResumeImage.webp"
            alt="Resume"
            width={1200}
            height={1700}
            sizes="(max-width: 1024px) 95vw, 70vw"
            className="bg-white w-[95%] lg:w-[70%] border shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
