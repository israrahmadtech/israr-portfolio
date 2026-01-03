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
                    speed="normal"
                />
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "I, owner of Shark Nutrition, had the pleasure of working with Israr Ahmad to build my brand's website, and the outcome was exceptional. His professionalism, work ethic, and attention to detail truly stood out. Israr was a great communicator, and his ability to understand my vision and needs made the entire process seamless. He delivered quality work on time, and I appreciate how he kept me in the loop throughout the project. If you're looking for a reliable and skilled web developer, I highly recommend Israr Ahmad. He's a true professional with a keen eye for design and functionality.",
        name: "Gohar Zaman",
        title: "Shark Nutrition Owner",
        image: "/GoharZamanImg.jpeg",
    },
    {
        quote:
            "Outstanding work. Building everything from scratch without following tutorials truly stands out. This is not just a demo project — it includes authentication, cart functionality, protected routes, a full admin panel, and a fully responsive UI. Overall, it’s one of the best demo web applications I’ve seen.",
        name: "Rafi Ullah",
        title: "Frontend Developer",
        image: "/testimonial02.jpg",
    },
    {
        quote:
            "This feels like a real production-level system, not a tutorial project. The architecture is clean, authentication is secure, real-time features are well implemented, and the admin panel is thoughtfully designed. Projects like this clearly reflect strong system-level thinking.",
        name: "Fahad Muneer",
        title: "Frontend Developer",
        image: "/testimonial03.jpg",
    },
    {
        quote:
            "Israr built a full-stack food ordering web application with secure authentication and real-time updates. The project clearly showcases strong expertise in React.js and Supabase. Overall, it’s an impressive and well-executed system.",
        name: "Talha Bin Yousaf",
        title: "Full Stack Dev",
        image: "/testimonial04.jpg",
    },
    // {
    //     quote:
    //         "Fast, focused, and very skilled. Israr’s attention to detail and clean code made a huge difference in our product quality.",
    //     name: "Saad Khan",
    //     title: "SaaS Founder",
    //     image: "/israr7.png",
    // },
];