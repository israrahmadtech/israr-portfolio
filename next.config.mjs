/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dnnidlwiaifqzedvfejh.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
