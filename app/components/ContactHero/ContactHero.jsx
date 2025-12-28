'use client'
import React from "react";
import Link from "next/link";
// import './ContactHero.css'

function ContactHero() {
    return (
        <section
            id="contact-hero"
            className="relative w-full min-h-[90vh] md:min-h-[70vh] flex items-center justify-between overflow-hidden"
        >
            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left Content */}
                <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-violet-500/10 text-violet-500 text-sm font-semibold">
                        <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                        CONTACT
                    </span>

                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-zinc-900 dark:text-white">
                        Let’s build something
                        <span className="block text-violet-500 mt-2">
                            impactful together
                        </span>
                    </h1>

                    <p className="max-w-xl text-lg text-violet-500 dark:text-violet-300">
                        Have a project idea, collaboration, or just want to say hello?
                        I’m always open to discussing new opportunities and creative ideas.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link
                            href="#contact-form"
                            className="text-sm sm:text-md px-4 sm:px-6 py-3 rounded-xl bg-violet-500 text-white font-medium
              shadow-[0_0_40px_rgba(139,92,246,0.45)]
              hover:shadow-[0_0_70px_rgba(139,92,246,0.7)]
              transition"
                        >
                            Send a Message
                        </Link>

                        <a
                            href="mailto:your@email.com"
                            className="text-sm sm:text-md px-4 sm:px-6 py-3 rounded-xl border border-violet-500/40
              text-violet-500 dark:text-violet-400
              hover:bg-violet-500/10 transition"
                        >
                            Email Me
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative hidden lg:flex items-center justify-center">

                    {/* Card */}
                    <div
                        className="relative max-w-md rounded-3xl p-8
    border border-violet-500/30
    bg-gradient-to-br from-violet-500/20 to-transparent
    backdrop-blur-sm space-y-6"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                                Quick & Reliable Communication
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-gray-400 mt-2">
                                I value clear communication and quick responses to keep projects moving smoothly.
                            </p>
                        </div>

                        {/* Info Rows */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">⚡</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Fast Response
                                    </p>
                                    <p className="text-xs text-zinc-600 dark:text-gray-400">
                                        Usually replies within 24 hours
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">💼</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Open for Work
                                    </p>
                                    <p className="text-xs text-zinc-600 dark:text-gray-400">
                                        Freelance, collaborations & long-term projects
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">🤝</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Client-Focused
                                    </p>
                                    <p className="text-xs text-zinc-600 dark:text-gray-400">
                                        Clean code, timelines & transparency
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-0 w-0
        shadow-[0_0_200px_300px_rgba(139,92,246,0.45)] -z-10" />
        </section>
    );
}

export default ContactHero;
