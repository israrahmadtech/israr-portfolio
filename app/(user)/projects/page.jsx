export const dynamic = "force-dynamic";
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { getProjects } from '@/services/projects';

async function Projects() {
  const projects = await getProjects();

  // Filter Top projects
  const topProjects = projects.filter(p => p.category === "Top");
  // Filter Featured projects
  const advanceProjects = projects.filter(p => p.category === "Advance");
  // Filter Core projects
  const intermediateProjects = projects.filter(p => p.category === "Intermediate");
  // Filter Learning projects
  const beginnerProjects = projects.filter(p => p.category === "Beginner");

  return (
    <div className='w-full h-auto container'>
      <h2 className="text-center pt-10 pb-5 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
        My{" "}
        <span className="relative inline-block text-violet-500">
          Projects
          <span className="text-sm md:text-base font-semibold px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-500 relative -top-5">
            {projects?.length}
          </span>
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-violet-500/40 rounded-full" />
        </span>
      </h2>
      <p className="text-center max-w-2xl mx-auto text-violet-500 dark:text-violet-300">
        A showcase of my personal and collaborative projects built with modern web technologies like React.js, Next.js, Tailwind CSS, and more. Each project highlights clean UI, smooth interactions, and practical real-world implementations.
      </p>

      {/* TOP PROJECTS */}
      {
        topProjects.length > 0 &&
        <section id='feature-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>TOP PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            A selection of projects demonstrating my skills and problem-solving approach through complete, end-to-end systems.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {topProjects.map(project => (
              <ProjectCard key={project?.id + "-1"} project={project} />
            ))}
          </div>
        </section>
      }

      {/* ADVANCE PROJECTS */}
      {
        advanceProjects.length > 0 &&
        <section id='advance-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>ADVANCE PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Best work that represents my strongest skills and problem-solving ability.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {advanceProjects.map(project => (
              <ProjectCard key={project?.id + "-1"} project={project} />
            ))}
          </div>
        </section>
      }

      {/* INTERMEDIATE PROJECTS */}
      {
        intermediateProjects.length > 0 &&
        <section id='intermediate-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>INTERMEDIATE PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Solid, well-structured projects built to strengthen real-world development skills.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {intermediateProjects.map(project => (
              <ProjectCard key={project?.id + "-2"} project={project} />
            ))}
          </div>
        </section>
      }

      {/* BEGINNER PROJECTS */}
      {
        beginnerProjects.length > 0 &&
        <section id='beginner-projects' className='py-[6vw] md:py-[3vw] w-full'>
          <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>BEGINNER PROJECTS</h2>
          <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
            Smaller projects and experiments created while learning new concepts and tools.
          </p>
          <div className="pt-[6vw] sm:pt-[2vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {beginnerProjects.map(project => (
              <ProjectCard key={project?.id + "-3"} project={project} />
            ))}
          </div>
        </section>
      }
    </div>
  )
}

export default Projects