import Link from "next/link";

/** Dark title band with breadcrumb, opening every interior page. */
export default function PageHeader({
  title,
  intro,
  crumb,
}: {
  title: string;
  intro?: string;
  crumb?: string;
}) {
  return (
    <div className="bg-forest text-canvas">
      <div className="boxed py-12 lg:py-16">
        <nav aria-label="Breadcrumb" className="text-[11px] font-bold uppercase tracking-bold3">
          <Link href="/" className="text-canvas/60 transition-colors hover:text-sunshine">
            Home
          </Link>
          <span className="px-2 text-canvas/30">/</span>
          <span className="text-sunshine">{crumb ?? title}</span>
        </nav>

        <h1 className="head-xl mt-6 max-w-3xl text-canvas">{title}</h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-canvas/75">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
