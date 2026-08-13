/** @type {import('next').NextConfig} */
const nextConfig = {
  // Painel integralmente estático: sem API routes, sem middleware de dados,
  // sem SSR dinâmico. Saída estática para publicação simples na Vercel.
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
