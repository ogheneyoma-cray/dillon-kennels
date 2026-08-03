import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="frame flex flex-col items-center py-32 text-center">
      <LogoMark className="h-12 w-12 text-camel" />
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="display-1 mt-4">Nothing here</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ash">
        The link you followed does not lead anywhere on this site. The
        collection is still where you left it.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn-camel">
          Shop everything
        </Link>
        <Link href="/" className="btn-outline">
          Back home
        </Link>
      </div>
    </div>
  );
}
