# Marketing Pages - Feature Specification

## Overview
The marketing pages are public-facing pages designed to attract customers, showcase products, and drive conversions.

**Domain**: `synconnect.com`

---

## 1. Landing Page (`/`)

### Purpose
Convert visitors into customers by showcasing the value proposition of SynConnect NFC cards.

### Business Requirements
- **Goal**: 5% conversion rate (visitors → purchases)
- **Target Audience**: Professionals, business owners, entrepreneurs
- **Key Message**: "Share your digital identity with a tap"
- **Load Time**: < 2 seconds
- **Mobile-First**: 70% of traffic is mobile

### Sections

#### Hero Section
**Content:**
- **Headline**: "Your Business Card, Reimagined"
- **Subheadline**: "Share your contact info, social media, and portfolio with a single tap. No app required."
- **CTA Buttons**: 
  - Primary: "🚀 Buy Now" (Electric Green)
  - Secondary: "👀 See How It Works" (Outline)
- **Hero Image/Video**: Person tapping NFC card on phone, profile appearing instantly

**Visual:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│         Your Business Card, Reimagined                       │
│                                                              │
│    Share your contact info, social media, and portfolio     │
│              with a single tap. No app required.            │
│                                                              │
│    [🚀 Buy Now]        [👀 See How It Works]                │
│                                                              │
│    [Hero Image: Phone tapping card, profile appearing]      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### How It Works Section
**Content:**
- **3-Step Process**:
  1. **Order Your Card** - Choose your design, customize your profile
  2. **Tap to Share** - Simply tap your card on any smartphone
  3. **Track Engagement** - See who viewed your profile and clicked your links

**Visual:**
```
┌─────────────────────────────────────────────────────────────┐
│                     How It Works                             │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │      1       │  │      2       │  │      3       │      │
│  │  Order Card  │  │  Tap to Share│  │  Track Data  │      │
│  │  [Icon]      │  │  [Icon]      │  │  [Icon]      │      │
│  │  Choose your │  │  Simply tap  │  │  See who     │      │
│  │  design      │  │  on any phone│  │  viewed      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

#### Features Section
**Content:**
- **NFC Technology** - Works with all modern smartphones (iOS & Android)
- **No App Required** - Recipients don't need to download anything
- **Instant Updates** - Change your info anytime, card stays the same
- **Analytics Dashboard** - Track taps, views, and connections
- **Eco-Friendly** - One card replaces thousands of paper cards
- **Professional Design** - Premium metal or PVC cards

#### Products Preview
**Content:**
- **2 Product Cards**:
  1. NFC Digital Business Card
  2. Smart Review Stand

**Each Product Shows:**
- Product image
- Product name
- Starting price
- Key features (3-4 bullets)
- CTA: "Learn More →"

#### Social Proof Section
**Content:**
- **Customer Testimonials** (3-4 cards):
  - Customer photo
  - Name & Title
  - Company
  - Quote
  - Star rating

**Example:**
```
"SynConnect transformed how I network. I've collected 200+ 
 connections in just 2 months!"
 
 - Rajesh Kumar, Product Manager at TechCorp
 ⭐⭐⭐⭐⭐
```

#### Pricing Section (Optional)
**Content:**
- **Simple Pricing**:
  - NFC Digital Card: ₹2,999
  - Smart Review Stand: ₹4,999
- **What's Included** (bullets)
- CTA: "Get Started →"

#### FAQ Section
**Content:**
- **Common Questions** (Accordion):
  - How does NFC work?
  - Do recipients need an app?
  - Can I update my information?
  - What phones are compatible?
  - How long does shipping take?
  - What if my card gets damaged?

#### Footer
**Content:**
- **Company Info**: About, Contact, Blog
- **Products**: Digital Card, Review Stand
- **Support**: Help Center, Shipping, Returns
- **Legal**: Privacy Policy, Terms of Service
- **Social Media**: LinkedIn, Twitter, Instagram
- **Newsletter Signup**: Email input + Subscribe button

### Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast loading (optimized images, lazy loading)
- ✅ SEO optimized (meta tags, structured data)
- ✅ Animations (Framer Motion)
- ✅ Analytics tracking (Google Analytics)

---

## 2. Shop Page (`/shop`)

### Purpose
Display all products available for purchase.

### Business Requirements
- **Goal**: 10% add-to-cart rate
- **Product Discovery**: Easy filtering and search
- **Clear Pricing**: No hidden costs
- **Trust Signals**: Reviews, ratings, guarantees

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Shop                                      🛒 Cart (2)       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Filters:  [All Products ▼] [Sort by: Popular ▼]           │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ NFC Digital Card     │  │ Smart Review Stand   │        │
│  │ [Product Image]      │  │ [Product Image]      │        │
│  │                      │  │                      │        │
│  │ ₹2,999               │  │ ₹4,999               │        │
│  │ ⭐⭐⭐⭐⭐ (234)      │  │ ⭐⭐⭐⭐⭐ (89)       │        │
│  │                      │  │                      │        │
│  │ • NFC enabled        │  │ • Google Reviews     │        │
│  │ • Metal/PVC options  │  │ • QR code option     │        │
│  │ • Lifetime updates   │  │ • Acrylic stand      │        │
│  │                      │  │                      │        │
│  │ [View Details]       │  │ [View Details]       │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Features
- ✅ Product grid (2 columns mobile, 3-4 desktop)
- ✅ Product cards with images, price, ratings
- ✅ Quick view modal
- ✅ Add to cart functionality
- ✅ Filter by category, price
- ✅ Sort by popularity, price, newest

---

## 3. Product Detail Page (`/shop/[product-id]`)

### Purpose
Provide detailed information about a product and drive purchase decision.

### Business Requirements
- **Goal**: 15% conversion rate (views → add to cart)
- **Detailed Info**: Specs, features, FAQs
- **Trust Signals**: Reviews, guarantees, secure checkout badge

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back to Shop                            🛒 Cart (2)       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────────────┐│
│  │                      │  │ NFC Digital Business Card    ││
│  │  [Product Image]     │  │                              ││
│  │  (Gallery)           │  │ ₹2,999                       ││
│  │                      │  │ ⭐⭐⭐⭐⭐ (234 reviews)      ││
│  │  [Thumbnail 1]       │  │                              ││
│  │  [Thumbnail 2]       │  │ Share your digital identity  ││
│  │  [Thumbnail 3]       │  │ with a single tap. Perfect   ││
│  │                      │  │ for professionals.           ││
│  │                      │  │                              ││
│  │                      │  │ Material: [Metal ▼]          ││
│  │                      │  │ Color: [Black ▼]             ││
│  │                      │  │ Quantity: [1 ▼]              ││
│  │                      │  │                              ││
│  │                      │  │ [🚀 Quick Buy]               ││
│  │                      │  │ [👀 Customize First]         ││
│  │                      │  │                              ││
│  │                      │  │ ✓ Free shipping over ₹500    ││
│  │                      │  │ ✓ 30-day money back          ││
│  │                      │  │ ✓ Lifetime profile updates   ││
│  └──────────────────────┘  └──────────────────────────────┘│
│                                                              │
│  [Tabs: Description | Features | Reviews | FAQ]             │
│                                                              │
│  Description Tab:                                            │
│  - Detailed product description                              │
│  - What's included                                           │
│  - How it works                                              │
│                                                              │
│  Features Tab:                                               │
│  - NFC technology                                            │
│  - Compatible devices                                        │
│  - Material & durability                                     │
│  - Customization options                                     │
│                                                              │
│  Reviews Tab:                                                │
│  - Customer reviews with ratings                             │
│  - Filter by rating                                          │
│  - Verified purchase badge                                   │
│                                                              │
│  FAQ Tab:                                                    │
│  - Common questions                                          │
│  - Shipping info                                             │
│  - Warranty details                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display
- **Product Name**
- **Price**
- **Star Rating** + Review Count
- **Product Description** (2-3 paragraphs)
- **Product Options**: Material, Color, Quantity
- **Dual CTA Buttons**:
  - "🚀 Quick Buy" (Primary - Electric Green)
  - "👀 Customize First" (Secondary - Outline)
- **Trust Badges**: Free shipping, Money-back guarantee, Secure checkout
- **Product Images**: Gallery with 4-6 images
- **Features List**: 6-8 key features with icons
- **Customer Reviews**: Latest 5-10 reviews
- **FAQ**: 5-8 common questions
- **Related Products**: 2-4 similar products

### Features
- ✅ Image gallery with zoom
- ✅ Sticky add-to-cart on mobile
- ✅ Dual CTA (Quick Buy vs Customize First)
- ✅ Review system with ratings
- ✅ FAQ accordion
- ✅ Related products carousel
- ✅ Share buttons (WhatsApp, Twitter, etc.)

---

## 4. Cart Page (`/cart`)

### Purpose
Review items before checkout and apply discounts.

### Business Requirements
- **Goal**: 80% checkout completion rate
- **Clear Summary**: Items, quantities, prices
- **Easy Editing**: Update quantities, remove items
- **Trust Signals**: Secure checkout, return policy

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Shopping Cart (2 items)                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Image] NFC Digital Business Card - Metal, Black      │ │
│  │         ₹2,999 × 2                          ₹5,998    │ │
│  │         [- 2 +] [Remove]                               │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Image] Smart Review Stand - Acrylic                  │ │
│  │         ₹4,999 × 1                          ₹4,999    │ │
│  │         [- 1 +] [Remove]                               │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Promo Code:  [______________] [Apply]                 │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Order Summary                                          │ │
│  │ ────────────────────────────────────────────────────── │ │
│  │ Subtotal:                                   ₹10,997   │ │
│  │ Shipping:                                      FREE    │ │
│  │ Tax (18% GST):                               ₹1,979   │ │
│  │ ────────────────────────────────────────────────────── │ │
│  │ Total:                                      ₹12,976   │ │
│  │                                                        │ │
│  │ [Proceed to Checkout]                                 │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [← Continue Shopping]                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display
- **Cart Items**: Product image, name, variant, price, quantity
- **Quantity Controls**: +/- buttons
- **Remove Button**: Delete item from cart
- **Promo Code Input**: Apply discount codes
- **Order Summary**:
  - Subtotal
  - Shipping (FREE over ₹500)
  - Tax (18% GST)
  - Total
- **CTA**: "Proceed to Checkout" (Electric Green)
- **Secondary CTA**: "Continue Shopping" (link)
- **Trust Badges**: Secure checkout, Easy returns

### Features
- ✅ Update quantities
- ✅ Remove items
- ✅ Apply promo codes
- ✅ Real-time price calculation
- ✅ Save cart (logged in users)
- ✅ Empty cart state with CTA to shop

---

## 5. Checkout Page (`/checkout`)

### Purpose
Collect customer information and process payment.

### Business Requirements
- **Goal**: 90% payment completion rate
- **Minimal Friction**: Only essential fields
- **Trust Signals**: Secure badges, payment icons
- **Quick Checkout**: 2-3 minutes max

### Layout (Quick Buy Path)

```
┌─────────────────────────────────────────────────────────────┐
│  Checkout                                   🔒 Secure        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────┐  ┌──────────────────────────┐│
│  │ 1. Contact Information   │  │ Order Summary            ││
│  │ ──────────────────────── │  │ ──────────────────────── ││
│  │ Email:                   │  │ 2× NFC Digital Card      ││
│  │ [___________________]    │  │ ₹5,998                   ││
│  │                          │  │                          ││
│  │ 2. Shipping Address      │  │ 1× Smart Review Stand    ││
│  │ ──────────────────────── │  │ ₹4,999                   ││
│  │ Full Name:               │  │                          ││
│  │ [___________________]    │  │ Subtotal:    ₹10,997     ││
│  │                          │  │ Shipping:    FREE        ││
│  │ Phone:                   │  │ Tax:         ₹1,979      ││
│  │ [___________________]    │  │ ──────────────────────── ││
│  │                          │  │ Total:       ₹12,976     ││
│  │ Address:                 │  │                          ││
│  │ [___________________]    │  │ [Edit Cart]              ││
│  │ [___________________]    │  │                          ││
│  │                          │  └──────────────────────────┘│
│  │ City:      [__________]  │                              │
│  │ State:     [__________]  │                              │
│  │ PIN Code:  [__________]  │                              │
│  │                          │                              │
│  │ 3. Payment               │                              │
│  │ ──────────────────────── │                              │
│  │ [Razorpay Payment UI]    │                              │
│  │ • UPI                    │                              │
│  │ • Cards                  │                              │
│  │ • Netbanking             │                              │
│  │ • Wallets                │                              │
│  │                          │                              │
│  │ [Place Order - ₹12,976]  │                              │
│  │                          │                              │
│  │ 🔒 Secure checkout       │                              │
│  │ Your data is protected   │                              │
│  └──────────────────────────┘                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display
- **Progress Indicator**: Contact → Shipping → Payment
- **Contact Information**:
  - Email (creates account)
- **Shipping Address**:
  - Full Name
  - Phone
  - Address Line 1
  - Address Line 2 (optional)
  - City
  - State
  - PIN Code
- **Order Summary** (Sticky on desktop):
  - Line items
  - Subtotal, Shipping, Tax, Total
  - Edit cart link
- **Payment Section**:
  - Razorpay integration
  - Payment methods: UPI, Cards, Netbanking, Wallets
- **Trust Badges**: Secure checkout, SSL, Payment icons
- **CTA**: "Place Order - ₹12,976" (Electric Green)

### Features
- ✅ Auto-save form data (localStorage)
- ✅ Real-time validation
- ✅ Address autocomplete (Google Maps API)
- ✅ Razorpay payment integration
- ✅ Order confirmation email
- ✅ Redirect to order confirmation page

---

## 6. Order Confirmation Page (`/order-confirmation`)

### Purpose
Confirm successful order and provide next steps.

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    ✅ Order Confirmed!                       │
│                                                              │
│         Thank you for your order, John!                      │
│                                                              │
│  Order #1234                                                 │
│  Confirmation sent to: john@example.com                      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ What's Next?                                           │ │
│  │                                                        │ │
│  │ 1. We'll prepare your order                            │ │
│  │ 2. You'll receive tracking info via email             │ │
│  │ 3. When your card arrives, activate it                │ │
│  │ 4. Start sharing your digital profile!                │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [View Order Details] [Continue Shopping]                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display
- **Success Message**: "Order Confirmed!"
- **Order Number**: #1234
- **Customer Email**: Confirmation sent to...
- **Next Steps**: 4-step process
- **CTAs**:
  - "View Order Details" → Order tracking page
  - "Continue Shopping" → Shop page
- **Estimated Delivery**: 5-7 business days

### Features
- ✅ Order summary
- ✅ Estimated delivery date
- ✅ Track order link
- ✅ Social sharing (optional)

---

## Technical Requirements

### Performance
- **Page Load**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: > 90

### SEO
- **Meta Tags**: Title, description, OG tags
- **Structured Data**: Product schema, breadcrumbs
- **Sitemap**: XML sitemap for all pages
- **Robots.txt**: Allow all pages

### Analytics
- **Google Analytics**: Track page views, events
- **Conversion Tracking**: Track purchases, add-to-cart
- **Heatmaps**: Hotjar or similar (optional)

### Security
- **HTTPS**: SSL certificate
- **CSRF Protection**: For forms
- **Rate Limiting**: Prevent spam
- **Input Validation**: Sanitize all inputs

---

**Last Updated**: 2026-02-10
