/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_LOCAL_URL :   "https://33ea-105-230-176-92.in.ngrok.io/v1"
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '.cloudinary.com/',
  //       port: '',
  //     }]
  // }
}

module.exports = nextConfig
