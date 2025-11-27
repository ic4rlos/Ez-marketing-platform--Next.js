import { createClient } from "@supabase/supabase-js";

const ACADEMY_URL = process.env.NEXT_PUBLIC_SUPABASE_ACADEMY_URL;
const ACADEMY_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ACADEMY_ANON_KEY;

if (!ACADEMY_URL || !ACADEMY_ANON_KEY) {
  throw new Error("Missing Academy Supabase environment variables");
}

export const supabaseAcademy = createClient(
  ACADEMY_URL,
  ACADEMY_ANON_KEY
);
