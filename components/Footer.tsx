import Link from "next/link";
import { CalendarCheck, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-darkgreen-900">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo + tagline + CTA */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              {CLINIC_INFO.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Accessible, high-quality healthcare for the Gungahlin community.
            </p>
            {/* <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-700"
            >
              <CalendarCheck size={14} aria-hidden="true" />
              Book Online
            </a> */}
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                {CLINIC_INFO.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white">{CLINIC_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white">{CLINIC_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Opening Hours</h3>
            <ul className="mt-3 space-y-1">
              {CLINIC_INFO.openingHours.map((entry) => (
                <li key={entry.days} className="flex justify-between text-sm text-neutral-300">
                  <span>{entry.days}</span>
                  <span className={entry.closed ? "text-red-400" : ""}>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — 2-column grid */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Quick Links</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-darkgreen-800">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
