"use client";

import { useState, type FormEvent } from "react";

const SUBJECTS = [
  "A download that will not open",
  "Order or receipt question",
  "Rights and permissions",
  "Submitting a manuscript",
  "Something else",
];

/**
 * Contact form. Nothing is transmitted — the submit handler validates and
 * shows the confirmation panel, which is the correct behaviour for a
 * storefront with no backend wired up yet.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-8 text-center shadow-card">
        <p className="eyebrow">Thank you</p>
        <h3 className="display-3 mt-3">Message received</h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-body">
          Someone from the press will reply within one working day. If it is
          about a download already bought, please keep the order number to
          hand.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-line mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input id="name" name="name" type="text" required className="field" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email address
          </label>
          <input id="email" name="email" type="email" required className="field" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="field-label">
          What is it about?
        </label>
        <select id="subject" name="subject" className="field">
          {SUBJECTS.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="field-area"
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-clay">
          {error}
        </p>
      )}

      <button type="submit" className="btn-clay mt-6 w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
