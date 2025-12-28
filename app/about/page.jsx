import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import { JourneySection } from "../components/JourneySection/JourneySection";
import { SkillsSection } from "../components/SkillsSection/SkillsSection";
import AchievmentsSection from "../components/AchievmentsSection/AchievmentsSection";
import CallToAction from "../components/CTA/CTA";

function About() {
  return (
    <div id="about">
      <AboutHero/>
      <div className="">
        <JourneySection/>
      </div>
      <div className="container">
        <SkillsSection/>
      </div>
      <div className="container">
        <AchievmentsSection/>
      </div>
      <CallToAction/>
    </div>
  );
}

export default About;
