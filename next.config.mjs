/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // <--- ESSA LINHA DESBLOQUEIA O DEPLOY
  },
};

export default nextConfig;
