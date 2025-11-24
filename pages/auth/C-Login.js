import { supabase } from "../../../lib/c-supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email e senha obrigatórios" });

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  return res.status(200).json({ success: true, session: data.session });
}
