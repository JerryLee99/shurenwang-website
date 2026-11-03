/**
 * 给 public/ 里直接写在 src 上的地址加上部署子路径。
 * next/link 会自己加 basePath，站内页面地址不要再经过这里。
 */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || "";
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (!base || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
