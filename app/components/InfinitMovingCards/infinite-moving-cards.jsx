"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 px-8 py-6 rounded-2xl md:w-[450px] bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm"
            key={item?.name + idx}>
            <blockquote className="relative z-20 flex h-full flex-col">
              <span
                className="text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item?.quote}
              </span>

              <div className="mt-auto pt-6 flex flex-row items-center justify-between">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-semibold text-violet-400">
                    {item?.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item?.title}
                  </span>
                </span>
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="h-13 w-13 rounded-full object-cover border border-white/10"
                />
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div >
  );
};
