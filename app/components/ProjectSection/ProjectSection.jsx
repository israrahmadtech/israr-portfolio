import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { HoverBorderGradient } from './hover-border-gradient';
import { getProjects } from '@/services/projects';

async function ProjectSection() {
    const projects = await getProjects();

    // Filter Featured projects
    const topProjects = projects.filter(p => p.category === "Top");
    return (
        topProjects?.length > 0 && 
        <section id='features' className='py-[6vw] lg:py-[3vw] w-full'>
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>TOP PROJECTS</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                A selection of projects demonstrating my skills and problem-solving approach through complete, end-to-end systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {topProjects?.slice(0, 3).map(project => (
                    <ProjectCard key={project?.id + "-1"} project={project} />
                ))}
            </div>
            <div className='w-full pt-5 flex justify-end'>
                <Link href="/projects" className="group inline-flex">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1 text-sm font-medium"
                    >
                        <span>All Projects</span><span className='text-xs text-violet-500'>{projects?.length}</span>
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