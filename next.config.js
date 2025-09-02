/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
