import HighlightCard from "../../components/HighlightCard/HighlightCard";
import { getItems } from "@/services/dbService"; // yahan se data fetch ho raha

export default async function Highlights() {
    const highlightsData = await getItems({ table: "highlights" });

    return (
        <section id="highlights" className="w-full py-20">
            <div className="container mx-auto sm:px-4">
                <h2 className="text-center pb-5 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                    My{" "}
                    <span className="relative inline-block text-violet-500">
                        Highlights
                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-violet-500/40 rounded-full" />
                    </span>
                </h2>
                <p className="text-center max-w-2xl mx-auto text-violet-500 dark:text-violet-300">
                    A curated collection of my top achievements, events, and experiences. Here you will find highlights of my projects, hackathons, workshops, and other milestones that showcase my growth and skills in web development and beyond.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {highlightsData?.length > 0 ? (
                        highlightsData.map((item) => (
                            <HighlightCard
                                key={item.id}
                                highlight={item} // ⚡ pass the whole highlight object
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full">No highlights yet!</p>
                    )}
                </div>
            </div>
        </section>
    );
}
