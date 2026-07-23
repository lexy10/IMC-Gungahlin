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
  address: "Unit 1/61 Anthony Rolfe Avenue, Gungahlin ACT 2912",
  phone: "(02) 9094 3330",
  fax: "(02) 9094 3331",
  bookingUrl:
    "https://www.hotdoc.com.au/medical-centres/gungahlin-ACT-2912/infinity-medical-centre-gungahlin/doctors",
  bookingWidgetUrl:
    "https://www.hotdoc.com.au/medical-centres/gungahlin-ACT-2912/infinity-medical-centre-gungahlin/doctors?wp=w_lightbox",
  openingHours: [
    { days: "Monday", hours: "8:30 AM – 5:00 PM" },
    { days: "Tuesday", hours: "8:30 AM – 5:00 PM" },
    { days: "Wednesday", hours: "8:30 AM – 5:00 PM" },
    { days: "Thursday", hours: "8:30 AM – 5:00 PM" },
    { days: "Friday", hours: "8:30 AM – 5:00 PM" },
    { days: "Saturday", hours: "12:00 PM – 6:00 PM" },
    { days: "Sunday & Public Holidays", hours: "Closed", closed: true },
  ],
  geo: {
    latitude: -35.1871,
    longitude: 149.1339,
  },
};
