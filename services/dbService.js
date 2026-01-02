// services/dbService.js
import { supabaseServer } from "@/lib/supabaseServer";

export async function getItems({ table, category } = {}) {
    if (!table) throw new Error("Table name required");

    let query = supabaseServer.from(table).select("*").order("created_at", { ascending: false });

    if (category) query = query.eq("category", category);

    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
}

export async function addItem({ table, item }) {
    if (!table) throw new Error("Table name required");

    const { data, error } = await supabaseServer.from(table).insert(item).select().single();
    if (error) throw new Error(error.message);
    return data;
}

export async function updateItem({ table, id, updates }) {
    if (!table) throw new Error("Table name required");

    const { data, error } = await supabaseServer
        .from(table)
        .update(updates)
        .eq("id", id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

export async function deleteItem({ table, id, imageField = "image" }) {
    if (!table) throw new Error("Table name required");

    const numericId = Number(id);
    if (isNaN(numericId)) throw new Error("Invalid ID");

    // 1️⃣ Get image URL if exists
    const { data: item, error: fetchError } = await supabaseServer
        .from(table)
        .select(imageField)
        .eq("id", numericId)
        .single();

    if (fetchError) throw new Error(fetchError.message);

    // 2️⃣ Delete image from storage
    if (item?.[imageField]) {
        await deleteImage(item[imageField], table);
    }

    // 3️⃣ Delete DB record
    const { error } = await supabaseServer.from(table).delete().eq("id", numericId);
    if (error) throw new Error(error.message);

    return true;
}

export async function deleteImage(imageUrl, bucket) {
    if (!imageUrl) return;
    try {
        const filePath = imageUrl.split("/storage/v1/object/public/")[1];
        await supabaseServer.storage.from(bucket).remove([filePath.replace(`${bucket}/`, "")]);
    } catch (err) {
        console.error("Failed to delete image from storage:", err);
    }
}
