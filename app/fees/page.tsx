import type { Metadata } from "next";
import Image from "next/image";
import FeeTable from "@/components/FeeTable";
import { NON_MEDICARE_FEES } from "@/lib/data/fees";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { Phone, ArrowRight, Mail } from "lucide-react";

const feesSeo = PAGE_SEO.fees;

export const metadata: Metadata = {
  title: feesSeo.title,
  description: feesSeo.description,
  openGraph: {
    title: feesSeo.title,
    description: feesSeo.description,
    url: `${BASE_URL}${feesSeo.canonicalPath}`,
    type: feesSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${feesSeo.canonicalPath}`,
  },
};

export default function FeesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="/images/fees-billing.webp"
          alt="Fees and billing at Infinity Medical Centre"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-800/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-200">
            Infinity Medical Centre Gungahlin
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Fees &amp; Billing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Transparent, affordable healthcare. Bulk billing available for all eligible Medicare card holders.
          </p>
        </div>
      </section>

      {/* OUR BILLING POLICY + BULK BILLING — side by side */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Our Billing Policy */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Billing Policy</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is committed to providing accessible and affordable healthcare to the community.</p>
                <p>We operate as a bulk-billing practice for all consultations for patients with a valid Medicare card, ensuring that eligible services are billed directly to Medicare with no out-of-pocket cost.</p>
              </div>
            </div>

            {/* Bulk Billing */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Bulk Billing</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We bulk bill:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />All standard GP consultations</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Patients with a valid Medicare card</li>
                </ul>
                <p className="font-semibold text-brand-700">This means no out-of-pocket cost for eligible consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES NOT COVERED BY MEDICARE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Services Not Covered by Medicare</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Some services are not covered by Medicare and will attract a private fee.</p>
              </div>
              <div className="mt-6">
                <FeeTable fees={NON_MEDICARE_FEES} />
              </div>
              <p className="mt-4 text-sm text-neutral-500">Fees may vary depending on complexity and time required. Patients will be informed prior to the service being provided.</p>
            </div>
            <div>
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Fee schedule" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURES */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="/images/procedures.jpg" alt="Medical procedures" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Procedures</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Procedures are not always fully covered by Medicare and may attract additional fees depending on the nature and complexity of the procedure.</p>
                <p>Examples may include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Minor surgical procedures</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Skin excisions</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Complex wound care</li>
                </ul>
                <p>Fees for procedures are determined based on:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Time required</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Complexity of the procedure</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Materials used</li>
                </ul>
                <p>Patients will always be informed of any out-of-pocket costs before proceeding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      {/* IMPORTANT INFORMATION + MEDICARE REQUIREMENTS — side by side */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Important Information */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Important Information</h2>
              </div>
              <ul className="space-y-3 text-base leading-relaxed text-neutral-600 md:text-lg">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Bulk billing applies to Medicare-eligible consultations only</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Services not covered by Medicare will be privately billed</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />All fees will be clearly explained prior to the service</li>
              </ul>
            </div>

            {/* Medicare Requirements */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Medicare Requirements</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>To access bulk billing, patients must:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Hold a valid Medicare card</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Provide up-to-date Medicare details</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Consent to bulk billing at the time of consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANCELLATIONS & AFTER-HOURS — side by side, image on top, text below */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Cancellations */}
            <div>
              <Image src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80" alt="Appointment scheduling" width={800} height={533} className="rounded-xl object-cover shadow-md" />
              <div className="mt-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Cancellations &amp; Missed Appointments</h2>
              </div>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We kindly ask patients to provide at least 2 hours&apos; notice if they are unable to attend their appointment.</p>
                <p>Failure to attend without notice may result in:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />A missed appointment fee</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Restrictions on future bookings</li>
                </ul>
              </div>
            </div>

            {/* After-Hours Care */}
            <div>
              <Image src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" alt="After hours medical care" width={800} height={533} className="rounded-xl object-cover shadow-md" />
              <div className="mt-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">After-Hours Care</h2>
              </div>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin does not provide after-hours services.</p>
                <p>For medical care outside our opening hours, please contact:</p>
                <p><strong>CALMS</strong> (Canberra After Hours Locum Medical Service) <a href="tel:1300422567" className="text-brand-600 underline hover:text-brand-700">1300 422 567</a></p>
                <p>For emergencies, please call <a href="tel:000" className="font-semibold text-brand-600 underline hover:text-brand-700">000</a> or attend your nearest hospital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Contact Us</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-brand-400" />
          </div>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">If you have any questions regarding fees or billing, please contact our team:</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-base font-semibold text-brand-700 hover:text-brand-800">
              <Phone size={18} aria-hidden="true" />
              {CLINIC_INFO.phone}
            </a>
            <a href={`mailto:${CLINIC_INFO.email}`} className="inline-flex items-center gap-2 text-base font-semibold text-brand-700 hover:text-brand-800">
              <Mail size={18} aria-hidden="true" />
              {CLINIC_INFO.email}
            </a>
          </div>
        </div>
      </section>

      {/* BOOK AN APPOINTMENT CTA */}
      <section className="bg-darkgreen-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Book an Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            We are here to provide accessible, high-quality care.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-lg transition-colors hover:bg-neutral-100"
            >
              Book Appointment
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Phone size={16} aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
