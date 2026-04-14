import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

interface TeamCardProps {
  name: string;
  qualifications: string[];
  specialInterests: string[];
  photoSrc?: string;
  bio?: string;
  /** When true, shows full bio, all interests, and individual Book Online button */
  detailed?: boolean;
}

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop";

const INTEREST_COLORS = [
  "bg-brand-50 text-brand-700",
  "bg-accent-50 text-accent-700",
  "bg-blue-50 text-blue-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-teal-50 text-teal-700",
];

export default function TeamCard({
  name,
  qualifications,
  specialInterests,
  photoSrc = DEFAULT_PHOTO,
  bio,
  detailed = false,
}: TeamCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Doctor photo */}
      <div className={`flex justify-center bg-gradient-to-b from-brand-50 to-brand-100 px-6 pt-6 ${detailed ? "pb-2" : ""}`}>
        <Image
          src={photoSrc}
          alt={`${name} - Doctor at Infinity Medical Centre`}
          width={detailed ? 360 : 300}
          height={detailed ? 360 : 300}
          loading="lazy"
          className="rounded-lg object-cover ring-2 ring-brand-200"
        />
      </div>

      {/* Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900">{name}</h3>

        {/* Qualifications as badges */}
        <div className="mt-2 flex flex-wrap gap-2">
          {qualifications.map((q) => (
            <span
              key={q}
              className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
            >
              {q}
            </span>
          ))}
        </div>

        {/* Special interests as colored tag pills */}
        {specialInterests.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-neutral-700">
              Special Interests
            </h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {specialInterests.map((interest, idx) => (
                <span
                  key={interest}
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    INTEREST_COLORS[idx % INTEREST_COLORS.length]
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bio */}
        {bio && (
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">{bio}</p>
        )}

        {/* Individual Book Online button for detailed view */}
        {detailed && (
          <div className="mt-5">
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
            >
              <CalendarCheck size={16} aria-hidden="true" />
              Book Online
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
