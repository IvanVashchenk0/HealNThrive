"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-sage bg-sage/25 p-8" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-forest text-xl text-white" aria-hidden="true">✓</span>
        <h2 className="mt-5 font-display text-3xl font-semibold text-ink">Form preview complete.</h2>
        <p className="mt-3 leading-7 text-muted">{siteContent.contact.previewResult}</p>
        <button type="button" className="mt-6 text-sm font-bold text-clay underline underline-offset-4" onClick={() => setSubmitted(false)}>Return to the form</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="form-preview-notice">
      <p id="form-preview-notice" className="rounded-xl border border-clay/25 p-4 text-sm leading-6 text-ink">{siteContent.contact.previewNotice}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Name <input name="name" type="text" autoComplete="name" required className="field" placeholder="Your name" /></label>
        <label className="field-label">Email <input name="email" type="email" autoComplete="email" required className="field" placeholder="you@example.com" /></label>
      </div>
      <label className="field-label">Subject <input name="subject" type="text" required className="field" placeholder="How can we help?" /></label>
      <label className="field-label">Message <textarea name="message" required rows={6} className="field resize-y" placeholder="Tell us a little about what’s on your mind." /></label>
      <p className="text-sm leading-6 text-muted">Please do not include sensitive personal, medical, or financial information.</p>
      <button type="submit" className="button button-primary">Preview message <span aria-hidden="true">→</span></button>
    </form>
  );
}
