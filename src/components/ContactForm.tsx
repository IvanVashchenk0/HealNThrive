"use client";

import { FormEvent, useState } from "react";

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
        <h2 className="mt-5 font-display text-3xl font-semibold text-ink">Thanks for reaching out.</h2>
        <p className="mt-3 leading-7 text-muted">This prototype has received your message locally. In a production site, it would now be sent securely to the HopeBridge team.</p>
        <button type="button" className="mt-6 text-sm font-bold text-clay underline underline-offset-4" onClick={() => setSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Name <input name="name" type="text" autoComplete="name" required className="field" placeholder="Your name" /></label>
        <label className="field-label">Email <input name="email" type="email" autoComplete="email" required className="field" placeholder="you@example.com" /></label>
      </div>
      <label className="field-label">Subject <input name="subject" type="text" required className="field" placeholder="How can we help?" /></label>
      <label className="field-label">Message <textarea name="message" required rows={6} className="field resize-y" placeholder="Tell us a little about what’s on your mind." /></label>
      <p className="text-sm leading-6 text-muted">Please do not include sensitive personal, medical, or financial information.</p>
      <button type="submit" className="button button-primary">Send message <span aria-hidden="true">→</span></button>
    </form>
  );
}
