const { supabaseServer } = require("@/lib/supabaseServer")

export const getEmails = async (page = 1) => {
    const from = (page - 1) * 18
    const to = from + 17
    const {data, count, error} = await supabaseServer
        .from('emails')
        .select("*", { count: "exact" })
        .range(from, to)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching emails", error);
        throw error
    }

    return {data, count}
}

export const addEmail = async (email) => {
    try {
        const { data, error } = await supabaseServer
            .from("emails")
            .insert([{ email }])
            .select()
            .single()

        if (error?.code === "23505") {
            throw new Error("Email already subscribed")
        }
        if (error) {
            console.error("Supabase insert error:", error)
            throw error
        }

        return data
    } catch (err) {
        throw err
    }
}