import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Brain,
  Heart,
  Activity,
  Baby,
  Syringe,
  Search,
  Scissors,
  ClipboardList,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Brain,
  Heart,
  Activity,
  Baby,
  Syringe,
  Search,
  Scissors,
  ClipboardList,
  Users,
};

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Large icon */}
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        {Icon ? (
          <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <span aria-hidden="true" className="text-3xl">⚕</span>
        )}
      </div>

      {/* Title in brand color, uppercase */}
      <h3 className="text-base font-bold uppercase tracking-wide text-brand-600">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>

      {/* Read More button */}
      <div className="mt-5">
        <Link
          href={`/services/${id}`}
          className="inline-block rounded-full bg-brand-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
