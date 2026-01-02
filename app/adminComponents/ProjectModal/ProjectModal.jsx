"use client";

import { supabaseClient } from "@/lib/supabaseClient";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ProjectModal({ open, onClose, project, onSave }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        tech: [],
        preview: "",
        github: "",
        video: "",
        category: "Featured",
    });

    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (project) setForm({ ...project });
    }, [project]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleTechChange = (e) => {
        setForm((prev) => ({ ...prev, tech: e.target.value.split(",") }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveProject()
    };

    const method = project ? "PUT" : "POST";
    async function saveProject() {
        try {
            const res = await fetch("/api/projects", {
                method,
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            onSave();
            toast.success("Project saved successfully");
            onClose();
        } catch (error) {
            console.error(error.message);
            toast.error(error.message || "Failed to save Project");
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
            if (project?.image) {
                await deleteProjectImage(project.image);
            }

            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `projects/${fileName}`;

            // Upload to Supabase bucket
            const { error } = await supabaseClient.storage
                .from("projects")
                .upload(filePath, file, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (error) throw error;

            // Get public URL
            const { data } = supabaseClient.storage
                .from("projects")
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

    async function deleteProjectImage(imageUrl) {
        if (!imageUrl) return;

        try {
            const filePath = imageUrl.split("/storage/v1/object/public/")[1];
            await supabaseClient.storage
                .from("projects")
                .remove([filePath.replace("projects/", "")]);
        } catch (err) {
            console.error("Failed to delete image from storage:", err);
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh] border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4">
                    {project ? "Edit Project" : "Add Project"}
                </h2>

                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Project Title"
                        required
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Project Description"
                        rows={4}
                        required
                        className="w-full p-3 rounded-lg outline-none resize-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
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
                        name="tech"
                        value={form.tech.join(",")}
                        onChange={handleTechChange}
                        placeholder="Tech Stack (comma separated)"
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        name="preview"
                        value={form.preview}
                        onChange={handleChange}
                        placeholder="Live Preview URL"
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        name="github"
                        value={form.github}
                        onChange={handleChange}
                        placeholder="GitHub Repository URL"
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <input
                        name="video"
                        value={form.video}
                        onChange={handleChange}
                        placeholder="Video URL (optional)"
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    />

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                    >
                        <option value="Featured" className="text-zinc-900 dark:text-black">Featured</option>
                        <option value="Core" className="text-zinc-900 dark:text-black">Core</option>
                        <option value="Learning" className="text-zinc-900 dark:text-black">Learning</option>
                    </select>

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
                            {uploading ? "Uploading..." : project ? "Update Project" : "Add Project"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
