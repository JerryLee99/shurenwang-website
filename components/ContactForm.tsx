"use client";

import { FormEvent, useState } from "react";
import { contactContent } from "@/lib/content";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`${site.name}网站留言（${name}）`);
    const body = encodeURIComponent(`姓名：${name}\n邮箱：${email}\n\n${message}`);
    setStatus(contactContent.statusOpened);
    window.location.href = `mailto:${site.placeholderEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      action={`mailto:${site.placeholderEmail}`}
      method="post"
      encType="text/plain"
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <p className="text-sm text-ink-soft">{contactContent.requiredHint}</p>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
          {contactContent.nameLabel}
          <span className="text-clay" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only">（必填）</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={80}
          placeholder={contactContent.namePlaceholder}
          className="mt-2 w-full rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-ink placeholder:text-ink-soft/70"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
          {contactContent.emailLabel}
          <span className="text-clay" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only">（必填）</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          placeholder={contactContent.emailPlaceholder}
          className="mt-2 w-full rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-ink placeholder:text-ink-soft/70"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
          {contactContent.messageLabel}
          <span className="text-clay" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only">（必填）</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={1000}
          placeholder={contactContent.messagePlaceholder}
          className="mt-2 w-full resize-y rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-ink placeholder:text-ink-soft/70"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:bg-ink-raised"
        >
          {contactContent.submitLabel}
        </button>
        <p className="text-sm text-ink-soft">{contactContent.submitHint}</p>
      </div>
      <p role="status" aria-live="polite" className="min-h-6 text-sm text-moss">
        {status}
      </p>
    </form>
  );
}
