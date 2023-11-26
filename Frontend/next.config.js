/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "d27fp5ulgfd7w2.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
      },
      {
        protocol: "https",
        hostname: "images.hdqwalls.com",
      },
      {
        protocol: "https",
        hostname: "www.escapistmagazine.com",
      },
      {
        protocol: "https",
        hostname: "flxt.tmsimg.com",
      },
      {
        protocol: "https",
        hostname: "observer.com",
      },
    ],
  },
};

module.exports = nextConfig;
