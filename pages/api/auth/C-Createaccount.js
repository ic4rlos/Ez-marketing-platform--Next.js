import { supabaseCompany } from "../../../lib/c-supabaseClient";


export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}


const { email, password, confirmPassword } = req.body;


if (!email || !password || !confirmPassword) {
return res.status(400).json({ error: "Missing required fields" });
}


if (password !== confirmPassword) {
return res.status(400).json({ error: "Passwords do not match" });
}


try {
const { data, error } = await supabaseCompany.auth.signUp(
{ email, password },
{
emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/verify-email`,
}
);


if (error) {
return res.status(400).json({ error: "Signup failed" });
}


return res.status(200).json({ success: true, user: data.user });
} catch (err) {
return res.status(500).json({ error: "Internal server error" });
}
}
