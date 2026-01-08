/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*/', // Proxy to Django backend
      },
    ];
  },
  // Skip automatic trailing slash redirects to support Django's URL conventions
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
