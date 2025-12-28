'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconHome, IconInfoCircle, IconMenu2, IconX, IconPhoneCall, IconFileText, IconRocket } from "@tabler/icons-react";
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa6'
import { SiFiverr } from "react-icons/si"
import './Sidebar.css'

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('/')
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    // Example navigation items
    const navItems = [
        { name: 'Home', path: '/', icon: <IconHome className="w-5 h-5" /> },
        { name: 'About', path: '/about', icon: <IconInfoCircle className="w-5 h-5" /> },
        { name: 'Projects', path: '/projects', icon: <IconRocket className="w-5 h-5" /> },
        { name: 'Contact', path: '/contact', icon: <IconPhoneCall className="w-5 h-5" /> },
        { name: 'My Resume', path: '/resume', icon: <IconFileText className="w-5 h-5" /> },
    ]

    const socialMedia = [
        { name: 'Linkedin', icon: <FaLinkedin className='text-2xl md:text-3xl' />, link: "" },
        { name: 'Github', icon: <FaGithub className='text-2xl md:text-3xl' />, link: "" },
        { name: 'Whatsapp', icon: <FaWhatsapp className='text-2xl md:text-3xl' />, link: "" },
        { name: 'SiFiverr', icon: <SiFiverr className='text-2xl md:text-3xl' />, link: "" },
    ]

    // Sidebar Auto Hide on 1620px vw
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1654) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize(); // page open hotay hi check ho jaye

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Sidebar */}
            <aside id='sidebar'
                className={`bg-white dark:bg-[#000] shadow-violet-500 group/sidebar h-screen static w-70 md:w-88 flex flex-col p-5 transform transition-transform duration-500
          ${isSidebarOpen ? 'translate-x-0 shadow-md' : '-translate-x-[100%]'} z-50`}
            >
                {/* Profile */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src="./israr7.png"
                        alt="Israr's Profile"
                        className="bg-[#5e0ec042] w-[80%] object-cover rounded-full border-3 border-violet-300 transition-all group-hover/sidebar:border-violet-500"
                    />
                    <strong className="mt-2 text-2xl">Israr Ahmad Tech</strong>
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center text-lg gap-2 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-all
                    ${activeSection === item.path && 'bg-violet-800 text-white'}`}
                                    onClick={() => setActiveSection(item.path)}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-2 border-t border-violet-300">
                    <span className="text-lg text-violet-500">Find With Me</span>
                    <div className="flex justify-center gap-3 mt-2">
                        {
                            socialMedia?.map((account, index) => (
                                <a key={index + "social"} href={account?.link} target="_blank"
                                    className="w-11 md:w-14 h-11 md:h-14 relative group flex items-center justify-center rounded-full hover:text-white bg-gray-300 dark:bg-gray-700 transition-all">
                                    <span className='absolute z-10'>{account?.icon}</span>
                                    <span className='absolute left-0 right-0 w-11 md:w-14 h-11 md:h-14 rounded-full bg-violet-500 z-[1] transform scale-0 transition-transform duration-300 group-hover:scale-100'></span>
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* Hamburger */}
                <button
                    className={`ham-burger-btn absolute top-5 bg-gray-200 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-700 hidden ${isSidebarOpen ? 'right-3' : '-right-13'}`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
                </button>
            </aside>
        </>
    )
}
