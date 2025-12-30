"use client";
import React from "react";
import { cn } from "@/lib/utils";

function Paginations({
    currentPage,
    totalPages,
    onPageChange,
}) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-auto py-8">

            {/* Prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={cn(
                    "px-3 py-2 rounded-lg text-sm border transition",
                    currentPage === 1
                        ? "opacity-40 cursor-not-allowed border-violet-500/20 cursor-not-allowed"
                        : "border-violet-500/40 hover:bg-violet-500 hover:text-white cursor-pointer"
                )}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={cn(
                        "w-9 h-9 rounded-lg text-sm border transition",
                        page === currentPage
                            ? "bg-violet-500 text-white border-violet-500"
                            : "border-violet-500/40 hover:bg-violet-500/20 text-violet-500"
                    )}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={cn(
                    "px-3 py-2 rounded-lg text-sm border transition",
                    currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed border-violet-500/20"
                        : "border-violet-500/40 hover:bg-violet-500 hover:text-white"
                )}
            >
                Next
            </button>
        </div>
    );
}

export default Paginations;
