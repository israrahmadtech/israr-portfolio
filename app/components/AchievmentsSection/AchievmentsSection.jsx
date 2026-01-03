"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaProjectDiagram, FaUsers, FaAward, FaLaptopCode, FaPlus } from "react-icons/fa";

const achievements = [
    { icon: <FaProjectDiagram size={28} />, title: "Projects Completed", value: 20 },
    { icon: <FaUsers size={28} />, title: "Team Members Led", value: 13 },
    { icon: <FaAward size={28} />, title: "Top Performer", value: "Top 3 – SMIT" },
    { icon: <FaLaptopCode size={28} />, title: "Years of Coding", value: 3 },
];

function Counter({ value }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.floor(latest));

    React.useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        return () => controls.stop();
    }, [value, count]);

    return <motion.span className="text-2xl md:text-3xl font-bold text-violet-400">{rounded}</motion.span>;
}

export default function AchievmentsSection() {
    return (
        <section id="achievments-section" className="py-[6vw] md:py-[3vw] w-full">
            <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
                ACHIEVEMENTS
            </h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                I build modern, scalable web applications using React.js, Next.js, and Tailwind CSS, backed by strong fundamentals in HTML, CSS, and JavaScript. My skills are shaped by 20+ real-world projects, team leadership, and hands-on mentoring experience.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-violet-500/30 to-transparent border border-violet-500/40 backdrop-blur-sm"
                    >
                        <div className="text-violet-500">{item.icon}</div>
                        <div className="flex items-center gap-1">
                            {typeof item.value === "number" ? (
                                <>
                                    <Counter value={item.value} />
                                    <FaPlus className="text-violet-400" size={15} />
                                </>
                            ) : (
                                <span className="text-lg md:text-xl font-bold text-violet-400">
                                    {item.value}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300 text-center">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
