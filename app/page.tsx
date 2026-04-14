import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  Accessibility,
  HeartHandshake,
  CreditCard,
  Users,
  Building2,
  Link2,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";

const homeSeo = PAGE_SEO.home;

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: `${BASE_URL}${homeSeo.canonicalPath}`,
    type: homeSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${homeSeo.canonicalPath}`,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: CLINIC_INFO.name,
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1/61 Anthony Rolfe Avenue",
    addressLocality: "Gungahlin",
    addressRegion: "ACT",
    postalCode: "2912",
    addressCountry: "AU",
  },
  telephone: CLINIC_INFO.phone,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
  ],
  geo: { "@type": "GeoCoordinates", latitude: CLINIC_INFO.geo.latitude, longitude: CLINIC_INFO.geo.longitude },
};

const WHY_CHOOSE = [
  { icon: Accessibility, title: "Accessible Healthcare", desc: "We are committed to making healthcare easy to access for our local community." },
  { icon: CreditCard, title: "Bulk Billing Focus", desc: "Affordable care is at the core of our service model." },
  { icon: HeartHandshake, title: "Patient-Centred Care", desc: "We take the time to listen, understand your needs, and support your health journey." },
  { icon: Building2, title: "Modern Medical Practice", desc: "Our clinic is purpose-built to provide a comfortable, efficient, and professional healthcare experience." },
  { icon: Users, title: "Family-Friendly Environment", desc: "We welcome patients of all ages in a supportive and respectful setting." },
  { icon: Link2, title: "Connected Local Care", desc: "We work closely with local pharmacies, pathology, imaging, and allied health providers to support continuity of care." },
];

const SERVICE_LIST = [
  "General medical consultations", "Chronic disease management", "Health assessments",
  "Women\u2019s health", "Men\u2019s health", "Children\u2019s health",
  "Mental health support", "Immunisations", "Skin checks",
  "Minor procedures", "Preventive care", "Care plans and ongoing health reviews",
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      {/* HERO */}
      <HeroSection
        headline="Healthcare Without Barriers"
        subtext="A modern medical centre providing accessible, high-quality, patient-centred healthcare for individuals and families in the growing Gungahlin community. We are committed to making healthcare easier to access, with a strong focus on affordability, continuity of care, and clinical excellence."
        ctaText="Book Appointment"
        ctaHref={CLINIC_INFO.bookingUrl}
        secondaryCtaText={`Call ${CLINIC_INFO.phone}`}
        secondaryCtaHref={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
        imageSrc="/images/services-hero.jpg"
      />

      {/* WELCOME */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Welcome to Infinity Medical Centre Gungahlin</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>At Infinity Medical Centre Gungahlin, we believe that quality healthcare should be accessible, respectful, and centred around the needs of every patient.</p>
                <p>Our practice is designed to provide comprehensive general practice care in a welcoming and professional environment, with a focus on improving access for families, children, older adults, and people living with ongoing health needs.</p>
                <p className="font-semibold text-brand-700">Our mission is to provide accessible, high-quality healthcare that supports healthier individuals, stronger families, and a better-connected community.</p>
              </div>
            </div>
            <div>
              <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Modern clinic interior" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 border-l-4 border-accent-400 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Why Choose Infinity Medical Centre Gungahlin?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Services</h2>
              </div>
              <p className="mb-6 text-base leading-relaxed text-neutral-600 md:text-lg">We provide a wide range of general practice and preventive healthcare services, including:</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SERVICE_LIST.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" aria-hidden="true" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-500">
                  View All Services <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div>
              <Image src="/images/care.jpg" alt="Doctor consultation" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="/images/doctor-team.jpg" alt="Our medical team" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Doctors and Team</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our doctors and healthcare professionals are committed to delivering thoughtful, evidence-based care in a respectful and supportive environment.</p>
                <p>We value long-term patient relationships and continuity of care, because good healthcare starts with trust.</p>
              </div>
              <div className="mt-8">
                <Link href="/our-team" className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-500">
                  Meet Our Team <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW PATIENTS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">New Patients Welcome</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We welcome new patients to Infinity Medical Centre Gungahlin.</p>
                <p>Whether you are looking for a regular GP, need help managing a long-term health condition, or want a practice that offers accessible and community-focused care, we are here to help.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Easy appointment booking</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Friendly and supportive reception team</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Comfortable and welcoming clinic environment</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Continuity of care for individuals and families</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/new-patients" className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-500">
                  New Patient Information <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div>
              <Image src="/images/new-patient.jpg" alt="Welcoming new patients" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* CONVENIENCE + OPENING HOURS */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Convenience */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Convenient, Local Healthcare</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our clinic is designed to make healthcare simple and accessible for the Gungahlin community.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Convenient Gungahlin location</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Accessible premises</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Comfortable waiting area</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Online and phone bookings</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Nearby pharmacy, pathology, and allied health services</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Efficient and patient-focused systems</li>
                </ul>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Opening Hours</h2>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                <table className="w-full text-left text-base">
                  <tbody>
                    {CLINIC_INFO.openingHours.map((entry) => (
                      <tr key={entry.days} className="border-b border-neutral-200 last:border-0">
                        <td className="py-2 font-medium text-neutral-700">{entry.days}</td>
                        <td className={`py-2 text-right ${entry.closed ? "font-medium text-red-600" : "text-neutral-600"}`}>{entry.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-lg bg-brand-50 p-4">
                <p className="text-sm font-medium text-brand-800">After Hours Care</p>
                <p className="mt-1 text-sm text-brand-700">For urgent medical care outside our opening hours, please call 000 in an emergency or attend your nearest hospital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block border-l-4 border-accent-400 pl-4 text-left">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Contact &amp; Location</h2>
          </div>
          <p className="text-lg font-semibold text-neutral-900">Infinity Medical Centre Gungahlin</p>
          <div className="mt-4 space-y-2 text-base text-neutral-600">
            <div className="flex items-center justify-center gap-2"><MapPin size={16} className="text-brand-600" aria-hidden="true" />{CLINIC_INFO.address}</div>
            <div className="flex items-center justify-center gap-2"><Phone size={16} className="text-brand-600" aria-hidden="true" />Phone: <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g,"")}`} className="text-brand-600 hover:underline">{CLINIC_INFO.phone}</a></div>
            <div className="flex items-center justify-center gap-2"><Phone size={16} className="text-brand-600" aria-hidden="true" />Fax: {CLINIC_INFO.fax}</div>
            <div className="flex items-center justify-center gap-2"><Mail size={16} className="text-brand-600" aria-hidden="true" />Email: <a href={`mailto:${CLINIC_INFO.email}`} className="text-brand-600 hover:underline">{CLINIC_INFO.email}</a></div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(CLINIC_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
            >
              <MapPin size={16} aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700"
            >
              Book Appointment <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-darkgreen-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Your Local Medical Centre in Gungahlin
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            If you are looking for accessible, high-quality healthcare in a welcoming environment, Infinity Medical Centre Gungahlin is here for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-lg transition-colors hover:bg-neutral-100"
            >
              Book Appointment Today <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Phone size={16} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
