const widthLess = require("next-with-less");
/** @type {import('next').NextConfig} */
const nextConfig = widthLess({
  lessLoaderOptions: {},
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://47.238.155.188/backend/:path*",
      },
    ];
  },
  images: {
    domains: ["coinfire-img.oss-cn-hongkong.aliyuncs.com"],
    unoptimized: true,
  },
  pageExtensions: ["page.tsx"],
  compress: true,
  output: "export",
});

module.exports = nextConfig;
