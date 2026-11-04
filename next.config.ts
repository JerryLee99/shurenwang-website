import type { NextConfig } from "next";

/**
 * 静态导出，构建结果在 out/。
 * 可直接用于 GitHub Pages，也可交给 Vercel 等静态托管。
 * trailingSlash 让 /about/ 以目录页输出，便于 Pages 访问。
 *
 * BASE_PATH 只用于旧的 GitHub 项目页子路径，例如 /shurenwang-website。
 * 未设置时不加前缀。主站点 www.shurenwang.com 在根路径，构建时不要设置 BASE_PATH。
 * basePath 与 assetPrefix 使用同一个值。
 */
const basePath = (process.env.BASE_PATH ?? "").trim();

if (basePath && (basePath === "/" || !basePath.startsWith("/") || basePath.endsWith("/"))) {
  throw new Error(
    `BASE_PATH 需要是以 / 开头、且不以 / 结尾的路径，例如 /shurenwang-website（当前值：${JSON.stringify(basePath)}）。`,
  );
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
