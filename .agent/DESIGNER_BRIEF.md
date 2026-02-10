# SynConnect v3 - Designer Brief

**Project**: Smart NFC Business Cards & Review Stands  
**Date**: 2026-02-10  
**For**: Design Team

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Design System](#design-system)
3. [Complete Page Structure](#complete-page-structure)
4. [User Flows](#user-flows)
5. [Content Guidelines](#content-guidelines)
6. [Design Deliverables](#design-deliverables)

---

## 🎯 Project Overview

### What is SynConnect?

SynConnect is a **smart NFC business card platform** that allows professionals to share their digital profile with a single tap.

### Products

1. **NFC Digital Business Card** (₹1,499)
   - Physical card with NFC chip + QR code
   - Custom logo printed on card
   - Tap to share digital profile
   - Lifetime profile updates

2. **Smart Review Stand** (₹1,299)
   - Acrylic stand with NFC chip
   - For restaurants/cafes/stores
   - Tap to leave Google review

### Key Features

- 📱 **Tap to Share** - No app required
- 🎨 **Customizable Profiles** - Custom colors, logo, content
- 📊 **Analytics** - Track taps, views, connections
- 🔗 **Connect Button** - Collect leads
- 📦 **E-commerce** - Order cards online

---

## 🎨 Design System

### Brand Identity

**Brand Personality:**
- Modern & Tech-forward
- Professional yet approachable
- Eco-conscious
- Premium quality

**Tone of Voice:**
- Clear and direct
- Friendly but professional
- Confident
- Helpful

---

### Color Palette

#### Primary Colors

**Electric Green** (Brand Color)
```
Primary:   #67D861
Light:     #B6ECAF
Dark:      #4CAF50
```
**Usage:** CTAs, highlights, active states, links

**Dark Backgrounds**
```
Primary:   #0A0A0A (almost black)
Secondary: #1A1A1A (dark grey)
Tertiary:  #2A2A2A (lighter grey)
```
**Usage:** Backgrounds, cards, sections

#### Accent Colors

**Lime/Green Tones**
```
Lime 50:   #F7FEE7
Lime 100:  #ECFCCB
Lime 200:  #D9F99D
Lime 300:  #BEF264
Lime 400:  #A3E635  ← Use for highlights
Lime 500:  #84CC16
```

#### Neutral Colors

**Greys**
```
Grey 50:   #FAFAFA (lightest)
Grey 100:  #F5F5F5
Grey 200:  #E5E5E5
Grey 300:  #D4D4D4
Grey 400:  #A3A3A3
Grey 500:  #737373
Grey 600:  #525252
Grey 700:  #404040
Grey 800:  #262626
Grey 900:  #171717 (darkest)
```

#### Semantic Colors

**Success:** `#10B981` (Green)  
**Warning:** `#F59E0B` (Amber)  
**Error:** `#EF4444` (Red)  
**Info:** `#3B82F6` (Blue)

---

### Typography

**Font Family:** Inter (Google Fonts)

**Headings:**
```
H1: 48px / 56px, Bold (700)
H2: 36px / 44px, Bold (700)
H3: 30px / 38px, Semibold (600)
H4: 24px / 32px, Semibold (600)
H5: 20px / 28px, Medium (500)
H6: 18px / 26px, Medium (500)
```

**Body:**
```
Large:  18px / 28px, Regular (400)
Base:   16px / 24px, Regular (400)
Small:  14px / 20px, Regular (400)
Tiny:   12px / 16px, Regular (400)
```

**Special:**
```
Button: 16px, Semibold (600)
Link:   16px, Medium (500), Underline on hover
Label:  14px, Medium (500)
```

---

### Spacing System

**Base Unit:** 4px

```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
4xl: 96px  (6rem)
```

---

### Border Radius

```
sm:  4px   (small elements)
md:  8px   (cards, buttons)
lg:  12px  (large cards)
xl:  16px  (modals)
2xl: 24px  (hero sections)
full: 9999px (pills, avatars)
```

---

### Shadows

```
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
xl:  0 20px 25px rgba(0,0,0,0.1)
2xl: 0 25px 50px rgba(0,0,0,0.25)
```

**Glow Effect (for Electric Green):**
```
0 0 20px rgba(103, 216, 97, 0.3)
```

---

### Buttons

#### Primary Button
```
Background: #67D861 (Electric Green)
Text: #0A0A0A (Dark)
Hover: #4CAF50 (Darker Green)
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Semibold
Shadow: 0 4px 6px rgba(103, 216, 97, 0.2)
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid #67D861
Text: #67D861
Hover: Background #67D861, Text #0A0A0A
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Semibold
```

#### Ghost Button
```
Background: Transparent
Text: #FAFAFA
Hover: Background #1A1A1A
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Semibold
```

---

### Cards

**Standard Card:**
```
Background: #1A1A1A
Border: 1px solid #2A2A2A
Border Radius: 12px
Padding: 24px
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover: Border #67D861, Shadow glow
```

**Product Card:**
```
Background: #1A1A1A
Border Radius: 16px
Padding: 0 (image full width)
Shadow: 0 10px 15px rgba(0,0,0,0.1)
Hover: Transform scale(1.02), Shadow xl
```

---

### Icons

**Style:** Outline (Lucide Icons or Heroicons)  
**Size:** 20px (small), 24px (medium), 32px (large)  
**Color:** Inherit from text or #67D861 for highlights

---

## 📱 Complete Page Structure

### 3 Main Applications

1. **Marketing Website** (`synconnect.com`) - 15 pages
2. **Customer Dashboard** (`dashboard.synconnect.com`) - 6 pages
3. **Admin Dashboard** (`admin.synconnect.com`) - 6 pages

---

## 🌐 Marketing Website (15 Pages)

### 1. Landing Page (`/`)

**Purpose:** Convert visitors into customers

**Sections:**

#### Hero Section
```
Content:
- Headline: "Your Business Card, Reimagined"
- Subheadline: "Share your contact info, social media, and portfolio with a single tap. No app required."
- CTA: "🚀 Buy Now" (Primary) + "👀 See How It Works" (Secondary)
- Hero Image: Person tapping NFC card on phone, profile appearing

Design Notes:
- Full viewport height
- Dark background (#0A0A0A)
- Electric Green accents
- Animated card tap interaction
- Gradient overlay on image
```

#### How It Works (3 Steps)
```
Content:
1. Order Your Card → Choose design, customize profile
2. Tap to Share → Simply tap on any smartphone
3. Track Engagement → See who viewed your profile

Design Notes:
- 3 columns on desktop, stack on mobile
- Icons for each step
- Number badges (1, 2, 3) in Electric Green
- Subtle animations on scroll
```

#### Features Section (6 Features)
```
Content:
- NFC Technology
- No App Required
- Instant Updates
- Analytics Dashboard
- Eco-Friendly
- Professional Design

Design Notes:
- 3x2 grid on desktop, 1 column on mobile
- Icon + Title + Description
- Hover effects
```

#### Products Preview (2 Products)
```
Content:
- NFC Digital Business Card (₹1,499)
- Smart Review Stand (₹1,299)

Design Notes:
- 2 columns on desktop, stack on mobile
- Product image, name, price, features
- "Learn More →" link
- Hover: Scale up slightly
```

#### Social Proof (3-4 Testimonials)
```
Content:
- Customer photo, name, title, company
- Quote
- Star rating

Design Notes:
- Carousel or grid
- Cards with subtle shadows
- Quote marks in Electric Green
```

#### FAQ (6-8 Questions)
```
Content:
- How does NFC work?
- Do recipients need an app?
- Can I update my information?
- What phones are compatible?
- How long does shipping take?
- What if my card gets damaged?

Design Notes:
- Accordion style
- Electric Green icon for expand/collapse
- Smooth animations
```

#### Footer
```
Content:
- Company: About, Contact, Blog
- Products: Digital Card, Review Stand
- Support: Help, Shipping, Returns
- Legal: Privacy, Terms
- Social: LinkedIn, Twitter, Instagram
- Newsletter signup

Design Notes:
- Dark background (#0A0A0A)
- 4 columns on desktop, stack on mobile
- Electric Green links on hover
```

---

### 2. Shop Page (`/shop`)

**Purpose:** Browse products

**Layout:**
```
Header: "Shop" + Cart icon (with count)
Filters: Product type, Sort by
Product Grid: 2 products (for now)

Each Product Card:
- Product image
- Product name
- Price
- Star rating + review count
- 3-4 key features (bullets)
- "View Details" button

Design Notes:
- 2 columns on desktop, 1 on mobile
- Hover: Shadow + slight scale
- Empty state if no products
```

---

### 3. Product Detail Page (`/shop/[product-id]`)

**Purpose:** Detailed product info, drive purchase

**Layout:**
```
┌─────────────────────────────────────────┐
│ ← Back to Shop          🛒 Cart (2)     │
├─────────────────────────────────────────┤
│                                         │
│ ┌──────────┐  ┌─────────────────────┐  │
│ │          │  │ NFC Digital Card    │  │
│ │  Image   │  │                     │  │
│ │ Gallery  │  │ ₹1,499              │  │
│ │          │  │ ⭐⭐⭐⭐⭐ (234)     │  │
│ │ [Thumb]  │  │                     │  │
│ │ [Thumb]  │  │ Description...      │  │
│ │ [Thumb]  │  │                     │  │
│ │          │  │ Material: [Metal ▼] │  │
│ │          │  │ Color: [Black ▼]    │  │
│ │          │  │ Quantity: [1 ▼]     │  │
│ │          │  │                     │  │
│ │          │  │ [🚀 Quick Buy]      │  │
│ │          │  │ [👀 Customize]      │  │
│ │          │  │                     │  │
│ │          │  │ ✓ Free shipping     │  │
│ │          │  │ ✓ 30-day guarantee  │  │
│ └──────────┘  └─────────────────────┘  │
│                                         │
│ [Tabs: Description | Features | Reviews]│
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Image gallery with zoom on hover
- Sticky "Add to Cart" on mobile
- Tabs for different content sections
- Related products at bottom

---

### 4. Cart Page (`/cart`)

**Purpose:** Review items before checkout

**Layout:**
```
Shopping Cart (2 items)

┌──────────────────────────────────────┐
│ [Image] NFC Digital Card - Metal     │
│         ₹2,999 × 2        ₹5,998     │
│         [- 2 +] [Remove]             │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Promo Code: [________] [Apply]       │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Order Summary                        │
│ Subtotal:              ₹5,998        │
│ Shipping:              FREE          │
│ Tax (18%):             ₹1,080        │
│ ─────────────────────────────────    │
│ Total:                 ₹7,078        │
│                                      │
│ [Proceed to Checkout]                │
└──────────────────────────────────────┘

[← Continue Shopping]
```

**Design Notes:**
- Clear item list
- Quantity controls
- Real-time price updates
- Prominent checkout button
- Empty cart state with CTA

---

### 5. Checkout Page (`/checkout`)

**Purpose:** Collect info and process payment

**Layout:**
```
┌─────────────────────────────────────────┐
│ Checkout                    🔒 Secure   │
├─────────────────────────────────────────┤
│                                         │
│ ┌──────────────┐  ┌──────────────────┐ │
│ │ 1. Contact   │  │ Order Summary    │ │
│ │ Email:       │  │ 2× NFC Card      │ │
│ │ [_________]  │  │ ₹5,998           │ │
│ │              │  │                  │ │
│ │ 2. Shipping  │  │ Subtotal: ₹5,998 │ │
│ │ Name:        │  │ Shipping: FREE   │ │
│ │ [_________]  │  │ Tax: ₹1,080      │ │
│ │ Phone:       │  │ ─────────────    │ │
│ │ [_________]  │  │ Total: ₹7,078    │ │
│ │ Address:     │  │                  │ │
│ │ [_________]  │  │ [Edit Cart]      │ │
│ │              │  └──────────────────┘ │
│ │ 3. Card      │                       │
│ │    Design    │                       │
│ │ Logo Upload: │                       │
│ │ [Upload]     │                       │
│ │ Name:        │                       │
│ │ [_________]  │                       │
│ │ Title:       │                       │
│ │ [_________]  │                       │
│ │              │                       │
│ │ 4. Payment   │                       │
│ │ [Razorpay]   │                       │
│ │              │                       │
│ │ [Place Order]│                       │
│ └──────────────┘                       │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Progress indicator at top
- Form validation
- Sticky order summary on desktop
- Secure badges
- Card design preview

---

### 6. Order Success (`/order-confirmation`)

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│         ✅ Order Confirmed!             │
│                                         │
│    Thank you for your order, John!      │
│                                         │
│ Order #1234                             │
│ Confirmation sent to: john@example.com  │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ What's Next?                        │ │
│ │ 1. We'll prepare your order         │ │
│ │ 2. You'll receive tracking info     │ │
│ │ 3. When card arrives, activate it   │ │
│ │ 4. Start sharing your profile!      │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [View Order] [Continue Shopping]        │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Celebratory feel
- Clear next steps
- Order number prominent
- CTAs for next actions

---

### 7. Order Failed (`/order/failed`)

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│         ❌ Payment Failed               │
│                                         │
│   We couldn't process your payment      │
│                                         │
│ Reason: Payment declined by bank        │
│                                         │
│ Don't worry! Your cart is saved.        │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Your Order (Saved)                  │ │
│ │ 2× NFC Card            ₹5,998       │ │
│ │ Total:                 ₹7,078       │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [🔄 Try Again] [💬 Contact Support]     │
│                                         │
│ [← Back to Cart]                        │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Empathetic tone
- Clear error message
- Easy retry
- Support access

---

### 8. How It Works (`/how-it-works`)

**Sections:**
1. What is SynConnect?
2. How NFC Technology Works
3. Step-by-Step Guide (4 steps)
4. Video Tutorial (embedded)
5. Use Cases (6 scenarios)
6. Compatible Devices
7. FAQ
8. CTA: "Order Your Card Now"

**Design Notes:**
- Educational tone
- Lots of visuals/diagrams
- Video embed
- Device compatibility icons
- FAQ accordion

---

### 9. About Page (`/about`)

**Sections:**
1. Our Story
2. Our Mission
3. Our Values (3 pillars)
4. Our Impact (stats)
5. Meet the Team (optional)
6. Get in Touch

**Design Notes:**
- Storytelling approach
- Team photos (if available)
- Stats with animations
- Social links

---

### 10. Contact Page (`/contact`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Contact Us                              │
├─────────────────────────────────────────┤
│                                         │
│ ┌──────────────┐  ┌──────────────────┐ │
│ │ Get in Touch │  │ Contact Info     │ │
│ │              │  │ 📧 Email         │ │
│ │ Name:        │  │ 📱 Phone         │ │
│ │ [_________]  │  │ 🕐 Hours         │ │
│ │ Email:       │  │ 📍 Location      │ │
│ │ [_________]  │  │                  │ │
│ │ Subject:     │  │ [Social Links]   │ │
│ │ [_________]  │  └──────────────────┘ │
│ │ Message:     │                       │
│ │ [_________]  │                       │
│ │              │                       │
│ │ [Send]       │                       │
│ └──────────────┘                       │
│                                         │
│ FAQ (accordion)                         │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Contact form with validation
- Contact info clearly visible
- FAQ section
- Map (optional)

---

### 11-14. Legal Pages

**Pages:**
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Refund Policy (`/refund-policy`)
- Shipping Policy (`/shipping-policy`)

**Design:**
- Simple, readable layout
- Table of contents
- Clear sections
- Last updated date

---

### 15. Profile Pages (`/profile/[id]`)

**Two Types:**

#### A. Digital Business Card Profile

**Layout:**
```
┌─────────────────────────────────────────┐
│ [Cover Photo]                           │
│                                         │
│     [Profile Photo]                     │
│     John Doe                            │
│     Product Designer                    │
│     Tech Innovations Inc.               │
│                                         │
│ [💾 Save Contact] [🔗 Connect with Me]  │
├─────────────────────────────────────────┤
│ About                                   │
│ Bio text here...                        │
├─────────────────────────────────────────┤
│ Contact                                 │
│ 📧 Email  📱 Phone  🌐 Website          │
├─────────────────────────────────────────┤
│ Social Links                            │
│ [LinkedIn] [Twitter] [Instagram]        │
├─────────────────────────────────────────┤
│ Services                                │
│ - UI/UX Design                          │
│ - Product Strategy                      │
│ - User Research                         │
├─────────────────────────────────────────┤
│ Portfolio                               │
│ [Project 1] [Project 2] [Project 3]     │
├─────────────────────────────────────────┤
│ Testimonials                            │
│ "Great designer!" - Client Name         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- **Custom theme colors** (each user can customize)
- **Custom logo** (uploaded by user)
- Responsive design
- Smooth animations
- Share buttons

#### B. Review Stand Profile

**Layout:**
```
┌─────────────────────────────────────────┐
│ [Business Logo]                         │
│                                         │
│ Cafe Delight                            │
│ Mumbai's Best Coffee Shop               │
│                                         │
│ ⭐⭐⭐⭐⭐ 4.8 (234 reviews)             │
│                                         │
│ [⭐ Leave a Review on Google]           │
├─────────────────────────────────────────┤
│ About Us                                │
│ Description...                          │
├─────────────────────────────────────────┤
│ Location                                │
│ 📍 Address                              │
│ 🕐 Hours                                │
│ 📱 Phone                                │
├─────────────────────────────────────────┤
│ Menu / Services                         │
│ ...                                     │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Focus on review CTA
- Business branding
- Location info
- Menu/services

---

## 👤 Customer Dashboard (6 Pages)

**Domain:** `dashboard.synconnect.com`

### Layout Structure

**Sidebar Navigation:**
```
┌─────────────────┐
│ SynConnect      │
│ [Logo]          │
├─────────────────┤
│ 📊 Dashboard    │
│ 📈 Insights     │
│ 👤 Profile      │
│ 🔗 Connections  │
│ 📦 Orders       │
│ ⚙️  Settings    │
├─────────────────┤
│ [User Menu]     │
│ John Doe        │
│ john@email.com  │
│ [Logout]        │
└─────────────────┘
```

**Design Notes:**
- Dark sidebar (#1A1A1A)
- Active item: Electric Green
- Collapsible on mobile
- User avatar at bottom

---

### 1. Dashboard Home (`/`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Welcome back, John! 👋                  │
├─────────────────────────────────────────┤
│                                         │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│ │ 234  │ │ 1.2K │ │ 89   │ │ 45   │   │
│ │ Taps │ │ Views│ │ Conn │ │ Clicks│  │
│ └──────┘ └──────┘ └──────┘ └──────┘   │
│                                         │
│ Recent Connections (5)                  │
│ ┌─────────────────────────────────────┐ │
│ │ Sarah Johnson - 2 hours ago         │ │
│ │ sarah@email.com | +91 98765 43210   │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Profile Status                          │
│ ✅ Profile Active                       │
│ ✅ Card Activated                       │
│ ⚠️  Add more social links               │
│                                         │
│ Quick Actions                           │
│ [Edit Profile] [View Analytics]         │
│ [Share Profile] [Order New Card]        │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Stats cards with icons
- Recent activity feed
- Quick actions
- Profile completion checklist

---

### 2. Insights (`/insights`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Analytics                               │
│ [This Week ▼] [This Month] [This Year]  │
├─────────────────────────────────────────┤
│                                         │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│ │ 234  │ │ 1.2K │ │ 89   │ │ 45   │   │
│ │ Taps │ │ Views│ │ Conn │ │ Clicks│  │
│ └──────┘ └──────┘ └──────┘ └──────┘   │
│                                         │
│ Taps Over Time                          │
│ [Line Chart]                            │
│                                         │
│ Geographic Distribution                 │
│ [Heat Map]                              │
│                                         │
│ Device Breakdown                        │
│ [Pie Chart]                             │
│ 📱 iOS: 60% | 🤖 Android: 35% | 💻 5%   │
│                                         │
│ Top Social Links                        │
│ 1. LinkedIn - 45 clicks                 │
│ 2. Instagram - 32 clicks                │
│ 3. Website - 28 clicks                  │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Time period selector
- Interactive charts (Chart.js or Recharts)
- Heat map for locations
- Color-coded data
- Export button

---

### 3. Profile Editor (`/profile`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Edit Profile                            │
│ [Preview] [Save Changes]                │
├─────────────────────────────────────────┤
│                                         │
│ Basic Information                       │
│ ┌─────────────────────────────────────┐ │
│ │ Profile Photo: [Upload]             │ │
│ │ Cover Photo: [Upload]               │ │
│ │ Logo: [Upload]                      │ │
│ │                                     │ │
│ │ Full Name: [___________]            │ │
│ │ Title: [___________]                │ │
│ │ Company: [___________]              │ │
│ │ Bio: [___________]                  │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Contact Information                     │
│ ┌─────────────────────────────────────┐ │
│ │ Email: [___________]                │ │
│ │ Phone: [___________]                │ │
│ │ Website: [___________]              │ │
│ │ Location: [___________]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Social Links (Max 30)                   │
│ ┌─────────────────────────────────────┐ │
│ │ [LinkedIn] [___________] [Remove]   │ │
│ │ [Twitter] [___________] [Remove]    │ │
│ │ [+ Add Link]                        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Theme Customization                     │
│ ┌─────────────────────────────────────┐ │
│ │ Primary Color: [🎨 #67D861]         │ │
│ │ Secondary Color: [🎨 #B6ECAF]       │ │
│ │ Layout: [Modern ▼]                  │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Services                                │
│ Products/Portfolio                      │
│ Testimonials                            │
│                                         │
│ [Save Changes] [Preview]                │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Tabbed sections
- Live preview
- Image upload with crop
- Color picker
- Drag-and-drop for reordering
- Character limits shown

---

### 4. Connections (`/connections`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Connections (89)                        │
│ [Search...] [Filter ▼] [Export CSV]    │
├─────────────────────────────────────────┤
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Sarah Johnson                       │ │
│ │ sarah@email.com | +91 98765 43210   │ │
│ │ Message: "Interested in services"   │ │
│ │ Feb 10, 2026 - 2:30 PM              │ │
│ │ [View] [Add Note] [Mark Read]       │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Rajesh Kumar                        │ │
│ │ rajesh@email.com | +91 98765 12345  │ │
│ │ Message: "Let's collaborate"        │ │
│ │ Feb 9, 2026 - 5:15 PM               │ │
│ │ [View] [Add Note] [Mark Read]       │ │
│ └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- List view with cards
- Search and filters
- Export functionality
- Unread indicator
- Notes/tags

---

### 5. Orders (`/orders`)

**Layout:**
```
┌─────────────────────────────────────────┐
│ My Orders                               │
│ [All Orders ▼] [Search...]              │
├─────────────────────────────────────────┤
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Order #1234          Feb 10, 2026   │ │
│ │ ─────────────────────────────────── │ │
│ │ 2× NFC Digital Card - Metal, Black  │ │
│ │                                     │ │
│ │ Status: 📦 Shipped                  │ │
│ │ Tracking: DTDC123456789             │ │
│ │ Estimated Delivery: Feb 15, 2026    │ │
│ │                                     │ │
│ │ Total: ₹5,998                       │ │
│ │                                     │ │
│ │ [Track] [Details] [Invoice]         │ │
│ └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Design Notes:**
- Order cards
- Status badges with colors
- Tracking info
- Download invoice
- Reorder button

---

### 6. Settings (`/settings`)

**Sections:**
```
Account Information
- Email, Password change

Email Preferences
- Order updates
- Marketing emails
- Analytics reports

Privacy
- Profile visibility
- Analytics tracking

Danger Zone
- Delete account
```

**Design Notes:**
- Tabbed or accordion
- Confirmation modals
- Toggle switches
- Danger zone in red

---

## 👨‍💼 Admin Dashboard (6 Pages)

**Domain:** `admin.synconnect.com`

### 1. Overview (`/`)

**Stats Cards:**
- Total Users
- Total Orders
- Revenue (This Month)
- Active Profiles

**Charts:**
- Revenue over time
- Orders over time
- User growth

**Recent Activity:**
- Latest orders
- New users
- Support tickets

---

### 2. Orders (`/orders`)

**Table View:**
```
Order# | Customer | Products | Status | Total | Date | Actions
```

**Filters:**
- Status (Pending, Paid, Shipped, Delivered)
- Date range
- Search

**Order Detail:**
- Customer info
- Products ordered
- Card design info (logo, name, etc.)
- Payment status
- Shipping status
- Design approval
- Print status

---

### 3. Users (`/users`)

**Table View:**
```
Name | Email | Profile | Orders | Joined | Status | Actions
```

**User Detail:**
- Account info
- Profile details
- Order history
- Analytics summary
- Actions (Suspend, Delete)

---

### 4. Products (`/products`)

**Product List:**
- NFC Digital Card
- Smart Review Stand

**Product Detail:**
- Name, description
- Price, variants
- Stock status
- Images
- Edit/Delete

---

### 5. Analytics (`/analytics`)

**Platform-wide Stats:**
- Total taps
- Total views
- Total connections
- Geographic distribution
- Device breakdown
- Popular features

---

### 6. Settings (`/settings`)

**Sections:**
- Site settings
- Email templates
- Payment settings
- Shipping settings
- Admin users

---

## 🔄 User Flows

### Flow 1: Purchase NFC Card

```
Landing Page
    ↓ Click "Buy Now"
Shop Page
    ↓ Click "View Details"
Product Detail
    ↓ Select variant, Click "Quick Buy"
Checkout
    ↓ Fill form, Upload logo (optional), Pay
Order Success
    ↓ Receive confirmation email
Dashboard → Orders
    ↓ Track order
Receive Card
    ↓ Activate card
Dashboard → Profile
    ↓ Customize profile
Share Profile!
```

---

### Flow 2: Customize Profile

```
Login → Dashboard
    ↓ Click "Profile"
Profile Editor
    ↓ Upload images
    ↓ Fill information
    ↓ Add social links
    ↓ Choose theme colors
    ↓ Add services/products
    ↓ Click "Save"
Preview Profile
    ↓ Click "Publish"
Profile Live!
```

---

### Flow 3: View Analytics

```
Dashboard
    ↓ Click "Insights"
Insights Page
    ↓ Select time period
View Charts
    ↓ Taps, Views, Connections
    ↓ Geographic heat map
    ↓ Device breakdown
    ↓ Link clicks
Export Data (optional)
```

---

### Flow 4: Manage Connections

```
Someone taps card
    ↓ Views profile
    ↓ Clicks "Connect with Me"
Connection Form
    ↓ Fills name, email, message
    ↓ Submits
Dashboard → Connections
    ↓ View new connection
    ↓ Add notes/tags
    ↓ Export to CSV
Follow up!
```

---

### Flow 5: Admin Order Management

```
Customer places order
    ↓
Admin Dashboard → Orders
    ↓ View order details
    ↓ Check card design info
    ↓ Download logo
    ↓ Mark "Design Approved"
Print card
    ↓ Mark "Printed"
Encode NFC chip
    ↓ Mark "Encoded"
Ship order
    ↓ Add tracking number
    ↓ Mark "Shipped"
Customer receives
    ↓ Mark "Delivered"
```

---

## 📝 Content Guidelines

### Tone of Voice

**Do:**
- Be clear and direct
- Use simple language
- Be helpful and friendly
- Show personality
- Focus on benefits

**Don't:**
- Use jargon
- Be overly formal
- Make assumptions
- Use passive voice
- Be vague

---

### Writing Style

**Headlines:**
- Short and punchy
- Benefit-focused
- Action-oriented
- Example: "Your Business Card, Reimagined"

**Body Copy:**
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Active voice
- Example: "Share your profile with a tap. No app required."

**CTAs:**
- Action verbs
- Clear value
- Emoji for personality (optional)
- Examples: "🚀 Buy Now", "👀 See How It Works"

---

### Microcopy

**Form Labels:**
- Clear and concise
- Example: "Email address" not "Email"

**Error Messages:**
- Helpful, not blaming
- Example: "Please enter a valid email" not "Invalid email"

**Success Messages:**
- Celebratory
- Example: "✅ Profile updated successfully!"

**Empty States:**
- Encouraging
- Example: "No connections yet. Share your profile to get started!"

---

## 🎨 Design Deliverables

### What We Need

#### 1. Marketing Website (15 pages)
- [ ] Landing page (Desktop + Mobile)
- [ ] Shop page
- [ ] Product detail page
- [ ] Cart page
- [ ] Checkout page
- [ ] Order success/failed pages
- [ ] How It Works page
- [ ] About page
- [ ] Contact page
- [ ] Legal pages (template)
- [ ] Profile pages (2 types)

#### 2. Customer Dashboard (6 pages)
- [ ] Dashboard home
- [ ] Insights page
- [ ] Profile editor
- [ ] Connections page
- [ ] Orders page
- [ ] Settings page

#### 3. Admin Dashboard (6 pages)
- [ ] Overview
- [ ] Orders management
- [ ] Users management
- [ ] Products management
- [ ] Analytics
- [ ] Settings

#### 4. Components
- [ ] Buttons (Primary, Secondary, Ghost)
- [ ] Forms (Inputs, Selects, Textareas)
- [ ] Cards (Product, Stats, Content)
- [ ] Navigation (Header, Sidebar, Footer)
- [ ] Modals
- [ ] Alerts/Toasts
- [ ] Loading states
- [ ] Empty states

#### 5. Assets
- [ ] Logo (SVG)
- [ ] Icons (set)
- [ ] Illustrations (if needed)
- [ ] Product mockups
- [ ] Hero images

---

### Design Tools

**Recommended:**
- Figma (preferred)
- Adobe XD
- Sketch

**Deliverable Format:**
- Figma file (with components)
- Design system documentation
- Exported assets (SVG, PNG)

---

### Responsive Breakpoints

```
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
```

---

## 📚 Reference Documents

**For detailed specs, refer to:**
- `specs/MARKETING_PAGES.md` - All marketing pages
- `specs/PROFILE_PAGES.md` - Profile page designs
- `specs/DASHBOARD_UX.md` - Customer dashboard
- `specs/ADMIN_DASHBOARD.md` - Admin dashboard
- `design/DESIGN_GUIDELINES.md` - Complete design system
- `design/COLORS_QUICK_REF.md` - Color palette

---

## ✅ Design Checklist

Before starting:
- [ ] Read this brief thoroughly
- [ ] Review all reference documents
- [ ] Understand user flows
- [ ] Clarify any questions

During design:
- [ ] Follow design system (colors, typography, spacing)
- [ ] Design for mobile first
- [ ] Include all states (hover, active, disabled, loading, error)
- [ ] Add empty states
- [ ] Consider accessibility (contrast, font size)

Before delivery:
- [ ] Review all pages
- [ ] Check consistency
- [ ] Organize Figma file
- [ ] Export assets
- [ ] Document any custom components

---

## 📞 Questions?

If you have any questions or need clarification:
1. Review the reference documents in `.agent/specs/` and `.agent/design/`
2. Check the complete documentation in `.agent/INDEX.md`
3. Reach out to the development team

---

**Happy Designing!** 🎨

**Last Updated**: 2026-02-10
