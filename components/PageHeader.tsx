import Link from "next/link";

/** Breadcrumb + title band used at the top of every interior page. */
export default function PageHeader({
  title,
  kicker,
  intro,
  crumb,
}: {
  title: string;
  kicker?: string;
  intro?: string;
  crumb?: string;
}) {
  return (
    <div className="border-b border-midnight/10 bg-linen">
      <div className="shell py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-[12px] text-slate">
          <Link href="/" className="transition-colors hover:text-orchid">
            Home
          </Link>
          <span className="px-2 text-midnight/25">/</span>
          <span className="text-midnight/70">{crumb ?? title}</span>
        </nav>

        {kicker && <p className="kicker mt-8">{kicker}</p>}
        <h1 className="display-lg mt-3 max-w-3xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-midnight/70">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
