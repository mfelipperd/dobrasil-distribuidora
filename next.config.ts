import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["dobrasilgroup.com.br", "www.dobrasilgroup.com.br"],
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [

      {
        source: "/qrcode",
        destination: "/doce-de-leite",
        permanent: true,
      },
      {
        source: "/scan",
        destination: "/doce-de-leite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
