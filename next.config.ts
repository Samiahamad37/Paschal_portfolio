import type { NextConfig } from "next";

// For GitHub Pages project sites (https://<user>.github.io/<repo>/), build with
// NEXT_PUBLIC_BASE_PATH=/<repo>. Leave it empty for Vercel, Netlify or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
};

export default nextConfig;
