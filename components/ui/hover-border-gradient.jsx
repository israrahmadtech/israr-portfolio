"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  duration = 0.3,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border overflow-visible p-px items-center justify-center",
        containerClassName
      )}
      {...props}
    >
      {/* Inner content */}
      <div className={cn("relative z-10 rounded-full", className)}>
        {children}
      </div>

      {/* Hover radial glow */}
      <motion.div
        className="absolute inset-0 rounded-full z-0 pointer-events-none"
        style={{ filter: "blur(2px)" }}
        animate={{
          background: hovered
            ? "radial-gradient(75% 181% at 50% 50%, #7300ffff 0%, rgba(255,255,255,0) 100%)"
            : "transparent",
          transition: { ease: "linear", duration: duration } // <-- ye galat jagah
        }}
      />

      {/* Inner solid background to hide blur overflow */}
      <div className="absolute inset-[2px] rounded-full bg-black dark:bg-[#0a0611] z-1" />
    </div>
  );
}
