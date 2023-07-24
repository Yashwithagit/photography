/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: "/photo",
};

module.exports = nextConfig;
