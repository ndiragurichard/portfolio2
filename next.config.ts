import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',          // Enables static HTML export
  basePath: '/portfolio2',    // REQUIRED: replace with your actual repository name
  images: {
    unoptimized: true,       // Static exports don't support the default Image Optimization
  },
};

export default nextConfig;
