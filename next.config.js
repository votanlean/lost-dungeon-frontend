const path = require('path');

module.exports = {
  pageExtensions: ['page.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};
