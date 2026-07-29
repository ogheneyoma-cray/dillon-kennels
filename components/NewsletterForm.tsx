"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-2 flex w-full max-w-sm items-center gap-2 border-b border-bone/30 pb-2"
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        className="min-h-[44px] flex-1 bg-transparent text-sm text-bone placeholder:text-muted focus:outline-none"
      />
      <button
        type="submit"
        className="min-h-[44px] shrink-0 text-xs font-bold uppercase tracking-widest2 text-acid hover:text-bone"
      >
        Subscribe
      </button>
    </form>
  );
}
