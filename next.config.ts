import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: false,
  },
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
    },
  },
};

export default nextConfig;
