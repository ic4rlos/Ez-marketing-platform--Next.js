import React, { createContext } from "react";
import { supabaseCompany } from "./c-supabaseClient";
import { supabaseAgency } from "./a-supabaseClient";

export const SupabaseContext = createContext(supabaseCompany);

export function SupabaseProvider({ children }: any) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  let client = supabaseCompany;

  if (path.startsWith("/a-")) {
    client = supabaseAgency;
  }

  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
}
