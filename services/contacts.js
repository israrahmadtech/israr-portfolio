import { supabaseServer } from "@/lib/supabaseServer";

export async function getContacts(page = 1) {
    const from = (page - 1) * 9;
    const to = from + 8;

    const { data, count, error } = await supabaseServer
        .from("contacts")
        .select("*", { count: "exact" })
        .range(from, to)
        .order("created_at", { ascending: false });
        
    if (error) {
        console.error("Error fetching contacts:", error);
        throw error;
    }

    return { data, count };
}


export async function addContact(contact) {
    try {
        const { data, error } = await supabaseServer
            .from("contacts")
            .insert([contact])
            .select()
            .single();

        if (error) {
            console.error("Error adding contact:", error);
            throw error;
        }

        return data;
    } catch (err) {
        throw err;
    }
}