import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/doce-de-leite",
        permanent: false,
      },
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
