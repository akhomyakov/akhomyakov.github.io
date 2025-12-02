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

  // existing tuning
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,

  // better for static hosting like GitHub Pages
  trailingSlash: true,

  // tell Next to produce a static export when we run `next build`
  // (GitHub Pages can then serve the output as plain files)
  output: 'export',

  // static-export-friendly image config
  images: {
    // disable the on-demand Image Optimization API, which doesn't exist in static export
    // this tells Next to emit plain <img> tags
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
