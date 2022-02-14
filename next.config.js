/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hostinger.com"] //this one is whitelist where you can fetch your image via url, Images component from next default only absolute path(public)
  }
}

module.exports = nextConfig
