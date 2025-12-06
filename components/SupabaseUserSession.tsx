import React, { useEffect, useState, ReactNode } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

interface SupabaseUserSessionProps {
  children?: ReactNode;
}

export default function SupabaseUserSession({
  children,
}: SupabaseUserSessionProps) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabaseCompany.auth.getSession();
      setUser(data?.session?.user ?? null);
    }
    load();
  }, []);

  return (
    <div data-plasmic-user={user ? "logged" : "anonymous"}>
      {children}
    </div>
  );
}
