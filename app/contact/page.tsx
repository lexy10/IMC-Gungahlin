import type { Metadata } from "next";
import Image from "next/image";
import MapEmbed from "@/components/MapEmbed";
import ContactForm from "@/components/ContactForm";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { PAGE_SEO, BASE_URL } from "@/lib/data/seo";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactSeo = PAGE_SEO.contact;

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    url: `${BASE_URL}${contactSeo.canonicalPath}`,
    type: contactSeo.ogType,
    images: [{ url: `${BASE_URL}/og-image.jpg` }],
  },
  alternates: {
    canonical: `${BASE_URL}${contactSeo.canonicalPath}`,
  },
};

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.5!2d149.1339!3d-35.1871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDExJzEzLjYiUyAxNDnCsDA4JzAyLjAiRQ!5e0!3m2!1sen!2sau!4v1700000000000";

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden md:min-h-[380px]">
        <Image
          src="/images/contact-us.jpg"
          alt="Contact Infinity Medical Centre Gungahlin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-800/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
         
          <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Get in touch with our team. We are here to assist you with your healthcare needs.
          </p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block border-l-4 border-accent-400 pl-4 text-left">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Get in Touch</h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            We are here to assist you with your healthcare needs. If you would like to book an appointment, make an enquiry, or speak with our team, please contact us using the details below.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + OPENING HOURS */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Details */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Contact Details</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p className="font-semibold text-neutral-900">Infinity Medical Centre Gungahlin</p>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{CLINIC_INFO.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                  <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`} className="text-brand-600 hover:underline">{CLINIC_INFO.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>Fax: {CLINIC_INFO.fax}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-brand-600 hover:underline">{CLINIC_INFO.email}</a>
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* BOOK AN APPOINTMENT */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block border-l-4 border-accent-400 pl-4 text-left">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Book an Appointment</h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">Appointments can be made:</p>
          <ul className="mt-4 inline-block space-y-2 text-left text-base text-neutral-600 md:text-lg">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Online via our booking system</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />By calling our reception team</li>
          </ul>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CLINIC_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700"
            >
              Book Appointment
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
            >
              <Phone size={16} aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION + PARKING */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Location & Directions */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Location &amp; Directions</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Infinity Medical Centre Gungahlin is conveniently located in the heart of Gungahlin, with easy access to nearby services and amenities.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Accessible premises</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Close to local shops and pharmacies</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />Public transport access nearby</li>
                </ul>
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                >
                  <MapPin size={16} aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Parking */}
            <div>
              <div className="mb-6 border-l-4 border-accent-400 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Parking</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                <p>Parking is available nearby for patient convenience.</p>
                <p>Please allow extra time during peak periods.</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10">
            <MapEmbed src={MAPS_EMBED_URL} />
          </div>
        </div>
      </section>

      {/* AFTER-HOURS CARE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
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
      </section>

      {/* ENQUIRY FORM */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 border-l-4 border-accent-400 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Send an Enquiry</h2>
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="bg-brand-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 border-l-4 border-accent-400 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">Important Information</h2>
          </div>
          <ul className="space-y-3 text-base leading-relaxed text-neutral-600 md:text-lg">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />For urgent medical issues, please call 000</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />For appointments, we recommend booking online or calling reception</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />For administrative requests (forms, reports), please contact reception</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-darkgreen-800 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            We&apos;re Here to Help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Our team is committed to providing accessible, high-quality healthcare to the Gungahlin community.
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
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
