import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm font-medium text-ink">{site.company}</p>
          <p className="max-w-sm text-sm text-ink-soft">{site.positioning}</p>
        </div>
        <nav aria-label="页脚导航" className="flex flex-col gap-1 text-sm">
          {site.footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 w-fit items-center rounded-md text-ink underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-ink-soft">
          <p className="font-medium text-ink">电话</p>
          <PhoneLink className="px-0" />
          <p className="mt-4 font-medium text-ink">域名</p>
          <p className="mt-2">{site.domainLabel}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-ink-soft sm:px-6">
          © {new Date().getFullYear()} {site.company}
        </p>
      </div>
    </footer>
  );
}
