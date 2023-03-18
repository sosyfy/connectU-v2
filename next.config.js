/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_LOCAL_URL :   "https://62d9-154-152-170-92.in.ngrok.io/v1"
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
