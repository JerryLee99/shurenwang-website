import { ButtonLink } from "@/components/ButtonLink";
import { Main } from "@/components/Main";
import { notFoundContent } from "@/lib/content";

export default function NotFound() {
  return (
    <Main>
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-medium text-clay">404</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">{notFoundContent.title}</h1>
        <p className="mt-4 max-w-xl text-ink-soft">{notFoundContent.body}</p>
        <div className="mt-8">
          <ButtonLink href="/">{notFoundContent.cta}</ButtonLink>
        </div>
      </div>
    </Main>
  );
}
