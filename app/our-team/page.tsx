import type { Metadata } from "next";
import Image from "next/image";
import { DOCTORS } from "@/lib/data/team";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { CalendarCheck, Phone, ArrowRight, Mail } from "lucide-react";

const teamSeo = PAGE_SEO["our-team"];

export const metadata: Metadata = {
  title: teamSeo.title,
  description: teamSeo.description,
  openGraph: {
    title: teamSeo.title,
    description: teamSeo.description,
    url: `${BASE_URL}${teamSeo.canonicalPath}`,
    type: teamSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${teamSeo.canonicalPath}`,
  },
};

const physicianJsonLd = DOCTORS.map((doctor) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  url: `${BASE_URL}/our-team`,
  qualifications: doctor.qualifications.join(", "),
  medicalSpecialty: doctor.specialInterests,
}));

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop";

const INTEREST_COLORS = [
  "bg-brand-50 text-brand-700",
  "bg-accent-50 text-accent-700",
  "bg-blue-50 text-blue-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-teal-50 text-teal-700",
];

export default function OurTeamPage() {
  return (
    <>
      {/* Physician JSON-LD */}
      {physicianJsonLd.map((jsonLd) => (
        <script
          key={jsonLd.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="/images/our-team-hero.webp"
          alt="Our medical team at Infinity Medical Centre"
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
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Meet the experienced doctors and dedicated staff committed to your health and wellbeing.
          </p>
        </div>
      </section>

      {/* OUR TEAM intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Team</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>At Infinity Medical Centre Gungahlin, our doctors are committed to delivering high-quality, patient-centred care in a respectful and supportive environment.</p>
                <p>We value building long-term relationships with our patients and providing continuity of care across all stages of life.</p>
                <p>Our team brings a diverse range of experience and clinical expertise to support the health and wellbeing of individuals, families, and the wider community.</p>
              </div>
            </div>
            <div>
              <Image src="https://i.pinimg.com/1200x/46/5a/f1/465af15f6684b1ea0d799fda31c951e3.jpg" alt="Medical team collaboration" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH TO CARE */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80" alt="Doctor listening to patient" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Approach to Care</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our doctors take the time to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Listen carefully to your concerns</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Provide clear explanations and practical advice</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Involve you in decisions about your care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Deliver evidence-based treatment</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Support your long-term health and wellbeing</li>
                </ul>
                <p>We believe that trust, communication, and continuity are essential to good healthcare.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR BONIFACE OCHAYI */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-5">
            {/* Photo column */}
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-xl bg-gradient-to-b from-brand-50 to-brand-100 p-6">
                <Image
                  src="/images/dr-boniface.jpg"
                  alt="Dr Boniface Ochayi"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover ring-2 ring-brand-200"
                />
              </div>
            </div>
            {/* Bio column */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Dr Boniface Ochayi</h2>
              <p className="mt-1 text-sm font-medium text-brand-600">MBBS, FRACGP, Dip Dermatology</p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                <p>Dr Boniface Ochayi is an experienced General Practitioner with over 20 years of clinical experience, including several years practising in Canberra.</p>
                <p>He provides comprehensive, patient-centred care and has a strong interest in managing both acute and chronic health conditions. Dr Ochayi is particularly experienced in dermatology and skin cancer medicine, as well as minor surgical procedures.</p>
                <p>His approach focuses on building strong relationships with patients, supporting long-term health, and delivering practical, evidence-based treatment.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-800">Special Interests:</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {DOCTORS[0].specialInterests.map((interest, idx) => (
                    <span key={interest} className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${INTEREST_COLORS[idx % INTEREST_COLORS.length]}`}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={CLINIC_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700"
                >
                  <CalendarCheck size={16} aria-hidden="true" />
                  Book Appointment with Dr Ochayi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR ROTIMI AKERELE */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-5">
            {/* Photo column */}
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-xl bg-gradient-to-b from-brand-50 to-brand-100 p-6">
                <Image
                  src="/images/dr-rotimi.jpg"
                  alt="Dr Rotimi Akerele"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover ring-2 ring-brand-200"
                />
              </div>
            </div>
            {/* Bio column */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Dr Rotimi Akerele</h2>
              <p className="mt-1 text-sm font-medium text-brand-600">MBBS, FRACGP, MMed (Skin Cancer), Graduate Certificate Musculoskeletal Medicine. Advance Certificate General Dermatology.</p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                <p>Dr Rotimi Akerele is a Fellow of the Royal Australian College of General Practitioners and brings with him a wealth of experience in all areas of general practice.</p>
                <p>After completing his medical training at the University of Ilorin College of Health Sciences in 2008, he has accrued extensive clinical and managerial experience in Nigeria and Australia.</p>
                <p>Dr Rotimi is passionate about supporting patients with mental health challenges and has completed the Focused Psychological Strategies Skills Training Program by the RACGP to effectively deliver evidence-based care in this area.</p>
                <p>He has completed both the Professional and Advanced Certificates in Skin Cancer Medicine and General Dermatology, and more notably, has earned a Master of Medicine in Skin Cancer from the University of Queensland. With a background in extensive surgical practice in Africa, Dr Rotimi has consistently achieved excellent outcomes in the diagnosis and surgical management of skin cancer and other minor procedures, including the excision of lumps/cysts and removal of ingrown toenails.</p>
                <p>Dr Rotimi also has a special interest in Musculoskeletal Medicine and pain management, holding a Certificate in Musculoskeletal Medicine from the Australian Association of Musculoskeletal Medicine (AAMM). He manages chronic pain and musculoskeletal dysfunction using non-surgical, targeted treatment modalities aimed at addressing the root cause of symptoms while improving function and reducing pain. These include:</p>
                <ul className="space-y-1.5 pl-1">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Platelet Rich Plasma (PRP)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Prolotherapy</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Perineural injection therapy</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Trigger point injections</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Cortisone injection</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Manual therapies</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Medicinal Cannabis</li>
                </ul>
                <p>He has undergone additional training in Ultrasound guided injections. Conditions treated include but not limited osteoarthritis (e.g. knee, hip, ankle), tennis &amp; golfer&apos;s elbow, bursitis, back pain, neck/shoulder pain, tendinopathies and lateral hip pain</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-800">Special Interest Areas</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {DOCTORS[1].specialInterests.map((interest, idx) => (
                    <span key={interest} className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${INTEREST_COLORS[idx % INTEREST_COLORS.length]}`}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={CLINIC_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700"
                >
                  <CalendarCheck size={16} aria-hidden="true" />
                  Book Appointment with Dr Akerele
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL MEDICAL GRADUATES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">International Medical Graduates</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Some of our doctors may be internationally trained and practise under structured supervision in accordance with Medical Board of Australia requirements.</p>
                <p>This ensures that all patients receive safe, high-quality care with appropriate clinical oversight and support.</p>
              </div>
            </div>
            <div>
              <Image src="https://mediconcall.com.au/wp-content/uploads/2023/03/GettyImages-998341988-2-edited.jpg" alt="International medical graduates" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* NURSING & SUPPORT TEAM */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="https://www.tagmedstaffing.com/wp-content/uploads/2024/03/medium-shot-nurses-with-face-masks.jpg" alt="Nursing and support team" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Our Nursing &amp; Support Team</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Our nurses and administrative staff play a vital role in delivering high-quality care.</p>
                <p>They support:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Clinical procedures and patient care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Chronic disease management</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Immunisations</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Care coordination</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Patient support and education</li>
                </ul>
                <p>Our reception team ensures a smooth, welcoming, and efficient experience for all patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUITY OF CARE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Continuity of Care</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>We encourage patients to see the same doctor where possible to support continuity of care.</p>
                <p>This allows us to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Better understand your health history</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Provide more personalised care</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Improve long-term health outcomes</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="https://media.istockphoto.com/id/1782848258/photo/teenager-at-a-medical-appointment.jpg?s=612x612&w=0&k=20&c=64NB_2mcmVQy0wkNVYfUAGWxb5Vse7Gj7GjYkMR4NKQ=" alt="Continuity of care" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* JOIN OUR TEAM */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image src="https://images.ctfassets.net/fltupc9ltp8m/6YgT9YHoo95UvYdtTb2WVQ/91edd6662a4f2fde37d2004909efaf4a/thcc-join-team-hero-mobile.jpg?fm=webp&w=1900&q=80" alt="Join our medical team" width={800} height={533} className="rounded-xl object-cover shadow-md" />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Join Our Team</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is a growing practice, and we welcome expressions of interest from healthcare professionals who are committed to patient-centred care.</p>
                <p>If you are a GP, nurse, or healthcare professional interested in joining our team, please contact us:</p>
                <a href={`mailto:${CLINIC_INFO.email}`} className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 hover:underline">
                  <Mail size={16} aria-hidden="true" />
                  {CLINIC_INFO.email}
                </a>
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
            Our doctors are here to support your health and wellbeing.
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
