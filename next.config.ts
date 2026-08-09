import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://widget.trustpilot.com https://static.cloudflareinsights.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: seeklogo.com upload.wikimedia.org www.svgrepo.com avatars.githubusercontent.com placehold.co images.pexels.com https://widget.trustpilot.com;
    font-src 'self' data:;
    connect-src 'self' https://widget.trustpilot.com https://static.cloudflareinsights.com https://*.aiplatform.googleapis.com;
    media-src 'self' data:;
    frame-src 'self' https://widget.trustpilot.com;
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    // In production, keep 'unsafe-inline' so Next.js hydration scripts & styles render properly.
    // 'unsafe-eval' is only removed in production for security.
    value: process.env.NODE_ENV === 'production' 
      ? cspHeader.replace("'unsafe-eval'", "") 
      : cspHeader
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.majestikmagik.dev' }],
        destination: 'https://majestikmagik.dev/:path*',
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'seeklogo.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.svgrepo.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.pexels.com' },    
      { protocol: 'https', hostname: 'widget.trustpilot.com' },
      { protocol: 'https', hostname: 'static.cloudflareinsights.com' },
      { protocol: 'https', hostname: 'majestikmagik.dev'}
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/videos/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;