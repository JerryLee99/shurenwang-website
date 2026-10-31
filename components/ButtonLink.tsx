import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:bg-ink-raised"
      : "inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper-2 px-5 text-sm text-ink hover:border-clay";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
