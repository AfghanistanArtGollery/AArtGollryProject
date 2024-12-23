/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Deprecated: Remove the domains property
    // domains: ['localhost', 'localhost:3000/'], // Don't use domains anymore.

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.kreezalid.com',
        pathname: '/kreezalid/**', // Adjust the pathname if needed based on your URL structure
      },
      {
        protocol: 'http', // If you want to allow non-secure HTTP sources (like localhost)
        hostname: 'localhost',
        pathname: '/**', // Allow all paths in localhost
      },
    ],
  },
};

export default nextConfig;
