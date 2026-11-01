import { ButtonLink } from "@/components/ButtonLink";
import { Main } from "@/components/Main";
import { cooperationContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: cooperationContent.title,
  description: cooperationContent.description,
  path: "/cooperation/",
});

export default function CooperationPage() {
  return (
    <Main>
      <header className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-clay">{site.company}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{cooperationContent.title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-soft">{cooperationContent.lede}</p>
      </header>
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <ul className="grid gap-4 md:grid-cols-2">
          {cooperationContent.types.map((item) => (
            <li key={item.title}>
              <article className="h-full rounded-2xl border border-line bg-paper-2 p-6">
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact">{cooperationContent.cta}</ButtonLink>
        </div>
      </div>
    </Main>
  );
}
