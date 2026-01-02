import { supabaseServer } from "@/lib/supabaseServer";

export async function getProjects({ category } = {}) {
    let query = supabaseServer
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    // Optional filter
    if (category) {
        query = query.eq("category", category);
    }

    const { data, error } = await query;

    if (error) {
        console.error("Error fetching projects:", error);
        throw new Error(error.message);
    }

    return data;
}

export async function addProject(project) {
    try {
        const { data, error } = await supabaseServer
            .from("projects")
            .insert(project)
            .select()
            .single();

        if (error) {
            console.error("Error adding project:", error);
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export async function updateProject(id, updates) {
    const { data, error } = await supabaseServer
        .from("projects")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error("Error updating project:", error);
        throw new Error(error.message);
    }

    return data;
}

export async function deleteProject(id) {
    const numericId = Number(id);
    if (isNaN(numericId)) throw new Error("Invalid project ID");

    // 1️⃣ Get image URL using numericId
    const project = await getProjectById(numericId);

    // 2️⃣ Delete image from storage
    if (project?.image) {
        await deleteProjectImage(project.image);
    }

    // 3️⃣ Delete DB record using numericId
    const { error } = await supabaseServer
        .from("projects")
        .delete()
        .eq("id", numericId);

    if (error) {
        console.error("Supabase delete error:", error);
        throw new Error(error.message);
    }

    return true;
}

export async function getProjectById(id) {
    const { data, error } = await supabaseServer
        .from("projects")
        .select("image")
        .eq("id", id)  // here id is numericId from caller
        .single();

    if (error) {
        console.error("getProjectById error:", error);
        throw new Error(error.message);
    }

    return data;
}

export async function deleteProjectImage(imageUrl) {
    if (!imageUrl) return;

    try {
        const filePath = imageUrl.split("/storage/v1/object/public/")[1];
        await supabaseServer.storage
            .from("projects")
            .remove([filePath.replace("projects/", "")]);
    } catch (err) {
        console.error("Failed to delete image from storage:", err);
    }
}
