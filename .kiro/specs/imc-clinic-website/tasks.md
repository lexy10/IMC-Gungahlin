# Implementation Plan: IMC Clinic Website

## Overview

Build the Infinity Medical Centre Gungahlin website as a Next.js App Router application with Tailwind CSS, static generation for all 7 pages, SEO structured data, and a contact form API route. Content is sourced from the "IMC WEBSITE STRUCTURE.docx" document in the workspace root and stored in TypeScript data files. Placeholder images from Unsplash/Freepik/Pexels are used throughout — the user will replace any they don't like.

## Tasks

- [x] 1. Scaffold Next.js project and configure Tailwind CSS
  - [x] 1.1 Initialize Next.js App Router project with TypeScript and Tailwind CSS
    - Create `app/layout.tsx`, `app/page.tsx`, `tailwind.config.ts`, `postcss.config.js`
    - Configure Tailwind with clinic brand colours, fonts, and responsive breakpoints
    - Install dependencies: `next`, `react`, `react-dom`, `tailwindcss`, `postcss`, `autoprefixer`
    - _Requirements: 1.1, 1.2_
  - [x] 1.2 Create TypeScript data files with clinic content
    - Create `lib/data/clinic.ts` with `ClinicInfo`, `NAV_LINKS`, and `OpeningHours` data
    - Create `lib/data/services.ts` with 12 `ServiceCategory` entries
    - Create `lib/data/team.ts` with `Doctor` entries for Dr Boniface Ochayi and Dr Rotimi Akerele
    - Create `lib/data/fees.ts` with `NON_MEDICARE_FEES` array
    - Create `lib/data/seo.ts` with `PAGE_SEO` metadata for all 7 pages
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 5.2, 6.2, 6.3, 7.3, 10.1_
  - [x] 1.3 Create shared TypeScript interfaces
    - Create `lib/types.ts` with all data model interfaces: `NavLink`, `ClinicInfo`, `OpeningHours`, `ServiceCategory`, `Doctor`, `FeeItem`, `ContactFormData`, `ContactFormErrors`, `ContactApiResponse`, `PageSEO`
    - _Requirements: 1.1_

- [x] 2. Implement persistent layout components (Header, Footer, BookingCTA)
  - [x] 2.1 Implement RootLayout with Header, Footer, and BookingCTA
    - Create `app/layout.tsx` with semantic HTML structure (`<header>`, `<main>`, `<footer>`)
    - Import and render Header, Footer, and BookingCTA components
    - Set up global metadata defaults
    - _Requirements: 2.1, 15.1_
  - [x] 2.2 Implement Header component with desktop navigation
    - Create `components/Header.tsx` as a server component
    - Display clinic logo, navigation links to all 7 pages, and clinic phone number
    - Highlight the currently active page link
    - _Requirements: 2.2, 2.7, 15.1_
  - [x] 2.3 Implement MobileNav client component
    - Create `components/MobileNav.tsx` as a client component with `"use client"` directive
    - Render hamburger toggle button with ARIA label at viewports below 768px
    - Slide-out menu with links to all 7 pages
    - _Requirements: 2.3, 14.3, 15.3, 15.5_
  - [x] 2.4 Implement Footer component
    - Create `components/Footer.tsx` with clinic contact details, opening hours, quick links to all pages, and copyright notice
    - Use semantic `<footer>` element
    - _Requirements: 2.4, 15.1_
  - [x] 2.5 Implement BookingCTA component
    - Create `components/BookingCTA.tsx` as a fixed-position element
    - Link to HotDoc booking URL, open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
    - Add ARIA label for accessibility
    - _Requirements: 2.5, 2.6, 15.5_

- [x] 3. Implement shared UI components
  - [x] 3.1 Implement HeroSection component
    - Create `components/HeroSection.tsx` with `headline`, `subtext`, `ctaText`, `ctaHref` props
    - Eager-load hero image using `next/image` with `priority` attribute
    - Use a placeholder image from Unsplash/Pexels (medical/clinic themed)
    - _Requirements: 3.2, 13.1, 13.4_
  - [x] 3.2 Implement ServiceCard component
    - Create `components/ServiceCard.tsx` with `icon`, `title`, `description` props
    - Use Lucide icons or similar icon library
    - _Requirements: 5.3_
  - [x] 3.3 Implement TeamCard component
    - Create `components/TeamCard.tsx` with `name`, `qualifications`, `specialInterests`, `photoSrc` props
    - Render placeholder photo from Unsplash/Pexels, display name, all qualifications, and all special interests
    - Use `next/image` with explicit width/height
    - _Requirements: 6.4, 13.1, 13.2_
  - [x] 3.4 Implement FeeTable component
    - Create `components/FeeTable.tsx` accepting `fees: FeeItem[]` prop
    - Render responsive table, horizontally scrollable on viewports below 640px
    - _Requirements: 7.3, 14.4_
  - [x] 3.5 Implement SectionHeading component
    - Create `components/SectionHeading.tsx` with `title` and optional `subtitle` props
    - Consistent typography across all pages

- [x] 4. Checkpoint — Verify layout and shared components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement Home Page
  - [x] 5.1 Build Home Page with all sections
    - Create `app/page.tsx` at route "/"
    - Render HeroSection with headline, welcome subtext, and primary BookingCTA button
    - Render "Welcome" section introducing the clinic
    - Render "Why Choose Us" section with exactly 6 value proposition items
    - Render services overview with ServiceCards linking to /services
    - Render team teaser with TeamCards linking to /our-team
    - Render new patients teaser linking to /new-patients
    - Render convenience/location section with clinic address
    - Render opening hours (Mon-Fri 8:30am-5:00pm, Sat 9:00am-5:00pm, Sun closed)
    - Render clinic contact details (phone, address)
    - Render final CTA section encouraging booking
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11_
  - [x] 5.2 Add Home Page SEO metadata and LocalBusiness JSON-LD
    - Export `metadata` object with title, description, Open Graph tags (og:type "website"), and canonical URL
    - Embed JSON-LD `LocalBusiness` schema with clinic name, address, phone, opening hours, and geo-coordinates
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 11.1_

- [x] 6. Implement About Us Page
  - [x] 6.1 Build About Us Page with clinic overview and practice information
    - Create `app/about/page.tsx` at route "/about"
    - Render sections: who we are, purpose, approach to care, quality commitment (RACGP), team culture, community focus, facilities, vision
    - Render practice information in a clearly separated section: appointment policy, cancellation policy, walk-in policy, test results policy, telephone consultation policy, after-hours care (CALMS), privacy policy, accessibility info
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  - [x] 6.2 Add About Us Page SEO metadata
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 7. Implement Services Page
  - [x] 7.1 Build Services Page with 12 service categories
    - Create `app/services/page.tsx` at route "/services"
    - Render 12 ServiceCards: general consultations, chronic disease management, preventive health, mental health, women's health, men's health, children's health, immunisations, skin checks, minor procedures, care plans, patient-centred care statement
    - Render patient-centred care statement section
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  - [x] 7.2 Add Services Page SEO metadata and MedicalBusiness JSON-LD
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - Embed JSON-LD `MedicalBusiness` schema with medical specialties
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 11.2_

- [x] 8. Implement Our Team Page
  - [x] 8.1 Build Our Team Page with doctor bios and team sections
    - Create `app/our-team/page.tsx` at route "/our-team"
    - Render detailed bio for Dr Boniface Ochayi (TeamCard with qualifications and special interests)
    - Render detailed bio for Dr Rotimi Akerele (TeamCard with qualifications and special interests)
    - Render international medical graduates policy section
    - Render nursing and support team section
    - Render continuity of care section
    - Render "Join Our Team" recruitment section
    - Render booking CTA linking to HotDoc
    - Use placeholder photos from Unsplash/Pexels
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9_
  - [x] 8.2 Add Our Team Page SEO metadata and Physician JSON-LD
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - Embed JSON-LD `Physician` schema for each doctor with name, qualifications, and medical specialties
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 11.3_

- [x] 9. Implement Fees & Billing Page
  - [x] 9.1 Build Fees & Billing Page with billing policies and fee table
    - Create `app/fees/page.tsx` at route "/fees"
    - Render bulk billing policy
    - Render FeeTable with non-Medicare fees: driver's licence medical $150, pre-employment medical AMA Rate, workers compensation AMA Rate, insurance reports TBA
    - Render procedure fee information
    - Render Medicare card requirements
    - Render cancellation policy
    - Render after-hours fee information
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_
  - [x] 9.2 Add Fees & Billing Page SEO metadata
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 10. Implement New Patients Page
  - [x] 10.1 Build New Patients Page with all guidance sections
    - Create `app/new-patients/page.tsx` at route "/new-patients"
    - Render welcome message, first visit checklist, booking instructions (HotDoc link), bulk billing info, registration form instructions, privacy info, interpreter services, continuity of care, after-hours care (CALMS), cancellation policy
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10, 8.11_
  - [x] 10.2 Add New Patients Page SEO metadata
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 11. Checkpoint — Verify all static pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Implement Contact Us Page with form and API route
  - [x] 12.1 Build Contact Us Page with contact info, map, and form
    - Create `app/contact/page.tsx` at route "/contact"
    - Render clinic address, opening hours, parking information, after-hours info (CALMS)
    - Render MapEmbed component with Google Maps iframe (lazy-loaded)
    - Render ContactForm component
    - Source all content from "IMC WEBSITE STRUCTURE.docx"
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.9_
  - [x] 12.2 Implement ContactForm client component with validation
    - Create `components/ContactForm.tsx` as a client component
    - Fields: name, phone, email, message (all required)
    - Client-side validation: show inline error messages for empty fields, invalid email, invalid phone
    - On valid submission, POST to `/api/contact`
    - Display success message or error banner with retry option and clinic phone fallback
    - _Requirements: 9.6, 9.7, 9.8_
  - [x] 12.3 Implement contact API route
    - Create `app/api/contact/route.ts`
    - Validate and sanitize request body
    - Return 200 on success, 400 for validation failures, 500 on server error
    - Log or forward enquiry (placeholder implementation for email service)
    - _Requirements: 9.7_
  - [x] 12.4 Add Contact Us Page SEO metadata
    - Export `metadata` with title, description, Open Graph tags (og:type "article"), and canonical URL
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 13. Implement SEO infrastructure (sitemap, robots.txt, structured data validation)
  - [x] 13.1 Create sitemap.ts and robots.ts
    - Create `app/sitemap.ts` exporting a `sitemap()` function listing all 7 page URLs with `lastModified` dates
    - Create `app/robots.ts` exporting a `robots()` function permitting all crawlers and referencing the sitemap URL
    - _Requirements: 12.1, 12.2, 12.3, 12.4_
  - [x] 13.2 Validate all JSON-LD structured data schemas
    - Verify LocalBusiness, MedicalBusiness, and Physician schemas conform to Schema.org vocabulary
    - Ensure all required fields are present and correctly typed
    - _Requirements: 11.4_

- [x] 14. Image optimization and responsive design pass
  - [x] 14.1 Audit and fix image optimization across all pages
    - Ensure all images use `next/image` with explicit `width` and `height`
    - Set `priority` on HeroSection image and Header logo (eager-load above fold)
    - Set `loading="lazy"` on below-fold images
    - Add descriptive `alt` text on all images
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 15.2_
  - [x] 14.2 Verify responsive design at all breakpoints
    - Ensure usable layout at 320px, 768px, 1024px, and 1440px using Tailwind responsive utilities
    - Verify mobile hamburger menu renders below 768px
    - Verify FeeTable is horizontally scrollable below 640px
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [x] 15. Accessibility pass
  - [x] 15.1 Audit and fix accessibility across all pages
    - Verify semantic HTML elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
    - Verify all interactive elements are keyboard-navigable
    - Verify minimum 4.5:1 colour contrast ratio for body text
    - Verify ARIA labels on MobileNav toggle and BookingCTA
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [x] 16. Checkpoint — Full build and integration verification
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 17. Write property-based tests and unit tests
  - [ ]* 17.1 Write property test: TeamCard renders all required doctor fields
    - **Property 1: TeamCard renders all required doctor fields**
    - Generate random Doctor objects with fast-check → render TeamCard → assert output contains name, all qualifications, and all special interests
    - **Validates: Requirement 6.4**
  - [ ]* 17.2 Write property test: FeeTable renders all fee items
    - **Property 2: FeeTable renders all fee items**
    - Generate random non-empty FeeItem arrays with fast-check → render FeeTable → assert output contains every service name and fee value
    - **Validates: Requirement 7.3**
  - [ ]* 17.3 Write property test: Valid contact form data passes validation
    - **Property 3: Valid contact form data passes validation**
    - Generate random valid ContactFormData with fast-check → run validation → assert zero errors and payload matches input
    - **Validates: Requirement 9.7**
  - [ ]* 17.4 Write property test: Missing contact form fields produce per-field errors
    - **Property 4: Missing contact form fields produce per-field validation errors**
    - Generate random subsets of empty fields with fast-check → run validation → assert error for each empty field, no error for valid fields
    - **Validates: Requirement 9.8**
  - [ ]* 17.5 Write property test: Physician JSON-LD generation is correct
    - **Property 5: Physician JSON-LD generation is correct and structurally valid**
    - Generate random Doctor objects with fast-check → generate Physician JSON-LD → assert @context, @type, name, qualifications, medicalSpecialty are present and correct
    - **Validates: Requirements 11.3, 11.4**
  - [ ]* 17.6 Write unit tests for ContactForm validation logic
    - Test edge cases: empty fields, invalid email formats, invalid phone formats
    - Test success and error states
    - _Requirements: 9.7, 9.8_
  - [ ]* 17.7 Write unit tests for API route /api/contact
    - Test 200 response for valid data, 400 for invalid data, error handling
    - _Requirements: 9.7_

- [x] 18. Final checkpoint — Ensure all tests pass and build succeeds
  - Run `next build` and verify zero build errors
  - Verify 7 static HTML pages are generated
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 1.3, 1.4, 1.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document using fast-check
- All content should be sourced from "IMC WEBSITE STRUCTURE.docx" in the workspace root
- Placeholder images from Unsplash/Freepik/Pexels should be used — the user will replace any they don't like
