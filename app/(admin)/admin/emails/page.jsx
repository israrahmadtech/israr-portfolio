"use client";
import Paginations from "@/app/components/Paginations/Paginations";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

function AdminEmails() {
    const [currentPage, setCurrentPage] = useState(1);

    const [emails, setEmails] = useState([
        { id: 1, email: "client.one@email.com", time: "2 hours ago" },
        { id: 2, email: "designer@email.com", time: "Yesterday" },
        { id: 3, email: "startup@email.com", time: "2 days ago" },
        { id: 4, email: "test@email.com", time: "3 days ago" },
        { id: 5, email: "hello@email.com", time: "4 days ago" },
        { id: 6, email: "portfolio@email.com", time: "5 days ago" },
        { id: 7, email: "react@email.com", time: "6 days ago" },
        { id: 8, email: "nextjs@email.com", time: "1 week ago" },
        { id: 9, email: "admin@email.com", time: "1 week ago" },
        { id: 10, email: "contact@email.com", time: "2 weeks ago" },
        { id: 11, email: "spam@email.com", time: "2 weeks ago" },
    ]);

    const totalPages = Math.ceil(emails.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleEmails = emails.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handleDelete = (id) => {
        setEmails((prev) => prev.filter((item) => item.id !== id));
    };

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
            </div>

            {/* Emails Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleEmails.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm flex items-center justify-between"
                    >
                        <div>
                            <p className="text-md font-medium text-zinc-900 dark:text-white">
                                {item.email}
                            </p>
                            <p className="mt-1 text-sm text-violet-300">
                                {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
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
            {emails.length === 0 && (
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
