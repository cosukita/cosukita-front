import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: false,
  },
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
      mocha: { browser: "mocha/browser-entry.js" },
    },
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
