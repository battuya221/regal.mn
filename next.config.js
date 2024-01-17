/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

(module.exports = {
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "i.ibb.co",
      "tuk-cdn.s3.amazonaws.com",
      "tailus.io",
    ],
    formats: ["image/avif", "image/webp"],
  },
  extends: "next",
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  pageExtensions:[ "jsx", "js", "tsx", "ts"]
})

