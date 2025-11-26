import { supabaseCompany } from "../../../lib/c-supabaseClient";


export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}


const { email } = req.body;


if (!email) {
return res.status(400).json({ error: "Email is required" });
}


try {
const { error } = await supabaseCompany.auth.resetPasswordForEmail(email, {
redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/change-password`,
});


if (error) {
return res.status(400).json({ error: "Password reset failed" });
}


return res.status(200).json({ success: true });
} catch (err) {
return res.status(500).json({ error: "Internal server error" });
}
}
