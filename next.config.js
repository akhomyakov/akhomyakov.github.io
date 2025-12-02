/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(
      (rule) => rule.test && rule.test.toString().includes('tsx|ts')
    );

    tsRules.forEach((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },

  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,

  // Good for static hosting
  trailingSlash: true,

  // Static export for GitHub Pages
  output: 'export',

  // Make next/image work with static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },

  // ONLY if you host under a sub-path like:
  //   https://your-username.github.io/your-repo
  // uncomment and set these:
  //
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
};

module.exports = nextConfig;
