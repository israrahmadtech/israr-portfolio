import FeaturesSectionDemo from '@/components/features-section-demo-2'
import React from 'react'

function FeatureSection() {
  return (
    <section id='features' className='py-[6vw] lg:py-[3vw] w-full'>
      <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>FEATURES</h2>
      <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
        Modern frontend expertise with reusable components, smooth animations,
        API integrations, pixel perfect UIs and complete end-to-end project delivery.
      </p>
      <FeaturesSectionDemo />
    </section>
  )
}

export default FeatureSection