// NÃO COLOQUE A CHAVE DIRETO NO CÓDIGO. USE process.env.
import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente específicas da conta COMPANY
const SUPABASE_COMPANY_URL = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_URL;
const SUPABASE_COMPANY_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_COMPANY_ANON_KEY;

if (!SUPABASE_COMPANY_URL || !SUPABASE_COMPANY_ANON_KEY) {
  throw new Error(
    "Missing Supabase COMPANY env variables. Configure NEXT_PUBLIC_SUPABASE_COMPANY_URL and NEXT_PUBLIC_SUPABASE_COMPANY_ANON_KEY."
  );
}

// Exporta o client da conta COMPANY
export const supabaseCompany = createClient(
  SUPABASE_COMPANY_URL,
  SUPABASE_COMPANY_ANON_KEY
);
