import Link from "next/link";
import { publicPath } from "@/lib/public-path";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name}首页`}
      className="inline-flex shrink-0 items-center gap-2.5 rounded-md text-lg font-medium text-ink"
    >
      <img
        src={publicPath("/brand/lehuo-badge.svg")}
        alt={site.name}
        width={670}
        height={670}
        decoding="async"
        className="h-11 w-11 shrink-0"
      />
      <span>{site.name}</span>
    </Link>
  );
}
