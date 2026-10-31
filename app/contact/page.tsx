import { Main } from "@/components/Main";
import { PhoneLink } from "@/components/PhoneLink";
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
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <article className="max-w-md rounded-2xl border border-line bg-paper-2 p-6">
          <h2 className="text-2xl font-medium">{site.contactName}</h2>
          <p className="mt-4 text-sm font-medium text-ink">电话</p>
          <PhoneLink className="px-0 text-lg" />
          <figure className="mt-6">
            <img
              src={site.wechatQr}
              alt={`${site.contactName}的微信二维码`}
              width={888}
              height={1131}
              className="h-auto w-full max-w-xs bg-white"
            />
            <figcaption className="mt-3 text-sm text-ink-soft">{site.wechatCaption}</figcaption>
          </figure>
        </article>
      </div>
    </Main>
  );
}
