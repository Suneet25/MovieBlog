/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    experimental:{
        appDir:true
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1'
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com'
          },
        ],
      }
}

module.exports = nextConfig
