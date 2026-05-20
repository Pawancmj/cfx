import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Disable X-Powered-By header (minor security + perf)
  poweredByHeader: false,

  // ✅ Enable gzip compression for all responses
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // ✅ Modern image formats for smaller payloads
    formats: ["image/avif", "image/webp"],
    // ✅ Reduce unnecessary image resizing requests
    minimumCacheTTL: 86400,
  },

  // ✅ Experimental: inline critical CSS to eliminate render-blocking CSS chain
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

