/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  sourcemap: false,
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost", "*.localhost"],
    },
  },
};

export default withPWA(nextConfig);
