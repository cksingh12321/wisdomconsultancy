/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Set NEXT_PUBLIC_API_URL in Vercel to your HuggingFace Space URL
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || ''
  }
};

module.exports = nextConfig;
