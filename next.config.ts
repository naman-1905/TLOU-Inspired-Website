import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // R3F/three must be transpiled for the App Router + React 19 combo.
  transpilePackages: ["three"],
  // We ship our own self-hosted fonts via next/font; no remote image hosts needed yet.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
