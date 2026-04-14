# Requirements Document

## Introduction

Infinity Medical Centre (IMC) Gungahlin requires a professional, SEO-optimized website built with Next.js (App Router) and Tailwind CSS. The website serves as the primary digital presence for the clinic, providing patients with information about services, team, fees, and enabling appointment bookings. The site comprises 7 pages plus a persistent booking call-to-action. SEO is a major priority, requiring structured data, static generation, and Core Web Vitals optimization.

## Glossary

- **Website**: The Infinity Medical Centre Gungahlin Next.js web application
- **Page**: A distinct route within the Website rendered as a standalone view
- **Layout**: The persistent shell wrapping all Pages, containing the Header, Footer, and Booking_CTA
- **Header**: The top navigation bar containing the clinic logo, navigation links, and contact information
- **Footer**: The bottom section containing clinic details, quick links, opening hours, and legal information
- **Booking_CTA**: A persistent call-to-action element enabling users to initiate an appointment booking via HotDoc
- **Hero_Section**: The prominent banner area at the top of a Page containing a headline, subtext, and primary action
- **SEO_Module**: The collection of metadata, structured data, sitemap, and robots.txt configurations for search engine optimization
- **Structured_Data**: JSON-LD schema markup embedded in pages for search engine rich results
- **Contact_Form**: The enquiry form on the Contact page accepting name, phone, email, and message fields
- **Service_Card**: A UI component displaying a single medical service category with icon, title, and description
- **Team_Card**: A UI component displaying a doctor or staff member's photo, name, qualifications, and special interests
- **Fee_Table**: A tabular UI component displaying non-Medicare service fees
- **Map_Embed**: An embedded Google Maps iframe showing the clinic location
- **SSG**: Static Site Generation, a Next.js rendering strategy that pre-renders pages at build time
- **Core_Web_Vitals**: Google's set of metrics (LCP, FID, CLS) measuring page load performance and user experience
- **HotDoc**: The third-party appointment booking platform used by the clinic
- **RACGP**: Royal Australian College of General Practitioners
- **CALMS**: The after-hours medical service used by the clinic
- **AMA_Rate**: Australian Medical Association recommended fee schedule

## Requirements

### Requirement 1: Project Architecture and Rendering

**User Story:** As a developer, I want the website built with Next.js App Router and Tailwind CSS using static generation, so that pages load fast and are SEO-friendly.

#### Acceptance Criteria

1. THE Website SHALL use Next.js App Router as the routing and rendering framework
2. THE Website SHALL use Tailwind CSS as the styling framework
3. THE Website SHALL statically generate all 7 pages at build time using SSG
4. THE Website SHALL produce a production build with zero build errors
5. THE Website SHALL be deployable to Vercel or Netlify without additional configuration beyond standard Next.js deployment

### Requirement 2: Persistent Layout and Navigation

**User Story:** As a patient, I want consistent navigation and a visible booking button on every page, so that I can easily find information and book appointments.

#### Acceptance Criteria

1. THE Layout SHALL render the Header, Footer, and Booking_CTA on every Page
2. THE Header SHALL display the clinic logo, navigation links to all 7 pages, and the clinic phone number
3. THE Header SHALL render a responsive mobile navigation menu WHEN the viewport width is below 768px
4. THE Footer SHALL display clinic contact details, opening hours, quick links to all pages, and a copyright notice
5. THE Booking_CTA SHALL remain visible on screen at all times as a fixed-position element
6. THE Booking_CTA SHALL link to the HotDoc booking URL and open in a new browser tab
7. WHEN a user clicks a navigation link, THE Header SHALL visually indicate the currently active page

### Requirement 3: Home Page

**User Story:** As a prospective patient, I want a welcoming home page that summarises the clinic's offerings, so that I can quickly understand what Infinity Medical Centre provides.

#### Acceptance Criteria

1. THE Website SHALL render the Home Page at the root URL path "/"
2. THE Home Page SHALL display a Hero_Section with a headline, welcome subtext, and a primary Booking_CTA button
3. THE Home Page SHALL display a "Welcome" section introducing Infinity Medical Centre Gungahlin
4. THE Home Page SHALL display a "Why Choose Us" section containing exactly 6 value proposition items
5. THE Home Page SHALL display a services overview section with Service_Cards linking to the Services page
6. THE Home Page SHALL display a team teaser section with Team_Cards linking to the Our Team page
7. THE Home Page SHALL display a new patients section with a link to the New Patients page
8. THE Home Page SHALL display a convenience and location section with the clinic address
9. THE Home Page SHALL display opening hours (Mon-Fri 8:30am-5:00pm, Sat 9:00am-5:00pm, Sun closed)
10. THE Home Page SHALL display clinic contact details including phone number and address
11. THE Home Page SHALL display a final call-to-action section encouraging appointment booking

### Requirement 4: About Us Page

**User Story:** As a patient, I want to learn about the clinic's values, approach, and practice policies, so that I can decide if this clinic is right for me.

#### Acceptance Criteria

1. THE Website SHALL render the About Us Page at the URL path "/about"
2. THE About Us Page SHALL display sections for: who we are, purpose, approach to care, quality commitment referencing RACGP standards, team culture, community focus, facilities, and vision
3. THE About Us Page SHALL display practice information covering: appointment policy, cancellation policy, walk-in policy, test results policy, telephone consultation policy, after-hours care via CALMS, privacy policy, and accessibility information
4. WHEN a user views the About Us Page, THE About Us Page SHALL present practice information in a clearly separated section from the clinic overview content

### Requirement 5: Services Page

**User Story:** As a patient, I want to browse all medical services offered, so that I can find the care I need.

#### Acceptance Criteria

1. THE Website SHALL render the Services Page at the URL path "/services"
2. THE Services Page SHALL display exactly 12 service categories: general consultations, chronic disease management, preventive health, mental health, women's health, men's health, children's health, immunisations, skin checks, minor procedures, care plans, and patient-centred care statement
3. THE Services Page SHALL render each service category as a Service_Card with an icon, title, and description
4. THE Services Page SHALL display a patient-centred care statement section

### Requirement 6: Our Team Page

**User Story:** As a patient, I want to learn about the doctors and staff, so that I can choose a practitioner I feel comfortable with.

#### Acceptance Criteria

1. THE Website SHALL render the Our Team Page at the URL path "/our-team"
2. THE Our Team Page SHALL display a detailed bio for Dr Boniface Ochayi including qualifications and special interests
3. THE Our Team Page SHALL display a detailed bio for Dr Rotimi Akerele including qualifications and special interests
4. THE Our Team Page SHALL display each doctor bio as a Team_Card with photo placeholder, name, qualifications, and special interests
5. THE Our Team Page SHALL display an international medical graduates policy section
6. THE Our Team Page SHALL display a nursing and support team section
7. THE Our Team Page SHALL display a continuity of care section
8. THE Our Team Page SHALL display a "Join Our Team" recruitment section
9. THE Our Team Page SHALL display a booking call-to-action linking to HotDoc

### Requirement 7: Fees and Billing Page

**User Story:** As a patient, I want to understand the clinic's billing policies and fees, so that I know what to expect financially.

#### Acceptance Criteria

1. THE Website SHALL render the Fees and Billing Page at the URL path "/fees"
2. THE Fees and Billing Page SHALL display the bulk billing policy
3. THE Fees and Billing Page SHALL display a Fee_Table listing non-Medicare service fees: driver's licence medical at $150, pre-employment medical at AMA_Rate, workers compensation at AMA_Rate, and insurance reports as TBA
4. THE Fees and Billing Page SHALL display procedure fee information
5. THE Fees and Billing Page SHALL display Medicare card requirements
6. THE Fees and Billing Page SHALL display the cancellation policy
7. THE Fees and Billing Page SHALL display after-hours fee information

### Requirement 8: New Patients Page

**User Story:** As a new patient, I want clear guidance on what to bring and how to register, so that my first visit is smooth.

#### Acceptance Criteria

1. THE Website SHALL render the New Patients Page at the URL path "/new-patients"
2. THE New Patients Page SHALL display a welcome message for new patients
3. THE New Patients Page SHALL display a first visit checklist of items to bring
4. THE New Patients Page SHALL display appointment booking instructions with a link to HotDoc
5. THE New Patients Page SHALL display bulk billing information
6. THE New Patients Page SHALL display registration form instructions
7. THE New Patients Page SHALL display privacy information
8. THE New Patients Page SHALL display interpreter services information
9. THE New Patients Page SHALL display continuity of care information
10. THE New Patients Page SHALL display after-hours care information referencing CALMS
11. THE New Patients Page SHALL display the cancellation policy

### Requirement 9: Contact Us Page

**User Story:** As a patient, I want to find the clinic's location, hours, and send an enquiry, so that I can get in touch or visit.

#### Acceptance Criteria

1. THE Website SHALL render the Contact Us Page at the URL path "/contact"
2. THE Contact Us Page SHALL display the clinic address: Unit 1/63 Anthony Rolfe Avenue, Gungahlin ACT
3. THE Contact Us Page SHALL display opening hours: Monday to Friday 8:30am-5:00pm, Saturday 9:00am-5:00pm, Sunday closed
4. THE Contact Us Page SHALL display a Map_Embed showing the clinic location via Google Maps
5. THE Contact Us Page SHALL display parking information
6. THE Contact Us Page SHALL display a Contact_Form with fields for name, phone number, email address, and message
7. WHEN a user submits the Contact_Form with all required fields completed, THE Contact_Form SHALL send the enquiry data to a server-side API route
8. IF a user submits the Contact_Form with missing required fields, THEN THE Contact_Form SHALL display inline validation error messages for each incomplete field
9. THE Contact Us Page SHALL display after-hours contact information referencing CALMS

### Requirement 10: SEO — Metadata and Open Graph

**User Story:** As the clinic owner, I want each page to have optimised metadata and social sharing tags, so that the website ranks well in search engines and looks professional when shared.

#### Acceptance Criteria

1. THE SEO_Module SHALL generate a unique title tag and meta description for each of the 7 pages
2. THE SEO_Module SHALL generate Open Graph tags (og:title, og:description, og:image, og:url, og:type) for each page
3. THE SEO_Module SHALL generate a canonical URL tag for each page
4. THE SEO_Module SHALL set the og:type to "website" for the Home Page and "article" for all other pages

### Requirement 11: SEO — Structured Data

**User Story:** As the clinic owner, I want structured data markup on the website, so that search engines display rich results for the clinic.

#### Acceptance Criteria

1. THE SEO_Module SHALL embed a JSON-LD LocalBusiness schema on the Home Page containing clinic name, address, phone, opening hours, and geo-coordinates
2. THE SEO_Module SHALL embed a JSON-LD MedicalBusiness schema on the Services Page containing the medical specialties offered
3. THE SEO_Module SHALL embed a JSON-LD Physician schema for each doctor on the Our Team Page containing name, qualifications, and medical specialties
4. THE SEO_Module SHALL validate all JSON-LD schemas against Schema.org vocabulary

### Requirement 12: SEO — Sitemap and Robots

**User Story:** As the clinic owner, I want an auto-generated sitemap and robots.txt, so that search engines can efficiently crawl the website.

#### Acceptance Criteria

1. THE Website SHALL generate a sitemap.xml at build time listing all 7 page URLs with lastmod dates
2. THE Website SHALL generate a robots.txt file permitting all crawlers and referencing the sitemap URL
3. THE Website SHALL serve the sitemap.xml at the "/sitemap.xml" URL path
4. THE Website SHALL serve the robots.txt at the "/robots.txt" URL path

### Requirement 13: Image Optimization

**User Story:** As a patient, I want images to load quickly without layout shifts, so that the website feels fast and stable.

#### Acceptance Criteria

1. THE Website SHALL render all images using the Next.js next/image component
2. THE Website SHALL specify explicit width and height attributes on all images to prevent cumulative layout shift
3. THE Website SHALL lazy-load images that are below the initial viewport fold
4. THE Website SHALL eager-load the Hero_Section image and clinic logo in the Header

### Requirement 14: Responsive Design

**User Story:** As a patient browsing on my phone, I want the website to work well on all screen sizes, so that I can access information from any device.

#### Acceptance Criteria

1. THE Website SHALL render a usable layout at viewport widths of 320px, 768px, 1024px, and 1440px
2. THE Website SHALL use Tailwind CSS responsive utility classes for layout adaptation
3. THE Website SHALL render the mobile navigation menu as a collapsible hamburger menu at viewport widths below 768px
4. THE Fee_Table SHALL be horizontally scrollable on viewports below 640px to prevent content overflow

### Requirement 15: Accessibility

**User Story:** As a patient with accessibility needs, I want the website to be navigable with assistive technologies, so that I can access all information.

#### Acceptance Criteria

1. THE Website SHALL use semantic HTML elements (header, nav, main, section, footer) for page structure
2. THE Website SHALL provide alt text on all images
3. THE Website SHALL ensure all interactive elements are keyboard-navigable
4. THE Website SHALL maintain a minimum colour contrast ratio of 4.5:1 for body text against background colours
5. THE Website SHALL include ARIA labels on the mobile navigation toggle and the Booking_CTA

### Requirement 16: Performance and Core Web Vitals

**User Story:** As the clinic owner, I want the website to score well on Core Web Vitals, so that it ranks higher in Google search results.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Performance score of 90 or above on the Home Page when tested on mobile emulation
2. THE Website SHALL achieve a Largest Contentful Paint (LCP) of 2.5 seconds or less on the Home Page
3. THE Website SHALL achieve a Cumulative Layout Shift (CLS) of 0.1 or less on all pages
4. THE Website SHALL load zero render-blocking CSS or JavaScript files in the critical rendering path beyond the Next.js default bundle
