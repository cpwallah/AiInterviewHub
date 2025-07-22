/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // disable type checking during build
  },
  eslint: {
    ignoreDuringBuilds: true, // disable ESLint during build
  },
};

export default nextConfig;
