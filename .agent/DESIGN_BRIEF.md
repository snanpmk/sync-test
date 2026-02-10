# SynConnect v3 - Complete Design Brief

**For**: Designer  
**Project**: SynConnect - NFC Digital Business Card Platform  
**Date**: February 10, 2026  
**Version**: 3.0

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Brand Identity & Theme](#brand-identity--theme)
3. [Complete Page Structure](#complete-page-structure)
4. [Content & Navigation Map](#content--navigation-map)
5. [Design System](#design-system)
6. [Page-by-Page Content Guide](#page-by-page-content-guide)
7. [User Flows](#user-flows)
8. [Design Deliverables](#design-deliverables)

---

## 🎯 Project Overview

### What is SynConnect?

SynConnect is a **NFC-powered digital business card platform** that allows professionals to share their contact information, social media, and portfolio with a single tap. No app required for recipients.

### Business Model

1. **E-commerce**: Sell NFC cards and review stands online
2. **Profile Platform**: Users create digital profiles (like Linktree)
3. **Analytics**: Track profile views, taps, and connections
4. **Subscription**: Premium features (future)

### Target Audience

- **Primary**: Professionals, entrepreneurs, business owners (25-45 years)
- **Secondary**: Freelancers, content creators, sales teams
- **Geography**: India (initially), Global (future)

### Key Value Propositions

- ✅ **Instant Sharing**: Tap card on any phone, profile appears instantly
- ✅ **No App Required**: Works with all modern smartphones (iOS & Android)
- ✅ **Always Updated**: Change your info anytime, card stays the same
- ✅ **Track Engagement**: See who viewed your profile and clicked your links
- ✅ **Eco-Friendly**: One card replaces thousands of paper cards
- ✅ **Professional**: Premium metal or PVC cards with custom designs

---

## 🎨 Brand Identity & Theme

### Official Color Palette

**CRITICAL**: These are the ONLY colors to use. Do not deviate from these exact hex codes.

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Dark Grey     │  │ Electric Green  │  │  Pale Green     │  │     White       │
│                 │  │                 │  │                 │  │                 │
│                 │  │                 │  │                 │  │                 │
│                 │  │                 │  │                 │  │                 │
│    #1A1A1A      │  │    #67D861      │  │    #B6ECAF      │  │    #FFFFFF      │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
  Background           Primary Accent       Secondary           Text/Surface
```

### Color Usage Rules

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Electric Green** | `#67D861` | Primary CTAs, highlights, active states, links, icons |
| **Pale Green** | `#B6ECAF` | Hover states, secondary buttons, subtle accents, borders |
| **Dark Grey** | `#1A1A1A` | Main backgrounds, cards, dark surfaces, navigation |
| **White** | `#FFFFFF` | Text on dark backgrounds, light surfaces, borders |

### Typography

**Primary Font**: **Inter** (Google Fonts)

- **Headings**: Inter Bold (700)
- **Subheadings**: Inter Semibold (600)
- **Body Text**: Inter Regular (400)
- **Buttons**: Inter Medium (500)

**Font Sizes**:
- Hero Headline: 48px (3rem)
- Section Headline: 36px (2.25rem)
- Subheading: 24px (1.5rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

### Design Style

- **Theme**: Dark mode by default (Dark Grey backgrounds)
- **Style**: Modern, clean, professional, tech-forward
- **Mood**: Confident, innovative, trustworthy
- **Aesthetic**: Minimalist with vibrant green accents
- **Effects**: Subtle shadows, smooth transitions, hover effects

### Visual Elements

- **Border Radius**: 
  - Buttons: 12px (rounded-lg)
  - Cards: 16px (rounded-xl)
  - Inputs: 8px (rounded-md)
- **Shadows**: Subtle shadows on cards and modals
- **Spacing**: Consistent 8px grid (8, 16, 24, 32, 48, 64px)
- **Icons**: Line icons (Lucide or Heroicons)
- **Animations**: Smooth transitions (200-300ms)

---

## 📱 Complete Page Structure

### Total: 27 Pages Across 3 Domains

#### 1. Marketing Website (15 pages) - `synconnect.com`

**Public-facing pages to attract and convert customers**

| # | Page Name | Route | Purpose |
|---|-----------|-------|---------|
| 1 | Landing Page | `/` | Convert visitors to customers |
| 2 | Shop | `/shop` | Display all products |
| 3 | Product Detail | `/shop/[id]` | Detailed product info |
| 4 | Cart | `/cart` | Review items before checkout |
| 5 | Checkout | `/checkout` | Collect info & process payment |
| 6 | Order Success | `/order-confirmation` | Confirm successful order |
| 7 | Order Failed | `/order/failed` | Handle failed payments |
| 8 | How It Works | `/how-it-works` | Explain NFC technology |
| 9 | About | `/about` | Company story & mission |
| 10 | Contact | `/contact` | Contact form & support |
| 11 | Profile Pages | `/profile/[id]` | Public digital business cards |
| 12 | Privacy Policy | `/privacy` | Legal - privacy policy |
| 13 | Terms of Service | `/terms` | Legal - terms of service |
| 14 | Refund Policy | `/refund-policy` | Legal - refund policy |
| 15 | Shipping Policy | `/shipping-policy` | Legal - shipping policy |

#### 2. Customer Dashboard (6 pages) - `dashboard.synconnect.com`

**Private area for customers to manage their profiles**

| # | Page Name | Route | Purpose |
|---|-----------|-------|---------|
| 16 | Dashboard Home | `/` | Overview & quick stats |
| 17 | Insights | `/insights` | Analytics & engagement data |
| 18 | Profile Editor | `/profile` | Edit digital business card |
| 19 | Connections | `/connections` | Manage leads from Connect button |
| 20 | Orders | `/orders` | View order history |
| 21 | Settings | `/settings` | Account settings & preferences |

#### 3. Admin Dashboard (6 pages) - `admin.synconnect.com`

**Private area for admins to manage the platform**

| # | Page Name | Route | Purpose |
|---|-----------|-------|---------|
| 22 | Overview | `/` | Platform stats & metrics |
| 23 | Orders | `/orders` | Manage all orders |
| 24 | Users | `/users` | Manage user accounts |
| 25 | Products | `/products` | Manage product catalog |
| 26 | Analytics | `/analytics` | Platform-wide analytics |
| 27 | Settings | `/settings` | Admin settings |

---

## 🗺️ Content & Navigation Map

### Marketing Website Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Home  Shop  How It Works  About  Contact  [Login]  │
└─────────────────────────────────────────────────────────────┘
```

**Header Links**:
- Home → `/`
- Shop → `/shop`
- How It Works → `/how-it-works`
- About → `/about`
- Contact → `/contact`
- Login → Opens auth modal

**Footer Links**:
- **Products**: Digital Card, Review Stand
- **Company**: About, Contact, Blog
- **Support**: Help Center, Shipping, Returns
- **Legal**: Privacy, Terms, Refund Policy, Shipping Policy
- **Social**: LinkedIn, Twitter, Instagram

### Customer Dashboard Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Dashboard  Insights  Profile  Connections  Orders  │
│                                         [Settings] [Logout]  │
└─────────────────────────────────────────────────────────────┘
```

**Sidebar/Top Nav**:
- Dashboard → `/`
- Insights → `/insights`
- Profile → `/profile`
- Connections → `/connections`
- Orders → `/orders`
- Settings → `/settings`

### Admin Dashboard Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Overview  Orders  Users  Products  Analytics       │
│                                         [Settings] [Logout]  │
└─────────────────────────────────────────────────────────────┘
```

**Sidebar/Top Nav**:
- Overview → `/`
- Orders → `/orders`
- Users → `/users`
- Products → `/products`
- Analytics → `/analytics`
- Settings → `/settings`

---

## 🎨 Design System

### Button Styles

#### Primary Button (Electric Green)
```
Background: #67D861
Text: White (#FFFFFF)
Padding: 12px 24px
Border Radius: 12px
Font: Inter Medium (500)
Hover: Slightly darker (#67D861 at 90% opacity)
```

**Use for**: Buy Now, Submit, Save Changes, Primary Actions

#### Secondary Button (Pale Green)
```
Background: #B6ECAF
Text: Dark Grey (#1A1A1A)
Padding: 12px 24px
Border Radius: 12px
Font: Inter Medium (500)
Hover: Slightly darker (#B6ECAF at 80% opacity)
```

**Use for**: Learn More, Cancel, Skip, Secondary Actions

#### Outline Button
```
Background: Transparent
Border: 2px solid #67D861
Text: Electric Green (#67D861)
Padding: 12px 24px
Border Radius: 12px
Font: Inter Medium (500)
Hover: Background #67D861, Text White
```

**Use for**: View Details, Tertiary Actions

### Card Styles

#### Product Card
```
Background: #1A1A1A
Border: 1px solid rgba(255,255,255,0.1)
Border Radius: 16px
Padding: 24px
Shadow: 0 10px 15px rgba(0,0,0,0.1)
Hover: Slight scale (1.02) + shadow increase
```

#### Dashboard Card
```
Background: #1A1A1A
Border: 1px solid rgba(255,255,255,0.1)
Border Radius: 16px
Padding: 24px
Shadow: 0 4px 6px rgba(0,0,0,0.1)
```

### Form Elements

#### Text Input
```
Background: #1A1A1A
Border: 1px solid rgba(255,255,255,0.2)
Border Radius: 8px
Padding: 12px 16px
Text: White
Focus: Border color #67D861
```

#### Select Dropdown
```
Same as text input
Arrow icon: Electric Green
```

#### Checkbox/Radio
```
Border: #67D861
Checked Background: #67D861
Checkmark: White
```

### Icons

**Style**: Line icons (not filled)  
**Library**: Lucide Icons or Heroicons  
**Size**: 20px (small), 24px (medium), 32px (large)  
**Color**: White or Electric Green

---

## 📄 Page-by-Page Content Guide

### 1. Landing Page (`/`)

**Purpose**: Convert visitors into customers

#### Hero Section
- **Headline**: "Your Business Card, Reimagined"
- **Subheadline**: "Share your contact info, social media, and portfolio with a single tap. No app required."
- **CTA Buttons**: 
  - Primary: "🚀 Buy Now" (Electric Green)
  - Secondary: "👀 See How It Works" (Outline)
- **Hero Visual**: Person tapping NFC card on phone, profile appearing instantly
- **Background**: Dark Grey (#1A1A1A)

#### How It Works Section
**3-Step Process**:
1. **Order Your Card** - Choose your design, customize your profile
2. **Tap to Share** - Simply tap your card on any smartphone
3. **Track Engagement** - See who viewed your profile and clicked your links

**Visual**: 3 cards with icons, numbers, and descriptions

#### Features Section
**6 Key Features** (icon + title + description):
- 📱 **NFC Technology** - Works with all modern smartphones
- 🚫 **No App Required** - Recipients don't need to download anything
- 🔄 **Instant Updates** - Change your info anytime, card stays the same
- 📊 **Analytics Dashboard** - Track taps, views, and connections
- 🌱 **Eco-Friendly** - One card replaces thousands of paper cards
- ✨ **Professional Design** - Premium metal or PVC cards

#### Products Preview
**2 Product Cards**:
1. **NFC Digital Business Card**
   - Image: Metal card with logo
   - Price: ₹2,999
   - Features: NFC enabled, Metal/PVC options, Lifetime updates
   - CTA: "Learn More →"

2. **Smart Review Stand**
   - Image: Acrylic stand with QR code
   - Price: ₹4,999
   - Features: Google Reviews, QR code option, Acrylic stand
   - CTA: "Learn More →"

#### Social Proof Section
**3-4 Customer Testimonials**:
- Customer photo (circular)
- Name & Title
- Company
- Quote (2-3 sentences)
- Star rating (⭐⭐⭐⭐⭐)

**Example**:
> "SynConnect transformed how I network. I've collected 200+ connections in just 2 months!"  
> — Rajesh Kumar, Product Manager at TechCorp  
> ⭐⭐⭐⭐⭐

#### FAQ Section
**Accordion with 6-8 questions**:
- How does NFC work?
- Do recipients need an app?
- Can I update my information?
- What phones are compatible?
- How long does shipping take?
- What if my card gets damaged?

#### Footer
- Company links (About, Contact, Blog)
- Product links (Digital Card, Review Stand)
- Support links (Help, Shipping, Returns)
- Legal links (Privacy, Terms, Refund, Shipping)
- Social media icons
- Newsletter signup

---

### 2. Shop Page (`/shop`)

**Purpose**: Display all products for purchase

#### Header
- Page title: "Shop"
- Cart icon with count: "🛒 Cart (2)"

#### Filters & Sorting
- Filter dropdown: "All Products ▼"
- Sort dropdown: "Sort by: Popular ▼"

#### Product Grid
**2 columns (mobile), 3-4 columns (desktop)**

Each product card shows:
- Product image (square, 1:1 ratio)
- Product name
- Price (₹2,999)
- Star rating + review count (⭐⭐⭐⭐⭐ 234)
- 3-4 key features (bullet points)
- CTA: "View Details" button

**Products**:
1. NFC Digital Business Card - Metal
2. NFC Digital Business Card - PVC
3. Smart Review Stand - Acrylic
4. Smart Review Stand - Wood (future)

---

### 3. Product Detail Page (`/shop/[id]`)

**Purpose**: Provide detailed product info and drive purchase

#### Layout: 2-Column (Desktop)

**Left Column**: Product Gallery
- Main image (large, zoomable)
- 4-6 thumbnail images below
- Image carousel on mobile

**Right Column**: Product Info
- Product name (h1)
- Price (large, bold)
- Star rating + review count
- Short description (2-3 sentences)
- Product options:
  - Material dropdown (Metal/PVC)
  - Color dropdown (Black/Silver/Gold)
  - Quantity selector
- **Dual CTA Buttons**:
  - "🚀 Quick Buy" (Primary - Electric Green)
  - "👀 Customize First" (Secondary - Outline)
- Trust badges:
  - ✓ Free shipping over ₹500
  - ✓ 30-day money back guarantee
  - ✓ Lifetime profile updates

#### Tabs Section
**4 Tabs**: Description | Features | Reviews | FAQ

**Description Tab**:
- Detailed product description (3-4 paragraphs)
- What's included (bullet list)
- How it works (numbered steps)

**Features Tab**:
- NFC technology details
- Compatible devices
- Material & durability
- Customization options

**Reviews Tab**:
- Customer reviews with ratings
- Filter by rating (5★, 4★, etc.)
- Verified purchase badge
- Review form (for logged-in users)

**FAQ Tab**:
- Common questions (accordion)
- Shipping info
- Warranty details

#### Related Products
**Carousel with 2-4 similar products**

---

### 4. Cart Page (`/cart`)

**Purpose**: Review items before checkout

#### Header
- "Shopping Cart (2 items)"

#### Cart Items
Each item shows:
- Product image (small, square)
- Product name + variant (Metal, Black)
- Price per unit (₹2,999)
- Quantity selector (- 2 +)
- Line total (₹5,998)
- Remove button

#### Promo Code Section
- Input field: "Enter promo code"
- Apply button

#### Order Summary (Sticky on desktop)
- Subtotal: ₹10,997
- Shipping: FREE (or calculated)
- Tax (18% GST): ₹1,979
- **Total**: ₹12,976 (large, bold)
- CTA: "Proceed to Checkout" (Electric Green, full width)

#### Secondary Actions
- "← Continue Shopping" (link)

#### Empty Cart State
- Icon (empty cart)
- Message: "Your cart is empty"
- CTA: "Start Shopping"

---

### 5. Checkout Page (`/checkout`)

**Purpose**: Collect customer info and process payment

#### Header
- "Checkout" + 🔒 Secure badge

#### Layout: 2-Column (Desktop)

**Left Column**: Checkout Form

**Step 1: Contact Information**
- Email input (creates account)

**Step 2: Shipping Address**
- Full Name
- Phone
- Address Line 1
- Address Line 2 (optional)
- City
- State (dropdown)
- PIN Code

**Step 3: Payment**
- Razorpay payment integration
- Payment methods: UPI, Cards, Netbanking, Wallets
- Trust badges: 🔒 Secure checkout, SSL

**Right Column**: Order Summary (Sticky)
- Line items (product name, quantity, price)
- Subtotal
- Shipping
- Tax
- **Total** (large, bold)
- Edit cart link

#### CTA
- "Place Order - ₹12,976" (Electric Green, full width)

#### Trust Signals
- 🔒 Secure checkout
- SSL encrypted
- Payment method icons

---

### 6. Order Confirmation Page (`/order-confirmation`)

**Purpose**: Confirm successful order

#### Success Message
- ✅ Icon (large, green)
- Headline: "Order Confirmed!"
- Subheadline: "Thank you for your order, John!"

#### Order Details
- Order number: #1234
- Confirmation email: "Sent to john@example.com"

#### What's Next Section
**4-Step Process**:
1. We'll prepare your order
2. You'll receive tracking info via email
3. When your card arrives, activate it
4. Start sharing your digital profile!

#### CTAs
- "View Order Details" (Primary)
- "Continue Shopping" (Secondary)

#### Additional Info
- Estimated delivery: 5-7 business days
- Customer support contact

---

### 7. Order Failed Page (`/order/failed`)

**Purpose**: Handle failed payments gracefully

#### Error Message
- ❌ Icon (large, red)
- Headline: "Payment Failed"
- Subheadline: "Don't worry, your order hasn't been placed."

#### Reason (if available)
- "Your payment was declined by your bank."
- "Insufficient funds in your account."
- "Payment timeout."

#### What to Do
**3 Options**:
1. **Try Again** - Retry payment with same details
2. **Use Different Payment Method** - Try another card/UPI
3. **Contact Support** - Get help from our team

#### CTAs
- "Retry Payment" (Primary - Electric Green)
- "Change Payment Method" (Secondary)
- "Contact Support" (Link)

#### Order Summary
- Show cart items
- Total amount
- "Your cart is saved for 24 hours"

---

### 8. How It Works Page (`/how-it-works`)

**Purpose**: Explain NFC technology and process

#### Hero Section
- Headline: "How SynConnect Works"
- Subheadline: "Share your digital identity in 3 simple steps"
- Hero visual: Animated diagram of NFC tap

#### Detailed Process
**3 Main Steps** (with visuals):

**Step 1: Order & Customize**
- Choose your card design (Metal or PVC)
- Customize your digital profile
- Add contact info, social links, portfolio
- Preview your profile
- Place your order

**Step 2: Receive & Activate**
- Card ships within 2-3 days
- Arrives in premium packaging
- Scan QR code to activate
- Link card to your profile
- You're ready to share!

**Step 3: Tap & Share**
- Tap card on any smartphone
- Profile opens instantly (no app needed)
- Recipient can save contact, visit links
- You get notified of every tap
- Track engagement in dashboard

#### Technology Explained
**What is NFC?**
- Near Field Communication
- Same tech as contactless payments
- Works with 95% of smartphones
- Range: 1-2 inches
- Secure and encrypted

**Compatible Devices**:
- iPhone 7 and newer (iOS 11+)
- Android phones with NFC (most since 2015)
- No app installation required

#### FAQ Section
- Common technical questions
- Troubleshooting tips

#### CTA
- "Get Your Card Now" (Electric Green)

---

### 9. About Page (`/about`)

**Purpose**: Tell company story and build trust

#### Hero Section
- Headline: "Reimagining Professional Networking"
- Subheadline: "We're on a mission to make business cards sustainable and smart."

#### Our Story
**3-4 paragraphs**:
- Why we started SynConnect
- The problem with paper business cards
- Our vision for the future of networking
- Our commitment to sustainability

#### Our Mission
- Make professional networking effortless
- Reduce paper waste
- Empower professionals with data

#### Our Values
**4-6 Value Cards**:
- 🌱 **Sustainability** - Eco-friendly alternative to paper
- 💡 **Innovation** - Cutting-edge NFC technology
- 🤝 **Trust** - Secure and reliable platform
- 📊 **Data-Driven** - Actionable insights for users

#### Team Section (Optional)
- Founder photos
- Names & roles
- Brief bios

#### Stats Section
- X cards sold
- X connections made
- X trees saved
- X countries

#### CTA
- "Join Our Mission" → Shop page

---

### 10. Contact Page (`/contact`)

**Purpose**: Provide support and collect inquiries

#### Hero Section
- Headline: "Get in Touch"
- Subheadline: "We're here to help. Reach out anytime."

#### Contact Form
**Fields**:
- Name (required)
- Email (required)
- Phone (optional)
- Subject (dropdown: General, Support, Sales, Partnership)
- Message (textarea, required)
- CTA: "Send Message" (Electric Green)

#### Contact Information
**3 Cards**:
1. **Email**
   - Icon: ✉️
   - support@synconnect.com
   - "We reply within 24 hours"

2. **Phone**
   - Icon: 📞
   - +91 XXXXX XXXXX
   - "Mon-Fri, 9 AM - 6 PM IST"

3. **Address**
   - Icon: 📍
   - Office address
   - "Visit us by appointment"

#### FAQ Section
- "Before you reach out, check our FAQ"
- Link to FAQ page

#### Social Media
- Follow us on social media
- Social icons with links

---

### 11. Profile Pages (`/profile/[id]`)

**Purpose**: Public digital business card

**Note**: These are the actual NFC card landing pages. When someone taps a card, they see this page.

#### Header
- SynConnect logo (top left)
- "Get Your Own Card" button (top right)

#### Profile Card (Centered)
**Content**:
- Profile photo (large, circular)
- Full name (h1)
- Job title & company
- Location (city, country)
- Bio (2-3 sentences)

#### Contact Buttons
**Primary Actions** (icon + label):
- 📞 Call
- ✉️ Email
- 💬 WhatsApp
- 💼 LinkedIn
- 🌐 Website

#### Social Links
**Secondary Actions** (icon only):
- Twitter
- Instagram
- Facebook
- GitHub
- YouTube
- Custom links

#### Connect Button
- "🤝 Connect with Me" (Electric Green, full width)
- Opens form to capture lead info
- Saves to user's Connections in dashboard

#### Services Section (Optional)
**If user has services**:
- Service cards (title, description, price)
- "Learn More" buttons

#### Testimonials Section (Optional)
**If user has testimonials**:
- Customer quotes
- Names & companies
- Star ratings

#### Products Section (Optional)
**If user has products**:
- Product cards (image, name, price)
- "View Details" buttons

#### Footer
- "Powered by SynConnect"
- "Get your own card" link

**Design Notes**:
- Clean, minimal design
- Fast loading (< 1 second)
- Mobile-optimized (90% of views)
- Custom theme colors (user can customize in dashboard)

---

### 12-15. Legal Pages

**Pages**: Privacy Policy, Terms of Service, Refund Policy, Shipping Policy

#### Common Layout
- Page title (h1)
- Last updated date
- Table of contents (anchor links)
- Sections with headings
- Simple, readable text
- No fancy design needed

**Content**: Standard legal text (will be provided separately)

---

### 16. Dashboard Home (`dashboard.synconnect.com/`)

**Purpose**: Overview of user's profile and activity

#### Header
- "Welcome back, John!"
- Date: "Monday, Feb 10, 2026"

#### Quick Stats (4 Cards)
1. **Total Taps**
   - Number: 234
   - Change: +12% from last week
   - Icon: 📱

2. **Profile Views**
   - Number: 189
   - Change: +8% from last week
   - Icon: 👁️

3. **Connections**
   - Number: 45
   - Change: +5 new this week
   - Icon: 🤝

4. **Link Clicks**
   - Number: 156
   - Change: +15% from last week
   - Icon: 🔗

#### Recent Activity
**Timeline of recent events**:
- "John Doe tapped your card" - 2 hours ago
- "Sarah viewed your profile" - 5 hours ago
- "New connection: Mike Smith" - 1 day ago
- "Link clicked: LinkedIn" - 2 days ago

#### Quick Actions
**4 Action Cards**:
- "Edit Profile" → Profile editor
- "View Insights" → Analytics page
- "Share Profile" → Share modal
- "Order New Card" → Shop

#### Profile Preview
- "Your Profile" card
- Mini preview of public profile
- "View Public Profile" button
- "Edit Profile" button

---

### 17. Insights Page (`/insights`)

**Purpose**: Analytics and engagement data

#### Date Range Selector
- Last 7 days / 30 days / 90 days / All time

#### Key Metrics (4 Cards)
- Total Taps
- Unique Visitors
- Connections Made
- Avg. Engagement Rate

#### Charts Section
**3 Charts**:
1. **Taps Over Time** (Line chart)
   - X-axis: Date
   - Y-axis: Number of taps
   - Show trend line

2. **Top Links Clicked** (Bar chart)
   - X-axis: Link name
   - Y-axis: Click count
   - Top 5 links

3. **Device Breakdown** (Pie chart)
   - iOS vs Android
   - Percentage split

#### Engagement Heatmap
- Calendar view
- Color intensity = tap count
- Hover shows exact number

#### Recent Taps Table
**Columns**:
- Date & Time
- Location (city)
- Device (iOS/Android)
- Actions taken (saved contact, clicked link)

---

### 18. Profile Editor (`/profile`)

**Purpose**: Edit digital business card

#### Preview Panel (Right side, sticky)
- Live preview of profile
- Updates as user types
- "View Public Profile" button

#### Edit Form (Left side, scrollable)

**Basic Information**:
- Profile photo (upload)
- Cover photo (upload, optional)
- Full name
- Job title
- Company
- Location
- Bio (textarea, 500 chars)

**Contact Information**:
- Phone
- Email
- WhatsApp
- Website

**Social Links**:
- LinkedIn
- Twitter
- Instagram
- Facebook
- GitHub
- YouTube
- Custom links (add multiple)

**Services** (Optional):
- Add service cards
- Title, description, price
- Reorder with drag-and-drop

**Testimonials** (Optional):
- Add testimonials
- Customer name, company, quote, rating

**Products** (Optional):
- Add product cards
- Image, name, price, description

**Theme Customization**:
- Primary color picker
- Background style (solid/gradient)
- Font style (2-3 options)

**SEO Settings**:
- Meta title
- Meta description

#### Actions
- "Save Changes" (Electric Green)
- "Discard Changes" (Secondary)
- "Preview" (Outline)

---

### 19. Connections Page (`/connections`)

**Purpose**: Manage leads from Connect button

#### Header
- "Connections (45)"
- "Export to CSV" button

#### Filters & Search
- Search by name/email
- Filter by date
- Sort by newest/oldest

#### Connections Table
**Columns**:
- Name
- Email
- Phone
- Company
- Message (from Connect form)
- Date added
- Actions (View, Delete)

#### Connection Detail Modal
**When clicking a connection**:
- Full contact info
- Message from Connect form
- Date & time of connection
- Source (which profile/card)
- Actions: Email, Call, WhatsApp, Delete

---

### 20. Orders Page (`/orders`)

**Purpose**: View order history

#### Header
- "My Orders"

#### Orders List
**Each order card shows**:
- Order number (#1234)
- Order date
- Status (Processing, Shipped, Delivered)
- Product image + name
- Quantity
- Total amount
- "View Details" button

#### Order Detail Modal
**When clicking an order**:
- Order number
- Order date
- Status with timeline
- Shipping address
- Payment method
- Line items (product, qty, price)
- Subtotal, shipping, tax, total
- Tracking number (if shipped)
- "Track Order" button
- "Download Invoice" button

---

### 21. Settings Page (`/settings`)

**Purpose**: Account settings and preferences

#### Tabs
- Account | Security | Notifications | Billing

**Account Tab**:
- Email (read-only)
- Name
- Phone
- Profile photo
- "Save Changes" button
- "Delete Account" button (danger zone)

**Security Tab**:
- Change password
- Two-factor authentication (toggle)
- Active sessions (list with "Logout" buttons)

**Notifications Tab**:
- Email notifications (toggles):
  - New taps
  - New connections
  - Weekly summary
  - Marketing emails
- Push notifications (toggles)

**Billing Tab**:
- Current plan (Free/Premium)
- Upgrade to Premium button
- Payment methods (add/remove cards)
- Billing history (invoices)

---

### 22. Admin Overview (`admin.synconnect.com/`)

**Purpose**: Platform stats and metrics

#### Key Metrics (6 Cards)
1. **Total Users** - 1,234
2. **Active Users** (last 30 days) - 890
3. **Total Orders** - 567
4. **Revenue (MTD)** - ₹1,23,456
5. **Pending Orders** - 12
6. **Support Tickets** - 3

#### Charts Section
**4 Charts**:
1. **Revenue Over Time** (Line chart)
2. **Orders by Status** (Pie chart)
3. **User Growth** (Area chart)
4. **Top Products** (Bar chart)

#### Recent Activity
- Recent orders
- New user signups
- Support tickets

---

### 23. Admin Orders (`/orders`)

**Purpose**: Manage all orders

#### Filters & Search
- Search by order number, customer name
- Filter by status (All, Pending, Processing, Shipped, Delivered, Cancelled)
- Date range picker

#### Orders Table
**Columns**:
- Order # (clickable)
- Customer name
- Products
- Total amount
- Status (badge)
- Date
- Actions (View, Update Status, Print Label)

#### Order Detail Modal
- Full order details
- Customer info
- Shipping address
- Line items
- Payment info
- Status update dropdown
- "Print Shipping Label" button
- "Send Email to Customer" button
- Order timeline (created, paid, shipped, delivered)

---

### 24. Admin Users (`/users`)

**Purpose**: Manage user accounts

#### Filters & Search
- Search by name, email
- Filter by status (Active, Inactive)
- Filter by plan (Free, Premium)

#### Users Table
**Columns**:
- User ID
- Name
- Email
- Plan (Free/Premium)
- Status (Active/Inactive)
- Joined date
- Actions (View, Edit, Suspend)

#### User Detail Modal
- User info
- Profile stats (taps, views, connections)
- Order history
- Actions: Edit, Suspend, Delete

---

### 25. Admin Products (`/products`)

**Purpose**: Manage product catalog

#### Actions
- "Add New Product" button

#### Products Table
**Columns**:
- Product image
- Product name
- Category
- Price
- Stock status
- Status (Active/Inactive)
- Actions (Edit, Delete)

#### Add/Edit Product Modal
- Product name
- Description
- Price
- Category
- Images (upload multiple)
- Variants (material, color)
- Stock quantity
- Status (Active/Inactive)
- "Save Product" button

---

### 26. Admin Analytics (`/analytics`)

**Purpose**: Platform-wide analytics

#### Date Range Selector
- Last 7 days / 30 days / 90 days / All time

#### Key Metrics (8 Cards)
- Total Revenue
- Total Orders
- Avg. Order Value
- Conversion Rate
- Total Taps (all users)
- Total Profile Views
- Total Connections
- Active Users

#### Charts Section
**6 Charts**:
1. **Revenue Over Time**
2. **Orders Over Time**
3. **User Growth**
4. **Top Products by Revenue**
5. **Top Products by Orders**
6. **User Engagement** (taps, views, connections)

#### Export
- "Export Report" button (CSV/PDF)

---

### 27. Admin Settings (`/settings`)

**Purpose**: Admin settings

#### Tabs
- General | Email | Payments | Shipping

**General Tab**:
- Site name
- Site description
- Logo upload
- Favicon upload
- Maintenance mode (toggle)

**Email Tab**:
- Email service settings (Resend API key)
- Email templates (preview/edit)
- Test email button

**Payments Tab**:
- Razorpay settings (API keys)
- Payment methods (enable/disable)
- Test mode toggle

**Shipping Tab**:
- Shipping rates
- Free shipping threshold
- Shipping zones
- Estimated delivery times

---

## 🔄 User Flows

### Flow 1: Quick Buy (Guest Checkout)

```
Landing Page
    ↓ Click "Buy Now"
Shop Page
    ↓ Click product
Product Detail Page
    ↓ Click "Quick Buy"
Checkout Page
    ↓ Fill form + Pay
Order Confirmation Page
    ↓ Email sent
[Order Processing]
```

**Key Points**:
- No account required
- Account created automatically with email
- Minimal friction (3 clicks to checkout)

---

### Flow 2: Customize First (Profile Setup)

```
Landing Page
    ↓ Click "Buy Now"
Shop Page
    ↓ Click product
Product Detail Page
    ↓ Click "Customize First"
Profile Editor (Guest)
    ↓ Fill profile info
Checkout Page
    ↓ Fill shipping + Pay
Order Confirmation Page
    ↓ Email sent
[Order Processing]
    ↓ Card arrives
Customer activates card
    ↓ Scan QR code
Dashboard (Login/Signup)
    ↓ Link card to profile
Profile goes live!
```

**Key Points**:
- User customizes profile before buying
- Profile saved to account
- Card pre-linked to profile

---

### Flow 3: NFC Card Tap (Recipient Experience)

```
Recipient taps card on phone
    ↓ NFC detected
Profile Page opens
    ↓ View profile
Recipient can:
    - Save contact
    - Click social links
    - Click "Connect with Me"
        ↓ Fill Connect form
        ↓ Submit
    - Lead saved to user's Connections
```

**Key Points**:
- No app required
- Instant loading (< 1 second)
- Mobile-optimized

---

### Flow 4: User Dashboard Journey

```
User logs in
    ↓
Dashboard Home
    ↓ View stats
Insights Page
    ↓ Analyze data
Profile Editor
    ↓ Update info
Connections Page
    ↓ View leads
Settings
    ↓ Update preferences
```

---

### Flow 5: Admin Order Management

```
Admin logs in
    ↓
Admin Overview
    ↓ See pending orders
Orders Page
    ↓ Click order
Order Detail Modal
    ↓ Update status to "Processing"
    ↓ Print shipping label
    ↓ Update status to "Shipped"
    ↓ Email sent to customer
[Customer receives card]
    ↓ Update status to "Delivered"
```

---

## 📦 Design Deliverables

### What We Need from You

#### 1. High-Fidelity Mockups
**All 27 pages** in Figma/Adobe XD:
- Desktop (1440px width)
- Tablet (768px width)
- Mobile (375px width)

**Priority Order**:
1. Landing Page (most important)
2. Product Detail Page
3. Checkout Page
4. Profile Page
5. Dashboard Home
6. Profile Editor
7. Shop Page
8. Cart Page
9. Order Confirmation
10. Insights Page
11. (Remaining pages)

#### 2. Design System
- Component library (buttons, cards, forms, etc.)
- Color palette (with exact hex codes)
- Typography scale
- Spacing system
- Icon set
- Animation guidelines

#### 3. Interactive Prototype
- Clickable prototype in Figma
- Key user flows:
  - Quick Buy flow
  - Customize First flow
  - NFC Tap experience
  - Dashboard navigation

#### 4. Assets
- Logo files (SVG, PNG)
- Icon set (SVG)
- Placeholder images
- Illustrations (if any)

#### 5. Style Guide
- PDF or Figma file
- Usage guidelines for developers
- Do's and Don'ts
- Accessibility notes

---

## 🎯 Design Principles

### 1. Mobile-First
- 70% of traffic is mobile
- Design for mobile, scale up to desktop
- Touch-friendly buttons (min 44px)
- Thumb-friendly navigation

### 2. Fast & Lightweight
- Optimize images (WebP format)
- Minimal animations (only where needed)
- Lazy loading for below-fold content
- Target: < 2 second page load

### 3. Accessible
- WCAG AA compliance
- High contrast ratios
- Keyboard navigation
- Screen reader friendly

### 4. Conversion-Focused
- Clear CTAs (Electric Green)
- Minimal distractions
- Trust signals (badges, reviews)
- Urgency/scarcity (where appropriate)

### 5. Consistent
- Same components across pages
- Predictable navigation
- Familiar patterns
- Brand consistency

---

## 📊 Success Metrics

### Marketing Website
- **Conversion Rate**: 5% (visitors → purchases)
- **Add-to-Cart Rate**: 10%
- **Checkout Completion**: 80%
- **Page Load Time**: < 2 seconds
- **Bounce Rate**: < 40%

### Profile Pages
- **Load Time**: < 1 second
- **Mobile Traffic**: 90%
- **Connect Button Click Rate**: 15%

### Dashboard
- **Daily Active Users**: 60%
- **Profile Edit Rate**: 40% (users who edit profile)
- **Insights Page Views**: 30%

---

## 🚀 Next Steps

### Phase 1: Discovery & Planning (Week 1)
- Review this brief
- Ask clarifying questions
- Create mood boards
- Define design direction

### Phase 2: Design System (Week 2)
- Create component library
- Define color palette, typography, spacing
- Get approval on design system

### Phase 3: High-Fidelity Mockups (Weeks 3-5)
- Design all 27 pages
- Desktop, tablet, mobile versions
- Iterate based on feedback

### Phase 4: Prototype & Handoff (Week 6)
- Create interactive prototype
- Prepare design handoff
- Developer documentation

---

## 📞 Questions?

If you have any questions about:
- Content for specific pages
- User flows
- Technical constraints
- Brand guidelines

Please reach out! We're here to help.

---

**Last Updated**: February 10, 2026  
**Version**: 1.0

**Related Documents**:
- [INDEX.md](.agent/INDEX.md) - Master documentation index
- [DESIGN_GUIDELINES.md](.agent/design/DESIGN_GUIDELINES.md) - Detailed design system
- [MARKETING_PAGES.md](.agent/specs/MARKETING_PAGES.md) - Marketing page specs
- [PROFILE_PAGES.md](.agent/specs/PROFILE_PAGES.md) - Profile page specs
- [DASHBOARD_UX.md](.agent/specs/DASHBOARD_UX.md) - Dashboard specs
- [ADMIN_DASHBOARD.md](.agent/specs/ADMIN_DASHBOARD.md) - Admin specs
