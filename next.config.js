/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['webshop-nextjs.s3.eu-north-1.amazonaws.com'],
  },
 
}

module.exports = nextConfig
