"use client";
import HighlightCard from "@/app/adminComponents/HighlightCard/HighlightModal";
import HighlightModal from "@/app/adminComponents/HighlightModal/HighlightModal";
import React, { useState, useEffect } from "react";

export default function AdminHighlights() {
    const [highlights, setHighlights] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editHighlight, setEditHighlight] = useState(null);

    const handleAdd = () => {
        setEditHighlight(null);
        setModalOpen(true);
    };

    const handleEdit = (highlight) => {
        setEditHighlight(highlight);
        setModalOpen(true);
    };

    useEffect(() => {
        fetchHighlights();
    }, []);

    async function fetchHighlights() {
        try {
            const res = await fetch("/api/highlights");

            if (!res.ok) throw new Error("Failed to fetch highlights");

            const { data } = await res.json();
            setHighlights(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this highlight?")) return;

        try {
            const res = await fetch(`/api/highlights?id=${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete");

            fetchHighlights();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Admin Highlights</h1>
            <div className="mb-6 flex">
                <button
                    onClick={handleAdd}
                    className="w-fit ms-auto px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-md rounded-lg bg-violet-500 text-white font-semibold transition-transform duration-300"
                >
                    Add Highlight
                </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight) => (
                    <HighlightCard
                        key={highlight.id}
                        highlight={highlight}
                        onEdit={() => handleEdit(highlight)}
                        onDelete={() => handleDelete(highlight.id)}
                    />
                ))}
            </div>
            {highlights?.length < 1 && <p className="text-center">No Highlights Yet!</p>}

            {/* Modal */}
            {modalOpen && (
                <HighlightModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    highlight={editHighlight}
                    onSave={fetchHighlights}
                />
            )}
        </div>
    );
}
