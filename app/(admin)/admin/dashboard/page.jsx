
export default function Dashboard() {
    return (
        <div className="flex flex-col gap-8 w-full h-full py-5">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                    Portfolio Control Panel
                </h1>
                <p className="mt-2 text-violet-500 dark:text-violet-300">
                    A custom admin dashboard built to manage my personal portfolio dynamically using Supabase.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                    { title: "Contact Messages", value: "12+", desc: "Messages from contact form" },
                    { title: "Newsletter Subscribers", value: "80+", desc: "Email subscribers" },
                    { title: "Portfolio Sections", value: "10+", desc: "Editable content blocks" },
                    { title: "CMS Ready", value: "Supabase", desc: "Backend integration" },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm"
                    >
                        <h3 className="text-sm font-medium text-violet-500 dark:text-violet-300">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-2xl font-bold text-violet-500">
                            {item.value}
                        </p>
                        <p className="mt-1 text-xs text-violet-500 dark:text-violet-300">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Recent Contacts */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Recent Contact Messages
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            name: "Ali Khan",
                            email: "alikhan@email.com",
                            message: "I’d like to discuss a portfolio website project.",
                        },
                        {
                            name: "Sarah Ahmed",
                            email: "sarah@email.com",
                            message: "Loved your work! Are you available for freelance?",
                        },
                        {
                            name: "Usman Raza",
                            email: "usman@email.com",
                            message: "Need a React developer for a startup idea.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl p-4 border border-violet-500/30 bg-white/40 dark:bg-black/20 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-center flex-wrap">
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {item.name}
                                </h3>
                                <p className="mt-1 text-sm text-violet-300">
                                    {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
                                </p>
                            </div>
                            <p className="text-md text-violet-300">
                                {item.email}
                            </p>
                            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">
                                {item.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Newsletter Emails */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Recent Newsletter Subscribers
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { email: "client.one@email.com", time: "2 hours ago" },
                        { email: "designer@email.com", time: "Yesterday" },
                        { email: "startup@email.com", time: "2 days ago" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl p-4 border border-violet-500/30 bg-white/40 dark:bg-black/20 backdrop-blur-sm"
                        >
                            <p className="text-sm font-medium text-zinc-900 dark:text-white">
                                {item.email}
                            </p>
                            <p className="mt-1 text-sm text-violet-300">
                                {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
