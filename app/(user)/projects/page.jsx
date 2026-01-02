import React from 'react'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { getProjects } from '@/services/projects';

async function Projects() {
  const projects = await getProjects();

  // Filter Featured projects
  const featuredProjects = projects.filter(p => p.category === "Featured");
  // Filter Core projects
  const coreProjects = projects.filter(p => p.category === "Core");
  // Filter Learning projects
  const learningProjects = projects.filter(p => p.category === "Learning");

  return (
    <div className='w-full h-auto container'>
      <h2 className="text-center pt-10 pb-5 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
        My{" "}
        <span className="relative inline-block text-violet-500">
          Projects
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-violet-500/40 rounded-full" />
        </span>
      </h2>
      <p className="text-center max-w-2xl mx-auto text-violet-500 dark:text-violet-300">
        These projects demonstrate my hands-on experience with React, modern tools, and real production-level features.
      </p>

      {/* FEATURED PROJECTS */}
      {
        featuredProjects.length > 0 &&
        <section id='feature-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>FEATURED PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Best work that represents my strongest skills and problem-solving ability.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project?.id + "-1"} project={project} />
            ))}
          </div>
        </section>
      }

      {/* CORE PROJECTS */}
      {
        coreProjects.length > 0 &&
        <section id='core-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>CORE PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Solid, well-structured projects built to strengthen real-world development skills.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {coreProjects.map(project => (
              <ProjectCard key={project?.id + "-2"} project={project} />
            ))}
          </div>
        </section>
      }

      {/* LEARNING PROJECTS */}
      {
        learningProjects.length > 0 &&
        <section id='learning-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>LEARNING PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Smaller projects and experiments created while learning new concepts and tools.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {learningProjects.map(project => (
              <ProjectCard key={project?.id + "-3"} project={project} />
            ))}
          </div>
        </section>
      }
    </div>
  )
}

export default Projects