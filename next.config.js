const path = require('path');

module.exports = {
  baseUrl: 'src',
  pageExtensions: ['page.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/coming-soon',
      },
      {
        source: '/white-list',
        destination: '/white-list',
      },
      {
        source: '/register-playfab-user',
        destination: '/register-playfab-user',
      },
      {
        source: '/login-playfab',
        destination: '/login-playfab',
      },
    ];
  },
};
