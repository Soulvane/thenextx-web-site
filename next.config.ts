import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The yogylogy product moved to its own domain — keep old links working.
      {
        source: "/yogylogy",
        destination: "https://yogylogy.com",
        statusCode: 301,
      },
      {
        source: "/yogylogy/:path*",
        destination: "https://yogylogy.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
