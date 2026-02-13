# SynConnect v3 - Business & Design Documentation

## 1. Executive Summary

**SynConnect** is a smart NFC business card platform that allows professionals to share their digital profile with a single tap. The solution aims to modernize networking in India by replacing traditional paper business cards with smart, reusable NFC cards and review stands.

### Value Proposition
- **Tap to Share**: Instant information transfer without requiring an app.
- **Eco-Friendly**: One permanent card replaces thousands of paper cards.
- **Dynamic**: Update contact details anytime without re-printing.
- **Professional**: Premium design and customizable digital profiles.
- **Analytics**: Track engagement and connection success.

### Product Line
1.  **NFC Digital Business Card** (₹1,499)
    -   Physical card with NFC chip + QR code.
    -   Custom logo printed options.
    -   Tap to share digital profile.
    -   Target: Professionals, Entrepreneurs, Sales Teams.

2.  **Smart Review Stand** (₹1,299)
    -   Acrylic stand with NFC chip.
    -   Tap to leave Google review.
    -   Smart logic: 4-5 stars -> Google, 1-3 stars -> Private feedback form.
    -   Target: Restaurants, Cafes, Retail Stores.

---

## 2. Business Strategy & Pricing

### Pricing Model (v1)
-   **One-Time Purchase**: Users pay for the physical product.
-   **Subscription-Free**: Basic features and lifetime dashboard access are included.
-   **GST**: 18% (charged on top of base price).
-   **Shipping**: Free across India.

| Product | Base Price | GST (18%) | Total Price |
| :--- | :--- | :--- | :--- |
| **NFC Digital Card** | ₹1,499 | ₹270 | ₹1,769 |
| **Smart Review Stand** | ₹1,299 | ₹234 | ₹1,533 |

*Note: No bulk discounts in v1. Future versions may introduce premium subscriptions and bulk pricing.*

### User Limits & Policies
| Feature | Limit | Notes |
| :--- | :--- | :--- |
| **Profiles** | 1 per card purchased | 1:1 mapping of cards to profiles |
| **Connections** | Unlimited | No cap on leads collected |
| **Analytics Retention** | 5 years | Auto-archived afterwards |
| **Products per Profile** | 10 items | For portfolio showcase |
| **Social Links** | 30 links | Covers all major platforms |

---

## 3. User Journeys

### Path A: Quick Buy (Low Friction)
*Goal: Maximize conversion speed (approx 2 mins).*
1.  **Browse**: Landing page -> Click "Buy Now".
2.  **Checkout**: Enter Email (auto-account creation), Shipping, Payment.
3.  **Order Confirmed**: Receive confirmation email.
4.  **Receive Card**: Card arrives with activation QR code.
5.  **Activate**: Scan QR -> Set Password -> Setup Profile.

### Path B: Customize First (High Engagement)
*Goal: Allow preview and customization before purchase.*
1.  **Browse**: Landing page -> Click "Customize & Preview".
2.  **Auth**: Sign in/Sign up.
3.  **Build**: Create profile, upload photo, add links (Status: Draft).
4.  **Preview**: See live mobile preview.
5.  **Checkout**: Purchase card linked to this draft.
6.  **Receive**: Card arrives pre-linked to active profile.

### Post-Purchase Engagement
-   **Day 0**: Order Confirmation.
-   **Day 3**: Shipping Notification.
-   **Day 7**: Delivery & Activation Nudge.
-   **Day 10**: Usage Tips (if not activated).

---

## 4. Design System

### Brand Identity
-   **Personality**: Modern, Tech-forward, Professional, Eco-conscious.
-   **Tone**: Clear, Direct, Helpful, Confident.

### Color Palette
**CRITICAL**: Use ONLY these colors.

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary/Accent** | **Electric Green** | `#beee02` | CTAs, Highlights, Active States, Links |
| **Secondary** | **Pale Green** | `#B6ECAF` | Hover states, Subtle accents |
| **Background** | **Dark Grey** | `#1A1A1A` | Main backgrounds, Cards, Dark surfaces |
| **Text** | **White** | `#FFFFFF` | Primary text, Borders |

*Note: Do not use generic Tailwind colors like `green-500` or `gray-900`.*

### Typography
-   **Font**: Inter (Google Fonts)
-   **Headings**: Bold (700) or Semibold (600)
-   **Body**: Regular (400)
-   **Buttons**: Semibold (600)

### Spacing & Components
-   **Base Unit**: 4px (Tailwind standard).
-   **Border Radius**:
    -   Buttons: `rounded-lg` (8px/12px)
    -   Cards: `rounded-xl` (16px)
-   **Shadows**:
    -   Standard: `shadow-lg`
    -   Glow (Green): `0 0 20px rgba(103, 216, 97, 0.3)`

---

## 5. Marketing Website Requirements
**Domain**: `synconnect.com`

### Pages Structure
1.  **Landing Page (`/`)**
    -   Hero: "Your Business Card, Reimagined" + Dual CTAs.
    -   How It Works: 3 Steps (Order, Tap, Track).
    -   Features Grid: NFC, No App Needed, Analytics.
    -   Social Proof: Testimonials.
    -   Footer: Links & Newsletter.

2.  **Shop (`/shop`)**
    -   Product Grid: NFC Card & Review Stand.
    -   Filters & Sorting.

3.  **Product Detail (`/shop/[id]`)**
    -   Gallery, Price, Specs.
    -   "Quick Buy" vs "Customize First" options.
    -   Tabs: Description, Reviews, FAQ.

4.  **Cart & Checkout (`/cart`, `/checkout`)**
    -   Minimal friction.
    -   Guest checkout support (account created via email).
    -   Razorpay Integration.

5.  **Support Pages**
    -   About Us, Contact, Privacy Policy, Terms, Refund Policy.

---

## 6. Digital Profile Specifications
**Domain**: `synconnect.com/profile/[id]`

### A. Digital Business Card Profile
*For Professionals*
-   **Header**: Photo, Name, Title, Company, Location.
-   **Actions**: "Connect with Me" (Form), "Save Contact" (vCard).
-   **Contact Grid**: Email, Phone, Website, Map.
-   **Socials**: Grid of icons (LinkedIn, Twitter, etc.).
-   **Services/Portfolio**: Optional sections for work showcase.
-   **Footer**: "Powered by SynConnect".

### B. Review Stand Profile
*For Businesses*
-   **Header**: Business Logo, Name, "Rate Us".
-   **Interaction**: Large 5-star rating input.
-   **Smart Logic**:
    -   **4-5 Stars**: "Thanks! Please share on Google" -> Redirect to Google Reviews.
    -   **1-3 Stars**: "Sorry!" -> Open private feedback form (sent to owner).
-   **Info**: Hours, Location, Contact.

### Connect Form Data
When a visitor clicks "Connect":
-   **Fields**: Name (req), Email (req), Phone, Company, Message.
-   **Storage**: Saved to user's "Connections" list in Dashboard.

---

## 7. Customer Dashboard Specification
**Domain**: `dashboard.synconnect.com`

### Navigation
1.  **Insights (Home)**
    -   Metrics: Taps, Views, Connections.
    -   Charts: Usage trends over time.
    -   Geography & Device stats.
2.  **Profile Editor**
    -   Split screen: Edit Form (Left) + Live Preview (Right).
    -   Edit all profile fields, uploads, themes.
3.  **Connections**
    -   List of leads captured via "Connect" form.
    -   Export to CSV.
4.  **Settings**
    -   Account info, Password, Notification prefs.

---

## 8. Admin Dashboard Specification
**Domain**: `admin.synconnect.com`

### Key Modules
1.  **Overview**: Real-time revenue, order counts, system alerts.
2.  **Orders Management**:
    -   View/Filter Orders.
    -   **Encoding Workflow**: Get URL for order -> Encode Card -> Mark Shipped.
    -   Print Invoices/Labels.
3.  **Users**: Manage accounts, view user analytics, support tools.
4.  **Products**: Inventory management, pricing updates.
5.  **Analytics**: Platform-wide performance metrics.
6.  **Settings**: Global configs (Razorpay keys, SMTP).
