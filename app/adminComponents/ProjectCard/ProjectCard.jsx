"use client";

import Image from "next/image";
import React from "react";

export default function ProjectCard({ project, onEdit, onDelete }) {
    return (
        <div className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm flex flex-col justify-between">

            {/* Top: Image & Info */}
            <div className="flex flex-col gap-4">
                <div className="relative w-full h-40 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {project.title}
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={tech + idx}
                            className="px-2 py-1 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-white rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-violet-600 dark:text-violet-300">{project.category}</p>

                <div className="flex gap-2">
                    <button
                        onClick={onEdit}
                        className={`inline-flex items-center gap-2 text-sm sm:text-md rounded-md border border-yellow-500/40
                            px-2 sm:px-4 py-1 text-yellow-600 dark:text-yellow-300 hover:border-yellow-500/80
                            bg-yellow-500/10 transition`}
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className={`inline-flex items-center gap-2 text-sm sm:text-md rounded-md border border-red-500/40
                            px-2 sm:px-4 py-1 text-red-600 dark:text-red-500 hover:border-red-500/80
                            bg-red-500/10 transition`}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
