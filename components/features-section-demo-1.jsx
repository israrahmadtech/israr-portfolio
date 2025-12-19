import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="py-5 lg:py-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2">
        {aboutGrid.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden p-6 rounded-3xl
             bg-gradient-to-br from-violet-500/50 from-neutral-100 to-white backdrop-blur-sm
             dark:from-violet-900 dark:to-[#1a112a7e] dark:shadow-[#1a112a]/40">
            <Grid size={20} className="absolute inset-0 opacity-10 dark:opacity-20" />

            <h3 className="text-base font-bold text-neutral-900 dark:text-white relative z-20">
              {feature.title}
            </h3>

            <p className="mt-4 text-base font-normal text-neutral-700 dark:text-neutral-300 relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const aboutGrid = [
  {
    title: "Frontend Expertise",
    description:
      "Built 20+ real-world projects using React.js, Next.js, Tailwind CSS, and modern frontend tools.",
  },
  {
    title: "Next.js Developer",
    description:
      "Experience in building scalable and high-performance Next.js apps with Server Components and API integrations.",
  },
  {
    title: "UI/UX Focused",
    description:
      "Pixel-perfect, responsive, and clean UI components following modern design principles.",
  },
  {
    title: "Team Leadership",
    description:
      "Led a 13-member web dev team, mentoring juniors and managing end-to-end project delivery.",
  },
  {
    title: "API & Backend Integrations",
    description:
      "Integrated Supabase, REST APIs, and other backend services for full-stack web applications.",
  },
  {
    title: "Problem Solving & Hackathons",
    description:
      "Participated in multiple hackathons, building innovative solutions under tight deadlines.",
  },
  {
    title: "Version Control & Collaboration",
    description:
      "Proficient in Git/GitHub, team workflows, pull requests, and collaborative project management.",
  },
  {
    title: "Clean & Scalable Code",
    description:
      "Follow best practices in code structure, reusability, and maintainability across all projects.",
  },
];


export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10" />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}
