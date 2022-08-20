/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["instagram-clones-api.herokuapp.com", "localhost"],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
