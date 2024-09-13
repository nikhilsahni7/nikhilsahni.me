/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "avatars.githubusercontent.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "api.microlink.io",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "pbs.twimg.com",
  //     },
  //   ],
  // },
  // Other Next.js configuration options
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable server-side image optimization for GitHub Pages
  },
};

export default nextConfig;
