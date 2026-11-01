import { Main } from "@/components/Main";
import { productsContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: productsContent.title,
  description: productsContent.description,
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <Main>
      <header className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-clay">{site.company}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{productsContent.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{productsContent.lede}</p>
      </header>
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-20 sm:px-6">
        {productsContent.items.map((item) => (
          <li key={item.title}>
            <article className="max-w-2xl rounded-2xl border border-line bg-paper-2 p-6">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </Main>
  );
}
