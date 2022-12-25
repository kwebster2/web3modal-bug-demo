const { i18n } = require('./next-i18next.config');

const shouldAnalyzeBundles = process.env.ANALYZE === 'true';
let nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  i18n,
};
if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer = require('@next/bundle-analyzer')();
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
