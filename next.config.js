const nextConfig = {
  async rewrites() {
    const getApiDestination = (env) => {
      switch (env) {
        case 'development':
          return 'http://127.0.0.1:5001/api/:path*';
        case 'staging':
          return 'https://wxllspace-j72cp.ondigitalocean.app/api/:path*';
        case 'production':
          return 'https://eng.wxllspace.com/api/:path*';
        default:
          return '';
      }
    };
    return [
      {
        source: '/api/:path*',
        destination: getApiDestination(
          process.env.NEXT_PUBLIC_ENV || process.env.ENV
        ), // Proxy to Backend
      },
      {
        source: '/whats-new',
        destination:
          process.env.NEXT_PUBLIC_ENV === 'production'
            ? 'https://wxllspace.com/whats-new'
            : 'https://wxllspace-v3.webflow.io/whats-new',
      },
      {
        source: '/creatives',
        destination:
          process.env.NEXT_PUBLIC_ENV === 'production'
            ? 'https://wxllspace.com/creatives'
            : 'https://wxllspace-v3.webflow.io/creatives',
      },
      {
        source: '/',
        destination:
          process.env.NEXT_PUBLIC_ENV === 'production'
            ? 'https://wxllspace.com'
            : 'https://wxllspace-v3.webflow.io/',
      },
    ];
  },
  transpilePackages: [
    '@babel/preset-react',
    '@mui/system',
    '@mui/material',
    '@mui/icons-material',
  ],
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material//{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material//{{member}}',
    },
  },
  images: {
    domains: [
      'wxllspace-app.s3.us-east-2.amazonaws.com',
      'images.weserv.nl',
      'explore.wxllspace.com',
      'eng.wxllspace.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
