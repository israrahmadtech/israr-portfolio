// app/highlights/HighlightCard.tsx

export default function HighlightCard({ title, description, date, icon, image }) {
    return (
        <div className="relative rounded-3xl p-6 border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent backdrop-blur-sm transition-transform duration-300">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-46 object-cover"
                />
            )}

            {/* Title & Description */}
            <div className="flex items-center justify-between gap-5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">{title}</h3>
                <div className="text-3xl text-violet-500">{icon}</div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-violet-300 mt-2">{description}</p>
            <p className="text-xs text-violet-400 mt-3">{date}</p>
        </div>
    );
}
