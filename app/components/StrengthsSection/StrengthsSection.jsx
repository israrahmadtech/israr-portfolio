import React from "react";
import { FaBug, FaComments, FaLightbulb, FaTasks, FaTrophy } from "react-icons/fa";

const strengths = [
  { icon: <FaBug />, title: "Best Debugger", desc: "Quickly identify and fix complex issues" },
  { icon: <FaComments />, title: "Best Communicator", desc: "Clear communication with team & clients" },
  { icon: <FaTasks />, title: "Project Manager", desc: "Managed teams & delivered projects on time" },
  { icon: <FaLightbulb />, title: "Solution Provider", desc: "Focused on real-world, scalable solutions" },
  { icon: <FaTrophy />, title: "Top Performer", desc: "Ranked Top 3 in SMIT Web Development Class" },
];

export default function StrengthsSection() {
  return (
    <section id="strengths-section" className="py-[6vw] md:py-[3vw] w-full">
      <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
        STRENGTHS
      </h2>

      <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
        Beyond technical skills, I bring strong problem-solving, communication,
        and leadership abilities that help teams build better products.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center gap-3 p-6 rounded-xl
                       bg-gradient-to-br from-violet-500/30 to-transparent border border-violet-500/40 backdrop-blur-sm hover:from-violet-500/40 transition-all duration-300"
          >
            <div className="text-violet-500">{item.icon}</div>

            <h3 className="font-semibold text-zinc-800 dark:text-white">
              {item.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
