"use client";

import { useState, type FormEvent } from "react";

type Errors = Record<string, string>;

const SUBJECTS = [
  "An order I've placed",
  "Sizing and fit",
  "Returns or exchanges",
  "Wholesale and stockists",
  "Something else",
];

/**
 * Demo contact form. Nothing is transmitted — submissions are validated in the
 * browser and acknowledged in place.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-l-2 border-camel bg-blush p-8"
      >
        <h2 className="text-[13px] font-bold uppercase tracking-wide2 text-onyx">
          Message noted
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ash">
          On the live store this would reach the support team, who reply within
          one working day. On this demonstration build nothing is actually sent.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[11px] font-bold uppercase tracking-wide2 text-camel underline underline-offset-4"
        >
          Write another message
        </button>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    if (!String(data.get("name") ?? "").trim()) {
      next.name = "Let us know who we're replying to";
    }

    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      next.email = "We need an email address to reply to";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email address does not look right";
    }

    if (String(data.get("message") ?? "").trim().length < 10) {
      next.message = "A little more detail will help us answer properly";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="field"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[12px] font-semibold text-camel-dark">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="field"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[12px] font-semibold text-camel-dark">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="field-label">
          What is it about?
        </label>
        <select id="subject" name="subject" className="field">
          {SUBJECTS.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field resize-y py-3"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[12px] font-semibold text-camel-dark">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-dark w-full sm:w-auto sm:justify-self-start">
        Send message
      </button>
    </form>
  );
}
