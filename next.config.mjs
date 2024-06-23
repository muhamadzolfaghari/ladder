/** @type {import('next').NextConfig} */





const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost", "*.localhost"],
    },
  },
};

export default nextConfig;
