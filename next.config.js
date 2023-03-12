/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL:"http://localhost:8000/v1",
    NEXTAUTH_SECRET:"bA2xcjpf8y5aSUFsNB2qN5yymUB",
    NEXTAUTH_URL: "http://localhost:3000"
  }
}

module.exports = nextConfig
