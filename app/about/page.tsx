import { Main } from "@/components/Main";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { aboutContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: aboutContent.title,
  description: aboutContent.description,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <Main>
      <header className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-clay">{site.company}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{aboutContent.title}</h1>
        <p className="mt-6 text-2xl font-medium text-ink">{site.name}</p>
        <p className="mt-4 max-w-3xl text-lg text-ink-soft">{site.positioning}</p>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-20 sm:px-6">
        <article className="rounded-2xl border border-line bg-paper-2 p-6 md:p-8">
          <h2 className="text-xl font-medium">{aboutContent.purposeTitle}</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">{site.purpose}</p>
        </article>

        <article className="rounded-2xl border border-dashed border-line bg-paper/60 p-6 md:p-8">
          <h2 className="text-xl font-medium">{aboutContent.missingTitle}</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{aboutContent.missingNote}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
            {aboutContent.missing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <PlaceholderTag />
        </article>
      </div>
    </Main>
  );
}
