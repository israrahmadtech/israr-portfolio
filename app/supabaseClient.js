import { createClient } from "@supabase/supabase-js"

const supabaseProject = import.meta.env.VITE_SUPABASE_PROJECT
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseProject, supabaseKey)