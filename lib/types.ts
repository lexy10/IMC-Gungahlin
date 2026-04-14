// Shared TypeScript interfaces for the IMC clinic website

// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Clinic information
export interface OpeningHours {
  days: string;
  hours: string;
  closed?: boolean;
}

export interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  bookingUrl: string;
  openingHours: OpeningHours[];
  geo: { latitude: number; longitude: number };
}

// Services
export interface ServiceDetail {
  heading: string;
  subtitle: string;
  intro?: string;
  bullets: string[];
  outro?: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail?: ServiceDetail;
}

// Team
export interface Doctor {
  id: string;
  name: string;
  qualifications: string[];
  specialInterests: string[];
  photoSrc?: string;
  bio: string;
}

// Fees
export interface FeeItem {
  service: string;
  fee: string;
}

// Contact form
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface ContactApiResponse {
  success: boolean;
  error?: string;
}

// SEO
export interface PageSEO {
  title: string;
  description: string;
  ogType: "website" | "article";
  canonicalPath: string;
}
