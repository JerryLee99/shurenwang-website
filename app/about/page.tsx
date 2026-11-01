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
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-ink-soft">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <article className="max-w-2xl rounded-2xl border border-dashed border-line bg-paper/60 p-6 md:p-8">
          <h2 className="text-xl font-medium">{aboutContent.missingTitle}</h2>
          <p className="mt-3 text-ink-soft">{aboutContent.missingNote}</p>
          <PlaceholderTag />
        </article>
      </div>
    </Main>
  );
}
