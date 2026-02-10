# SynConnect v3 - Complete Page Structure

## Marketing Website (apps/web)
**Domain**: `synconnect.com`

### Public Pages (No Authentication Required)

#### 1. Landing Page ✅
**Route**: `/`  
**Purpose**: Convert visitors into customers  
**Documented in**: `MARKETING_PAGES.md`

**Sections:**
- Hero section with CTA
- How it works (3 steps)
- Features showcase
- Products preview
- Social proof (testimonials)
- Pricing (optional)
- FAQ
- Footer

---

#### 2. Shop Page ✅
**Route**: `/shop`  
**Purpose**: Browse all products  
**Documented in**: `MARKETING_PAGES.md`

**Features:**
- Product grid (2 products: NFC Card, Review Stand)
- Filters and sorting
- Add to cart
- Quick view

---

#### 3. Product Detail Page ✅
**Route**: `/shop/[product-id]`  
**Purpose**: Detailed product information  
**Documented in**: `MARKETING_PAGES.md`

**Sections:**
- Image gallery
- Product info (price, ratings, description)
- Variants (material, color)
- Dual CTA (Quick Buy / Customize First)
- Tabs (Description, Features, Reviews, FAQ)
- Related products

---

#### 4. Cart Page ✅
**Route**: `/cart`  
**Purpose**: Review cart before checkout  
**Documented in**: `MARKETING_PAGES.md`

**Features:**
- Cart items with quantities
- Update/remove items
- Promo code input
- Order summary
- Proceed to checkout CTA

---

#### 5. Checkout Page ✅
**Route**: `/checkout`  
**Purpose**: Complete purchase  
**Documented in**: `MARKETING_PAGES.md` + `CARD_PRINTING_SPECS.md`

**Sections:**
- Contact information
- Shipping address
- **Card design upload (optional)** 🆕
  - Logo upload
  - Name, title, company inputs
  - Card preview
- Payment (Razorpay)
- Order summary

---

#### 6. Order Success Page ✅
**Route**: `/order-confirmation` or `/order/success`  
**Purpose**: Confirm successful order  
**Documented in**: `MARKETING_PAGES.md`

**Content:**
- Success message
- Order number
- What's next (4 steps)
- View order details CTA
- Continue shopping CTA

---

#### 7. Order Failed Page ✅ 🆕
**Route**: `/order/failed`  
**Purpose**: Handle failed payments  
**Status**: **NEEDS DOCUMENTATION**

**Content:**
```
┌─────────────────────────────────────────┐
│                                         │
│         ❌ Payment Failed               │
│                                         │
│  We couldn't process your payment.     │
│                                         │
│  Reason: [Payment declined by bank]    │
│                                         │
│  Don't worry! Your cart is saved.      │
│                                         │
│  [Try Again] [Contact Support]         │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Display failure reason
- Cart is preserved
- Retry payment option
- Contact support link

---

#### 8. How It Works Page ✅ 🆕
**Route**: `/how-it-works`  
**Purpose**: Detailed explanation of the product  
**Status**: **NEEDS DOCUMENTATION**

**Sections:**
```
1. Introduction
   - What is SynConnect?
   - Why NFC cards?

2. How NFC Works
   - Tap technology explained
   - Compatible devices
   - No app required

3. Step-by-Step Guide
   - Order your card
   - Set up your profile
   - Tap to share
   - Track analytics

4. Use Cases
   - Networking events
   - Business meetings
   - Conferences
   - Daily interactions

5. Video Tutorial
   - Embedded video showing tap demo

6. FAQ
   - Common questions

7. CTA
   - Get Started button
```

---

#### 9. About Page ✅ 🆕
**Route**: `/about`  
**Purpose**: Company story and mission  
**Status**: **NEEDS DOCUMENTATION**

**Sections:**
```
1. Our Story
   - Why we built SynConnect
   - Problem we're solving

2. Our Mission
   - Make networking effortless
   - Reduce paper waste
   - Empower professionals

3. Our Values
   - Innovation
   - Sustainability
   - Customer-first

4. Team (Optional)
   - Founder photos
   - Team members

5. Contact
   - Email, phone
   - Office address (if any)
   - Social media links
```

---

#### 10. Contact Page 🆕
**Route**: `/contact`  
**Purpose**: Customer support and inquiries  
**Status**: **NEEDS DOCUMENTATION**

**Content:**
```
┌─────────────────────────────────────────┐
│  Contact Us                             │
├─────────────────────────────────────────┤
│                                         │
│  Get in Touch                           │
│                                         │
│  📧 Email: support@synconnect.com       │
│  📱 Phone: +91 98765 43210              │
│  🕐 Hours: Mon-Fri, 9 AM - 6 PM IST     │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Send us a message               │   │
│  │                                 │   │
│  │ Name: [___________________]     │   │
│  │ Email: [___________________]    │   │
│  │ Subject: [___________________]  │   │
│  │ Message:                        │   │
│  │ [_________________________]     │   │
│  │ [_________________________]     │   │
│  │                                 │   │
│  │ [Send Message]                  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  FAQ                                    │
│  - How does shipping work?              │
│  - Can I return my card?                │
│  - How do I update my profile?          │
│                                         │
└─────────────────────────────────────────┘
```

---

#### 11. Profile Pages ✅
**Route**: `/profile/[id]`  
**Purpose**: Public profile view (Digital Card / Review Stand)  
**Documented in**: `PROFILE_PAGES.md`

**Types:**
- Digital Business Card
- Smart Review Stand

---

#### 12. Legal Pages 🆕

##### Privacy Policy
**Route**: `/privacy`  
**Purpose**: Privacy policy and data handling  
**Status**: **NEEDS CONTENT**

##### Terms of Service
**Route**: `/terms`  
**Purpose**: Terms and conditions  
**Status**: **NEEDS CONTENT**

##### Refund Policy
**Route**: `/refund-policy`  
**Purpose**: Return and refund policy  
**Status**: **NEEDS CONTENT**

##### Shipping Policy
**Route**: `/shipping-policy`  
**Purpose**: Shipping information  
**Status**: **NEEDS CONTENT**

---

## Customer Dashboard (apps/dashboard)
**Domain**: `dashboard.synconnect.com`

### Authenticated Pages (Login Required)

#### 1. Dashboard Home ✅
**Route**: `/`  
**Purpose**: Overview of account  
**Documented in**: `DASHBOARD_UX.md`

**Sections:**
- Quick stats (taps, views, connections)
- Recent connections
- Profile status
- Quick actions

---

#### 2. Insights Tab ✅
**Route**: `/insights`  
**Purpose**: Analytics and metrics  
**Documented in**: `DASHBOARD_UX.md`

**Features:**
- Time period selector (week/month/year)
- Taps over time chart
- Geographic distribution (heat map)
- Device breakdown
- Social link clicks

---

#### 3. Profile Tab ✅
**Route**: `/profile`  
**Purpose**: Edit profile information  
**Documented in**: `DASHBOARD_UX.md`

**Sections:**
- Basic info (name, title, company, bio)
- Images (profile picture, cover photo, logo)
- Contact info
- Social links (max 30)
- Services
- Products/portfolio (max 10)
- Theme customization (colors, layout)

---

#### 4. Connections Tab ✅
**Route**: `/connections`  
**Purpose**: Manage leads from Connect button  
**Documented in**: `DASHBOARD_UX.md`

**Features:**
- Connection list with filters
- Search and tags
- Export to CSV
- Add notes
- Mark as read/unread

---

#### 5. Settings Tab ✅
**Route**: `/settings`  
**Purpose**: Account settings  
**Documented in**: `DASHBOARD_UX.md`

**Sections:**
- Account info
- Password change
- Email preferences
- Delete account

---

#### 6. Orders Page 🆕
**Route**: `/orders`  
**Purpose**: View order history  
**Status**: **NEEDS DOCUMENTATION**

**Content:**
```
┌─────────────────────────────────────────┐
│  My Orders                              │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Order #1234                     │   │
│  │ Feb 10, 2026                    │   │
│  │                                 │   │
│  │ 2× NFC Digital Card             │   │
│  │ Status: Shipped                 │   │
│  │ Tracking: DTDC123456            │   │
│  │                                 │   │
│  │ [Track Order] [View Details]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Order #1233                     │   │
│  │ Feb 5, 2026                     │   │
│  │                                 │   │
│  │ 1× Smart Review Stand           │   │
│  │ Status: Delivered               │   │
│  │                                 │   │
│  │ [View Details] [Reorder]        │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

---

## Admin Dashboard (apps/admin)
**Domain**: `admin.synconnect.com`

### Admin Pages (Admin Role Required)

#### 1. Overview ✅
**Route**: `/`  
**Documented in**: `ADMIN_DASHBOARD.md`

#### 2. Orders ✅
**Route**: `/orders`  
**Documented in**: `ADMIN_DASHBOARD.md`

#### 3. Users ✅
**Route**: `/users`  
**Documented in**: `ADMIN_DASHBOARD.md`

#### 4. Products ✅
**Route**: `/products`  
**Documented in**: `ADMIN_DASHBOARD.md`

#### 5. Analytics ✅
**Route**: `/analytics`  
**Documented in**: `ADMIN_DASHBOARD.md`

#### 6. Settings ✅
**Route**: `/settings`  
**Documented in**: `ADMIN_DASHBOARD.md`

---

## Complete Page Checklist

### Marketing Website (synconnect.com)
- [x] Landing Page (`/`)
- [x] Shop Page (`/shop`)
- [x] Product Detail (`/shop/[product-id]`)
- [x] Cart (`/cart`)
- [x] Checkout (`/checkout`)
- [x] Order Success (`/order-confirmation`)
- [x] **Order Failed (`/order/failed`)** ✅ DOCUMENTED
- [x] **How It Works (`/how-it-works`)** ✅ DOCUMENTED
- [x] **About (`/about`)** ✅ DOCUMENTED
- [x] **Contact (`/contact`)** ✅ DOCUMENTED
- [x] Profile Pages (`/profile/[id]`)
- [x] **Privacy Policy (`/privacy`)** ✅ DOCUMENTED
- [x] **Terms of Service (`/terms`)** ✅ DOCUMENTED
- [x] **Refund Policy (`/refund-policy`)** ✅ DOCUMENTED
- [x] **Shipping Policy (`/shipping-policy`)** ✅ DOCUMENTED

### Customer Dashboard (dashboard.synconnect.com)
- [x] Dashboard Home (`/`)
- [x] Insights (`/insights`)
- [x] Profile Editor (`/profile`)
- [x] Connections (`/connections`)
- [x] Settings (`/settings`)
- [x] **Orders (`/orders`)** ✅ DOCUMENTED

### Admin Dashboard (admin.synconnect.com)
- [x] Overview (`/`)
- [x] Orders (`/orders`)
- [x] Users (`/users`)
- [x] Products (`/products`)
- [x] Analytics (`/analytics`)
- [x] Settings (`/settings`)

---

## Summary

### ✅ All Pages Documented! (24 pages)

**Marketing Website (15 pages):**
- Landing, Shop, Product Detail, Cart, Checkout
- Order Success, Order Failed
- How It Works, About, Contact
- Profile Pages
- Privacy, Terms, Refund, Shipping

**Customer Dashboard (6 pages):**
- Dashboard, Insights, Profile, Connections, Settings, Orders

**Admin Dashboard (6 pages):**
- Overview, Orders, Users, Products, Analytics, Settings

---

## New Documentation Files

### ADDITIONAL_PAGES_1.md
- ✅ Order Failed Page
- ✅ How It Works Page
- ✅ About Page

### ADDITIONAL_PAGES_2.md
- ✅ Contact Page
- ✅ Orders Page (Dashboard)
- ✅ Legal Pages (Privacy, Terms, Refund, Shipping)

---

**Status**: 🎉 **ALL PAGES DOCUMENTED!**

---

**Next Steps:**
1. Document the 6 missing pages
2. Write legal page content (privacy, terms, etc.)
3. Start building the monorepo

---

**Last Updated**: 2026-02-10
