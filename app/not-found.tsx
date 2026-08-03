import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="boxed flex flex-col items-center py-32 text-center">
      <LogoMark className="h-14 w-14 animate-floaty" />
      <p className="mt-8 text-[11px] font-bold uppercase tracking-mega text-tangerine">
        Error 404
      </p>
      <h1 className="head-xl mt-4 text-pine">This kite got away</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mudd">
        The link you followed does not lead anywhere on this site. The
        collection is still where you left it.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn-solid">
          Shop kidswear
        </Link>
        <Link href="/" className="btn-outline">
          Back home
        </Link>
      </div>
    </div>
  );
}
