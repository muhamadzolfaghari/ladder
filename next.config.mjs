/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  sourcemap: false
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
