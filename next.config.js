/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL:"http://localhost:8000/v1"
  }
}

module.exports = nextConfig
