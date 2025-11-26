import { createClient } from "@supabase/supabase-js";


// Mantido: NEXT_PUBLIC_ porque o front (Plasmic + browser) usa o client
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


// Evita crash silencioso se variável faltar
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
throw new Error("Missing Supabase environment variables");
}


// Mantido conforme solicitado
export const supabaseCompany = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
