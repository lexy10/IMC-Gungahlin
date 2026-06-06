// SEO metadata for all pages — sourced from IMC WEBSITE STRUCTURE.docx

import type { PageSEO } from "@/lib/types";

export const BASE_URL = "https://infinitymedicalcentre.com.au";

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "Infinity Medical Centre Gungahlin | Family GP Clinic",
    description:
      "Bulk billing family medical centre in Gungahlin, ACT. Accessible, high-quality, patient-centred healthcare for individuals and families. Book an appointment today.",
    ogType: "website",
    canonicalPath: "/",
  },
  about: {
    title: "About Us | Infinity Medical Centre Gungahlin",
    description:
      "Learn about Infinity Medical Centre Gungahlin — our purpose, approach to care, commitment to quality, team culture, and practice policies.",
    ogType: "article",
    canonicalPath: "/about",
  },
  services: {
    title: "Our Services | Infinity Medical Centre Gungahlin",
    description:
      "Comprehensive general practice and preventive healthcare services including chronic disease management, mental health, women's and men's health, immunisations, skin checks, and minor procedures.",
    ogType: "article",
    canonicalPath: "/services",
  },
  "our-team": {
    title: "Our Team | Infinity Medical Centre Gungahlin",
    description:
      "Meet our experienced doctors at Infinity Medical Centre Gungahlin. Dr Boniface Ochayi and Dr Rotimi Akerele provide high-quality, patient-centred care.",
    ogType: "article",
    canonicalPath: "/our-team",
  },
  fees: {
    title: "Fees & Billing | Infinity Medical Centre Gungahlin",
    description:
      "Bulk billing for all Medicare-eligible consultations. View our fee schedule for non-Medicare services including driver's licence medicals, pre-employment medicals, and workers' compensation.",
    ogType: "article",
    canonicalPath: "/fees",
  },
  "new-patients": {
    title: "New Patients | Infinity Medical Centre Gungahlin",
    description:
      "Welcome to Infinity Medical Centre Gungahlin. Information for new patients including what to bring, how to book, bulk billing details, and registration.",
    ogType: "article",
    canonicalPath: "/new-patients",
  },
  contact: {
    title: "Contact Us | Infinity Medical Centre Gungahlin",
    description:
      "Contact Infinity Medical Centre Gungahlin. Located at Unit 1/61 Anthony Rolfe Avenue, Gungahlin ACT. Book online or call us. Open Monday to Saturday.",
    ogType: "article",
    canonicalPath: "/contact",
  },
};
