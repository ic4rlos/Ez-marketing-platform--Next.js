import { supabaseCompany } from "../../../lib/c-supabaseClient";


export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}


const { password } = req.body;


if (!password) {
return res.status(400).json({ error: "Password is required" });
}


try {
const { data, error } = await supabaseCompany.auth.updateUser({ password });


if (error) {
return res.status(400).json({ error: "Could not update password" });
}


return res.status(200).json({ success: true });
} catch (err) {
return res.status(500).json({ error: "Internal server error" });
}
}
