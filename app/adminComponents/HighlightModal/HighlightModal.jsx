"use client";

import { supabaseClient } from "@/lib/supabaseClient";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function HighlightModal({ open, onClose, highlight, onSave }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        icon: "",
        image: "",
    });

    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (highlight) setForm({ ...highlight });
    }, [highlight]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveHighlight();
    };

    const method = highlight ? "PUT" : "POST";
    async function saveHighlight() {
        try {
            const res = await fetch("/api/highlights", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Something went wrong");

            onSave();
            toast.success("Highlight saved successfully");
            onClose();
        } catch (error) {
            console.error(error.message);
            toast.error(error.message || "Failed to save highlight");
        }
    }

    if (!open) return null;

    // Image Upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setUploading(true);

            // ✅ If edit mode and old image exists, delete it first
            if (highlight?.image) {
                await deleteHighlightImage(highlight.image);
            }

            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `highlights/${fileName}`;

            // Upload to Supabase bucket
            const { error } = await supabaseClient.storage
                .from("highlights")
                .upload(filePath, file, { cacheControl: "3600", upsert: false });

            if (error) throw error;

            // Get public URL
            const { data } = supabaseClient.storage
                .from("highlights")
                .getPublicUrl(filePath);

            // Save URL in form state
            setForm((prev) => ({
                ...prev,
                image: data.publicUrl,
            }));

            toast.success("Image uploaded successfully");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUploading(false);
        }
    };

    async function deleteHighlightImage(imageUrl) {
        if (!imageUrl) return;

        try {
            const filePath = imageUrl.split("/storage/v1/object/public/")[1];
            await supabaseClient.storage
                .from("highlights")
                .remove([filePath.replace("highlights/", "")]);
        } catch (err) {
            console.error("Failed to delete image from storage:", err);
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh] border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4">
                    {highlight ? "Edit Highlight" : "Add Highlight"}
                </h2>

                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Highlight Title"
                        required
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Highlight Description"
                        rows={4}
                        required
                        className="w-full p-3 rounded-lg outline-none resize-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        placeholder="Date (optional)"
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-md rounded-lg border border-violet-500/30 text-violet-500 hover:border-violet-500/70 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={uploading}
                            className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-md rounded-lg bg-violet-500 text-white font-semibold transition-transform duration-300"
                        >
                            {uploading ? "Uploading..." : highlight ? "Update Highlight" : "Add Highlight"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
