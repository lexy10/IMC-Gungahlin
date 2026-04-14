import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { Phone, ArrowRight } from "lucide-react";

const aboutSeo = PAGE_SEO.about;

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    url: `${BASE_URL}${aboutSeo.canonicalPath}`,
    type: aboutSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${aboutSeo.canonicalPath}`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
          alt="About Infinity Medical Centre Gungahlin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-800/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Learn about our practice, our values, and our commitment to the Gungahlin community.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Who We Are</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is a modern general practice established to meet the growing healthcare needs of the Gungahlin community.</p>
                <p>Located in one of the fastest-growing regions in the ACT, our clinic has been designed to provide accessible, high-quality, and patient-centred healthcare in a professional and welcoming environment.</p>
                <p>We are committed to delivering care that is not only clinically sound but also respectful, compassionate, and responsive to the diverse needs of our patients.</p>
              </div>
            </div>
            <div>
              <Image src="/images/who-we.png" alt="Modern clinic interior" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PURPOSE + OUR VISION — side by side */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Our Purpose */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Purpose</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>At Infinity Medical Centre Gungahlin, our purpose is simple:</p>
                <p className="font-semibold text-brand-700">To make healthcare accessible, reliable, and centred around the needs of every patient.</p>
                <p>We recognise that access to healthcare is essential to individual wellbeing and community health. Our model is built around reducing barriers to care while maintaining high clinical standards and continuity of care.</p>
              </div>
            </div>

            {/* Our Vision */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Vision</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our vision is to become a trusted and essential healthcare provider within the Gungahlin community.</p>
                <p>We aim to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Improve access to primary healthcare</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Support long-term patient wellbeing</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Deliver consistent, high-quality care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Build strong relationships with our patients and community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH TO CARE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Approach to Care</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We believe that good healthcare goes beyond treating illness. Our approach focuses on:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" /><span><strong>Continuity of care</strong> — building long-term relationships with patients</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" /><span><strong>Preventive health</strong> — supporting early detection and long-term wellbeing</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" /><span><strong>Holistic care</strong> — considering physical, mental, and social health</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" /><span><strong>Patient involvement</strong> — encouraging patients to participate in their care decisions</span></li>
                </ul>
                <p>Our clinicians take the time to listen, understand, and work collaboratively with patients to achieve the best possible health outcomes.</p>
              </div>
            </div>
            <div>
              <Image src="/images/clinic2.jpg" alt="Doctor consultation" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT TO QUALITY */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="/images/clinic.jpg" alt="Medical quality standards" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Commitment to Quality</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is committed to maintaining the highest standards of clinical care and safety.</p>
                <p>We operate in accordance with:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />RACGP Standards for General Practices</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Australian healthcare regulations and guidelines</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Evidence-based clinical practice</li>
                </ul>
                <p>We have implemented structured policies, procedures, and governance systems to ensure patient safety, quality care, and full compliance with national standards from the commencement of operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Team</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our team of doctors, nurses, and administrative staff are dedicated to providing a supportive and professional healthcare experience.</p>
                <p>We aim to create a respectful and collaborative environment where:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Patients feel heard and valued</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Staff are supported and well-trained</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Care is delivered efficiently and safely</li>
                </ul>
                <p>As our practice grows, we will continue to expand our team to meet the needs of the community.</p>
              </div>
            </div>
            <div>
              <Image src="/images/our-team.jpg" alt="Medical team" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMUNITY */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="/images/our-community.jpg" alt="Gungahlin community" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Community</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Gungahlin is a diverse and rapidly growing region, and we are proud to be part of this community.</p>
                <p>We are committed to providing care that is inclusive and responsive to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Families and children</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Older adults</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Multicultural communities</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Patients with chronic and complex health needs</li>
                </ul>
                <p>We aim to contribute positively to the local healthcare network by working with nearby services such as pharmacies, pathology providers, and allied health professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR FACILITIES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Facilities</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is a purpose-designed medical facility that supports both patient comfort and clinical efficiency.</p>
                <p>Our clinic features:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Modern consulting rooms</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Treatment room facilities</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Comfortable waiting areas</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Accessible design for all patients</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Integrated digital systems for efficient care delivery</li>
                </ul>
                <p>We have created an environment that supports both high-quality care and a positive patient experience.</p>
              </div>
            </div>
            <div>
              <Image src="/images/our-facility.avif" alt="Modern clinic facilities" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE INFORMATION */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 border-l-4 border-accent-400 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Practice Information</h2>
          </div>

          <div className="space-y-10">
            {/* Appointments */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Appointments</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Infinity Medical Centre Gungahlin operates an appointment-based system.</p>
                <p>Appointments can be made online or by contacting our reception team. Standard consultations are typically scheduled in 15-minute intervals.</p>
                <p>If you require a longer consultation, please inform reception at the time of booking.</p>
                <p>While we aim to run on time, delays can occasionally occur due to the nature of medical care and urgent patient needs. We appreciate your understanding and will ensure you receive the time and attention you need.</p>
              </div>
            </div>

            {/* Cancellations */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Cancellations</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>If you are unable to attend your appointment, please provide at least 2 hours&apos; notice.</p>
                <p>This allows us to offer the appointment to another patient. Failure to attend without notice may result in a missed appointment fee and may affect future bookings.</p>
              </div>
            </div>

            {/* Walk-in */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Walk-in Appointments</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>The practice is primarily appointment-based. Walk-in appointments may be accommodated depending on doctor availability and the urgency of the condition.</p>
                <p>Patients are encouraged to call ahead to confirm availability.</p>
              </div>
            </div>

            {/* Test Results */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Test Results</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>It is our practice policy that patients make an appointment to discuss their test results with their GP.</p>
                <p>Appointments may be conducted face-to-face or via telehealth.</p>
                <p>Results are not provided over the phone by reception staff. If results are urgent, patients will be contacted for earlier review.</p>
              </div>
            </div>

            {/* Telephone */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Telephone &amp; Communication</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Our doctors prioritise patient consultations and may not be available to take phone calls.</p>
                <p>If you wish to speak with your doctor, we recommend booking a phone or telehealth consultation.</p>
              </div>
            </div>

            {/* After-Hours */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">After-Hours Care</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Infinity Medical Centre Gungahlin does not provide after-hours services.</p>
                <p>For medical care outside our opening hours:</p>
                <p><strong>CALMS</strong> (Canberra After Hours Locum Medical Service) <a href="tel:1300422567" className="text-brand-600 underline hover:text-brand-700">1300 422 567</a></p>
                <p>For emergencies, please call <a href="tel:000" className="font-semibold text-brand-600 underline hover:text-brand-700">000</a> or attend your nearest hospital.</p>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Privacy</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Infinity Medical Centre Gungahlin respects your privacy and is committed to protecting your personal health information.</p>
                <p>Your information is:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Collected and stored securely</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Used only for your healthcare</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Shared only when appropriate and necessary</li>
                </ul>
                <p>You can contact our reception team if you would like a copy of our Privacy Policy.</p>
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Accessibility</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Our clinic is designed to be accessible to all patients.</p>
                <p>If you have specific needs or require assistance, please inform our reception team and we will do our best to accommodate you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Why Choose Us</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-brand-400" />
          </div>
          <p className="mb-8 text-base leading-relaxed text-neutral-600 md:text-lg">At Infinity Medical Centre Gungahlin, we offer:</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Accessible and affordable healthcare",
              "A patient-centred approach",
              "A professional and supportive environment",
              "Modern facilities and systems",
              "A strong commitment to quality and safety",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-medium text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN OUR PRACTICE */}
      <section className="bg-darkgreen-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Join Our Practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            We welcome new patients to Infinity Medical Centre Gungahlin. Whether you are seeking a regular GP, managing an ongoing condition, or looking for a healthcare provider that prioritises access and continuity of care, we are here to support you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-lg transition-colors hover:bg-neutral-100"
            >
              Book an Appointment
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Phone size={16} aria-hidden="true" />
              Call {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
