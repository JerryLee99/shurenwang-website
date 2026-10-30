import type { NextConfig } from "next";

/**
 * 静态导出，构建结果在 out/。
 * 可直接用于 GitHub Pages，也可交给 Vercel 等静态托管。
 * trailingSlash 让 /about/ 以目录页输出，便于 Pages 访问。
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
