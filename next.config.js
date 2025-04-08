/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Exporta como HTML/CSS estático (no requiere servidor Node.js)
  reactStrictMode: true,     // Activa el modo estricto de React para ayudarte a detectar errores
  images: {
    unoptimized: true,       // Desactiva la optimización de imágenes para exportación estática
  },
};

module.exports = nextConfig;

