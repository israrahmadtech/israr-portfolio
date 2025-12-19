"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-xl relative w-full p-6 transition-all duration-300 ease-out border",
      "bg-white text-zinc-900",
      "bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm",
      hovered !== null && hovered !== index && "blur-[1.2px] scale-[0.98]",
      hovered === index && "border-violet-500/50"
    )}
  >
    <div className="flex flex-col gap-4">
      <div>{card.icon}</div>

      <h3 className="text-lg font-semibold tracking-wide dark:text-white">
        {card.title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-gray-400">
        {card.description}
      </p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
