---
description: SynConnect v3 Development Workflow - Frontend First Approach
---

# SynConnect v3 Development Workflow

## Overview
We follow a **Frontend-First, Prototype-Then-Integrate** approach to ensure the UI/UX is validated before backend implementation.

## Development Phases

### Phase 1: Frontend Prototype (No Backend)
Build all pages and user flows with dummy/mock data to validate the design and user experience.

#### Step 1.1: Setup Monorepo Structure
// turbo
1. Initialize Turborepo with workspaces
2. Create folder structure for all apps and packages
3. Set up shared packages (ui, schema, config, utils)
4. Configure TypeScript, ESLint, Prettier

#### Step 1.2: Build Customer-Facing App (apps/web)
1. Create all pages with Next.js App Router:
   - Landing page with hero section
   - Product/pricing pages
   - Public profile page (`/profile/[id]`) with mock data
   - Checkout flow
2. Implement UI components using Shadcn/UI
3. Add animations with Framer Motion
4. Use mock data for profiles (create `MOCK_PROFILES` constant)
5. Implement smart review logic UI (client-side only, no API)
6. Style with Electric Green theme

#### Step 1.3: Build User Dashboard (apps/dashboard)
1. Create dashboard pages:
   - Login/signup pages (UI only, no auth)
   - Profile management (CRUD UI with local state)
   - Analytics/insights (mock charts and data)
   - Lead management interface
2. Implement forms with React Hook Form + Zod
3. Use Zustand for local state management
4. Mock all data fetching with setTimeout/Promises

#### Step 1.4: Build Admin Panel (apps/admin)
1. Create admin pages:
   - User management table (mock data)
   - Order management interface
   - NFC card management (UI for linking cards to profiles)
   - Analytics dashboard
2. Implement bulk operations UI
3. Mock all admin actions

### Phase 2: Workflow Verification
Before implementing any backend, verify the complete user journey.

#### Step 2.1: Test All User Flows
1. **Customer Journey**:
   - Browse landing page → customize card → checkout
   - Tap NFC (simulate with direct URL) → view profile
   - Submit review/feedback via smart review logic
   
2. **User Journey**:
   - Sign up → create profile → customize content
   - View analytics → manage leads
   
3. **Admin Journey**:
   - Create NFC card → link to user profile
   - Manage orders → track fulfillment
   - View system analytics

#### Step 2.2: UI/UX Review Checkpoint
- [ ] Review all pages for design consistency
- [ ] Test responsive layouts (mobile, tablet, desktop)
- [ ] Verify Electric Green branding throughout
- [ ] Check all animations and transitions
- [ ] Validate form validations (Zod schemas)
- [ ] Test all navigation flows
- [ ] Get user feedback on prototype

#### Step 2.3: Confirm Before Backend
**STOP HERE** - Do not proceed to Phase 3 until:
- ✅ All pages are built and styled
- ✅ All user flows are tested and approved
- ✅ UI/UX is finalized (no major changes expected)
- ✅ Mock data structures are defined (these become API contracts)

### Phase 3: Backend Implementation
Only after frontend approval, build the backend to match the prototype.

#### Step 3.1: Setup Backend Infrastructure
1. Initialize Express server in `apps/api`
2. Set up MongoDB connection
3. Define Mongoose schemas based on mock data structures
4. Implement authentication (JWT)
5. Set up CORS for frontend apps

#### Step 3.2: Implement API Endpoints
1. Create endpoints matching the mock data contracts:
   - User authentication (signup, login, logout)
   - Profile CRUD operations
   - NFC card management
   - Analytics data
   - Lead collection
   - Smart review logic
2. Add validation using shared Zod schemas
3. Implement error handling
4. Add rate limiting

#### Step 3.3: Database Integration
1. Migrate mock data structures to MongoDB schemas
2. Set up indexes for performance
3. Implement data relationships (Users → Profiles → NFCCards)
4. Add seed data for testing

### Phase 4: Frontend-Backend Integration
Replace mock data with real API calls.

#### Step 4.1: Replace Mock Data
1. Set up React Query in all apps
2. Create API client functions
3. Replace mock data with API calls (one page at a time)
4. Add loading states
5. Add error handling
6. Implement optimistic updates

#### Step 4.2: End-to-End Testing
1. Test complete user flows with real backend
2. Verify NFC workflow (create profile → link card → tap → view)
3. Test smart review logic with database
4. Validate analytics tracking
5. Test authentication flows

#### Step 4.3: Final Verification
- [ ] All features working with backend
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Security measures in place
- [ ] Ready for deployment

## Key Principles

### 1. Frontend First
- Build UI before backend
- Validate design and UX early
- Avoid rework by getting approval before backend

### 2. Mock Data as API Contracts
- Mock data structures define API response formats
- Zod schemas in `packages/schema` are shared between frontend and backend
- Backend must match the contracts established by mocks

### 3. Incremental Integration
- Don't replace all mocks at once
- Integrate one feature/page at a time
- Keep prototype working while integrating

### 4. Checkpoints
- Stop at Phase 2.3 for approval
- Review after each major feature
- Test thoroughly before moving forward

## Tools & Commands

### Development
```bash
# Install dependencies
npm install

# Run all apps in dev mode
npm run dev

# Run specific app
npm run dev --filter=web
npm run dev --filter=dashboard
npm run dev --filter=admin
npm run dev --filter=api

# Build all apps
npm run build

# Lint
npm run lint
```

### Testing Workflow
```bash
# Run frontend apps (Phase 1-2)
npm run dev --filter=web --filter=dashboard --filter=admin

# Run with backend (Phase 4)
npm run dev
```

## Current Status
**Phase**: Not Started
**Next Step**: Phase 1.1 - Setup Monorepo Structure
