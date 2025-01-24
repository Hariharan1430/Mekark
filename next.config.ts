const nextConfig: any = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
