# SynConnect v3 - Technical Documentation

## 1. System Architecture

### Overview
SynConnect v3 is a monorepo-based web application designed for performance, scalability, and ease of maintenance. It leverages modern full-stack technologies with a focus on type safety and component reusability.

### key Components
1.  **Monorepo Structure**: Managed by **Turborepo**.
    -   `apps/`
        -   `web`: Customer-facing marketing site & profile viewer (Next.js).
        -   `dashboard`: Customer dashboard for analytics/editing (Next.js).
        -   `admin`: Internal admin panel (Next.js).
        -   `api`: Express.js backend API service.
    -   `packages/`
        -   `ui`: Shared React components (Shadcn/UI).
        -   `schema`: Shared Zod schemas & TypeScript types.
        -   `config`: Shared configuration (Tailwind, ESLint, TS).
        -   `utils`: Common utility functions.

### Technology Stack
-   **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS.
-   **Backend**: Express.js, Node.js (v20+).
-   **Database**: MongoDB Atlas (Mongoose ODM).
-   **Auth**: NextAuth.js (v5) with Google OAuth & Credentials.
-   **Payments**: Razorpay.
-   **Infrastructure**: DigitalOcean Droplets (Frontend + Backend), Nginx.
-   **CI/CD**: GitHub Actions.

---

## 2. Database Schema (MongoDB/Mongoose)

### Core Collections

#### 1. Users
-   **Fields**: `_id`, `name`, `email` (unique), `phone`, `authProvider` (google/email), `passwordHash`, `role` (user/admin), `isActive`, `createdAt`.
-   **Indexes**: `email`, `googleId`.

#### 2. Profiles
-   **Fields**: `_id`, `userId`, `type` (DigitalCard/ReviewStand), `name`, `title`, `company`, `bio`, `profilePicture` (url), `coverPhoto`, `socialLinks`, `products`, `isActive`, `customSlug`.
-   **Validation**: Max 30 social links, Max 10 products.
-   **Indexes**: `userId`, `customSlug`.

#### 3. Products
-   **Fields**: `_id`, `name`, `sku` (unique), `description`, `basePrice`, `gst`, `totalPrice`, `images`, `stock`, `isActive`.
-   **Indexes**: `sku`, `category` (nfc_card/review_stand).

#### 4. Orders
-   **Fields**: `_id`, `orderNumber` (unique), `userId`, `items`, `totalAmount`, `status` (pending/paid/shipped/delivered), `payment` (razorpayId, status), `shippingAddress`.
-   **Processing**: Tracks encoding URL & activation status.
-   **Indexes**: `orderNumber`, `userId`, `status`.

#### 5. Connections
-   **Fields**: `_id`, `profileId`, `name`, `email`, `message`, `timestamp`, `location` (city).
-   **Purpose**: Stores leads captured from profile "Connect" forms.

#### 6. Analytics
-   **Fields**: `_id`, `profileId`, `eventType` (tap/view/click), `metadata` (device, browser), `timestamp`.
-   **Retention**: 5 years.

---

## 3. API & Authentication

### Auth Flow (NextAuth.js)
1.  **Google OAuth**: Primary method for minimal friction.
2.  **Email/Password**: Fallback.
3.  **Session**: JWT stored in HTTP-only cookie.
4.  **Middleware**: Protects `/dashboard` and `/admin` routes based on role.

### Key Workflows
1.  **Quick Buy (Guest Checkout)**:
    -   User enters email -> Backend creates dummy account (if new).
    -   Upon payment success -> Backend generates activation token.
    -   Email sent with token link -> User clicks -> Sets password -> Profile active.

2.  **Customize First**:
    -   User logs in (Google/Email).
    -   Creates draft profile.
    -   Checkout -> Order linked to draft profile ID.
    -   Payment success -> Profile activated (`isActive: true`).

3.  **NFC Encoding (Admin)**:
    -   Admin fetches `encodingUrl` from Order details.
    -   Writes URL to NTAG213 chip using NFC Tools app.
    -   Verifies write -> Marks order as "Encoded".

---

## 4. Implementation Plan

### Phase 1: Foundation (Current)
-   Initialize Turborepo, shared packages (`ui`, `schema`, `config`).
-   Setup TypeScript, ESLint, Prettier.

### Phase 2: Frontend Prototypes (Mock Data)
-   **Web App**: Landing page, Shop, Cart, Profile Viewer.
-   **Dashboard**: Analytics view, Profile Editor.
-   **Admin**: Order list, User list.
-   *Checkpoint: UX Approval.*

### Phase 3: Backend Development
-   Setup Express server & MongoDB connection.
-   Implement Auth endpoints (NextAuth adapters).
-   Create CRUD APIs for Profiles, Products, Orders.
-   Integrate Razorpay webhooks.

### Phase 4: Integration
-   Connect Frontend forms to Backend APIs.
-   Replace mocks with React Query hooks.
-   Test E2E flows (Purchase -> Activation).

---

## 5. Deployment & Infrastructure

### Hosting Strategy
-   **Frontend Droplet ($6/mo)**: Hosts Next.js apps via PM2 & Nginx reverse proxy.
    -   Domains: `synconnect.com`, `dashboard.*`, `admin.*`
-   **Backend Droplet ($6/mo)**: Hosts Express API via PM2.
    -   Domain: `api.synconnect.com`
-   **Database**: MongoDB Atlas (Free Tier M0 -> Scale to M10).

### CI/CD (GitHub Actions)
-   **Trigger**: Push to `main`.
-   **Steps**:
    1.  Checkout code.
    2.  Install dependencies & Build.
    3.  SSH into Droplets.
    4.  `git pull`, `npm install`, `pm2 restart`.

### Security
-   **SSL**: Let's Encrypt Certbot for all domains.
-   **Firewall (UFW)**: Allow only SSH (22), HTTP (80), HTTPS (443).
-   **Secrets**: Stored in `.env.production` (never committed).

---

## 6. NFC Specifics

### Chip Requirements
-   **Model**: NTAG213.
-   **Memory**: 144 bytes user memory.
-   **Format**: NDEF Record (URI type).

### Encoding Data
-   **Payload**: URL (`https://synconnect.com/profile/[objectId]`).
-   **Locking**: **NO** (v1 decision to allow re-encoding).
-   **Backup**: QR Code printed on card with same URL.

### Admin Tools
-   **Hardware**: Android/iOS device with NFC.
-   **Software**: "NFC Tools" app (or custom admin tool in v2).

---

## 7. Operational Workflows

### Order Fulfillment
1.  Admin views "Paid" orders.
2.  Clicks "Copy Encoding URL".
3.  Encodes requisite number of cards.
4.  Packages cards (verifying QR matches NFC).
5.  Updates status to "Shipped" + inputs Tracking Number.
6.  System sends "Shipped" email to customer.

### Support
-   **Lost Card**: User deactivates profile in Dashboard.
-   **Re-issue**: Admin encodes new card with same Profile ID, ships to user. Old card becomes invalid (profile-level, though URL remains readable).
