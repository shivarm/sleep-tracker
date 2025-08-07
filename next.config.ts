import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,

  /* Next.js Image component requires you to configure external image domains in next.config.js for security reasons. 
    Since you're using Clerk's image URLs, you need to add img.clerk.com to your allowed domains. 
  */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
