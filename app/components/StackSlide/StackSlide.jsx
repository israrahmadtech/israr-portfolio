import React from "react";
import { InfiniteMovingCards } from "@/app/components/StackSlide/infinite-moving-cards";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiBootstrap, SiTailwindcss, SiTypescript } from "react-icons/si";


function StackSlide() {
    const techStack = [
        { id: "stack_0", name: "HTML", icon: <FaHtml5 /> },
        { id: "stack_1", name: "CSS", icon: <FaCss3Alt /> },
        { id: "stack_2", name: "Javascript", icon: <SiJavascript /> },
        { id: "stack_3", name: "Bootstrap", icon: <SiBootstrap /> },
        { id: "stack_4", name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { id: "stack_5", name: "Typescript", icon: <SiTypescript /> },
        { id: "stack_6", name: "React.js", icon: <FaReact /> },
        { id: "stack_7", name: "Next.js", icon: <SiNextdotjs /> },
        { id: "stack_01", name: "HTML", icon: <FaHtml5 /> },
        { id: "stack_11", name: "CSS", icon: <FaCss3Alt /> },
        { id: "stack_21", name: "Javascript", icon: <SiJavascript /> },
        { id: "stack_31", name: "Bootstrap", icon: <SiBootstrap /> },
        { id: "stack_41", name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { id: "stack_51", name: "Typescript", icon: <SiTypescript /> },
        { id: "stack_61", name: "React.js", icon: <FaReact /> },
        { id: "stack_71", name: "Next.js", icon: <SiNextdotjs /> },
    ];

    return (
        <div className="absolute bottom-0 w-full h-20 -mt-10 flex justify-center items-center overflow-hidden">
            <InfiniteMovingCards
                items={techStack}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

export default StackSlide;