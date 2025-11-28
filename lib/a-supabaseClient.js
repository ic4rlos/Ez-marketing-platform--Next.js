import { createClient } from "@supabase/supabase-js";

const AGENCY_URL = process.env.NEXT_PUBLIC_SUPABASE_AGENCY_URL;
const AGENCY_ANON = process.env.NEXT_PUBLIC_SUPABASE_AGENCY_ANON_KEY;

if (!AGENCY_URL || !AGENCY_ANON) {
  throw new Error("[Agency] Missing Supabase environment variables.");
}

export const supabaseAgency = createClient(AGENCY_URL, AGENCY_ANON);


