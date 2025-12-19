import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma, FaGithub, FaGitAlt, FaDatabase, FaNodeJs, FaRocket, 
    FaLaptopCode,
    FaUsers
} from "react-icons/fa";

export function JourneySection() {
    const data = [
        {
            title: "2023",
            content: (
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl flex items-center gap-2 text-violet-500">
                        <FaLaptopCode size={20} />
                        <span className="font-semibold">Started Web Development</span>
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-gray-400">
                        After completing my matric, I began my journey into coding with a focus on frontend development. I started with HTML and CSS, covering all the fundamentals and creating several small projects to practice and master them. This process helped me understand how web pages are structured, how styling works, and how to create responsive designs. Once I was confident in HTML and CSS, I attempted to learn JavaScript. I went through the basics, but at that time, I found it challenging to fully grasp the concepts and was unable to progress further.
                    </p>
                    {/* Tech Stack Buttons */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaHtml5 /> HTML
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaCss3Alt /> CSS
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaJs /> JavaScript (Basics)
                        </span>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl flex items-center gap-2 text-violet-500">
                        <FaJs size={20} />
                        <span className="font-semibold">JavaScript & React.js Exploration</span>
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-gray-400">
                        In 2024, I restarted my JavaScript journey with a fresh approach. This time, I studied both basic and advanced topics and worked on multiple small projects to apply the concepts practically. After gaining confidence in JavaScript, I moved on to React.js. Initially, I covered the basics but struggled to understand the deeper concepts, so I paused learning React. In November 2024, I joined SMIT for a professional Full Stack Modern Web and App Development course taught by a teacher with over 7 years of experience. By January 2025, I had covered HTML, CSS, Bootstrap, and Figma, building several projects along the way to solidify my skills and prepare for advanced JavaScript learning.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaJs /> JavaScript
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaReact /> React.js (Basics)
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaBootstrap /> Bootstrap
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaFigma /> Figma
                        </span>
                    </div>
                </div>
            ),
        },
        {
            title: "2025",
            content: (
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl flex items-center gap-2 text-violet-500">
                        <FaReact size={20} />
                        <span className="font-semibold">JavaScript, React.js & Full Stack Mastery</span>
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-gray-400">
                        In 2025, I continued at SMIT, focusing on mastering JavaScript including basic, advanced, and OOP concepts. I also learned Git, GitHub, and TypeScript, applying them in multiple real-world projects. Once I was confident in JavaScript, I deep-dived into React.js, covering basics to advanced topics, building projects, and mastering it completely. I further learned advanced GitHub workflows and collaborated on team projects. After React, I self-studied Supabase and Tailwind CSS, implementing several projects to gain mastery. Later, I learned Next.js and built full-fledged projects, strengthening my frontend and full-stack skills. Recently, I started backend development, and upon completing this course, I will officially become a MERN Stack + React Native App developer.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaJs /> JavaScript
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaReact /> React.js
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaDatabase /> Supabase
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaRocket /> Tailwind CSS
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaReact /> Next.js
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaGitAlt /> Git & GitHub
                        </span>
                        <span className="flex items-center gap-1 px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-sm font-medium">
                            <FaUsers /> Team Collaboration
                        </span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

