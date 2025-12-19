import { cn } from "@/lib/utils";
import {
  IconBrandReact,
  IconLayersIntersect,
  IconBolt,
  IconDeviceDesktopCode,
  IconApi,
  IconDatabase,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "React, Next Js & Tailwind Expert",
      description:
        "High-quality, reusable UI components with clean code and modern styling.",
      icon: <IconBrandReact />,
    },
    {
      title: "Smooth Animations",
      description:
        "Beautiful micro-interactions and motion-based UI that make interfaces feel alive.",
      icon: <IconSparkles />,
    },
    {
      title: "Reusable Component Architecture",
      description:
        "Scalable component patterns that keep your project fast and maintainable.",
      icon: <IconLayersIntersect />,
    },
    {
      title: "API Integrations",
      description:
        "REST APIs, Supabase, and third-party services integrated with clean and secure logic.",
      icon: <IconApi />,
    },
    {
      title: "Supabase Backend Setup",
      description:
        "Auth, database, and storage integration using modern backend-as-a-service tools.",
      icon: <IconDatabase />,
    },
    {
      title: "Pixel-Perfect Frontend",
      description:
        "From Figma to responsive UI — every section matches perfectly on all screens.",
      icon: <IconDeviceDesktopCode />,
    },
    {
      title: "High Performance & Optimization",
      description:
        "Fast loading, optimized images, lazy loading, and clean bundling for smooth UX.",
      icon: <IconBolt />,
    },
    {
      title: "End-to-End Project Build",
      description:
        "From UI planning to deployment — complete projects delivered on Vercel.",
      icon: <IconRocket />,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-5 lg:py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-violet-500 dark:from-violet-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-violet-500 dark:from-violet-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 dark:group-hover/feature:bg-violet-500 group-hover/feature:bg-violet-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 group-hover/feature:text-black dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
