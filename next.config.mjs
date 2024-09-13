/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
    unoptimized: true, // Disable server-side image optimization for GitHub Pages
  },
  // Other Next.js configuration options
  trailingSlash: true,
};

export default nextConfig;
