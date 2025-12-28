import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { HoverBorderGradient } from './hover-border-gradient';

function ProjectSection() {
    const projects = [
        {
            id: "project-1",
            title: "Portfolio Website",
            description: "My personal portfolio built with Next.js and Tailwind CSS.",
            image: '/foodWeb.png',
            tech: ["Next.js", "React.js", "Tailwind CSS"],
            link: "https://github.com/israr/portfolio"
        },
        {
            id: "project-2",
            title: "E-commerce App",
            description: "A full-stack e-commerce app using Supabase and Next.js.",
            image: "/imageSlider.png",
            tech: ["Next.js", "Tailwind CSS", "Supabase"],
            link: "#"
        },
        {
            id: "project-3",
            title: "Portfolio Website",
            description: "My personal portfolio built with Next.js and Tailwind CSS.",
            image: '/foodWeb.png',
            tech: ["Next.js", "React.js", "Tailwind CSS"],
            link: "https://github.com/israr/portfolio"
        },
    ];
    return (
        <section id='features' className='py-[6vw] lg:py-[3vw] w-full'>
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>FEATURED PROJECTS</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                A showcase of my personal and collaborative projects built with modern web technologies like React.js, Next.js, Tailwind CSS, and more. Each project highlights clean UI, smooth interactions, and practical real-world implementations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                        link={project.link}
                    />
                ))}
            </div>
            <div className='w-full pt-5 flex justify-end'>
                <Link href="/projects" className="group inline-flex">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1 text-sm font-medium"
                    >
                        <span>All Projects</span>
                        <IconArrowRight
                            className="ml-0 w-0 h-4 group-hover:ml-2 group-hover:w-4 text-violet-500 dark:text-violet-300 transform -rotate-45 translate-x-[-6px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </HoverBorderGradient>
                </Link>
            </div>
        </section>
    )
}

export default ProjectSection