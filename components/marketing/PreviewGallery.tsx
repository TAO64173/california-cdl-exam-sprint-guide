import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { assets } from "@/lib/assets";

const pages = [
  { ...assets.cover, alt: "Cover page", caption: "Cover" },
  { ...assets.numbers, alt: "Key numbers page", caption: "Key Numbers" },
  { ...assets.airBrake, alt: "Air brake page", caption: "Air Brakes" },
  { ...assets.traps, alt: "Exam traps page", caption: "Exam Traps" },
];

export default function PreviewGallery() {
  return (
    <section id="preview" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Preview"
            heading="See Exactly What You Get"
            lead="Real pages from the 12-page guide — no mockups."
          />
          <Link
            href="/preview"
            className="font-display text-sm font-bold uppercase tracking-wide text-navy hover:text-navy-700"
          >
            View full preview →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {pages.map((p) => (
            <figure key={p.caption} className="group">
              <div className="overflow-hidden rounded-sm border border-line bg-paper">
                <Image
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  className="transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
