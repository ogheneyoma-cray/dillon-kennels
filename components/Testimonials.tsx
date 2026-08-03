import Image from "next/image";
import Link from "next/link";

const REVIEWS = [
  {
    quote:
      "I bought the Lunette on a whim before a trip and ended up ordering two more when I got home. It is the only slip I own that does not twist itself around me by morning.",
    name: "Adaeze O.",
    location: "Lekki, Lagos",
    product: {
      name: "Lunette Satin Slip Nightdress",
      slug: "lunette-satin-slip-nightdress",
    },
  },
  {
    quote:
      "The poplin set is the first pyjama I have owned that survived a year of hot washes and still looks pressed. My wife has since taken the shirt.",
    name: "Tunde A.",
    location: "Ikeja, Lagos",
    product: {
      name: "Powder Blue Sleep Set",
      slug: "powder-blue-sleep-set",
    },
  },
  {
    quote:
      "Ordered on a Tuesday, delivered to Ajah on the Thursday, and the packaging was good enough that I gave it as a gift without rewrapping it.",
    name: "Ifeoma N.",
    location: "Ajah, Lagos",
    product: {
      name: "Antique Lace Sleep Robe",
      slug: "antique-lace-sleep-robe",
    },
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="m10 1.8 2.4 5 5.5.8-4 3.85.95 5.45L10 14.35 5.15 16.9l.95-5.45-4-3.85 5.5-.8 2.4-5Z"
            fill="#E3C77E"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="shell pt-24 lg:pt-28">
      <div className="text-center">
        <p className="kicker">Reviews</p>
        <h2 className="display-lg mt-3">What people say the next morning</h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate">
          Every review below comes from a verified order placed through this
          store.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="flex flex-col rounded-2xl border border-midnight/10 bg-linen p-7"
          >
            <Stars />
            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-midnight/80">
              {review.quote}
            </blockquote>
            <figcaption className="mt-6">
              <span className="flex items-center gap-2 text-sm font-medium text-midnight">
                {review.name}
                <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="#9C6FC4" />
                  <path
                    d="m6 10.2 2.6 2.6L14 7.4"
                    stroke="#FFFDF9"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="mt-0.5 block text-[13px] text-slate">
                Verified buyer · {review.location}
              </span>
            </figcaption>

            <Link
              href={`/shop/${review.product.slug}`}
              className="mt-6 flex items-center gap-3 rounded-xl border border-midnight/10 p-3 transition-colors hover:border-orchid/50"
            >
              <span className="relative h-14 w-12 shrink-0 overflow-hidden rounded-lg bg-mist">
                <Image
                  src={`/xiradix/${review.product.slug}.jpg`}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="text-[13px] font-medium leading-snug text-midnight">
                {review.product.name}
              </span>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
}
