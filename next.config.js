/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_LOCAL_URL :   "https://careful-shrug-goat.cyclic.app/v1"
  }
}

module.exports = nextConfig
