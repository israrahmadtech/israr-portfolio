import HighlightCard from "../../components/HighlightCard/HighlightCard";
import { getItems } from "@/services/dbService"; // yahan se data fetch ho raha

export default async function Highlights() {
    const highlightsData = await getItems({ table: "highlights" });

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
