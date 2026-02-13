# ⚡ SynConnect v3

**Connect. Network. Dominate.**  
A premium, high-impact NFC networking platform designed to bridge the physical and digital worlds. SynConnect v3 provides an ecosystem for high-frequency networking through smart NFC cards and automated Google Review stands.

![SynConnect Banner](./apps/web/public/assets/marketing/hero/hero-image.png)

---

## 🏗️ Monorepo Architecture

This project is structured as a **Turborepo Monorepo**, ensuring modularity, shared UI components, and lightning-fast builds.

- **`apps/web`**: The marketing powerhouse. Includes the public landing page, product shop, commerce flow (Cart/Checkout), and user onboarding.
- **`apps/dashboard`**: The engine for users. CRM, analytics, and digital profile management.
- **`apps/admin`**: The command center. Internal controls and business oversight.
- **`packages/ui`**: A shared design system and library of premium UI components.

---

## 🚀 Key Features

### 🛒 High-Impact Commerce
- **Premium Product Showcase**: Highly responsive product detail pages with glassmorphic design.
- **Frictionless Flow**: Integrated Cart, Secure Checkout simulation, and Order Success tracking.
- **Modern Aesthetic**: Deep black themes with signature **Electric Green (#CCFF00)** accents.

### 📲 Smart Networking
- **NFC Integration Ready**: Engineered for one-tap contact sharing and profile loading.
- **Google Review Synergy**: Automated stands designed to bypass friction and boost reputation by 400%.
- **Interactive Onboarding**: A beautiful, step-by-step simulation to get users live in minutes.

### 🎨 Design Philosophy
- **Rich Aesthetics**: Vibrant gradients, glassmorphism, and subtle micro-animations using **Framer Motion**.
- **Performance First**: Built with **Next.js** for static pre-rendering and instant page loads.
- **Tailwind v4**: Utilizing the latest in CSS utility frameworks for maximum flexibility.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Monorepo**: [Turborepo](https://turbo.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Premium Sans-serif (Inter/Outfit)

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: >= 20.0.0
- **npm**: >= 10.x

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/synconnect-v3.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run all apps in parallel:
```bash
npm run dev
```

Target a specific app (e.g., the web shop):
```bash
npx turbo run dev --filter=web
```

### Build
Build all applications:
```bash
npm run build
```

---

## 📡 Deployment

SynConnect v3 is designed for seamless deployment on **Vercel**. Each app in the monorepo can be deployed as an independent project or via Vercel's automatic monorepo detection.

For detailed deployment steps, refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 📝 License

This project is private and proprietary. All rights reserved.

---

Built with ❤️ by the SynConnect Team.
