import React from 'react'
import TechSnippet from '../TechSnippet/TechSnippet'
import Typing from '../Typing/Typing'
import './Hero.css'
import StackSlide from '../StackSlide/StackSlide'
import Link from 'next/link'
import { IconBriefcase, IconDownload, IconMail } from '@tabler/icons-react'

function Hero() {
    return (
        <section id='hero' className='w-full h-[945px] bg-[#5e0ec010] relative overflow-y-hidden flex gap-10 items-center'>
            <div className="ms-[5vw] me-[5vw] lg:me-0 left-content w-full">
                <p className="text-[28px] font-medium">HELLO</p>

                <h1 className="my-2.5" style={{ fontSize: "clamp(2rem, 5vw , 5rem)", lineHeight: "clamp(2.5rem, 5vw + 1.5rem, 5.5rem)" }}>
                    I'm <span className="name font-bold">Israr Ahmad</span>
                    <br />
                    A <Typing />
                </h1>

                <p className="text-md sm:text-[18px] my-5 leading-[35px] text-gray-700 dark:text-gray-300">
                    I help businesses build their online presence with fast, mobile-friendly websites using React.js, Next.js and Tailwind CSS - designed to attract customers and showcase your brand. <br /> With 20+ real-world projects and experience working with teams, I build clean, optimized and scalable web applications.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {/* Hire Me */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm sm:text-md rounded-xl bg-violet-500 px-6 py-3 text-white font-medium
                            hover:bg-violet-600 transition"
                    >
                        <IconBriefcase size={18} />
                        Hire Me
                    </Link>

                    {/* Download Resume */}
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 text-sm sm:text-md rounded-xl border border-violet-500/40
                            px-6 py-3 text-violet-600 dark:text-violet-400
                            hover:bg-violet-500/10 transition"
                    >
                        <IconDownload size={18} />
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="w-full hidden lg:block">
                <TechSnippet />
            </div>
            <StackSlide />
            <div className="absolute -bottom-20 left-[40%] h-0 w-80 rounded-full shadow-[0_0_200px_350px_rgba(138,92,246,0.315)] dark:shadow-[0_0_300px_300px_rgba(139,92,246,0.6)] -z-1"></div>
        </section>
    )
}

export default Hero
