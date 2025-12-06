import React, { ReactNode, FormEvent } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

// Tipagem das props para evitar erro na Vercel
interface SupabaseFormProps {
  children?: ReactNode;
  table: string;
  action: "insert" | "update" | "delete";
  payload?: any;
  where?: any;
  onSuccess?: (data: any) => void;
  onError?: (err: any) => void;
}

export default function SupabaseForm({
  children,
  table,
  action,
  payload,
  where,
  onSuccess,
  onError,
}: SupabaseFormProps) {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      let res;

      if (action === "insert") {
        res = await supabaseCompany.from(table).insert(payload);
      } else if (action === "update") {
        res = await supabaseCompany.from(table).update(payload).match(where);
      } else if (action === "delete") {
        res = await supabaseCompany.from(table).delete().match(where);
      }

      if (res.error) {
        onError?.(res.error);
        return;
      }

      onSuccess?.(res.data);
    } catch (err) {
      onError?.(err);
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
}

