import { ContactForm } from "@/components/ContactForm";
import { Main } from "@/components/Main";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { contactContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: contactContent.title,
  description: contactContent.description,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <Main>
      <header className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-clay">{site.company}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{contactContent.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{contactContent.lede}</p>
      </header>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-20 sm:px-6 md:grid-cols-12">
        <section aria-labelledby="form-heading" className="md:col-span-7">
          <h2 id="form-heading" className="text-xl font-medium">
            {contactContent.formTitle}
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
        <aside className="h-fit rounded-2xl border border-line bg-paper-2 p-6 md:col-span-5">
          <h2 className="text-xl font-medium">{contactContent.asideTitle}</h2>
          <p className="mt-4">
            <a
              href={`mailto:${site.placeholderEmail}`}
              className="text-lg text-ink underline decoration-line underline-offset-4"
            >
              {site.placeholderEmail}
            </a>
          </p>
          <PlaceholderTag>{contactContent.asideNote}</PlaceholderTag>
        </aside>
      </div>
    </Main>
  );
}
