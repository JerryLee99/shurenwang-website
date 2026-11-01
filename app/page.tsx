import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Main } from "@/components/Main";
import { RelationSketch } from "@/components/RelationSketch";
import { homeContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "首页",
  documentTitle: `${site.name} — 官方网站`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <Main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-sm font-medium text-clay">{site.company}</p>
          <h1 className="mt-3 text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            {homeContent.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{homeContent.lede}</p>
          <p className="mt-4 text-sm text-ink-soft">{site.domainLabel}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products">{homeContent.primaryCta}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {homeContent.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <div className="md:col-span-5">
          <RelationSketch />
        </div>
      </section>

      <section aria-labelledby="purpose-heading" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 id="purpose-heading" className="text-2xl font-medium tracking-tight">
            {homeContent.purposeTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-soft">{homeContent.purpose}</p>
        </div>
      </section>

      <section aria-labelledby="sitemap-heading" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 id="sitemap-heading" className="text-2xl font-medium tracking-tight">
            {homeContent.mapTitle}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {homeContent.map.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl border border-line bg-paper-2 p-6 hover:border-clay"
                >
                  <span className="text-lg font-medium text-ink">{item.title}</span>
                  <span className="mt-3 text-sm text-ink-soft">{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="closing-heading" className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="closing-heading" className="text-2xl font-medium tracking-tight">
              {homeContent.closingTitle}
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">{homeContent.closingBody}</p>
          </div>
          <ButtonLink href="/contact">{homeContent.closingCta}</ButtonLink>
        </div>
      </section>
    </Main>
  );
}
