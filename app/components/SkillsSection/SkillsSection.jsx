import { cn } from "@/lib/utils";
import React from "react";
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandFigma,
    IconCode,
    IconBrandTailwind,
    IconServer,
    IconBrandGithub,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/app/components/SkillsSection/bento-grid";
import SkillsProgress from "../SkillsProgress/SkillsProgress";

export function SkillsSection() {
    return (
        <section id='skills-section' className='py-[6vw] md:py-[3vw] w-full'>
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>SKILLS</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                I build modern, scalable web applications using React.js, Next.js, and Tailwind CSS, backed by strong fundamentals in HTML, CSS, and JavaScript. My skills are shaped by 20+ real-world projects, team leadership, and hands-on mentoring experience.
            </p>
            <div className="pt-[6vw] sm:pt-[2vw]">
                <SkillsProgress/>
            </div>
            <div className="pt-[8vw] sm:pt-[3vw]">
                <BentoGrid className="">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-200 dark:from-violet-900 dark:to-violet-800 to-violet-100">

    </div>
);

const items = [
    {
        title: "Figma to Code",
        description:
            "I convert Figma designs into pixel-perfect, responsive, and accessible user interfaces using modern frontend tools.",
        header: <Skeleton />,
        icon: <IconBrandFigma className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "Portfolio Websites",
        description:
            "I build modern, fast, and visually engaging portfolio websites that showcase skills, projects, and personal branding.",
        header: <Skeleton />,
        icon: <IconCode className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "Business Websites",
        description:
            "I create scalable and professional business websites focused on performance, usability, and clean UI/UX.",
        header: <Skeleton />,
        icon: <IconBrandNextjs className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "React & Next.js Applications",
        description:
            "I develop dynamic, component-based web applications using React.js and Next.js with clean architecture.",
        header: <Skeleton />,
        icon: <IconBrandReact className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "Modern Styling & UI Systems",
        description:
            "I use Tailwind CSS to build reusable, responsive, and consistent design systems with modern UI patterns.",
        header: <Skeleton />,
        icon: <IconBrandTailwind className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "MERN Stack (In Progress)",
        description:
            "Currently learning backend development with Node.js, Express.js, MongoDB, and React Native to build full-stack applications.",
        header: <Skeleton />,
        icon: <IconServer className="h-4 w-4 text-violet-500" />,
    },
    {
        title: "Git, GitHub & Collaboration",
        description:
            "Experienced with Git workflows, GitHub collaboration, version control, and team-based development.",
        header: <Skeleton />,
        icon: <IconBrandGithub className="h-4 w-4 text-violet-500" />,
    },
];