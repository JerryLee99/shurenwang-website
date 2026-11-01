import { Main } from "@/components/Main";
import { servicesContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: servicesContent.title,
  description: servicesContent.description,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <Main>
      <header className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-clay">{site.company}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{servicesContent.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{servicesContent.lede}</p>
      </header>
      <ol className="mx-auto grid w-full max-w-6xl list-none gap-3 px-4 pb-20 sm:grid-cols-2 sm:px-6">
        {servicesContent.items.map((item, index) => (
          <li key={item} className="flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-paper-2 px-5 py-4">
            <span className="w-8 shrink-0 font-mono text-sm text-clay" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ol>
    </Main>
  );
}
