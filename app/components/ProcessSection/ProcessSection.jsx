import { FocusCards } from "@/components/ui/focus-cards";
import {
    IconChecklist,
    IconLayoutDashboard,
    IconApi,
    IconRocket,
} from "@tabler/icons-react";

export function ProcessSection() {
    const cards = [
        {
            title: "Understand Requirements",
            description:
                "I start by understanding project goals, user needs, and business requirements to ensure the right direction from day one.",
            icon: <IconChecklist className="h-7 w-7 text-violet-400" />,
        },
        {
            title: "Design & Plan UI",
            description:
                "I plan layouts, components, and user flow with a focus on clean UI, usability, and scalability.",
            icon: <IconLayoutDashboard className="h-7 w-7 text-violet-400" />,
        },
        {
            title: "Build & Integrate APIs",
            description:
                "I develop responsive interfaces and integrate APIs using modern tools like React, Next.js, and Supabase.",
            icon: <IconApi className="h-7 w-7 text-violet-400" />,
        },
        {
            title: "Test, Optimize & Deploy",
            description:
                "I test across devices, optimize performance, and deploy production-ready applications with confidence.",
            icon: <IconRocket className="h-7 w-7 text-violet-400" />,
        },
    ];

    return <>
        <section id='features' className='py-[5vw] lg:py-[2.5vw] w-full'>
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>WORK PROCESS</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                A clear and structured approach I follow to turn ideas into reliable, scalable, and high-quality web applications.
            </p>
            <div className="mt-5">
                <FocusCards cards={cards} />
            </div>
        </section>
    </>
}