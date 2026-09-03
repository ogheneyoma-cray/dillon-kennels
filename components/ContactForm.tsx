"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  if (submitted) {
    return (
      <div className="border border-rust/30 bg-rust-pale p-6">
        <p className="font-display text-xl text-navy">Message sent</p>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out — our support team will reply to your email
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="label-text">
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="input-field"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="label-text">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input-field"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="label-text">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="input-field resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
