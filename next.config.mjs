/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.kreezalid.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },

  env: {
    MONGO_URL: process.env.MONGO_URL,
    AccessTokenSecretKey: process.env.AccessTokenSecretKey,
    RefreshTokenSecretKey: process.env.RefreshTokenSecretKey,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
  },
};

export default nextConfig;
