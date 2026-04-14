import type { Metadata } from "next";
import Image from "next/image";
import ServiceCardExpand from "@/components/ServiceCardExpand";
import { SERVICES } from "@/lib/data/services";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { Phone, ArrowRight, Heart } from "lucide-react";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Brain,
  Activity,
  Baby,
  Syringe,
  Search,
  Scissors,
  ClipboardList,
  Users,
} from "lucide-react";

const servicesSeo = PAGE_SEO.services;

export const metadata: Metadata = {
  title: servicesSeo.title,
  description: servicesSeo.description,
  openGraph: {
    title: servicesSeo.title,
    description: servicesSeo.description,
    url: `${BASE_URL}${servicesSeo.canonicalPath}`,
    type: servicesSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${servicesSeo.canonicalPath}`,
  },
};

const medicalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: CLINIC_INFO.name,
  url: `${BASE_URL}/services`,
  telephone: CLINIC_INFO.phone,
  medicalSpecialty: SERVICES.map((s) => s.title),
};

const SERVICE_DETAILS = [
  {
    icon: <Stethoscope size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "General Practice",
    subtitle: "General Medical Consultations",
    preview: "We provide care for a wide range of acute and ongoing health conditions.",
    bullets: ["Cold and flu symptoms", "Infections", "Minor injuries", "General health concerns", "Ongoing medical conditions"],
    outro: "Our doctors take a thorough and personalised approach to ensure appropriate diagnosis, treatment, and follow-up care.",
  },
  {
    icon: <HeartPulse size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Chronic Disease Management",
    subtitle: "Ongoing Health Support",
    preview: "We support patients living with chronic and complex conditions through structured care planning and regular review.",
    bullets: ["Diabetes management", "Hypertension", "Asthma and respiratory conditions", "Heart disease", "Arthritis and musculoskeletal conditions"],
    outro: "We provide care plans, regular monitoring, and coordinated care with allied health services.",
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Preventive Health & Check-Ups",
    subtitle: "Health Assessments",
    preview: "Preventive care is essential for long-term health and wellbeing. We offer:",
    bullets: ["General health checks", "45–49 year old health assessments", "Over 75 health assessments", "Risk assessments and screening"],
    outro: "Our focus is early detection, prevention, and proactive management.",
  },
  {
    icon: <Brain size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Mental Health",
    subtitle: "Mental Health Care",
    preview: "We provide supportive and confidential care for mental health concerns.",
    bullets: ["Mental health consultations", "GP Mental Health Treatment Plans", "Anxiety and depression support", "Stress-related conditions"],
    outro: "We work collaboratively with patients and, where appropriate, refer to psychologists and other specialists.",
  },
  {
    icon: <Heart size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Women\u2019s Health",
    subtitle: "Comprehensive Women\u2019s Health Services",
    preview: "Comprehensive women\u2019s health services tailored to your needs.",
    bullets: ["Cervical screening", "Contraception advice", "Menstrual and hormonal concerns", "Pregnancy care (shared care where applicable)", "General women\u2019s health consultations"],
  },
  {
    icon: <Activity size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Men\u2019s Health",
    subtitle: "Men\u2019s Health Services",
    preview: "Dedicated men\u2019s health services for all ages.",
    bullets: ["General health checks", "Cardiovascular risk assessment", "Prostate health discussions", "Preventive health screening"],
  },
  {
    icon: <Baby size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Children\u2019s Health",
    subtitle: "Family & Children\u2019s Care",
    preview: "We provide care for children of all ages in a supportive and family-friendly environment.",
    bullets: ["Childhood illnesses", "Developmental concerns", "Immunisations", "General paediatric care"],
  },
  {
    icon: <Syringe size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Immunisations",
    subtitle: "Vaccinations",
    preview: "We deliver a range of vaccinations to all ages.",
    bullets: ["Childhood immunisations", "Adult vaccinations", "Seasonal influenza vaccines", "Travel vaccinations (where applicable)"],
    outro: "We follow national immunisation guidelines to ensure safe and effective care.",
  },
  {
    icon: <Search size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Skin Checks",
    subtitle: "Skin Cancer Checks",
    preview: "Comprehensive skin examinations and preventive advice.",
    bullets: ["Skin examinations", "Assessment of suspicious lesions", "Preventive skin health advice"],
  },
  {
    icon: <Scissors size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Minor Procedures",
    subtitle: "In-Clinic Procedures",
    preview: "Where appropriate, we offer minor procedures including:",
    bullets: ["Wound care", "Simple excisions", "Cryotherapy", "Removal of skin lesions"],
  },
  {
    icon: <ClipboardList size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Care Plans & Health Management",
    subtitle: "Coordinated Care",
    preview: "Structured care coordination for ongoing health needs.",
    bullets: ["GP Management Plans (GPMP)", "Team Care Arrangements (TCA)", "Chronic disease care coordination", "Allied health referrals"],
  },
  {
    icon: <Users size={40} strokeWidth={1.5} aria-hidden="true" />,
    heading: "Patient-Centred Care",
    subtitle: "Our Commitment to You",
    preview: "At Infinity Medical Centre Gungahlin, we focus on:",
    bullets: ["Respectful, compassionate care", "Clear communication", "Continuity with your regular GP", "Supporting patients in making informed decisions"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }} />

      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="/images/our-services.webp"
          alt="Our Services — Infinity Medical Centre Gungahlin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-800/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-200">
            Infinity Medical Centre Gungahlin
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Comprehensive healthcare services for you and your family at every stage of life.
          </p>
        </div>
      </section>

      {/* Service Cards Grid — inline expand */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_DETAILS.map((s) => (
              <ServiceCardExpand
                key={s.heading}
                icon={s.icon}
                heading={s.heading}
                subtitle={s.subtitle}
                preview={s.preview}
                bullets={s.bullets}
                outro={s.outro}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-darkgreen-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Book an Appointment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Our experienced team is here to help with all your healthcare needs.
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
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-darkgreen-900"
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
