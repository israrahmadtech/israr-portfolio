"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl 
             bg-violet-500/10 
             dark:bg-violet-500/15"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <div className="flex items-center gap-3">
              {item.icon}
              <CardTitle>{item.title}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm transition relative z-20",
        className
      )}
    >
      <div className="relative z-50 p-4">
        {children}
      </div>
    </div>
  );
};


export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "font-semibold tracking-wide text-zinc-900 dark:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};


export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-3 text-sm leading-relaxed text-zinc-600 dark:text-gray-400",
        className
      )}
    >
      {children}
    </p>
  );
};

