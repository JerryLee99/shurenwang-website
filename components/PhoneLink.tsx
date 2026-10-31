import { site } from "@/lib/site";

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-2 text-sm text-ink underline-offset-4 hover:underline ${className}`}
    >
      <span className="sr-only">电话 </span>
      {site.phone}
    </a>
  );
}
