# SynConnect v3 - Project Rules & Guidelines

## Project Overview
SynConnect is a smart NFC business card and review management platform with three main applications:
1. **Customer-Facing App** - Landing page, e-commerce, and public profiles
2. **User Dashboard** - Profile management and analytics
3. **Admin Panel** - User, order, and hardware management

## Business Model
**Hybrid Purchase Approach**: Customers can choose between:
- **Quick Buy** (Default): Fast checkout → Activate after card arrives (low friction, high conversion)
- **Customize First** (Optional): Build profile → Preview → Checkout (card works immediately)

See `.agent/BUSINESS_FLOW.md` for complete customer journey details.

## Development Workflow

### Frontend-First Approach
We follow a **prototype-then-integrate** development strategy:

1. **Phase 1: Build All Pages with Dummy Content**
   - Create all UI pages and components
   - Use mock/dummy data (no backend integration)
   - Implement complete user flows with local state
   - Style with final design (Electric Green theme)
   - Add animations and interactions

2. **Phase 2: Verify Workflow & Get Approval**
   - Test all user journeys end-to-end
   - Review UI/UX for consistency
   - Validate responsive design
   - **CHECKPOINT**: Get approval before backend work
   - Confirm mock data structures (these become API contracts)

3. **Phase 3: Backend Implementation**
   - Build Express API matching mock data contracts
   - Implement MongoDB schemas based on approved structures
   - Create endpoints that match frontend expectations
   - Use shared Zod schemas from `packages/schema`

4. **Phase 4: Integration**
   - Replace mock data with React Query API calls
   - Add loading and error states
   - Test complete flows with real backend
   - Deploy

### Mock Data Guidelines (Prototype Phase)

**CRITICAL**: During the prototype phase, all data must be hard-coded in organized, centralized locations.

#### File Organization for Mock Data
```
apps/web/src/
├── lib/
│   └── mock-data/
│       ├── profiles.ts        # MOCK_PROFILES constant
│       ├── products.ts        # MOCK_PRODUCTS constant
│       ├── orders.ts          # MOCK_ORDERS constant
│       ├── analytics.ts       # MOCK_ANALYTICS constant
│       └── users.ts           # MOCK_USERS constant
```

#### Mock Data Rules
1. **Centralized Constants**: All mock data in `lib/mock-data/` directory
2. **TypeScript Types**: Define types that match future API responses
3. **Realistic Data**: Use realistic names, emails, URLs (not "test123")
4. **Sufficient Variety**: Include edge cases (long names, many links, empty states)
5. **Export as Constants**: Use UPPER_CASE naming (e.g., `MOCK_PROFILES`)
6. **Comment API Shape**: Add comments showing future API endpoint structure

#### Example Mock Data File
```typescript
// apps/web/src/lib/mock-data/profiles.ts

// Future API: GET /api/profiles/:id
export interface Profile {
  _id: string;
  userId: string;
  type: 'DigitalCard' | 'ReviewStand';
  isActive: boolean;
  content: {
    name: string;
    title?: string;
    company?: string;
    bio?: string;
    avatar?: string;
    links: Array<{
      type: string;
      url: string;
      label: string;
    }>;
    // ... more fields
  };
  createdAt: string;
  updatedAt: string;
}

export const MOCK_PROFILES: Record<string, Profile> = {
  '507f1f77bcf86cd799439011': {
    _id: '507f1f77bcf86cd799439011',
    userId: 'user_123',
    type: 'DigitalCard',
    isActive: true,
    content: {
      name: 'John Doe',
      title: 'Senior Product Designer',
      company: 'Tech Innovations Inc.',
      bio: 'Passionate about creating user-centered designs...',
      avatar: '/images/avatars/john-doe.jpg',
      links: [
        { type: 'email', url: 'john@example.com', label: 'Email' },
        { type: 'linkedin', url: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
        // ... more links
      ],
    },
    createdAt: '2026-01-15T10:30:00Z',
    updatedAt: '2026-02-01T14:20:00Z',
  },
  // Add more mock profiles...
};
```

#### Mock Data Usage in Components
```typescript
// ❌ BAD: Inline mock data
function ProfilePage() {
  const profile = {
    name: 'John',
    email: 'test@test.com'
  };
  // ...
}

// ✅ GOOD: Import from centralized location
import { MOCK_PROFILES } from '@/lib/mock-data/profiles';

function ProfilePage({ params }: { params: { id: string } }) {
  const profile = MOCK_PROFILES[params.id];
  // ...
}
```

#### Mock API Functions (Simulate Async)
```typescript
// apps/web/src/lib/mock-api/profiles.ts

import { MOCK_PROFILES } from '@/lib/mock-data/profiles';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Future: Replace with actual API call
export async function getProfile(id: string) {
  await delay(300); // Simulate network delay
  const profile = MOCK_PROFILES[id];
  if (!profile) throw new Error('Profile not found');
  return profile;
}

export async function updateProfile(id: string, data: Partial<Profile>) {
  await delay(500);
  // In prototype, just return merged data
  return { ...MOCK_PROFILES[id], ...data };
}
```

#### Benefits of This Approach
- ✅ **Easy to find and update** - All mock data in one place
- ✅ **Type-safe** - TypeScript ensures consistency
- ✅ **API contract definition** - Types become API documentation
- ✅ **Easy to replace** - Swap mock functions with real API calls
- ✅ **Realistic testing** - Simulated delays expose loading states
- ✅ **Reusable** - Same mock data across multiple pages/components

### Key Principles
- **No backend work until frontend is approved** - Avoid rework
- **Mock data defines API contracts** - Backend must match frontend expectations
- **Incremental integration** - Replace mocks one feature at a time
- **Shared schemas** - Zod schemas in `packages/schema` used by both frontend and backend
- **Centralized mock data** - All hard-coded data in `lib/mock-data/` directory

See `.agent/workflows/development-workflow.md` for detailed steps.

## Architecture Principles

### Monorepo Structure
- Use **Turborepo** for workspace management and build orchestration
- Share TypeScript types, Zod schemas, and utilities across all apps
- Keep apps independent but leverage shared packages

### Technology Stack

#### Frontend
- **Framework**: Next.js (App Router) for all three apps
- **State Management**: Zustand for global state (user session, UI themes)
- **Data Fetching**: React Query for server-state synchronization and caching
- **Forms**: React Hook Form + Zod for type-safe validation
- **Animations**: Framer Motion for smooth transitions
- **Styling**: Tailwind CSS + Shadcn/UI components
- **Color Scheme**: **STRICTLY FOLLOW BRAND COLORS**
  - **Primary (Accent)**: Electric Green `#beee02` (Use for CTAs, highlights, active states)
  - **Secondary**: Pale Green `#B6ECAF` (Use for hover states, secondary buttons)
  - **Background**: Dark Grey `#1A1A1A` (Use for main backgrounds, cards)
  - **Text/Surface**: White `#FFFFFF` (Use for text on dark backgrounds, light surfaces)
  
  **Tailwind Config:**
  ```js
  colors: {
    primary: '#beee02',      // Electric Green
    secondary: '#B6ECAF',    // Pale Green
    dark: '#1A1A1A',         // Dark Grey
    light: '#FFFFFF',        // White
  }
  ```
  
  **Usage Guidelines:**
  - ✅ Use Electric Green (#beee02) for all primary CTAs (Buy Now, Connect, Submit)
  - ✅ Use Dark Grey (#1A1A1A) for backgrounds and dark mode surfaces
  - ✅ Use Pale Green (#B6ECAF) for hover states and secondary actions
  - ✅ Use White (#FFFFFF) for text on dark backgrounds
  - ❌ DO NOT use generic Tailwind colors (blue-500, green-500, etc.)
  - ❌ DO NOT deviate from these exact hex codes

#### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: 
  - **Library**: NextAuth.js (for Next.js apps)
  - **Primary Provider**: Google OAuth 2.0
  - **Fallback**: Email/Password (bcrypt hashing)
  - **Session Management**: JWT tokens (HttpOnly cookies)
- **Payment Gateway**: Razorpay (optimized for India)
  - 2% transaction fee
  - T+1 settlement
  - Native UPI, Netbanking, Wallets support
- **Validation**: Zod schemas (shared with frontend)

### Authentication & Authorization

#### Authentication Methods
1. **Google OAuth** (Recommended):
   - Primary sign-in method
   - Faster, more secure
   - No password management needed
   - **Use NextAuth.js** for Next.js apps (simplifies OAuth flow)
   - Free, self-hosted, full control

2. **Email/Password** (Fallback):
   - For users who prefer traditional login
   - Passwords hashed with bcrypt (salt rounds ≥ 12)
   - Email verification required
   - Also handled by NextAuth.js

#### Account Creation Flow
- **Quick Buy**: Account auto-created after payment
  - Email from checkout form
  - No password set initially
  - User sets password or links Google during activation
  
- **Customize First**: Sign-in required before customization
  - Must authenticate to access profile builder
  - Can use Google OAuth or create email/password account

#### Session Management
- **JWT Tokens**: Stored in HttpOnly cookies
- **Refresh Tokens**: For long-lived sessions
- **Token Expiry**: Access token (15 min), Refresh token (7 days)

#### Authorization Levels
- **Guest**: Can browse public profiles, shop
- **User**: Can manage own profiles, view analytics, place orders
- **Admin**: Can manage all users, orders, and system settings

#### Protected Routes
- `/dashboard/*` - Requires authentication
- `/admin/*` - Requires admin role
- `/activate/*` - Requires valid activation token OR authentication
- `/api/profiles/:id` (POST/PUT/DELETE) - Requires ownership or admin

## Coding Standards

### TypeScript
- **Strict mode enabled** - No implicit any, strict null checks
- **Type everything** - Avoid `any`, use proper types or `unknown`
- **Shared types** - Define in `packages/schema` for cross-app usage
- **Naming conventions**:
  - Interfaces: PascalCase (e.g., `UserProfile`, `ReviewLogic`)
  - Types: PascalCase (e.g., `ProfileType`, `CardStatus`)
  - Enums: PascalCase with UPPER_CASE values

### React/Next.js
- **Server Components by default** - Use Client Components only when needed
- **File naming**: 
  - Components: PascalCase (e.g., `ProfileCard.tsx`)
  - Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
  - Utilities: camelCase (e.g., `formatDate.ts`)
- **Component structure**:
  ```tsx
  // 1. Imports (grouped: React, third-party, local)
  // 2. Types/Interfaces
  // 3. Component definition
  // 4. Exports
  ```
- **Hooks**: Custom hooks in `use` prefix (e.g., `useProfile`, `useAnalytics`)
- **State management**:
  - Local state: `useState` for component-specific
  - Global state: Zustand stores in `stores/` directory
  - Server state: React Query hooks

### Forms & Validation
- **Always use React Hook Form** with Zod schemas
- **Define schemas in `packages/schema`** for reusability
- **Form structure**:
  ```tsx
  const schema = z.object({ ... });
  type FormData = z.infer<typeof schema>;
  
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  ```

### API Design
- **RESTful conventions** - Use proper HTTP methods
- **Route structure**: `/api/v1/resource`
- **Response format**:
  ```json
  {
    "success": true,
    "data": { ... },
    "message": "Optional message"
  }
  ```
- **Error format**:
  ```json
  {
    "success": false,
    "error": "Error message",
    "code": "ERROR_CODE"
  }
  ```
- **Validation**: Use Zod schemas from `packages/schema`

### Database Schema Design

#### Key Collections
1. **Users**: Authentication, subscription, linked devices
   - `_id`: MongoDB ObjectId
   - `email`: Unique email address
   - `passwordHash`: bcrypt hash (optional if using Google OAuth)
   - `authProvider`: 'google' | 'email' | 'both'
   - `googleId`: Google OAuth user ID (if using Google)
   - `isEmailVerified`: Boolean
   - `subscription`: Plan details (free, pro, business)
   - `role`: 'user' | 'admin'
   - `createdAt`, `updatedAt`: Timestamps

2. **Profiles**: 
   - `_id`: MongoDB ObjectId (used in NFC card URL: `/profile/[_id]`)
   - `userId`: Reference to Users collection
   - `content`: Social links, contact info, products (flexible JSON)
   - `type`: 'DigitalCard' | 'ReviewStand'
   - `reviewLogic`: For Review Stands (threshold, Google Maps URL)
   - `isActive`: Boolean for enabling/disabling profile
   - `customSlug`: Optional custom URL slug (e.g., `/profile/john-doe`)

3. **Orders**: 
   - `userId`: Reference to Users collection
   - `profileId`: Reference to Profiles (the profile to encode on card)
   - `productType`: 'nfc_card' | 'review_stand'
   - `quantity`: Number of cards ordered
   - `status`: 'pending' | 'paid' | 'encoding' | 'shipped' | 'delivered'
   - `encodingUrl`: The URL to encode (e.g., `synconnect.com/profile/507f1f77bcf86cd799439011`)
   - `shippingAddress`: Delivery details
   - `paymentDetails`: Stripe payment info

4. **Analytics**: Taps, views, conversion tracking (linked to profileId)
   - `profileId`: Reference to Profiles
   - `eventType`: 'tap' | 'view' | 'link_click' | 'lead_submit'
   - `metadata`: Additional event data (browser, location, etc.)
   - `timestamp`: When event occurred

5. **Connections/Leads**: Lead form submissions (linked to profileId)
   - `profileId`: Reference to Profiles
   - `formData`: Captured lead information (name, email, message, etc.)
   - `source`: 'review_feedback' | 'contact_form' | 'lead_form'
   - `createdAt`: Submission timestamp

#### Schema Conventions
- Use `_id` for MongoDB ObjectId
- Use `createdAt` and `updatedAt` timestamps (Mongoose timestamps)
- Use `isActive`, `isDeleted` for soft deletes
- Embed related data when it's 1-to-few, reference when 1-to-many

## Feature-Specific Rules

### Smart Review Logic
- **3-star threshold**: >3 stars → Google Review URL, ≤3 stars → Private feedback form
- **Configuration**: Store in `Profile.reviewLogic` field
- **Frontend**: Fetch config via React Query, handle redirect/form display
- **Backend**: Validate star rating, return appropriate action

### NFC Workflow (Simplified - No Hardware Tracking)

**Customer Journey:**
1. **Order & Profile Creation**: 
   - Customer orders NFC card(s) via e-commerce flow
   - Customer creates/selects profile to link to card
   - Profile gets MongoDB ObjectId (e.g., `507f1f77bcf86cd799439011`)

2. **Order Processing**:
   - Order record created with `profileId` and `encodingUrl`
   - Admin/system marks order as "paid" → "encoding"
   - Encoding URL: `synconnect.com/profile/507f1f77bcf86cd799439011`

3. **Card Encoding** (External/3rd Party):
   - Send encoding URL to NFC encoding service or encode manually
   - Physical NFC cards programmed with the profile URL
   - No need to track individual card serial numbers

4. **Shipping**:
   - Cards shipped to customer
   - Order status updated: "encoding" → "shipped" → "delivered"

5. **Customer Experience**:
   - Customer receives card
   - Taps card → redirects to `synconnect.com/profile/507f1f77bcf86cd799439011`
   - Profile page loads and displays content
   - Analytics tracked automatically

**Key Points**:
- Each NFC card URL contains the MongoDB ObjectId of the profile
- No separate NFCCards collection needed
- Orders table tracks which profile URL to encode
- Simpler admin workflow - just manage orders, not individual cards
- URL format: `/profile/[24-character-hex-mongodb-id]`
- Optional: Support custom slugs like `/profile/john-doe` for premium users

### Analytics & Insights
- **Track events**: Taps, views, lead submissions
- **Time-series data**: Store with timestamps for trend analysis
- **Dashboard**: Use React Query + Zustand for filtering/date ranges
- **Privacy**: Aggregate data, no PII in analytics unless necessary

## File Organization

### Monorepo Structure
```
synconnect-v3/
├── apps/
│   ├── web/              # Customer-facing (Next.js)
│   ├── dashboard/        # User dashboard (Next.js)
│   ├── admin/            # Admin panel (Next.js)
│   └── api/              # Express server
├── packages/
│   ├── ui/               # Shared React components
│   ├── schema/           # Zod schemas + TS types
│   ├── config/           # Shared configs
│   └── utils/            # Shared utilities
├── .agent/               # AI assistant context
├── package.json          # Root workspace config
└── turbo.json            # Turborepo config
```

### App-Specific Structure (Next.js)
```
apps/web/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── stores/           # Zustand stores
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities, API clients
│   └── styles/           # Global styles
├── public/               # Static assets
└── package.json
```

## Performance & Optimization

### Next.js
- **Use Static Generation** where possible (ISR for profiles)
- **Image optimization**: Use Next.js `<Image>` component
- **Code splitting**: Dynamic imports for heavy components
- **Metadata**: Proper SEO tags for public profiles

### React Query
- **Stale time**: Set appropriate stale times (e.g., 5 minutes for profiles)
- **Cache invalidation**: Invalidate on mutations
- **Optimistic updates**: For better UX on forms

### Database
- **Indexes**: Add indexes on frequently queried fields (e.g., `Profile.shortId`)
- **Pagination**: Implement cursor-based pagination for large datasets
- **Aggregation**: Use MongoDB aggregation for analytics

## Security

### Authentication
- **JWT tokens**: HttpOnly cookies for web apps
- **Refresh tokens**: Implement token rotation
- **Password hashing**: bcrypt with salt rounds ≥ 10

### Authorization
- **Role-based**: User, Admin roles
- **Resource ownership**: Verify user owns resource before mutations
- **API rate limiting**: Implement rate limiting on public endpoints

### Data Validation
- **Never trust client input**: Validate on backend with Zod
- **Sanitize**: Escape user-generated content for XSS prevention
- **CORS**: Configure properly for frontend apps

## Testing Strategy

### Unit Tests
- **Utilities**: Test all shared utilities in `packages/utils`
- **Schemas**: Validate Zod schemas with edge cases
- **Components**: Test UI components with React Testing Library

### Integration Tests
- **API endpoints**: Test with supertest
- **Database operations**: Use test database
- **Authentication flow**: End-to-end auth testing

### E2E Tests
- **Critical paths**: NFC activation, profile creation, checkout
- **Tools**: Playwright or Cypress

## Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Messages
- Use conventional commits: `type(scope): description`
- Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`
- Example: `feat(profile): add smart review logic`

### Pull Requests
- **Small, focused PRs** - One feature/fix per PR
- **Tests required** - All new features must have tests
- **Review required** - At least one approval before merge

## Environment Variables

### Required Variables
```env
# Database
MONGODB_URI=mongodb://...
MONGODB_DB_NAME=synconnect

# Authentication (NextAuth.js)
NEXTAUTH_URL=https://synconnect.com
NEXTAUTH_SECRET=... # Generate with: openssl rand -base64 32
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# JWT
JWT_SECRET=...
JWT_REFRESH_SECRET=...

# App URLs
NEXT_PUBLIC_WEB_URL=https://synconnect.com
NEXT_PUBLIC_DASHBOARD_URL=https://dashboard.synconnect.com
NEXT_PUBLIC_API_URL=https://api.synconnect.com

# Payment Gateway (Razorpay)
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
NEXT_PUBLIC_RAZORPAY_KEY_ID=... # For frontend

# Email Service
SENDGRID_API_KEY=... # or Mailgun
EMAIL_FROM=noreply@synconnect.com

# External Services (Optional)
GOOGLE_MAPS_API_KEY=... # For review stands
```

## Documentation

### Code Comments
- **JSDoc for functions**: Document parameters, return types, examples
- **Complex logic**: Explain "why", not "what"
- **TODOs**: Use `// TODO: description` for future improvements

### README Files
- Each app/package must have a README
- Include: Purpose, setup instructions, key features
- Keep updated with architectural changes

## Design System

### Colors
- **Primary**: Electric Green (`#00FF00`, `lime-400`)
- **Background**: Dark (`#0a0a0a`, `#1a1a1a`)
- **Text**: High contrast white/gray
- **Accents**: Use brand electric green consistently

### Components
- **Use Shadcn/UI** as base, customize with brand colors
- **Consistent spacing**: Use Tailwind spacing scale
- **Animations**: Subtle, purposeful (Framer Motion)
- **Responsive**: Mobile-first approach

### Typography
- **Headings**: Bold, high contrast
- **Body**: Readable, sufficient line height
- **Code/Monospace**: For technical content (UUIDs, codes)

## Deployment

### Build Process
- **Turborepo**: `turbo run build` for all apps
- **Environment-specific**: Separate configs for dev/staging/prod
- **Vercel**: Recommended for Next.js apps
- **Docker**: Containerize API server

### Monitoring
- **Error tracking**: Sentry or similar
- **Analytics**: Track key metrics (activations, conversions)
- **Logs**: Structured logging with levels

---

**Last Updated**: 2026-02-10
**Version**: 1.0.0
