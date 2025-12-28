import React from 'react'
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

function Projects() {
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
    <div className='w-full h-auto container'>
      <h2 className="text-center py-10 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
        My{" "}
        <span className="relative inline-block text-violet-500">
          Projects
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-violet-500/40 rounded-full" />
        </span>
      </h2>

      {/* FEATURED PROJECTS */}
      <section id='feature-projects' className='py-[6vw] md:py-[3vw] w-full'>
        <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>FEATURED PROJECTS</h2>
        <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
          Best work that represents my strongest skills and problem-solving ability.
        </p>
        <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
      </section>

      {/* CORE PROJECTS */}
      <section id='core-projects' className='py-[6vw] md:py-[3vw] w-full'>
        <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>CORE PROJECTS</h2>
        <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
          Solid, well-structured projects built to strengthen real-world development skills.
        </p>
        <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
      </section>

      {/* LEARNING PROJECTS */}
      <section id='learning-projects' className='py-[6vw] md:py-[3vw] w-full'>
        <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>LEARNING PROJECTS</h2>
        <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
          Smaller projects and experiments created while learning new concepts and tools.
        </p>
        <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
      </section>
    </div>
  )
}

export default Projects