import { supabase } from "../../../lib/supabaseServer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email obrigatório" });

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/new-password`,
  });

  if (error) return res.status(400).json({ error: error.message });

  return res.status(200).json({ success: true });
}
