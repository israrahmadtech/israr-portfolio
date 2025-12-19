import React from "react";
import StackSlide from "../StackSlide/StackSlide";
import Link from "next/link";
import './AboutHero.css'

function AboutHero() {
    return (
        <section
            id="about-hero"
            className="w-full h-[945px] bg-[#5e0ec010] flex items-center relative overflow-hidden
                 bg-zinc-50 dark:bg-[#0a0611]"
        >
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />

            <div className="relative z-10 w-full mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="relative space-y-8">

                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  bg-violet-500/10 text-violet-500 text-sm font-semibold">
                        <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                        ABOUT ME
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight
                 text-zinc-900 dark:text-white">
                        Crafting
                        <span className="relative mx-2 inline-block">
                            <span className="absolute inset-0 -skew-y-2 bg-violet-500/20 rounded-lg" />
                            <span className="relative text-violet-500">modern</span>
                        </span>
                        web experiences with
                        <span className="block mt-2 text-violet-500">
                            clean code & scalable UI
                        </span>
                    </h1>

                    {/* Divider */}
                    <div className="w-20 h-[2px] bg-gradient-to-r from-violet-500 to-transparent" />

                    {/* Description */}
                    <p className="max-w-xl text-lg text-zinc-600 dark:text-gray-400 leading-relaxed">
                        I’m <span className="text-zinc-900 dark:text-white font-medium">Israr Ahmad</span>,
                        a frontend-focused web developer specializing in
                        <span className="text-violet-500 font-medium">
                            {" "}React.js, Next.js
                        </span>{" "}
                        and{" "}
                        <span className="text-violet-500 font-medium">
                            Tailwind CSS
                        </span>.
                        I build fast, responsive and user-friendly interfaces that solve real business problems.
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 text-zinc-600 dark:text-gray-400">
                        <li className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-violet-500" />
                            20+ real-world production projects
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-violet-500" />
                            Team collaboration & leadership experience
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-violet-500" />
                            Clean, reusable & performance-focused code
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-5 pt-6">
                        <Link
                            href="/contact"
                            className="relative px-7 py-3 rounded-xl bg-violet-500 text-white font-medium
                 shadow-[0_0_40px_rgba(139,92,246,0.45)]
                 hover:shadow-[0_0_70px_rgba(139,92,246,0.7)]
                 transition"
                        >
                            Hire Me
                        </Link>

                        <a
                            href="/resume.pdf"
                            className="px-7 py-3 rounded-xl border border-violet-500/40
                 text-violet-500 dark:text-violet-400
                 hover:bg-violet-500/10 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative hidden lg:flex justify-center items-center w-full">

                    {/* Outer Glow Circle */}
                    <div className="absolute w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl" />

                    {/* Main Circle */}
                    <div className="relative w-[500px] h-[500px] rounded-full border-30 border-violet-500 dark:border-violet-500 flex items-center justify-center shadow-[0_0_80px_10px_#8e51ff,inset_0_0_80px_10px_#8e51ff]">

                        {/* Inner Ring */}
                        {/* <div className="absolute w-[400px] h-[400px] rounded-full border border-violet-500/40" /> */}

                        {/* Profile Image */}
                        <div className="relative z-10">
                            <img
                                src="/israr7.png"
                                alt="Israr Ahmad"
                                className="w-full h-full object-cover overfolow-hidden rounded-full"
                            />
                        </div>

                        {/* Left Icon */}
                        <span className="absolute -left-30 -top-30 text-transparent text-[180px] font-bold opacity-70 [-webkit-text-stroke:3px_#8b5cf6]">
                            {"<"}
                        </span>

                        {/* Right Icon */}
                        <span className="absolute -right-25 -bottom-30 text-transparent text-[180px] font-bold opacity-70 [-webkit-text-stroke:3px_#8b5cf6]">
                            {">"}
                        </span>
                    </div>
                </div>

            </div>
            <StackSlide />
            <div className="absolute -bottom-20 left-[50%] h-0 w-0 rounded-full shadow-[0_0_150px_350px_rgba(139,92,246,0.6)] dark:shadow-[0_0_300px_300px_rgba(139,92,246,0.6)] -z-1"></div>
        </section>
    );
}

export default AboutHero;
