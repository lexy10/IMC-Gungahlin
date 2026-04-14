// Clinic information data — sourced from IMC WEBSITE STRUCTURE.docx

import type { NavLink, ClinicInfo } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Fees & Billing", href: "/fees" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact Us", href: "/contact" },
];

export const CLINIC_INFO: ClinicInfo = {
  name: "Infinity Medical Centre Gungahlin",
  address: "Unit 1/61 Anthony Rolfe Avenue, Gungahlin ACT",
  phone: "(02) 6109 2138",
  fax: "(02) 6109 2139",
  email: "reception@imcgungahlin.com.au",
  bookingUrl:
    "https://www.hotdoc.com.au/medical-centres/gungahlin-ACT-2912/infinity-medical-centre-gungahlin/doctors",
  openingHours: [
    { days: "Monday", hours: "8:30 AM – 5:00 PM" },
    { days: "Tuesday", hours: "8:30 AM – 5:00 PM" },
    { days: "Wednesday", hours: "8:30 AM – 5:00 PM" },
    { days: "Thursday", hours: "8:30 AM – 5:00 PM" },
    { days: "Friday", hours: "8:30 AM – 5:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 5:00 PM" },
    { days: "Sunday & Public Holidays", hours: "Closed", closed: true },
  ],
  geo: {
    latitude: -35.1871,
    longitude: 149.1339,
  },
};
