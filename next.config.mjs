/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vbj9erj7k96w1n9u.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
