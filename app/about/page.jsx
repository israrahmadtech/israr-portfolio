import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import { JourneySection } from "../components/JourneySection/JourneySection";

function AboutPage() {
  return (
    <div id="about">
      <AboutHero/>
      <div className="container">
        <JourneySection/>
      </div>
    </div>
  );
}

export default AboutPage;
