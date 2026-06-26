import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  /* config options here */
  async redirects() {
    return [
      {
        source: '/blackstrap-molasses',
        destination: '/premium-industrial-molasses',
        permanent: true,
      },
      {
        source: '/blog/what-is-blackstrap-molasses-procurement-guide',
        destination: '/blog/what-is-sugarcane-molasses-procurement-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
