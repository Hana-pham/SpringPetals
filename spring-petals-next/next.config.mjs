/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // add more if you use them:
      // { protocol: 'https', hostname: 'images.pexels.com' },
      // { protocol: 'https', hostname: 'maps.googleapis.com' },
    ],
  },
};

export default nextConfig;
