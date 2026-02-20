/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages
  output: 'export',
  // If deploying to a sub-path on GitHub Pages, set basePath and assetPrefix at build time.
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['gsap']
  }
};

export default nextConfig;

