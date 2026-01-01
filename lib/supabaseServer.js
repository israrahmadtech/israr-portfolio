import { createClient } from "@supabase/supabase-js";

const projectUrl = process.env.SUPABASE_PROJECT_URL
const anonKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseServer = createClient(projectUrl, anonKey)


/*
🔑 Supabase ke 2 keys hotay hain

Supabase dashboard → Settings → API
Anon Public Key
Limited power
Browser me safe
User panel ke liye

Service Role Key
Full power (delete, update anything)
Browser me bilkul unsafe
Sirf server ke liye



Prompt 1:
Bhai me apni portfolio next js me bna rha hoo, tho supabase ko kha aur kese handle kroo?
Direct components me call kroo ya koyii aur thareeka?

Prompt 2:
Bhai aise na kro, mujhe proper smjhaya kro k yaha ye folder bnao aur ye kro aur wo kro.
Thorha sa easy kro

Prompt 3:
sab se pehlii bath ye k me simple Javascript use kr rha hoo na k typescript.
Dusra ye data User panel pe b render b hoga aur forms se supabase me jayega b aur Admin pe b same(update, delete, add).
Kun k me apne portfolio ko aise bnana chah rha hoo k me User panel pe hr cheez update kr skhoo, sara content
*/