"use client";
import Paginations from "@/app/components/Paginations/Paginations";
import { useRealtimeData } from "@/app/CustomHooks/RealtimeData";

function AdminEmails() {
    const {
        data: emails,
        fullResponse,
        currentPage,
        setCurrentPage,
    } = useRealtimeData({ tableName: "emails", showToast: true });

    const totalPages = Math.ceil(fullResponse?.totalEmails / 18);

    return (
        <div className="flex flex-col gap-8 w-full h-full">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                    Newsletter Subscribers
                </h1>
                <p className="mt-2 text-violet-500 dark:text-violet-300">
                    Emails collected from the newsletter subscription form.
                </p>
                <p className="mt-2 text-violet-500 dark:text-violet-300">
                    Total Emails: {fullResponse?.totalEmails}
                </p>
            </div>

            {/* Emails Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {emails?.map((email) => (
                    <div
                        key={email?.id}
                        className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm flex items-center justify-between"
                    >
                        <div>
                            <p className="text-md font-medium text-zinc-900 dark:text-white">
                                {email?.email}
                            </p>
                            <p className="mt-1 text-sm text-violet-300">
                                {new Date(email?.created_at).toLocaleString()}
                            </p>
                        </div>

                        <button
                            onClick={() => handleDelete(contact.id)}
                            className={`inline-flex items-center gap-2 text-sm sm:text-md rounded-md border border-violet-500/40
                            px-2 sm:px-4 py-1 text-violet-600 dark:text-violet-300 hover:border-violet-500/80
                            bg-violet-500/10 transition`}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {emails?.length === 0 && (
                <div className="text-center text-violet-500 text-md italic">
                    No email subscribers found.
                </div>
            )}

            {/* Pagination */}
            <Paginations
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default AdminEmails;
