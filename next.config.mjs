/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable server-side image optimization for GitHub Pages
  },
};

export default nextConfig;
