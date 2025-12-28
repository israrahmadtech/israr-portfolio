"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";

export const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  link,
  className,
}) => {
  return (
    <div className={cn(
      "block rounded-4xl bg-white dark:bg-[#0a0611] dark:border-violet-700 overflow-hidden p-5 shadow-[0_0_10px_#5e0ec08f]",
      className
    )}>
      {/* Project Image */}
      {image && (
        <img
          src={image}
          width={800}
          height={500}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover"
        />
      )}

      {/* Project Info */}
      <div className="pt-4 sm:pt-6">
        <a
          href={link || "#"}
          target="_blank"
          className="group inline-flex items-center text-base font-bold"
        >
          <h3 className="text-neutral-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-500 transition-all">{title}</h3>
          <IconArrowRight className="ml-2 w-4 h-4 text-violet-300 transform -rotate-45 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>

        <p className="mt-2 text-sm text-neutral-700 dark:text-violet-200">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-violet-500/20 dark:bg-violet-500/30 text-violet-500 dark:text-violet-100 px-2 py-1 rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="dark:bg-black group bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1 text-sm font-medium"
          >
            <span>Preview</span>
            <IconArrowRight
              className="ml-0 w-0 h-0 group-hover:ml-2 group-hover:h-4 group-hover:w-4 text-violet-500 dark:text-violet-300 transform -rotate-45 translate-x-[-6px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full"
            className="dark:bg-black group bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1 text-sm font-medium"
          >
            <span>GitHub</span>
            <IconArrowRight
              className="ml-0 w-0 h-0 group-hover:ml-2 group-hover:h-4 group-hover:w-4 text-violet-500 dark:text-violet-300 transform -rotate-45 translate-x-[-6px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};
