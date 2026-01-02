"use client";

import ProjectCard from "@/app/adminComponents/ProjectCard/ProjectCard";
import ProjectModal from "@/app/adminComponents/ProjectModal/ProjectModal";
import React, { useState, useEffect } from "react";

export default function AdminProjects() {
    const [projects, setProjects] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editProject, setEditProject] = useState(null);

    const handleAdd = () => {
        setEditProject(null);
        setModalOpen(true);
    };

    const handleEdit = (project) => {
        setEditProject(project);
        setModalOpen(true);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        try {
            const res = await fetch("/api/projects");

            if (!res.ok) {
                throw new Error("Failed to fetch projects");
            }

            const { data } = await res.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        try {
            const res = await fetch(`/api/projects?id=${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete");

            fetchProjects();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Admin Projects</h1>
            <div className="mb-6 flex">
                <button
                    onClick={handleAdd}
                    className="w-fit ms-auto px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-md rounded-lg bg-violet-500 text-white font-semibold transition-transform duration-300"
                >
                    Add Project
                </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onEdit={() => handleEdit(project)}
                        onDelete={() => handleDelete(project.id)}
                    />
                ))}
            </div>
            {projects?.length < 1 && <p className="text-center">No Project Yet!</p>}

            {/* Modal */}
            {modalOpen && (
                <ProjectModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    project={editProject}
                    onSave={fetchProjects}
                />
            )}
        </div>
    );
}
