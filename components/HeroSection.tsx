import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
}

const DEFAULT_IMAGE =
  "/images/hero.jpeg";

export default function HeroSection({
  headline,
  subtext,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc = DEFAULT_IMAGE,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[680px]">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt="Infinity Medical Centre Gungahlin"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/75 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
          {headline}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Infinity Medical Centre Gungahlin
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg">
          {subtext}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
          >
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone size={16} aria-hidden="true" />
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
