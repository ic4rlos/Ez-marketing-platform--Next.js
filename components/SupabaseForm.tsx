import React, { ReactNode, FormEvent } from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

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
      let res:
        | { data: any; error: any }
        | { data?: null; error?: null }
        | undefined = undefined;

      if (action === "insert") {
        res = await supabaseCompany.from(table).insert(payload);
      } else if (action === "update") {
        res = await supabaseCompany.from(table)
          .update(payload)
          .match(where ?? {});
      } else if (action === "delete") {
        res = await supabaseCompany.from(table)
          .delete()
          .match(where ?? {});
      }

      // 🚨 Garantia absoluta para o TypeScript
      if (!res) {
        throw new Error("Supabase returned no response.");
      }

      if (res.error) {
        onError?.(res.error);
        return;
      }

      onSuccess?.(res.data);
    } catch (err: any) {
      onError?.(err);
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
}


