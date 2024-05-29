const createNextIntlPlugin = require('next-intl/plugin');
const { version } = require('./package.json');
const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const disable = process.env.NODE_ENV === 'production' ? false : true;
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  disable: disable,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    version,
  },
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withPWA(withBundleAnalyzer(withNextIntl(nextConfig)));
