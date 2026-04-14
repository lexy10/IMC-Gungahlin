import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { Phone, ArrowRight } from "lucide-react";

const newPatientsSeo = PAGE_SEO["new-patients"];

export const metadata: Metadata = {
  title: newPatientsSeo.title,
  description: newPatientsSeo.description,
  openGraph: {
    title: newPatientsSeo.title,
    description: newPatientsSeo.description,
    url: `${BASE_URL}${newPatientsSeo.canonicalPath}`,
    type: newPatientsSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${newPatientsSeo.canonicalPath}`,
  },
};

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="/images/new-patient.png"
          alt="New patients welcome at Infinity Medical Centre"
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
            New Patients
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Everything you need to know for your first visit. We welcome new patients of all ages.
          </p>
        </div>
      </section>

      {/* WELCOME + YOUR FIRST VISIT */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Welcome to Our Practice</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin welcomes new patients.</p>
                <p>We are committed to providing accessible, high-quality healthcare in a professional and supportive environment. Whether you are new to the area or looking for a regular GP, our team is here to support your health and wellbeing.</p>
              </div>
            </div>
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Your First Visit</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>To help ensure a smooth consultation, please bring:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Your Medicare card</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Any concession or pension cards (if applicable)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />A list of your current medications</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Relevant medical history or documents</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Referral letters, results, or reports (if available)</li>
                </ul>
                <p>Arriving 5–10 minutes early is recommended for your first visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENTS + BULK BILLING */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Appointments</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Appointments can be made:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Online via our booking system</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />By calling our reception team</li>
                </ul>
                <p>We offer:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Standard consultations</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Longer consultations (for multiple or complex issues)</li>
                </ul>
                <p>Please let reception know if you require a longer appointment.</p>
              </div>
            </div>
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Bulk Billing</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We bulk bill all consultations for patients with a valid Medicare card.</p>
                <p className="font-semibold text-brand-700">This means no out-of-pocket cost for eligible consultations.</p>
                <p>Some services not covered by Medicare may incur a private fee. Please refer to our <Link href="/fees" className="text-brand-600 underline hover:text-brand-700">Fees &amp; Billing</Link> page for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION + PRIVACY */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">New Patient Registration</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>To streamline your visit, you may be asked to complete a new patient registration form.</p>
                <p>This helps us:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Maintain accurate medical records</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Provide safer, more effective care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Communicate important information when needed</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Privacy &amp; Confidentiality</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Your privacy is important to us.</p>
                <p>We follow strict guidelines to ensure that your personal and medical information is:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Securely stored</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Kept confidential</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Used only for your healthcare</li>
                </ul>
                <p>Our full privacy policy is available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERPRETER + CONTINUITY */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Interpreter Services</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>If you require an interpreter, please let us know when booking your appointment.</p>
                <p>We can arrange appropriate services to ensure effective communication and safe care.</p>
              </div>
            </div>
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Continuity of Care</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We encourage patients to see the same doctor where possible.</p>
                <p>This allows us to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Better understand your health history</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Provide more personalised care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Improve long-term health outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER-HOURS + CANCELLATIONS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">After-Hours Care</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin does not provide after-hours services.</p>
                <p>For medical care outside our opening hours:</p>
                <p><strong>CALMS</strong> (Canberra After Hours Locum Medical Service) <a href="tel:1300422567" className="text-brand-600 underline hover:text-brand-700">1300 422 567</a></p>
                <p>For emergencies, please call <a href="tel:000" className="font-semibold text-brand-600 underline hover:text-brand-700">000</a> or attend your nearest hospital.</p>
              </div>
            </div>
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Cancellations</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>If you are unable to attend your appointment, please provide at least 2 hours&apos; notice.</p>
                <p>This allows us to offer your appointment to another patient.</p>
              </div>
            </div>
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
            We welcome new patients to Infinity Medical Centre Gungahlin. Book your first appointment today.
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
