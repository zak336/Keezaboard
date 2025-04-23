import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // ...
    },
  },
}

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig

