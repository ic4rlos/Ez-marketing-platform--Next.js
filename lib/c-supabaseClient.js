import { createClient } from "@supabase/supabase-js";

// Variáveis específicas do banco COMPANY
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_ANON_KEY;

// Travar erro caso as variáveis não existam
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("[Company Supabase] Missing env variables.");
}

// Exporta o CLIENTE específico do banco COMPANY
export const supabaseCompany = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
