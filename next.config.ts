import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Power-user optimizations
  typescript: {
    ignoreBuildErrors: false, // Ensure strict build checks
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
