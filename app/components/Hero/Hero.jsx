import React from 'react'
import TechSnippet from '../TechSnippet/TechSnippet'
import Typing from '../Typing/Typing'
import './Hero.css'

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
                
                <div className='flex items-center gap-5'>
                    <button className='bg-violet-500 text-sm sm:text-lg rounded-xl px-4 py-3 font-semibold hover:bg-violet-600 transition-all'>Hire Me Now</button>
                    <button className='border border-violet-500 text-sm sm:text-lg rounded-xl px-4 py-3 font-semibold hover:bg-violet-500 transition-all'>View My Work</button>
                </div>
            </div>
            <div className="w-full hidden lg:block">
                <TechSnippet />
            </div>
            <div className="absolute -bottom-20 left-[50%] h-0 w-0 rounded-full shadow-[0_0_300px_300px_rgba(139,92,246,0.6)] -z-1"></div>
        </section>
    )
}

export default Hero
