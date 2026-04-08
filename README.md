# 🏛️ Ajay Press: Premium Studio Web Application

A high-performance, minimalist "Light Mode" web application built for **Ajay Press**, a leading printing and gadget repair studio in Arwal, Bihar. This project focuses on high-end visual hierarchy, rapid mobile repair service showcasing, and high-conversion contact points.

## ✨ Key Features

- **Minimalist "Light" Design:** A sophisticated aesthetic utilizing a pure white and Zinc-50 grayscale palette.
- **Architectural Hierarchy:** Strictly alternating sections (White -> Gray) with solid horizontal banding to ensure every service block is clearly distinguishable.
- **Service Specialization:**
  - **Printing Hub:** High-definition wedding cards, banners, and digital printing.
  - **Repair Lab:** Motherboard-level mobile and laptop diagnostic services.
  - **Digital Lounge:** Instant online form filling and internet services.
- **High-Conversion CTA:** Integrated WhatsApp "Direct Book" and "Direct Call" systems.
- **Symmetrical UI:** Precision-balanced grids for service lists, ensuring a professional flow even with odd-numbered items.
- **UX Stability:** Rock-solid mobile navigation with body scroll locking and structural decoupling for glitch-free browsing.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Font:** [Inter / Google Fonts](https://fonts.google.com/specimen/Inter)

## 🎨 Design System

The project uses a custom "Studio" design system defined in `globals.css`:
- **Soft Shadows:** Multi-layered shadows (`soft-shadow`) for premium depth.
- **Aesthetic Gradients:** Rotating mesh gradients (`mesh-gradient`) for subtle background texture.
- **Contrast Bands:** Explicit `border-y border-zinc-100` separators for section identification.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/rkravikr/ajay-press-v1.git
    cd ajay-press-v1
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🌍 Deployment

The project is optimized for deployment on **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Ensure the framework is set to **Next.js**.
3. Deploy.

## 📂 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Modular UI components (Navbar, Footer, Services, etc.).
- `public/`: Static assets and images.
- `src/app/globals.css`: Custom Tailwind v4 theme and design tokens.

---

> [!NOTE]
> This website is built for high-speed performance and professional clarity. Ensure any new images maintain the "Minimalist Light" aesthetic for consistent branding.

**Developed by Antigravity AI for Ravi Kumar.**
