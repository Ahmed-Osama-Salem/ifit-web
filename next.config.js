/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // i replace this with domin because domin id deprecated
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
