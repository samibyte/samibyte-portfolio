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
  
  // Security headers and standard optimizations
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
