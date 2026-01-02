import Image from "next/image";

export default function HighlightCard({ highlight, onEdit, onDelete }) {
    const { title, description, date, image } = highlight;

    return (
        <div className="relative rounded-3xl p-6 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm">
            {/* Image */}
            {image && (
                <div className="relative w-full h-46 rounded-md overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            )}

            {/* Title & Icon */}
            <div className="flex items-center justify-between gap-5 mt-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-violet-300 mt-2">{description}</p>

            {/* Date */}
            {date && <p className="text-xs text-violet-400 mt-3">{date}</p>}

            {/* Optional Edit/Delete buttons for admin */}
            {onEdit && onDelete && (
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onEdit}
                        className="px-3 py-1 text-sm text-yellow-600 dark:text-yellow-300 border border-yellow-500/40 rounded-md bg-yellow-500/10 hover:border-yellow-500/80 transition"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-3 py-1 text-sm text-red-600 dark:text-red-500 border border-red-500/40 rounded-md bg-red-500/10 hover:border-red-500/80 transition"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
