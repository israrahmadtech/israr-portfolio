"use client";
import Paginations from "@/app/components/Paginations/Paginations";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 6;

function AdminContacts() {
    const [currentPage, setCurrentPage] = useState(1);

    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Ali Khan",
            email: "alikhan@email.com",
            message: "I want a modern portfolio website for my startup.",
            time: "2 hours ago",
        },
        {
            id: 2,
            name: "Sarah Ahmed",
            email: "sarah@email.com",
            message: "Are you available for freelance React projects?",
            time: "Yesterday",
        },
        {
            id: 3,
            name: "Usman Raza",
            email: "usman@email.com",
            message: "Testing message. Please ignore.",
            time: "2 days ago",
        },
        {
            id: 4,
            name: "Ali Khan",
            email: "alikhan@email.com",
            message: "I want a modern portfolio website for my startup.",
            time: "2 hours ago",
        },
        {
            id: 5,
            name: "Sarah Ahmed",
            email: "sarah@email.com",
            message: "Are you available for freelance React projects?",
            time: "Yesterday",
        },
        {
            id: 6,
            name: "Usman Raza",
            email: "usman@email.com",
            message: "Testing message. Please ignore.",
            time: "2 days ago",
        },
        {
            id: 7,
            name: "Ali Khan",
            email: "alikhan@email.com",
            message: "I want a modern portfolio website for my startup.",
            time: "2 hours ago",
        },
        {
            id: 8,
            name: "Sarah Ahmed",
            email: "sarah@email.com",
            message: "Are you available for freelance React projects?",
            time: "Yesterday",
        },
        {
            id: 9,
            name: "Usman Raza",
            email: "usman@email.com",
            message: "Testing message. Please ignore.",
            time: "2 days ago",
        },
    ]);

    // Pagination logic
    const totalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleContacts = contacts.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    // delete contacts
    const handleDelete = (id) => {
        setContacts((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="flex flex-col gap-8 w-full h-full">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                    Contact Messages
                </h1>
                <p className="mt-2 text-violet-500 dark:text-violet-300">
                    Messages received from the portfolio contact form.
                </p>
            </div>

            {/* Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleContacts?.map((contact) => (
                    <div
                        key={contact.id}
                        className="rounded-2xl p-5 bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm flex flex-col justify-between"
                    >
                        {/* Top */}
                        <div>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                {contact.name}
                            </h3>

                            <p className="text-sm text-violet-500 mt-1">
                                {contact.email}
                            </p>

                            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                                {contact.message}
                            </p>
                        </div>

                        {/* Bottom */}
                        <div className="mt-6 flex items-center justify-between">
                            <p className="mt-1 text-sm text-violet-300">
                                {new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}
                            </p>

                            <button
                                onClick={() => handleDelete(contact.id)}
                                className={`inline-flex items-center gap-2 text-sm sm:text-md rounded-md border border-violet-500/40
                            px-2 sm:px-4 py-1 text-violet-600 dark:text-violet-300 hover:border-violet-500/80
                            bg-violet-500/10 transition`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <Paginations
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            {/* Empty State */}
            {contacts.length === 0 && (
                <div className="text-center text-violet-500 text-sm italic">
                    No contact messages available.
                </div>
            )}
        </div>
    );
}

export default AdminContacts;
