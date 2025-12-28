import { InfiniteMovingCards } from "@/app/components/InfinitMovingCards/infinite-moving-cards";

export function TestimonialSection() {
    return (
        <section id="testimonials" className="py-[5vw]">
            <h2 className='text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6'>TESTIMONIALS</h2>
            <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                Hear directly from clients and collaborators about working with me. These testimonials reflect my focus on clean UI, strong frontend architecture, clear communication, and delivering reliable, real-world solutions.
            </p>
            <div className="mt-5 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slower"
                />
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "Israr delivered exactly what we needed. Clean UI, smooth interactions, and pixel-perfect implementation. Communication was clear and deadlines were met without compromise.",
        name: "Ahmed Raza",
        title: "Startup Founder",
        image: "/israr7.png",
    },
    {
        quote:
            "One of the most reliable frontend developers I’ve worked with. Strong React skills, great design sense, and very professional throughout the project.",
        name: "Usman Khalid",
        title: "Product Manager",
        image: "/israr7.png",
    },
    {
        quote:
            "Israr understands UI/UX deeply. He transformed our rough ideas into a polished, modern interface that users genuinely love.",
        name: "Hamza Noor",
        title: "UI/UX Designer",
        image: "/israr7.png",
    },
    {
        quote:
            "Excellent experience working with Israr. He handled the frontend independently and delivered a scalable, maintainable React codebase.",
        name: "Bilal Ahmed",
        title: "Tech Lead",
        image: "/israr7.png",
    },
    {
        quote:
            "Fast, focused, and very skilled. Israr’s attention to detail and clean code made a huge difference in our product quality.",
        name: "Saad Khan",
        title: "SaaS Founder",
        image: "/israr7.png",
    },
];