"use client";
import React, { useEffect, useState } from "react";

const Typing = () => {
    // Refined skills
    const words = [
        "Frontend Dev",
        "Next.js Dev",
        "React Dev",
        "JavaScript Engr",
        "Web Developer",
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(50);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, speed);
        } else {
            typingTimeout = setTimeout(() => {
                setText((prev) => words[index].slice(0, prev.length + 1));
            }, speed);
        }

        setIsTyping(true);

        if (!isDeleting && text === words[index]) {
            setTimeout(() => setIsDeleting(true), 1000);
            setSpeed(50);
            setIsTyping(false);
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            setSpeed(100);
            setIsTyping(false);
        }

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, index, speed]);

    return (
        <span className="text-violet-500 font-semibold">
            {text}
            <span
                className={`inline-block text-gray-400 ml-1 ${isTyping ? "opacity-100" : "animate-blink"
                    }`}
            >
                |
            </span>

            <style>
                {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 700ms infinite;
          }
        `}
            </style>
        </span>
    );
};

export default Typing;