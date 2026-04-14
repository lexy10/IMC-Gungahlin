// Services data — sourced from IMC WEBSITE STRUCTURE.docx

import type { ServiceCategory } from "@/lib/types";

export const SERVICES: ServiceCategory[] = [
  {
    id: "general-consultations",
    icon: "Stethoscope",
    title: "General Medical Consultations",
    description:
      "We provide care for a wide range of acute and ongoing health conditions including cold and flu symptoms, infections, minor injuries, general health concerns, and ongoing medical conditions.",
    detail: {
      heading: "GENERAL PRACTICE",
      subtitle: "General Medical Consultations",
      intro: "We provide care for a wide range of acute and ongoing health conditions.",
      bullets: [
        "Cold and flu symptoms",
        "Infections",
        "Minor injuries",
        "General health concerns",
        "Ongoing medical conditions",
      ],
      outro: "Our doctors take a thorough and personalised approach to ensure appropriate diagnosis, treatment, and follow-up care.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    },
  },
  {
    id: "chronic-disease",
    icon: "HeartPulse",
    title: "Chronic Disease Management",
    description:
      "We support patients living with chronic and complex conditions through structured care planning and regular review, including diabetes, hypertension, asthma, heart disease, and arthritis.",
    detail: {
      heading: "CHRONIC DISEASE MANAGEMENT",
      subtitle: "Ongoing Health Support",
      intro: "We support patients living with chronic and complex conditions through structured care planning and regular review.",
      bullets: [
        "Diabetes management",
        "Hypertension",
        "Asthma and respiratory conditions",
        "Heart disease",
        "Arthritis and musculoskeletal conditions",
      ],
      outro: "We provide care plans, regular monitoring, and coordinated care with allied health services.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  },
  {
    id: "preventive-health",
    icon: "ShieldCheck",
    title: "Preventive Health & Check-Ups",
    description:
      "Preventive care is essential for long-term health and wellbeing. We offer general health checks, 45–49 year old health assessments, over 75 health assessments, and risk assessments and screening.",
    detail: {
      heading: "PREVENTIVE HEALTH & CHECK-UPS",
      subtitle: "Health Assessments",
      intro: "Preventive care is essential for long-term health and wellbeing. We offer:",
      bullets: [
        "General health checks",
        "45–49 year old health assessments",
        "Over 75 health assessments",
        "Risk assessments and screening",
      ],
      outro: "Our focus is early detection, prevention, and proactive management.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
  },
  {
    id: "mental-health",
    icon: "Brain",
    title: "Mental Health Care",
    description:
      "We provide supportive and confidential care for mental health concerns including GP Mental Health Treatment Plans, anxiety and depression support, and stress-related conditions.",
    detail: {
      heading: "MENTAL HEALTH",
      subtitle: "Mental Health Care",
      intro: "We provide supportive and confidential care for mental health concerns.",
      bullets: [
        "Mental health consultations",
        "GP Mental Health Treatment Plans",
        "Anxiety and depression support",
        "Stress-related conditions",
      ],
      outro: "We work collaboratively with patients and, where appropriate, refer to psychologists and other specialists.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
    },
  },
  {
    id: "womens-health",
    icon: "Heart",
    title: "Women's Health",
    description:
      "Comprehensive women's health services including cervical screening, contraception advice, menstrual and hormonal concerns, pregnancy care, and general women's health consultations.",
    detail: {
      heading: "WOMEN'S HEALTH",
      subtitle: "Comprehensive Women's Health Services",
      bullets: [
        "Cervical screening",
        "Contraception advice",
        "Menstrual and hormonal concerns",
        "Pregnancy care (shared care where applicable)",
        "General women's health consultations",
      ],
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&q=80",
    },
  },
  {
    id: "mens-health",
    icon: "Activity",
    title: "Men's Health",
    description:
      "Men's health services including general health checks, cardiovascular risk assessment, prostate health discussions, and preventive health screening.",
    detail: {
      heading: "MEN'S HEALTH",
      subtitle: "Men's Health Services",
      bullets: [
        "General health checks",
        "Cardiovascular risk assessment",
        "Prostate health discussions",
        "Preventive health screening",
      ],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    },
  },
  {
    id: "childrens-health",
    icon: "Baby",
    title: "Children's Health",
    description:
      "We provide care for children of all ages in a supportive and family-friendly environment, covering childhood illnesses, developmental concerns, immunisations, and general paediatric care.",
    detail: {
      heading: "CHILDREN'S HEALTH",
      subtitle: "Family & Children's Care",
      intro: "We provide care for children of all ages in a supportive and family-friendly environment.",
      bullets: [
        "Childhood illnesses",
        "Developmental concerns",
        "Immunisations",
        "General paediatric care",
      ],
      image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=800&q=80",
    },
  },
  {
    id: "immunisations",
    icon: "Syringe",
    title: "Immunisations",
    description:
      "Childhood immunisations, adult vaccinations, seasonal influenza vaccines, and travel vaccinations. We follow national immunisation guidelines to ensure safe and effective care.",
    detail: {
      heading: "IMMUNISATIONS",
      subtitle: "Vaccinations",
      bullets: [
        "Childhood immunisations",
        "Adult vaccinations",
        "Seasonal influenza vaccines",
        "Travel vaccinations (where applicable)",
      ],
      outro: "We follow national immunisation guidelines to ensure safe and effective care.",
      image: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=800&q=80",
    },
  },
  {
    id: "skin-checks",
    icon: "Search",
    title: "Skin Cancer Checks",
    description:
      "Skin examinations, assessment of suspicious lesions, and preventive skin health advice.",
    detail: {
      heading: "SKIN CHECKS",
      subtitle: "Skin Cancer Checks",
      bullets: [
        "Skin examinations",
        "Assessment of suspicious lesions",
        "Preventive skin health advice",
      ],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    },
  },
  {
    id: "minor-procedures",
    icon: "Scissors",
    title: "Minor Procedures",
    description:
      "Where appropriate, we offer minor procedures including wound care, simple excisions, cryotherapy, and removal of skin lesions.",
    detail: {
      heading: "MINOR PROCEDURES",
      subtitle: "In-Clinic Procedures",
      intro: "Where appropriate, we offer minor procedures including:",
      bullets: [
        "Wound care",
        "Simple excisions",
        "Cryotherapy",
        "Removal of skin lesions",
      ],
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    },
  },
  {
    id: "care-plans",
    icon: "ClipboardList",
    title: "Care Plans & Health Management",
    description:
      "Coordinated care including GP Management Plans (GPMP), Team Care Arrangements (TCA), chronic disease care coordination, and allied health referrals.",
    detail: {
      heading: "CARE PLANS & HEALTH MANAGEMENT",
      subtitle: "Coordinated Care",
      bullets: [
        "GP Management Plans (GPMP)",
        "Team Care Arrangements (TCA)",
        "Chronic disease care coordination",
        "Allied health referrals",
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  },
  {
    id: "patient-centred-care",
    icon: "Users",
    title: "Patient-Centred Care",
    description:
      "At Infinity Medical Centre Gungahlin, we focus on respectful, compassionate care, clear communication, continuity with your regular GP, and supporting patients in making informed decisions.",
    detail: {
      heading: "PATIENT-CENTRED CARE",
      subtitle: "Our Commitment to You",
      intro: "At Infinity Medical Centre Gungahlin, we focus on:",
      bullets: [
        "Respectful, compassionate care",
        "Clear communication",
        "Continuity with your regular GP",
        "Supporting patients in making informed decisions",
      ],
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    },
  },
];
