import React, { useEffect, useState } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

export default function SupabaseUserSession({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabaseCompany.auth.getSession();
      setUser(data.session?.user || null);
    }
    load();
  }, []);

  return (
    <div data-plasmic-user={user ? "logged" : "anonymous"}>
      {children}
    </div>
  );
}
