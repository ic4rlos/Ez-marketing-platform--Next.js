import React from "react";
import { supabaseCompany } from "../lib/c-supabaseClient";

export default function SupabaseForm({
  children,
  table,
  action,
  payload,
  where,
  onSuccess,
  onError,
}) {
  async function handleSubmit(e) {
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
