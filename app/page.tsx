import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "Infinity Medical Centre Gungahlin | Coming Soon",
  description:
    "Infinity Medical Centre Gungahlin is opening soon. A modern, accessible medical centre for the Gungahlin community.",
};

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top bar */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Image
            src="/images/imc-logo.png"
            alt="Infinity Medical Centre Gungahlin"
            width={180}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{CLINIC_INFO.phone}</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-2xl text-center">
          {/* Accent line */}
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-accent-400" />

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            We&rsquo;re Getting Ready
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
            Infinity Medical Centre Gungahlin is preparing to welcome patients.
            We&rsquo;re putting the finishing touches on our practice to ensure
            we can provide the best possible care for our community.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="space-y-4 text-left text-sm text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
                  className="text-brand-700 hover:underline"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>Opening hours will be announced soon</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-neutral-500">
            For enquiries, give us a call or check back here for updates.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 bg-white py-6">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Infinity Medical Centre Gungahlin.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
