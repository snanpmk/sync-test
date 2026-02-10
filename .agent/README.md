# SynConnect v3 - Documentation

**Smart NFC Business Cards & Review Stands**

---

## 🚀 Quick Start

**New to the project?** Start here:

1. **Read this README** - Project overview (you are here)
2. **Check [INDEX.md](INDEX.md)** - Complete documentation map
3. **Review [TECH_STACK.md](technical/TECH_STACK.md)** - Technology choices
4. **Follow [Development Workflow](workflows/development-workflow.md)** - How to build

---

## 📖 What is SynConnect?

SynConnect is a **smart NFC business card platform** that allows professionals to:
- Share their digital profile with a single tap (no app required)
- Customize their profile with logo, colors, and content
- Track analytics (taps, views, connections)
- Collect leads through a "Connect with Me" button
- Manage everything through a beautiful dashboard

### Products

1. **NFC Digital Business Card** (₹1,499)
   - Metal or PVC card with NFC chip
   - Custom logo and QR code printed
   - Tap to share your digital profile
   - Lifetime profile updates

2. **Smart Review Stand** (₹1,299)
   - Acrylic stand with NFC chip
   - For restaurants, cafes, retail stores
   - Tap to leave a Google review
   - Boost your online reputation

---

## 🏗️ Project Structure

```
synconnect-v3/
├── apps/
│   ├── web/           # Marketing site + Profile pages (Next.js)
│   ├── dashboard/     # Customer dashboard (Next.js)
│   ├── admin/         # Admin panel (Next.js)
│   └── api/           # Backend API (Express.js)
├── packages/
│   ├── ui/            # Shared UI components
│   ├── database/      # Mongoose models
│   └── utils/         # Shared utilities
└── .agent/            # 📚 Documentation (you are here)
    ├── INDEX.md       # 👈 Start here for docs navigation
    ├── business/      # Business requirements
    ├── specs/         # Page specifications
    ├── technical/     # Technical specs
    ├── design/        # Design system
    ├── workflows/     # Development workflows
    └── archive/       # Old/completed docs
```

---

## 📚 Documentation Overview

### Business & Product
- [BUSINESS_FLOW.md](business/BUSINESS_FLOW.md) - Complete business model
- [PRICING.md](business/PRICING.md) - Pricing & user limits
- [AUTH_PAYMENT_FLOW.md](business/AUTH_PAYMENT_FLOW.md) - User journeys

### Page Specifications (27 pages)
- [MARKETING_PAGES.md](specs/MARKETING_PAGES.md) - Landing, Shop, Cart, Checkout
- [PROFILE_PAGES.md](specs/PROFILE_PAGES.md) - Digital Card & Review Stand
- [DASHBOARD_UX.md](specs/DASHBOARD_UX.md) - Customer dashboard (6 pages)
- [ADMIN_DASHBOARD.md](specs/ADMIN_DASHBOARD.md) - Admin panel (6 pages)
- [ADDITIONAL_PAGES_1.md](specs/ADDITIONAL_PAGES_1.md) - Order Failed, How It Works, About
- [ADDITIONAL_PAGES_2.md](specs/ADDITIONAL_PAGES_2.md) - Contact, Orders, Legal

### Technical Specifications
- [TECH_STACK.md](technical/TECH_STACK.md) - Complete tech stack
- [DATABASE_SCHEMA.md](technical/DATABASE_SCHEMA.md) - 6 collections with schemas
- [DEPLOYMENT.md](technical/DEPLOYMENT.md) - DigitalOcean hosting ($13/month)
- [FILE_STORAGE.md](technical/FILE_STORAGE.md) - Cloudinary image storage
- [EMAIL_TEMPLATES.md](technical/EMAIL_TEMPLATES.md) - 7 email templates
- [NFC_ENCODING.md](technical/NFC_ENCODING.md) - NFC card workflow
- [CARD_PRINTING_SPECS.md](technical/CARD_PRINTING_SPECS.md) - Card printing process
- [ERROR_ANALYTICS.md](technical/ERROR_ANALYTICS.md) - Analytics & logging
- [TECHNICAL_CLARIFICATIONS.md](technical/TECHNICAL_CLARIFICATIONS.md) - SSR, theming, heat maps

### Design System
- [DESIGN_GUIDELINES.md](design/DESIGN_GUIDELINES.md) - UI/UX guidelines
- [COLORS_QUICK_REF.md](design/COLORS_QUICK_REF.md) - Color palette

### Development
- [workflows/development-workflow.md](workflows/development-workflow.md) - Build process
- [rules.md](rules.md) - Coding standards & conventions

**👉 See [INDEX.md](INDEX.md) for complete documentation map**

---

## 🔧 Tech Stack

### Frontend
- **Next.js 14** (App Router, SSR/ISR)
- **React 18** + **TypeScript**
- **Tailwind CSS** + **Shadcn/UI**
- **React Hook Form** + **Zod**

### Backend
- **Node.js 20** + **Express.js**
- **MongoDB** (Mongoose)
- **NextAuth.js** (Google OAuth + Email/Password)

### Services
- **Hosting**: DigitalOcean Droplets ($6/month × 2)
- **Database**: MongoDB Atlas (Free Tier)
- **Images**: Cloudinary
- **Email**: Resend
- **Payments**: Razorpay

### DevOps
- **Turborepo** (Monorepo)
- **GitHub Actions** (CI/CD)
- **Nginx** (Reverse Proxy)
- **Let's Encrypt** (SSL)

**See [TECH_STACK.md](technical/TECH_STACK.md) for complete details**

---

## 💾 Database Schema

6 MongoDB collections:

1. **Users** - Authentication & accounts
2. **Profiles** - Digital business cards (name, bio, links, theme, etc.)
3. **Products** - NFC cards & review stands
4. **Orders** - Purchase orders with card design info
5. **Connections** - Leads from "Connect with Me" button
6. **Analytics** - Anonymous usage tracking (taps, views, clicks)

**See [DATABASE_SCHEMA.md](technical/DATABASE_SCHEMA.md) for complete schemas**

---

## 🎨 Design System

### Brand Colors
- **Primary**: Electric Green (`#67D861`)
- **Background**: Dark (`#0A0A0A`, `#1A1A1A`)
- **Accent**: Lime (`#B6ECAF`)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)

### Components
- Built with **Shadcn/UI**
- Customized with brand colors
- Dark mode by default

**See [DESIGN_GUIDELINES.md](design/DESIGN_GUIDELINES.md) for complete guidelines**

---

## 🚀 Getting Started

### 1. Initialize Monorepo
```bash
npx create-turbo@latest
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
cp .env.example .env.local
```

Required variables:
- `MONGODB_URI` - MongoDB Atlas connection
- `NEXTAUTH_SECRET` - NextAuth secret
- `GOOGLE_CLIENT_ID` - Google OAuth
- `GOOGLE_CLIENT_SECRET` - Google OAuth
- `RAZORPAY_KEY_ID` - Razorpay payments
- `RAZORPAY_KEY_SECRET` - Razorpay secret
- `CLOUDINARY_CLOUD_NAME` - Cloudinary images
- `CLOUDINARY_API_KEY` - Cloudinary key
- `CLOUDINARY_API_SECRET` - Cloudinary secret
- `RESEND_API_KEY` - Resend emails

### 4. Follow Development Workflow
See [workflows/development-workflow.md](workflows/development-workflow.md)

**Frontend-first approach:**
1. Build page UI with mock data
2. Define API contract
3. Implement backend API
4. Connect frontend to API

---

## 📈 Project Status

### ✅ Completed
- [x] Business requirements defined
- [x] All 27 pages designed
- [x] Database schema complete
- [x] Technical architecture planned
- [x] Deployment strategy ready
- [x] Design system created
- [x] Documentation organized

### ⏭️ Next Steps
1. ✅ **You are here** - Documentation complete
2. Initialize monorepo (Turborepo)
3. Set up project structure
4. Implement authentication (NextAuth.js)
5. Build marketing pages (Next.js)
6. Build customer dashboard (Next.js)
7. Build admin panel (Next.js)
8. Build backend API (Express.js)
9. Deploy to DigitalOcean
10. Launch! 🚀

---

## 📞 Documentation Help

- **Navigation**: See [INDEX.md](INDEX.md)
- **By Role**: INDEX.md has role-based navigation
- **By Feature**: INDEX.md has feature-based navigation
- **Coding Standards**: See [rules.md](rules.md)

---

## 📊 Documentation Stats

- **Total Pages**: 27 (15 marketing + 6 dashboard + 6 admin)
- **Documentation Files**: 25+
- **Lines of Documentation**: 10,000+
- **Completion**: 100% ✅

---

**Ready to build SynConnect v3!** 🚀

**Last Updated**: 2026-02-10
