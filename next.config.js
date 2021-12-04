const { redirect } = require('next/dist/server/api-utils');

module.exports = {
  pageExtensions: ['page.tsx'],

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};
