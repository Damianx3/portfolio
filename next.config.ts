import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: process.env.NEXT_DEV_ALLOWED_ORIGINS
    ?.split(",")
    .map((host) => host.trim())
    .filter(Boolean),
};

export default nextConfig;

