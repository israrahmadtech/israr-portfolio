import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandSupabase,
    IconBrandGit,
    IconBrandVercel,
} from "@tabler/icons-react";

export function TechStackSection() {
    return (
        <section id="tech-stack-section">
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>TECH STACK</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                Tools and technologies I use to build fast, scalable, and production-ready web applications with clean UI and solid frontend architecture.
            </p>
            <div className="">
                <HoverEffect items={projects} />
            </div>
        </section>
    );
}
export const projects = [
    {
        title: "React.js",
        description: "Component-based UI development with hooks and modern patterns.",
        icon: <IconBrandReact className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "Next.js",
        description: "Full-stack React framework with routing, SSR and optimizations.",
        icon: <IconBrandNextjs className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first CSS for rapid and consistent UI development.",
        icon: <IconBrandTailwind className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "JavaScript (ES6+)",
        description: "Core language for building dynamic and interactive web apps.",
        icon: <IconBrandJavascript className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "TypeScript",
        description: "Type-safe JavaScript for scalable and maintainable codebases.",
        icon: <IconBrandTypescript className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "Supabase",
        description: "Auth, database, storage and realtime APIs for full-stack apps.",
        icon: <IconBrandSupabase className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "Git & GitHub",
        description: "Version control and team collaboration for real-world projects.",
        icon: <IconBrandGit className="h-6 w-6 text-violet-400" />,
    },
    {
        title: "Vercel",
        description: "Fast and reliable deployments with CI/CD for frontend apps.",
        icon: <IconBrandVercel className="h-6 w-6 text-violet-400" />,
    },
];