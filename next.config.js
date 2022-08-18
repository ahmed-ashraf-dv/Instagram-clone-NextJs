/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mdbcdn.b-cdn.net", "localhost"],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
