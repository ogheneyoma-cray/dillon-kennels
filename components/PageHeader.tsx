import Link from "next/link";

/** Light title band with breadcrumb, opening every interior page. */
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
    <div className="border-b border-line bg-haze">
      <div className="frame py-14 text-center lg:py-20">
        <h1 className="display-1">{title}</h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-wide2"
        >
          <Link href="/" className="text-ash transition-colors hover:text-camel">
            Home
          </Link>
          <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-camel" />
          <span className="text-camel">{crumb ?? title}</span>
        </nav>

        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ash">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
