/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // i replace this with domin because domin id deprecated
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/ar',
      },
    ];
  },
};

module.exports = nextConfig;
