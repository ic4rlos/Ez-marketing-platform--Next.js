export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token do reCAPTCHA ausente" });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verifyUrl, { method: "POST" });
  const data = await response.json();

  if (!data.success) {
    return res.status(400).json({ message: "Falha na verificação do reCAPTCHA" });
  }

  return res.status(200).json({ message: "Verificação concluída com sucesso" });
}
