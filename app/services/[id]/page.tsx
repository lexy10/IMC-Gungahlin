import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { BASE_URL } from "@/lib/data/seo";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.detail).map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: `${service.title} | Infinity Medical Centre Gungahlin`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${BASE_URL}/services/${service.id}`,
      type: "article",
    },
    alternates: { canonical: `${BASE_URL}/services/${service.id}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service || !service.detail) notFound();

  const { detail } = service;

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[200px] items-center overflow-hidden bg-brand-800 md:min-h-[260px]">
        <Image
          src={detail.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            {detail.subtitle}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          {/* Back link */}
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to All Services
          </Link>

          {/* Heading bar */}
          <div className="mb-10 border-l-4 border-accent-400 pl-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-neutral-900 md:text-2xl">
              {detail.heading}
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Image */}
            <div>
              <Image
                src={detail.image}
                alt={service.title}
                width={800}
                height={533}
                className="rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Text content */}
            <div>
              {detail.intro && (
                <p className="mb-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                  {detail.intro}
                </p>
              )}

              <ul className="mb-4 space-y-2">
                {detail.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-base text-neutral-700"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {detail.outro && (
                <p className="mb-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                  {detail.outro}
                </p>
              )}

              <a
                href={CLINIC_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent-600 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-700"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
