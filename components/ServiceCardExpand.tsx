"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardExpandProps {
  icon: React.ReactNode;
  heading: string;
  subtitle: string;
  preview: string;
  bullets: string[];
  outro?: string;
}

export default function ServiceCardExpand({
  icon,
  heading,
  subtitle,
  preview,
  bullets,
  outro,
}: ServiceCardExpandProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        {icon}
      </div>

      {/* Heading */}
      <h3 className="text-base font-bold uppercase tracking-wide text-brand-600">
        {heading}
      </h3>
      <p className="mt-1 text-sm font-medium text-neutral-700">{subtitle}</p>

      {/* Preview text */}
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{preview}</p>

      {/* Expanded content */}
      {open && (
        <div className="mt-4 w-full text-left">
          <ul className="space-y-1.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {b}
              </li>
            ))}
          </ul>
          {outro && (
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{outro}</p>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 inline-flex items-center gap-1 rounded-full bg-accent-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-500"
      >
        {open ? "Show Less" : "Read More"}
        {open ? <ChevronUp size={14} aria-hidden="true" /> : <ChevronDown size={14} aria-hidden="true" />}
      </button>
    </div>
  );
}
