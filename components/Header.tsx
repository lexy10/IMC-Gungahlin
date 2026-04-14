import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/data/clinic";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-accent-400 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/imc-logo.png"
            alt="Infinity Medical Centre Gungahlin"
            width={150}
            height={55}
            priority
            className="h-13 w-100"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* CTA + phone — hidden on mobile */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone size={16} aria-hidden="true" />
            {CLINIC_INFO.phone}
          </a>
          <a
            href={CLINIC_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-accent-700 transition-colors hover:bg-neutral-100"
          >
            <CalendarCheck size={16} aria-hidden="true" />
            Book Online
          </a>
        </div>

        {/* Mobile nav */}
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
