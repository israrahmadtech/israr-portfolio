"use client"
import { useRealtimeData } from "@/app/CustomHooks/RealtimeData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Dashboard() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(`/api/projects`);
                const data = await res.json();

                if (data.success) {
                    setProjects(data.data);
                } else {
                    setError(data.message || "Failed to fetch projects");
                }
            } catch (err) {
                toast.error("Something went wrong")
            }
        }

        fetchProjects();
    }, []);

    const {
        data: contacts,
        fullResponse: contactsFullResponse,
    } = useRealtimeData({ tableName: "contacts", showToast: true });

    const {
        data: emails,
        fullResponse: emailsFullResponse,
    } = useRealtimeData({ tableName: "emails", showToast: true });

    const stats = [
        { id: 1, title: "Contacts", totalCount: contactsFullResponse?.totalContacts, desc: "Messages from contact form" },
        { id: 2, title: "Newsletter Subscribers", totalCount: emailsFullResponse?.totalEmails, desc: "Email Subscribers" },
        { id: 3, title: "Projects Completed", totalCount: projects?.length, desc: "Web & app projects I've built" },
        { id: 4, title: "Tech Stack", totalCount: 8, desc: "Technologies & tools I work with" },
    ]

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
                {stats?.map((stat) => (
                    <div
                        key={stat?.id}
                        className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm"
                    >
                        <h3 className="text-sm font-medium text-violet-500 dark:text-violet-300">
                            {stat?.title}
                        </h3>
                        <p className="mt-2 text-2xl font-bold text-violet-500">
                            {stat?.totalCount}
                        </p>
                        <p className="mt-1 text-xs text-violet-500 dark:text-violet-300">
                            {stat?.desc}
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
                    {contacts?.slice(0, 3).map((item) => (
                        <div
                            key={item?.id}
                            className="rounded-xl p-4 border border-violet-500/30 bg-white/40 dark:bg-black/20 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-center flex-wrap">
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {item?.name}
                                </h3>
                                <p className="mt-1 text-sm text-violet-600 dark:text-violet-300">
                                    {new Date(item?.created_at).toLocaleString()}
                                </p>
                            </div>
                            <p className="text-md text-violet-600 dark:text-violet-300">
                                {item?.email}
                            </p>
                            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">
                                {item?.message}
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
                    {emails?.slice(0, 3).map((item) => (
                        <div
                            key={item?.id}
                            className="rounded-xl p-4 border border-violet-500/30 bg-white/40 dark:bg-black/20 backdrop-blur-sm"
                        >
                            <p className="text-md font-medium text-violet-600 dark:text-violet-300">
                                {item?.email}
                            </p>
                            <p className="mt-1 text-sm text-zinc-900 dark:text-white">
                                {new Date(item?.created_at).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
