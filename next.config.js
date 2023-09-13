/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudflare-provider.js",
  },
};

module.exports = nextConfig;
