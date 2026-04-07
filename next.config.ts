import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["dobrasilgroup.com.br", "www.dobrasilgroup.com.br"],
    },
  },
  images: {
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
