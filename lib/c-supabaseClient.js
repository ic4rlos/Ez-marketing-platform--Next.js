// lib/c-supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente para o BANCO COMPANY
const COMPANY_URL = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_URL;
const COMPANY_ANON = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_ANON_KEY;

// Segurança contra erros silenciosos
if (!COMPANY_URL || !COMPANY_ANON) {
  throw new Error("[Company] Missing Supabase environment variables.");
}

// Exporta o client
export const supabaseCompany = createClient(COMPANY_URL, COMPANY_ANON);
