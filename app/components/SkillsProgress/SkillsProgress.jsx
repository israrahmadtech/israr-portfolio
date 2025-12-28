"use client";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Bootstrap", level: 80 },
    { name: "JavaScript", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 60 },
    { name: "MERN Stack", level: 60, note: "In Progress" },
];

export default function SkillsProgress() {
    return (
        <section className="w-full mx-auto">
            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="space-y-2 w-full"
                    >
                        {/* Label */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                    {skill.name}
                                </span>
                                {skill.note && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400">
                                        {skill.note}
                                    </span>
                                )}
                            </div>
                            <span className="text-violet-400 font-medium">
                                {skill.level}%
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                    duration: 1.1,
                                    ease: "easeOut",
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                            />

                            {/* Subtle glow / breathing animation */}
                            <motion.div
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: [0.4, 0.7, 0.4] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-md"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
