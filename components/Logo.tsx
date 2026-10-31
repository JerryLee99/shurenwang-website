import Link from "next/link";
import { site } from "@/lib/site";

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#1c1917" />
      <circle cx="12.8" cy="16" r="6.2" fill="none" stroke="#f4f0e8" strokeWidth="1.6" />
      <circle cx="19.6" cy="16" r="6.2" fill="none" stroke="#e7b59a" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name}首页`}
      className="inline-flex shrink-0 items-center gap-2.5 rounded-md text-lg font-medium text-ink"
    >
      <Mark />
      <span>{site.name}</span>
    </Link>
  );
}
