// /* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   eslint: {
//     dirs: ['.'],
//   },
//   images: {
//     domains: ['images.unsplash.com'],
//   },
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
// });

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
