/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
  // Allow video files to be served from /public
  async headers() {
    return [
      {
        source: "/videos/(.*)",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
