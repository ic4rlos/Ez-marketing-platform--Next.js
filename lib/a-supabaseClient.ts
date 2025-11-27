import { createClient } from "@supabase/supabase-js";

const ACADEMY_URL = process.env.NEXT_PUBLIC_SUPABASE_AGENCY_URL;
const ACADEMY_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_AGENCY_ANON_KEY;

if (!AGENCY_URL || !AGENCY_ANON_KEY) {
  throw new Error("Missing Agency Supabase environment variables");
}

export const supabaseAgency = createClient(
  AGENCY_URL,
  AGENCY_ANON_KEY
);
