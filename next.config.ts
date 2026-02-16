/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // Set to 50MB as requested
    },
  },
};

export default nextConfig;