import React, { useEffect, useState, ReactNode, createContext } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

export const UserContext = createContext<any>(null);

interface Props {
  children?: ReactNode;
}

export default function CorporativeUserSession({ children }: Props) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 1) Carrega sessão atual
    supabaseCompany.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
    });

    // 2) Escuta mudanças no login/logout
    const { data: listener } = supabaseCompany.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div data-plasmic-user={user ? "logged" : "anonymous"}>
        {children}
      </div>
    </UserContext.Provider>
  );
}

