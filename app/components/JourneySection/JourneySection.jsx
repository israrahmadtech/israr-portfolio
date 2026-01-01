import React from "react";
import { Timeline } from "@/app/components/JourneySection/timeline";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma, FaGitAlt, FaDatabase, FaRocket,
    FaLaptopCode,
    FaUsers
} from "react-icons/fa";

export function JourneySection() {
    const techStack1 = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript (Basics)" },
    ];
    const techStack2 = [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaFigma />, name: "Figma" },
    ];
    const techStack3 = [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaDatabase />, name: "Supabase" },
        { icon: <FaRocket />, name: "Tailwind CSS" },
        { icon: <FaReact />, name: "Next.js" },
        { icon: <FaGitAlt />, name: "Git & GitHub" },
        { icon: <FaUsers />, name: "Team Collaboration" },
    ];
    const data = [
        {
            id: 1,
            title: "2023",
            content: (
                <>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl sm:text-2xl flex items-center gap-2 text-violet-500">
                            <FaLaptopCode size={20} />
                            <span className="font-semibold">Started Web Development</span>
                        </h3>
                        <p className="text-sm sm:text-lg text-zinc-600 dark:text-gray-400">After completing my <span className="text-violet-500 dark:text-violet-300">matric</span>, I began my journey into coding with a focus on <span className="text-violet-500 dark:text-violet-300">frontend development</span>. I started with <span className="text-violet-500 dark:text-violet-300">HTML and CSS</span>, covering all the fundamentals and creating several <span className="text-violet-500 dark:text-violet-300">small projects</span> to practice and master them. This process helped me understand how <span className="text-violet-500 dark:text-violet-300">web pages are structured</span>, how styling works, and how to create <span className="text-violet-500 dark:text-violet-300">responsive designs</span>. Once I was confident in HTML and CSS, I attempted to learn <span className="text-violet-500 dark:text-violet-300">JavaScript</span>. I went through the basics, but at that time, I found it <span className="text-violet-500 dark:text-violet-300">challenging</span> to fully grasp the concepts and was unable to <span className="text-violet-500 dark:text-violet-300">progress further</span>.</p>
                        {/* Tech Stack Buttons */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            {techStack1?.map((tech, index) => (
                                <span key={tech?.name + index} className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-xs sm:text-sm font-medium">
                                    {tech?.icon} {tech?.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 2,
            title: "2024",
            content: (
                <>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl sm:text-2xl flex items-center gap-2 text-violet-500">
                            <FaJs size={20} />
                            <span className="font-semibold">JavaScript & React.js Exploration</span>
                        </h3>
                        <p className="text-sm sm:text-lg text-zinc-600 dark:text-gray-400">In <span className="text-violet-500 dark:text-violet-300">2024</span>, I restarted my <span className="text-violet-500 dark:text-violet-300">JavaScript journey</span> with a <span className="text-violet-500 dark:text-violet-300">fresh approach</span>. This time, I studied both <span className="text-violet-500 dark:text-violet-300">basic and advanced topics</span> and worked on <span className="text-violet-500 dark:text-violet-300">multiple small projects</span> to apply the concepts practically. After gaining confidence in JavaScript, I moved on to <span className="text-violet-500 dark:text-violet-300">React.js</span>. Initially, I covered the basics but struggled to understand the <span className="text-violet-500 dark:text-violet-300">deeper concepts</span>, so I paused learning React. In <span className="text-violet-500 dark:text-violet-300">November 2024</span>, I joined <span className="text-violet-500 dark:text-violet-300">SMIT</span> for a <span className="text-violet-500 dark:text-violet-300">professional Full Stack Modern Web and App Development course</span> taught by a teacher with over <span className="text-violet-500 dark:text-violet-300">7 years of experience</span>. By <span className="text-violet-500 dark:text-violet-300">January 2025</span>, I had covered <span className="text-violet-500 dark:text-violet-300">HTML, CSS, Bootstrap, and Figma</span>, building <span className="text-violet-500 dark:text-violet-300">several projects</span> along the way to solidify my skills and prepare for <span className="text-violet-500 dark:text-violet-300">advanced JavaScript learning</span>.</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {techStack2?.map((tech, index) => (
                                <span key={tech?.name + index} className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-xs sm:text-sm font-medium">
                                    {tech?.icon} {tech?.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 3,
            title: "2025",
            content: (
                <>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl sm:text-2xl flex items-center gap-2 text-violet-500">
                            <FaReact size={20} />
                            <span className="font-semibold">JavaScript, React.js & Full Stack Mastery</span>
                        </h3>
                        <p className="text-sm sm:text-lg text-zinc-600 dark:text-gray-400">In <span className="text-violet-500 dark:text-violet-300">2025</span>, I continued at <span className="text-violet-500 dark:text-violet-300">SMIT</span>, focusing on mastering <span className="text-violet-500 dark:text-violet-300">JavaScript</span> including <span className="text-violet-500 dark:text-violet-300">basic, advanced, and OOP concepts</span>. I also learned <span className="text-violet-500 dark:text-violet-300">Git, GitHub, and TypeScript</span>, applying them in <span className="text-violet-500 dark:text-violet-300">multiple real-world projects</span>. Once I was confident in JavaScript, I <span className="text-violet-500 dark:text-violet-300">deep-dived into React.js</span>, covering <span className="text-violet-500 dark:text-violet-300">basics to advanced topics</span>, building projects, and mastering it completely. I further learned <span className="text-violet-500 dark:text-violet-300">advanced GitHub workflows</span> and collaborated on <span className="text-violet-500 dark:text-violet-300">team projects</span>. After React, I self-studied <span className="text-violet-500 dark:text-violet-300">Supabase</span> and <span className="text-violet-500 dark:text-violet-300">Tailwind CSS</span>, implementing <span className="text-violet-500 dark:text-violet-300">several projects</span> to gain mastery. Later, I learned <span className="text-violet-500 dark:text-violet-300">Next.js</span> and built <span className="text-violet-500 dark:text-violet-300">full-fledged projects</span>, strengthening my <span className="text-violet-500 dark:text-violet-300">frontend and full-stack skills</span>. Recently, I started <span className="text-violet-500 dark:text-violet-300">backend development</span>, and upon completing this course, I will officially become a <span className="text-violet-500 dark:text-violet-300">MERN Stack + React Native App developer</span>.</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {techStack3?.map((tech, index) => (
                                <span key={tech?.name + index} className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-xs sm:text-sm font-medium">
                                    {tech?.icon} {tech?.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

