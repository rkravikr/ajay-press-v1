# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Ajay Press Website
**Location:** Arwal, Bihar
**Owner:** Ravi Kumar Varma

---

## 1. Overview

### Purpose
Build a mobile-first, high-conversion website for Ajay Press to showcase services and generate leads via WhatsApp and calls.

### Business Summary
Ajay Press offers three core service categories:
- **Printing Services** – Wedding cards, visiting cards, flex banners, invitation cards
- **Mobile & Laptop Repair** – Screen replacement, battery replacement, software issues
- **Digital Services** – Online form filling, internet work, stamps

### Core Goals
- Showcase services professionally
- Improve local SEO visibility
- Generate leads via WhatsApp and direct calls
- Build trust using reviews and experience

---

## 2. Target Audience
- Local residents of Arwal, Bihar
- Students, families, and small businesses

---

## 3. Website Structure

| Page | Purpose |
|------|---------|
| Home | Hero, service overview, testimonials, CTA |
| Services | Detailed service listings |
| Gallery | Photo grid with filters |
| About | Business story and credibility |
| Contact | Form, map, and direct contact |

---

## 4. Global Design System

### 4.1 Typography
- **Font Family:** Inter or Poppins
- **Headings:** Bold weight
- **Body:** Regular weight
- **Minimum Body Font Size:** 16px (accessibility requirement)

### 4.2 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Blue | `#1E3A8A` |
| Secondary | Orange | `#F59E0B` |
| Background | White / Light Gray | `#FFFFFF` / `#F9FAFB` |
| Text | Dark | `#111827` |
| WhatsApp Button | Green | WhatsApp brand green |

### 4.3 Layout Grid
- **Mobile-first** default width: 360px
- **Max width (desktop):** 1200px
- **Padding:** 16px on mobile, 24px on desktop
- **Section Padding:** 40px on mobile, 80px on desktop

---

## 5. Design Principles

### Mobile First (MANDATORY)
- Design for mobile screens first (320px–480px), then scale up
- All layouts must be fully responsive

### UI Rules
- Large, tappable buttons (minimum height: 44px)
- Minimal text — clear and scannable
- Prominent CTAs at every key section
- Fast loading — avoid heavy libraries and animations
- No heavy or unnecessary animations
- No complex backend

---

## 6. Component Library

### 6.1 Button Component
**Variants:**
- Primary (Blue background)
- Secondary (Outline style)
- WhatsApp (Green background)

**Props:**
- `text` — button label
- `icon` — optional icon
- `action` — link / call / whatsapp

### 6.2 Card Component
Used for services display.

**Structure:**
- Icon or Image
- Title
- Description
- Optional CTA

### 6.3 Section Wrapper
- Consistent padding across all sections
- Background variants: light (`#F9FAFB`) and dark

### 6.4 Navbar
**Mobile:**
- Logo on left
- Hamburger menu on right

**Menu Items:**
- Home
- Services
- Gallery
- About
- Contact

**Behavior:** Sticky on scroll (YES)

### 6.5 Footer
- Business name
- Navigation links
- Contact information
- Copyright notice

### 6.6 Floating Action Buttons
- **WhatsApp** — Fixed bottom-right corner
- **Call** — Fixed bottom-left corner (mobile)

---

## 7. Page-Wise Specifications

---

### 7.1 Homepage

#### Hero Section
- **H1 Title:** Your One-Stop Shop for Printing, Repair & Online Services
- **Subtitle:** Fast, Affordable & Trusted Services in Arwal
- **Background:** Image
- **CTA Buttons:**
  - WhatsApp Now
  - Call Now
  - Explore Services

#### Services Overview Section
Display 3 cards in a grid layout:

| Card | Services |
|------|----------|
| Printing | Wedding Cards, Visiting Cards, Flex Banners |
| Repair | Mobile Repair, Laptop Repair, Accessories |
| Digital | Online Form Filling, Internet Services, Stamps |

**Layout:** Stacked on mobile, 3-column grid on desktop

#### Why Choose Us Section
5 bullet points with icons:
- 10+ Years Experience
- Trusted in Arwal
- Fast Delivery
- Affordable Pricing
- Custom Design

#### Gallery Preview Section
- 4–6 images displayed in a grid
- 2×2 on mobile, 3×2 on desktop
- Link to full Gallery page

#### Testimonials Section
- Card layout with star ratings
- Use real customer reviews

#### CTA Banner
- Headline: *"Need Printing or Repair Service?"*
- Buttons: WhatsApp | Call

#### Contact Section
- Address: Arwal, Bihar
- Phone number
- Embedded Google Map

---

### 7.2 Services Page

**Printing Services:**
- Wedding Cards
- Visiting Cards
- Flex Banners
- Invitation Cards

**Repair Services:**
- Mobile Repair
- Screen Replacement
- Battery Replacement
- Software Issues
- Laptop Repair

**Digital Services:**
- Online Form Filling
- Internet Work
- Stamp Creation

Each section displays items with icons and brief descriptions.

---

### 7.3 Gallery Page

**Filter Tabs:**
- Printing Work
- Machines
- Shop Photos

**Features:**
- Responsive image grid
- Lightbox on image click (click to enlarge)

---

### 7.4 About Page
- 10+ years of experience
- Positioned as a local, trusted business
- Focus on quality and speed
- Text blocks with highlighted key facts

---

### 7.5 Contact Page

**Inquiry Form Fields:**
- Name
- Phone
- Message
- Validation required on all fields

**Additional Elements:**
- Phone number (clickable)
- WhatsApp button
- Address
- Embedded Google Map

---

## 8. Interactions & Links

### WhatsApp Integration
- **Floating button:** Fixed bottom-right on all pages
- **Link format:**
  ```
  https://wa.me/<number>?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services
  ```
- Prefilled message: *"Hello, I want to know more about your services."*

### Call Integration
- **Link format:** `tel:<number>`
- Sticky call button visible on mobile

---

## 9. Technical Requirements

### Stack
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

### Folder Structure
```
/app
/components
  /Navbar
  /Footer
  /Button
  /Card
/pages
/public
```

### Performance Requirements
- Lazy load all images
- Use WebP image format
- No heavy third-party libraries
- Minimize JavaScript bundle size
- Next.js Image component for optimization

---

## 10. AI Prompt Pack (For Coding Agent)

### 10.1 Project Initialization Prompt
> Build a mobile-first business website using Next.js and Tailwind CSS. Requirements: mobile-first responsive design, clean UI, fast performance, SEO optimized. Pages: Home, Services, Gallery, About, Contact.

### 10.2 Navbar Component Prompt
> Create a responsive navbar with: logo on left, hamburger menu on mobile, menu items (Home, Services, Gallery, About, Contact), sticky behavior on scroll, and Tailwind styling.

### 10.3 Hero Section Prompt
> Create a hero section with: H1 title, subtitle, 3 CTA buttons (WhatsApp, Call, Explore), background image, and mobile-optimized layout.

### 10.4 Services Section Prompt
> Create 3 service cards for: Printing, Repair, and Digital. Each card must include an icon, title, short description, and be clickable.

### 10.5 WhatsApp Button Prompt
> Create a floating WhatsApp button: fixed bottom-right, opens WhatsApp link with prefilled message.

### 10.6 Gallery Section Prompt
> Create a gallery section with grid layout and click-to-enlarge lightbox functionality.

### 10.7 Contact Form Prompt
> Create a contact form with fields: Name, Phone, Message. Validation required on all fields.

### 10.8 Footer Prompt
> Create a simple footer with navigation links, contact info, and clean design.

---

## 11. Production Setup & Deployment

### 11.1 Deployment — Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy

### 11.2 Domain Setup
1. Add custom domain in Vercel dashboard
2. Configure DNS records at domain registrar

### 11.3 SEO Setup
- Add title and meta description tags
- Include relevant keywords (printing, repair, Arwal, Bihar)
- Add alt text to all images
- Generate and submit sitemap to Google Search Console
- **Page Title:** `Ajay Press – Printing & Mobile Repair in Arwal`
- **Meta Description:** `Printing, mobile repair, and online services in Arwal, Bihar.`

### 11.4 Accessibility Requirements
- Minimum contrast ratio compliance
- Font size ≥ 16px for body text
- Button height ≥ 44px (touch target)

---

## 12. Restrictions

- No heavy or unnecessary animations
- No complex backend
- No unnecessary third-party libraries
- Keep UI simple and minimal

---

## 13. Success Criteria

- Fast page load time
- Fully mobile-friendly layout
- Easy contact via WhatsApp (high click rate)
- Professional visual appearance
- High mobile usability score

---

## 14. Future Scope

- Online order system
- File upload for print jobs
- Payment integration
- Backend API
- Order tracking system

---

*End of Document*
