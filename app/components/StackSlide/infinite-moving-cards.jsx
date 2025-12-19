"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate elements for infinite effect
      scrollerContent.forEach((item) => {
        const dup = item.cloneNode(true);
        scrollerRef.current.appendChild(dup);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "right" ? "forwards" : "reverse"
    );
  };

  const setSpeed = () => {
    if (!containerRef.current) return;

    const speeds = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };

    containerRef.current.style.setProperty(
      "--animation-duration",
      speeds[speed] || "180s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="text-xl font-semibold text-gray-600 dark:text-[#ccc] whitespace-nowrap select-none flex items-center gap-2"
          >
            <span className="text-2xl">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
