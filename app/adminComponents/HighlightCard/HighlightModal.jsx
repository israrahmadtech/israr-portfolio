"use client";

import React from "react";

export default function HighlightCard({ highlight, onEdit, onDelete }) {
    return (
        <div className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm flex flex-col justify-between">

            {/* Top: Image & Info */}
            <div className="flex flex-col gap-4">
                <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-40 object-cover rounded-lg"
                />

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {highlight.title}
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {highlight.description}
                    </p>
                    {highlight.date && (
                        <p className="text-xs text-violet-500 dark:text-violet-300">
                            {highlight.date}
                        </p>
                    )}
                    {highlight.icon && (
                        <span className="text-xl mt-1">
                            {highlight.icon}
                        </span>
                    )}
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-4 flex items-center justify-end gap-2">
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
    );
}
