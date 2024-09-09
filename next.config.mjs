/** @type {import('next').NextConfig} */



const nextConfig = {
  output: 'export', // pour générer un site statique
  images: {
    unoptimized: true, // désactive l'optimisation des images
  },
 
};

export default nextConfig;
