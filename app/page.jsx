import AboutSection from "./components/AboutSection/AboutSection"
import CallToAction from "./components/CTA/CTA"
import FeatureSection from "./components/FeatureSection/FeatureSection"
import Hero from "./components/Hero/Hero"
import { ProcessSection } from "./components/ProcessSection/ProcessSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"
import { TechStackSection } from "./components/TechStackSection/TechStackSection"
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection"

function Home() {
  return (
    <div>
      <Hero />
      <div className="container">
        <AboutSection />
      </div>
      <div className="container">
        <FeatureSection />
      </div>
      <div className="container">
        <ProjectSection />
      </div>
      <div className="container">
        <TechStackSection />
      </div>
      <div className="container">
        <ProcessSection />
      </div>
      <div className="container">
        <TestimonialSection />
      </div>
      <div className="container">
        <CallToAction />
      </div>
    </div>
  )
}

export default Home