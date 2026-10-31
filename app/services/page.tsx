import { Main } from "@/components/Main";
import { PlaceholderTag } from "@/components/PlaceholderTag";
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
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <article className="max-w-2xl rounded-2xl border border-dashed border-line bg-paper-2 p-6">
          <p className="text-sm text-clay">待补充</p>
          <h2 className="mt-3 text-xl font-medium">服务说明</h2>
          <p className="mt-3 text-sm text-ink-soft">{servicesContent.note}</p>
          <PlaceholderTag />
        </article>
      </div>
    </Main>
  );
}
