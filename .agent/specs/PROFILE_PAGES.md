# Profile Pages - Feature Specification

## Overview
Profile pages are public-facing pages that display when someone taps an NFC card or scans a QR code.

**URL Pattern**: `synconnect.com/profile/[profileId]`

---

## 1. Individual Profile Page (Digital Business Card)

### Purpose
Display professional contact information and enable connections.

### Business Requirements
- **Load Time**: < 1 second (critical for first impression)
- **Mobile-First**: 95% of views are on mobile
- **Conversion Goal**: 20% click-through rate on links
- **Connection Goal**: 5% fill out "Connect" form

### URL Structure
```
synconnect.com/profile/507f1f77bcf86cd799439011
                       ^^^^^^^^^^^^^^^^^^^^^^^^
                       MongoDB ObjectId (24 chars)
```

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         [Profile Photo - Circular, 120px]              │ │
│  │                                                        │ │
│  │              John Doe                                  │ │
│  │         Senior Product Designer                        │ │
│  │        Tech Innovations Inc.                           │ │
│  │         📍 Mumbai, India                               │ │
│  │                                                        │ │
│  │  "Passionate about creating user-centered designs     │ │
│  │   that solve real problems and delight users."        │ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐ │ │
│  │  │  🤝 Connect with Me                              │ │ │
│  │  │  (Prominent CTA - Electric Green)                │ │ │
│  │  └──────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  📞 Contact Information                                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 📧 john@example.com                        [Copy]      │ │
│  │ 📱 +91 98765 43210                         [Call]      │ │
│  │ 🌐 johndoe.design                          [Visit]     │ │
│  │ 📍 Mumbai, India                           [Map]       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  🔗 Social Links                                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [LinkedIn] [Twitter] [Instagram] [Portfolio]           │ │
│  │ [GitHub]   [Behance] [Dribbble]  [YouTube]            │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  💼 Services                                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • UI/UX Design                                         │ │
│  │   Creating beautiful, intuitive interfaces            │ │
│  │                                                        │ │
│  │ • Product Strategy                                     │ │
│  │   Defining product vision and roadmap                 │ │
│  │                                                        │ │
│  │ • User Research                                        │ │
│  │   Understanding user needs through research           │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  🛍️ Products / Portfolio                                    │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │ [Product Image]      │  │ [Product Image]      │        │
│  │                      │  │                      │        │
│  │ E-commerce App       │  │ Mobile Banking UI    │        │
│  │ Redesign             │  │                      │        │
│  │                      │  │                      │        │
│  │ Complete redesign... │  │ Modern banking...    │        │
│  │                      │  │                      │        │
│  │ [Learn More →]       │  │ [View Case Study →]  │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 💾 Save Contact                                        │ │
│  │ Download vCard to add to your contacts                │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Powered by SynConnect                                  │ │
│  │ [Get Your Own Card →]                                  │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display

#### Header Section
- **Profile Photo**: Circular, 120px diameter
- **Full Name**: H1 heading
- **Job Title**: Subtitle
- **Company**: Subtitle
- **Location**: City, Country with icon
- **Bio**: 2-3 sentences (max 200 characters)
- **Connect Button**: Prominent CTA (Electric Green)

#### Contact Information
- **Email**: With copy button
- **Phone**: With call button (tel: link)
- **Website**: With visit button
- **Location**: With map link (Google Maps)

**Each contact item:**
- Icon + Label + Action button
- Click to copy (email)
- Click to call (phone)
- Click to visit (website)
- Click to open map (location)

#### Social Links
- **Platform Buttons**: LinkedIn, Twitter, Instagram, etc.
- **Icon + Platform Name**
- **Opens in new tab**
- **Tracks click event** (for analytics)

**Supported Platforms:**
- LinkedIn
- Twitter
- Instagram
- Facebook
- GitHub
- Behance
- Dribbble
- YouTube
- TikTok
- Custom URL

#### Services Section (Optional)
- **Service Name**: Bold heading
- **Service Description**: 1-2 sentences
- **Icon**: Relevant icon for each service

#### Products/Portfolio Section (Optional)
- **Product Cards**: Grid layout (1 column mobile, 2 desktop)
- **Each Product**:
  - Product image (16:9 ratio)
  - Product name
  - Short description (50 characters)
  - CTA button ("Learn More", "View Case Study", etc.)
  - Links to external URL

#### Save Contact Button
- **vCard Download**: Generate .vcf file
- **Includes**: Name, title, company, email, phone, website, social links

#### Footer
- **Branding**: "Powered by SynConnect"
- **CTA**: "Get Your Own Card →" (links to shop)

### Features

#### Core Features
- ✅ Responsive design (mobile-first)
- ✅ Fast loading (< 1 second)
- ✅ Connect button with form modal
- ✅ Click-to-call, click-to-email
- ✅ Social link tracking
- ✅ vCard download
- ✅ Share button (WhatsApp, copy link)

#### Analytics Tracking
- ✅ Page view (tap event)
- ✅ Link clicks (which link, timestamp)
- ✅ Device type (iOS, Android, Desktop)
- ✅ Location (city/country from IP)
- ✅ Time on page
- ✅ Connection form submissions

#### SEO & Sharing
- ✅ Meta tags (title, description)
- ✅ Open Graph tags (for social sharing)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Structured data (Person schema)

#### Performance
- ✅ Image optimization (WebP, lazy loading)
- ✅ Code splitting
- ✅ CDN delivery
- ✅ Caching (ISR - Incremental Static Regeneration)

---

## 2. Business Profile Page (Review Stand)

### Purpose
Collect customer reviews and feedback for businesses.

### Business Requirements
- **Load Time**: < 1 second
- **Review Goal**: 30% submission rate
- **Smart Logic**: Show Google review for 4-5 stars, private feedback for 1-3 stars

### URL Structure
```
synconnect.com/profile/709b3f48bcf86cd799439033
```

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         [Business Logo - 100px]                        │ │
│  │                                                        │ │
│  │           Coffee Shop Mumbai                           │ │
│  │         Premium Coffee & Pastries                      │ │
│  │         📍 Bandra West, Mumbai                         │ │
│  │                                                        │ │
│  │  "Thank you for visiting! We'd love to hear           │ │
│  │   your feedback."                                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ⭐ Rate Your Experience                                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                        │ │
│  │         [⭐] [⭐] [⭐] [⭐] [⭐]                         │ │
│  │         (Tap to rate - Large, interactive)            │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [After rating is selected, show appropriate form below]    │
│                                                              │
│  ── IF 4-5 STARS ──                                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 🎉 Thank you for the great rating!                    │ │
│  │                                                        │ │
│  │ Would you mind sharing your experience on Google?     │ │
│  │                                                        │ │
│  │ Name (Optional):  [___________________]               │ │
│  │ Email (Optional): [___________________]               │ │
│  │ Review:           [___________________]               │ │
│  │                   [___________________]               │ │
│  │                                                        │ │
│  │ [Skip] [Post to Google Reviews]                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ── IF 1-3 STARS ──                                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 😔 We're sorry to hear that.                          │ │
│  │                                                        │ │
│  │ Please share your feedback privately so we can        │ │
│  │ improve your experience.                              │ │
│  │                                                        │ │
│  │ Name (Optional):  [___________________]               │ │
│  │ Email (Optional): [___________________]               │ │
│  │ Feedback:         [___________________]               │ │
│  │                   [___________________]               │ │
│  │                   [___________________]               │ │
│  │                                                        │ │
│  │ [Submit Private Feedback]                             │ │
│  │                                                        │ │
│  │ Your feedback will be sent directly to the owner.     │ │
│  │ It will NOT be posted publicly.                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  📞 Contact Information                                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 📧 hello@coffeeshop.com                                │ │
│  │ 📱 +91 22 1234 5678                                    │ │
│  │ 🌐 coffeeshop.com                                      │ │
│  │ 📍 Shop 5, Linking Road, Bandra West, Mumbai          │ │
│  │    [Open in Google Maps]                              │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  🕐 Business Hours                                           │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Mon-Fri: 8:00 AM - 10:00 PM                           │ │
│  │ Sat-Sun: 9:00 AM - 11:00 PM                           │ │
│  │ ● Open Now                                             │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  🔗 Social Media                                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Instagram] [Facebook] [Twitter]                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Powered by SynConnect                                  │ │
│  │ [Get Your Own Review Stand →]                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display

#### Header Section
- **Business Logo**: 100px square
- **Business Name**: H1 heading
- **Business Type/Tagline**: Subtitle
- **Location**: City, Area
- **Welcome Message**: 1-2 sentences

#### Star Rating Section
- **5 Large Stars**: Interactive, tap to select
- **Visual Feedback**: Stars fill with color on hover/tap
- **Immediate Response**: Show appropriate form after selection

#### Smart Review Logic

**For 4-5 Star Ratings:**
- **Heading**: "Thank you for the great rating! 🎉"
- **Message**: "Would you mind sharing your experience on Google?"
- **Form Fields**:
  - Name (optional)
  - Email (optional)
  - Review text (optional)
- **CTA**: "Post to Google Reviews" (opens Google review page)
- **Secondary CTA**: "Skip" (just saves rating)

**For 1-3 Star Ratings:**
- **Heading**: "We're sorry to hear that. 😔"
- **Message**: "Please share your feedback privately so we can improve."
- **Form Fields**:
  - Name (optional)
  - Email (optional)
  - Feedback text (required)
- **CTA**: "Submit Private Feedback"
- **Note**: "Your feedback will be sent directly to the owner. It will NOT be posted publicly."

#### Contact Information
- **Email**: With copy button
- **Phone**: With call button
- **Website**: With visit button
- **Address**: Full address with Google Maps link

#### Business Hours
- **Weekly Schedule**: Mon-Fri, Sat-Sun
- **Current Status**: "Open Now" or "Closed" (dynamic)

#### Social Media
- **Platform Buttons**: Instagram, Facebook, Twitter

#### Footer
- **Branding**: "Powered by SynConnect"
- **CTA**: "Get Your Own Review Stand →"

### Features

#### Core Features
- ✅ Interactive star rating
- ✅ Smart review logic (4-5 stars → Google, 1-3 stars → Private)
- ✅ Google Reviews integration
- ✅ Private feedback collection
- ✅ Business hours with open/closed status
- ✅ Google Maps integration

#### Analytics Tracking
- ✅ Page views (taps)
- ✅ Star rating distribution
- ✅ Review submission rate
- ✅ Google review click-through rate
- ✅ Private feedback submission rate

#### Business Owner Dashboard
- ✅ View all reviews (public + private)
- ✅ Average rating
- ✅ Review trends over time
- ✅ Private feedback inbox
- ✅ Export reviews (CSV)

---

## Technical Requirements

### Performance
- **Load Time**: < 1 second
- **Time to Interactive**: < 1.5 seconds
- **Image Optimization**: WebP, lazy loading
- **Code Splitting**: Per-route splitting

### SEO
- **Meta Tags**: Title, description, OG tags
- **Structured Data**: 
  - Person schema (Individual profiles)
  - LocalBusiness schema (Business profiles)
- **Canonical URL**: Prevent duplicate content
- **Sitemap**: Dynamic sitemap for all profiles

### Analytics
- **Track Events**:
  - Page view (tap)
  - Link clicks
  - Connection form submissions
  - Review submissions
  - vCard downloads
- **Metadata**:
  - Device type
  - Location (city/country)
  - Referrer
  - Time on page

### Security
- **Rate Limiting**: Prevent spam (max 3 submissions per IP per hour)
- **Input Validation**: Sanitize all form inputs
- **CSRF Protection**: For form submissions
- **Honeypot Fields**: Hidden fields to catch bots

### Caching
- **ISR (Incremental Static Regeneration)**: Revalidate every 60 seconds
- **CDN**: Serve from edge locations
- **Image CDN**: Optimize and cache images

---

**Last Updated**: 2026-02-10
