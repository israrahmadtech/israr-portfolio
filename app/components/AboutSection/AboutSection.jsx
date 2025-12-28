import FeaturesSectionDemo from '@/app/components/AboutSection/features-section-demo-1'
import React from 'react'

function AboutSection() {
  return (
    <section id='about-section' className='pt-[8vw] md:pt-[5vw] pb-[3vw] w-full'>
      <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>ABOUT ME</h2>
      <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
        I have 3+ years of experience building modern, responsive, and scalable web applications using HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS. While I haven't done any internships or full-time jobs yet, I have completed 20+ real-world projects, led a 13-member web dev team, and guided juniors to sharpen their skills.
      </p>
      <FeaturesSectionDemo />
    </section>
  )
}

export default AboutSection