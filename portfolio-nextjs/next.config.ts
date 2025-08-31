import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Base path for GitHub Pages (will be your repo name)
  basePath: '',
  
  // Asset prefix for GitHub Pages
  assetPrefix: '',
  
  // Ensure trailing slashes are handled properly
  trailingSlash: true,
  
  // Disable server-side features that don't work with static export
  distDir: 'out'
};

export default nextConfig;
