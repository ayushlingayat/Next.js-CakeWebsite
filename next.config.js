// module.exports = {
//   reactStrictMode: true,
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React Strict Mode, which helps with identifying potential problems in your React application
  reactStrictMode: true,

  // Specifies any custom environment variables for your Next.js application
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Example of passing environment variables
  },

  // Asset prefix can be used to serve assets from a different path
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn-url.com' : '',

  // Redirection and rewrites can be configured here
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },

  // Rewrites allow you to map an incoming request path to a different destination path
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://api.example.com/:path*`, // Proxy to external API
      },
    ];
  },

  // Specifies additional headers to be added to responses
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
