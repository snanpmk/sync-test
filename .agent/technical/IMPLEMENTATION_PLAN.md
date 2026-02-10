# SynConnect v3 Implementation Plan

## Overview
Setting up a Turborepo-based monorepo for SynConnect with shared packages and three Next.js applications plus an Express API server.

## Development Approach
**Frontend-First Strategy**: Build and approve all UI/UX before backend implementation.

---

## 🎨 PART 1: FRONTEND PROTOTYPE (No Backend Integration)

### Phase 1: Monorepo Foundation
- [x] Initialize Turborepo structure
- [x] Configure root package.json with workspaces
- [x] Set up turbo.json for build orchestration
- [x] Configure TypeScript at root level
- [x] Set up ESLint and Prettier

## Phase 2: Shared Packages
- [ ] Create `packages/schema` - Zod schemas & TypeScript types
- [ ] Create `packages/ui` - Shared React components (Shadcn/UI)
- [ ] Create `packages/config` - Shared configs (Tailwind, ESLint, TS)
- [ ] Create `packages/utils` - Shared utility functions

### Phase 2: Frontend Apps with Mock Data
- [ ] **Customer-Facing App** (Phase 4 tasks with mock data)
- [ ] **User Dashboard** (Phase 5 tasks with mock data)
- [ ] **Admin Panel** (Phase 6 tasks with mock data)

### Phase 3: Workflow Verification & Approval
- [ ] Test all user flows end-to-end with mock data
- [ ] Review UI/UX consistency across all apps
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Validate Electric Green branding
- [ ] Test all forms and validations
- [ ] **CHECKPOINT**: Get approval before proceeding to backend
- [ ] Document mock data structures as API contracts

---

## ⚙️ PART 2: BACKEND IMPLEMENTATION (After Frontend Approval)

### Phase 4: Backend API (Express)
- [ ] Initialize Express server in `apps/api`
- [ ] Set up MongoDB connection with Mongoose
- [ ] Define database schemas:
  - [ ] Users (email, passwordHash, authProvider, googleId, role, subscription)
  - [ ] Profiles (content, type, reviewLogic, isActive, awaitingActivation, status: draft/active)
  - [ ] Orders (userId, profileId, encodingUrl, status, purchasePath, activationToken, isActivated)
  - [ ] Analytics (profileId, eventType, metadata, timestamp)
  - [ ] Connections/Leads (profileId, formData, source)
- [ ] **Implement Authentication**:
  - [ ] Set up Google OAuth 2.0 (Google Cloud Console)
  - [ ] Implement OAuth callback endpoints
  - [ ] Email/password registration and login
  - [ ] Password hashing with bcrypt (salt rounds ≥ 12)
  - [ ] JWT token generation and validation
  - [ ] Refresh token rotation
  - [ ] Email verification flow
- [ ] **Implement Authorization Middleware**:
  - [ ] Verify JWT tokens
  - [ ] Role-based access control (user, admin)
  - [ ] Resource ownership verification
- [ ] Create API routes structure
- [ ] Implement **Quick Buy endpoints**:
  - [ ] Create order with automatic account creation
  - [ ] Generate activation token
  - [ ] Validate activation token
  - [ ] Activate profile (complete setup) - requires authentication
  - [ ] Update order with final profile URL
- [ ] Implement **Customize First endpoints**:
  - [ ] Save profile as draft (requires authentication)
  - [ ] Update draft profile
  - [ ] Publish profile (on payment success)
  - [ ] Create order with active profile
- [ ] Implement order management endpoints:
  - [ ] Get encoding URL for order (admin only)
  - [ ] Update order status (admin only)
  - [ ] Track activation status
- [ ] Implement profile endpoints:
  - [ ] Get profile by ObjectId (public endpoint)
  - [ ] CRUD operations for user profiles (requires ownership or admin)
  - [ ] Update profile content (dashboard)
- [ ] Implement smart review logic endpoint
- [ ] Set up email service (SendGrid/Mailgun):
  - [ ] Order confirmation emails
  - [ ] Account creation emails (with password setup link)
  - [ ] Shipping notifications
  - [ ] Activation reminders (Day 7, 10, 14)
  - [ ] Email verification emails
- [ ] Set up CORS for frontend apps

### Customer-Facing App (apps/web) - Mock Data
- [ ] Initialize Next.js app in `apps/web`
- [ ] Set up App Router structure
- [ ] **Set up Authentication** (NextAuth.js):
  - [ ] Configure Google OAuth provider
  - [ ] Configure email/password provider
  - [ ] Create sign-in page (`/signin`)
  - [ ] Create sign-up page (`/signup`)
  - [ ] Implement session management
  - [ ] Protected route middleware
- [ ] Create landing page with hero section
- [ ] Create product/shop pages:
  - [ ] Display two products (Digital Card, Review Stand)
  - [ ] Dual CTA buttons: "🚀 Quick Buy" and "👀 Customize First"
- [ ] Implement **Quick Buy Flow**:
  - [ ] Quick checkout page (email, quantity, shipping, payment)
  - [ ] Razorpay integration (UPI, Cards, Netbanking, Wallets)
  - [ ] Auto-create account after payment (mock)
  - [ ] Generate activation token (mock)
  - [ ] Order confirmation page
- [ ] Implement **Customize First Flow**:
  - [ ] Redirect to sign-in if not authenticated
  - [ ] Profile builder with live preview (requires auth)
  - [ ] Save profile as draft
  - [ ] All customization options (basic info, links, theme)
  - [ ] Preview functionality
  - [ ] Checkout with pre-built profile
- [ ] Create activation page (`/activate/[token]`):
  - [ ] Authentication check (sign in or create password)
  - [ ] Google OAuth option
  - [ ] 3-step wizard (basic info → links → appearance)
  - [ ] Progress indicator
  - [ ] Auto-save functionality
  - [ ] Redirect to dashboard when complete
- [ ] Create public profile page (`/profile/[id]`):
  - [ ] Dynamic route accepts MongoDB ObjectId (24-char hex)
  - [ ] Fetch profile data using ObjectId (mock)
  - [ ] Display profile content (links, contact, products)
  - [ ] Track analytics (tap/view event)
  - [ ] Support for both DigitalCard and ReviewStand types
- [ ] Implement smart review logic UI (for ReviewStand profiles)
- [ ] Integrate React Query for data fetching (with mock data)
- [ ] Add Framer Motion animations
- [ ] Implement ISR (Incremental Static Regeneration) for profile pages

### User Dashboard (apps/dashboard) - Mock Data
- [ ] Initialize Next.js app in `apps/dashboard`
- [ ] **Set up Authentication** (NextAuth.js):
  - [ ] Configure Google OAuth provider
  - [ ] Configure email/password provider
  - [ ] Protect all dashboard routes
  - [ ] Redirect to sign-in if not authenticated
- [ ] Set up authentication flow (sign-in page)
- [ ] Create profile management pages (requires auth)
- [ ] Implement analytics/insights dashboard
- [ ] Add lead management interface
- [ ] Integrate Zustand for state management
- [ ] Add React Hook Form + Zod validation

### Admin Panel (apps/admin) - Mock Data
- [ ] Set up admin authentication
- [ ] Create user management interface
- [ ] Build order management system:
  - [ ] View all orders with status and purchase path
  - [ ] Distinguish between activation URLs and direct profile URLs
  - [ ] Show activation status for Quick Buy orders
  - [ ] Display encoding URL and QR code for each order
  - [ ] Update order status (paid → encoding → shipped → delivered)
  - [ ] Bulk export encoding URLs for batch processing
  - [ ] Send activation reminder emails manually
  - [ ] Filter orders by: status, purchase path, activation status
- [ ] Create admin analytics dashboard:
  - [ ] Track activation rates for Quick Buy orders
  - [ ] Compare conversion between Quick Buy vs Customize First
  - [ ] Monitor time-to-activation metrics
- [ ] Add user support/management tools

---

## 🔗 PART 3: INTEGRATION & DEPLOYMENT

### Phase 5: Frontend-Backend Integration
- [ ] Set up React Query in all apps
- [ ] Replace mock data with API calls (incremental, one feature at a time)
- [ ] Add loading states
- [ ] Implement error handling
- [ ] Add optimistic updates
- [ ] Test NFC workflow end-to-end with real backend
- [ ] Test smart review logic with database
- [ ] Validate analytics tracking
- [ ] Performance optimization

### Phase 6: Deployment Preparation
- [ ] Set up environment variables
- [ ] Configure production builds
- [ ] Add Docker configurations
- [ ] Set up CI/CD pipeline
- [ ] Documentation

## Current Status
**Current Phase**: Phase 1 - Monorepo Foundation  
**Next Milestone**: Complete all frontend apps with mock data before backend implementation  
**Approval Checkpoint**: After Phase 3 (Workflow Verification)
