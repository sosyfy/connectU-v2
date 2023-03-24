/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_LOCAL_URL :  "http://localhost:8000/v1"
  }
}

module.exports = nextConfig
