import HighlightCard from "../../components/HighlightCard/HighlightCard";
import { IconAward, IconDeviceLaptop, IconUsers } from '@tabler/icons-react';

const highlightsData = [
    {
        title: 'Hackathon Winner',
        description: 'Won 1st place at XYZ Hackathon 2025.',
        date: 'March 2025',
        icon: <IconAward />,
        image: '/images/portfolio//project1.png',
    },
    {
        title: 'Tech Conference',
        description: 'Attended JSConf 2025 and learned advanced React patterns.',
        date: 'Feb 2025',
        icon: <IconDeviceLaptop />,
        image: '/images/portfolio//project1.png',
    },
    {
        title: 'Open Source Contribution',
        description: 'Contributed to Tailwind CSS plugin development.',
        date: 'Jan 2025',
        icon: <IconUsers />,
        image: '/images/portfolio//project1.png',
    },
];

export default function Highlights() {
    return (
        <section id="highlights" className="w-full py-20">
            <div className="container mx-auto sm:px-4">
                {/* Heading */}
                <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
                    HIGHLIGHTS
                </h2>
                <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm max-w-md">
                    A curated collection of my top achievements, events, and experiences.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {highlightsData?.length > 0 && highlightsData.map((item, idx) => (
                        <HighlightCard key={idx+"-highlights"} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
