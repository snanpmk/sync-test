# Additional Marketing Pages - Feature Specification

## 1. Order Failed Page (`/order/failed`)

### Purpose
Handle failed payment scenarios gracefully and encourage retry.

### Business Requirements
- **Goal**: 50% retry rate (failed payments → successful payment)
- **Clear Communication**: Explain why payment failed
- **Easy Recovery**: One-click retry
- **Support Access**: Easy way to get help

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                     ❌ Payment Failed                        │
│                                                              │
│         We couldn't process your payment                     │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Reason: Payment declined by your bank                  │ │
│  │                                                        │ │
│  │ Common reasons:                                        │ │
│  │ • Insufficient funds                                   │ │
│  │ • Card limit exceeded                                  │ │
│  │ • Incorrect card details                               │ │
│  │ • Bank security check                                  │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Don't worry! Your cart is saved and ready.                 │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Your Order (Saved)                                     │ │
│  │ ────────────────────────────────────────────────────── │ │
│  │ 2× NFC Digital Business Card                ₹5,998    │ │
│  │ 1× Smart Review Stand                       ₹4,999    │ │
│  │ ────────────────────────────────────────────────────── │ │
│  │ Total:                                      ₹12,976   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [🔄 Try Again]        [💬 Contact Support]                 │
│                                                              │
│  [← Back to Cart]                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display

**Main Message:**
- Heading: "Payment Failed"
- Subheading: "We couldn't process your payment"

**Failure Reason:**
- Display specific error from Razorpay
- Common reasons list (if no specific reason)

**Order Summary:**
- Show saved cart items
- Display total amount
- Reassure that cart is preserved

**CTAs:**
- Primary: "🔄 Try Again" (Electric Green) - Redirect to checkout
- Secondary: "💬 Contact Support" (Outline) - Open support chat/email
- Tertiary: "← Back to Cart" (Link) - Return to cart page

**Support Information:**
- Email: support@synconnect.com
- Phone: +91 98765 43210
- Hours: Mon-Fri, 9 AM - 6 PM IST

### Features
- ✅ Display Razorpay error message
- ✅ Preserve cart data
- ✅ One-click retry (redirect to checkout)
- ✅ Support contact options
- ✅ Order summary display
- ✅ Alternative payment method suggestions

### Error Messages

**Common Razorpay Errors:**
```typescript
const errorMessages = {
  'BAD_REQUEST_ERROR': 'Invalid payment details. Please check and try again.',
  'GATEWAY_ERROR': 'Payment gateway error. Please try again in a few minutes.',
  'SERVER_ERROR': 'Server error. Please try again later.',
  'PAYMENT_DECLINED': 'Payment declined by your bank. Please contact your bank or try another payment method.',
  'INSUFFICIENT_FUNDS': 'Insufficient funds. Please try another card or payment method.',
  'CARD_EXPIRED': 'Your card has expired. Please use a different card.',
  'INVALID_CVV': 'Invalid CVV. Please check your card details.',
  'AUTHENTICATION_FAILED': 'Payment authentication failed. Please try again.',
};
```

### Implementation

```tsx
// apps/web/app/order/failed/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OrderFailedPage() {
  const searchParams = useSearchParams();
  const [orderData, setOrderData] = useState(null);
  
  const errorCode = searchParams.get('error');
  const orderId = searchParams.get('orderId');
  
  useEffect(() => {
    // Fetch order data
    fetchOrderData(orderId);
  }, [orderId]);
  
  const handleRetry = () => {
    // Redirect to checkout with saved order
    window.location.href = `/checkout?orderId=${orderId}`;
  };
  
  return (
    <div className="order-failed-page">
      <div className="container">
        <div className="error-icon">❌</div>
        <h1>Payment Failed</h1>
        <p>We couldn't process your payment</p>
        
        <div className="error-reason">
          <h3>Reason:</h3>
          <p>{getErrorMessage(errorCode)}</p>
          
          <div className="common-reasons">
            <p>Common reasons:</p>
            <ul>
              <li>Insufficient funds</li>
              <li>Card limit exceeded</li>
              <li>Incorrect card details</li>
              <li>Bank security check</li>
            </ul>
          </div>
        </div>
        
        <p className="reassurance">
          Don't worry! Your cart is saved and ready.
        </p>
        
        {orderData && (
          <div className="order-summary">
            <h3>Your Order (Saved)</h3>
            {orderData.items.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.quantity}× {item.name}</span>
                <span>₹{item.totalPrice}</span>
              </div>
            ))}
            <div className="total">
              <span>Total:</span>
              <span>₹{orderData.totalAmount}</span>
            </div>
          </div>
        )}
        
        <div className="actions">
          <button onClick={handleRetry} className="btn-primary">
            🔄 Try Again
          </button>
          <a href="mailto:support@synconnect.com" className="btn-secondary">
            💬 Contact Support
          </a>
        </div>
        
        <a href="/cart" className="back-link">
          ← Back to Cart
        </a>
      </div>
    </div>
  );
}
```

---

## 2. How It Works Page (`/how-it-works`)

### Purpose
Educate visitors about NFC technology and the SynConnect experience.

### Business Requirements
- **Goal**: Increase conversion rate by 10%
- **Reduce Support**: Answer common "how does it work" questions
- **Build Trust**: Show real-world usage
- **Engagement**: Video tutorial, interactive demos

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                     How It Works                             │
│                                                              │
│  Everything you need to know about SynConnect NFC cards     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  1. What is SynConnect?                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  SynConnect is a smart NFC business card that lets you      │
│  share your contact information, social media, and          │
│  portfolio with a single tap. No app required.              │
│                                                              │
│  [Image: NFC card being tapped on phone]                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  2. How NFC Technology Works                                 │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  NFC (Near Field Communication) is a wireless technology    │
│  that allows devices to communicate when they're close      │
│  together (within 4cm).                                      │
│                                                              │
│  ✓ Works with all modern smartphones (iOS & Android)        │
│  ✓ No app download required                                 │
│  ✓ Instant connection (< 1 second)                          │
│  ✓ Secure and encrypted                                     │
│                                                              │
│  [Diagram: NFC chip → Phone → Profile]                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  3. Step-by-Step Guide                                       │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Step 1: Order Your Card                                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • Choose your product (Digital Card or Review Stand)   │ │
│  │ • Select material (PVC or Metal) and color             │ │
│  │ • Upload your logo (optional)                          │ │
│  │ • Complete checkout                                    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Step 2: Set Up Your Profile                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • Add your photo, name, and title                      │ │
│  │ • Add contact info (email, phone, website)             │ │
│  │ • Link your social media accounts                      │ │
│  │ • Add your services or products                        │ │
│  │ • Customize your theme colors                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Step 3: Receive Your Card                                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • We print your card with your logo                    │ │
│  │ • We encode it with your profile URL                   │ │
│  │ • We ship it to you (5-7 business days)                │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Step 4: Start Sharing                                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • Tap your card on any smartphone                      │ │
│  │ • Your profile appears instantly                       │ │
│  │ • Recipient can save your contact, visit links         │ │
│  │ • Track every interaction in your dashboard            │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  4. Video Tutorial                                           │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  [Embedded Video: 2-minute demo showing tap interaction]    │
│                                                              │
│  Watch how easy it is to share your profile with a tap!     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  5. Use Cases                                                │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Networking   │  │ Business     │  │ Conferences  │      │
│  │ Events       │  │ Meetings     │  │ & Events     │      │
│  │              │  │              │  │              │      │
│  │ Share with   │  │ Impress      │  │ Stand out    │      │
│  │ 100+ people  │  │ clients      │  │ from crowd   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Daily        │  │ Restaurants  │  │ Retail       │      │
│  │ Interactions │  │ & Cafes      │  │ Stores       │      │
│  │              │  │              │  │              │      │
│  │ Quick share  │  │ Get reviews  │  │ Collect      │      │
│  │ anytime      │  │ easily       │  │ feedback     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  6. Compatible Devices                                       │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  iOS Devices (iPhone)                                        │
│  ✓ iPhone XS and newer (iOS 13+)                            │
│  ✓ Automatic NFC detection (no app needed)                  │
│                                                              │
│  Android Devices                                             │
│  ✓ Most Android phones (Android 5.0+)                       │
│  ✓ NFC must be enabled in settings                          │
│                                                              │
│  [Icons: iPhone, Samsung, Google Pixel, OnePlus, etc.]      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  7. FAQ                                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Q: Do recipients need an app?                               │
│  A: No! NFC works natively on all modern smartphones.       │
│                                                              │
│  Q: Can I update my information?                             │
│  A: Yes! Update anytime in your dashboard. Changes are      │
│     instant. Your physical card stays the same.             │
│                                                              │
│  Q: What if my phone doesn't have NFC?                       │
│  A: Every card also has a QR code backup. Just scan it!     │
│                                                              │
│  Q: How long does the card last?                             │
│  A: The NFC chip lasts 10+ years with normal use.           │
│                                                              │
│  Q: Is it secure?                                            │
│  A: Yes! NFC communication is encrypted. We don't store     │
│     personal data on the chip, only a URL to your profile.  │
│                                                              │
│  [View All FAQs →]                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Ready to Get Started?                                       │
│                                                              │
│  Join 1,000+ professionals using SynConnect                  │
│                                                              │
│  [🚀 Order Your Card Now]                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Sections

1. **Introduction**
   - What is SynConnect?
   - Why NFC cards?
   - Key benefits

2. **How NFC Works**
   - Technology explanation (simple)
   - Compatible devices
   - Security

3. **Step-by-Step Guide**
   - Order card
   - Set up profile
   - Receive card
   - Start sharing

4. **Video Tutorial**
   - Embedded video (2-3 minutes)
   - Shows tap interaction
   - Dashboard overview

5. **Use Cases**
   - Networking events
   - Business meetings
   - Conferences
   - Daily interactions
   - Restaurants (review stands)
   - Retail stores

6. **Compatible Devices**
   - iOS devices (iPhone XS+)
   - Android devices (5.0+)
   - Device icons

7. **FAQ**
   - Common questions
   - Link to full FAQ page

8. **CTA**
   - "Order Your Card Now" button

### Features
- ✅ Responsive design
- ✅ Video embed (YouTube/Vimeo)
- ✅ Animated diagrams
- ✅ Interactive device compatibility checker
- ✅ FAQ accordion
- ✅ Smooth scroll navigation

---

## 3. About Page (`/about`)

### Purpose
Build trust and tell the company story.

### Business Requirements
- **Goal**: Increase brand trust
- **Humanize Brand**: Show team, mission, values
- **Build Credibility**: Share achievements, milestones

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                        About Us                              │
│                                                              │
│  Making networking effortless, one tap at a time            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Our Story                                                   │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  SynConnect was born from a simple frustration: running     │
│  out of business cards at a networking event.                │
│                                                              │
│  In 2024, we asked ourselves: "Why are we still using       │
│  paper cards in a digital world?" That question led us to   │
│  create SynConnect - a smart NFC business card that never   │
│  runs out and always stays up-to-date.                       │
│                                                              │
│  Today, we're helping thousands of professionals share      │
│  their digital identity with a simple tap.                   │
│                                                              │
│  [Image: Founder photo or team photo]                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Our Mission                                                 │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  To make professional networking effortless and             │
│  environmentally sustainable.                                │
│                                                              │
│  We believe that:                                            │
│  • Networking should be instant and frictionless            │
│  • Your professional identity should be always accessible   │
│  • Technology should simplify, not complicate                │
│  • Sustainability matters                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Our Values                                                  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Innovation   │  │ Sustainability│  │ Customer     │      │
│  │              │  │              │  │ First        │      │
│  │ We embrace   │  │ One card     │  │ Your success │      │
│  │ new tech to  │  │ replaces     │  │ is our       │      │
│  │ solve old    │  │ 1000s of     │  │ success      │      │
│  │ problems     │  │ paper cards  │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Our Impact                                                  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   1,000+     │  │   50,000+    │  │   100,000+   │      │
│  │              │  │              │  │              │      │
│  │  Happy       │  │  Connections │  │  Paper Cards │      │
│  │  Customers   │  │  Made        │  │  Saved       │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Meet the Team (Optional)                                    │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ [Photo]      │  │ [Photo]      │  │ [Photo]      │      │
│  │              │  │              │  │              │      │
│  │ John Doe     │  │ Jane Smith   │  │ Alex Kumar   │      │
│  │ Founder & CEO│  │ CTO          │  │ Head of      │      │
│  │              │  │              │  │ Design       │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Get in Touch                                                │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Have questions? We'd love to hear from you!                 │
│                                                              │
│  📧 Email: hello@synconnect.com                              │
│  📱 Phone: +91 98765 43210                                   │
│  📍 Location: Mumbai, India                                  │
│                                                              │
│  [LinkedIn] [Twitter] [Instagram]                           │
│                                                              │
│  [Contact Us →]                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sections

1. **Hero**
   - Company tagline
   - Brief description

2. **Our Story**
   - How SynConnect started
   - Problem we're solving
   - Journey so far

3. **Our Mission**
   - What we stand for
   - Our beliefs

4. **Our Values**
   - Innovation
   - Sustainability
   - Customer-first

5. **Our Impact**
   - Stats (customers, connections, paper saved)
   - Social proof

6. **Meet the Team** (Optional)
   - Founder/team photos
   - Names and roles
   - LinkedIn links

7. **Get in Touch**
   - Contact info
   - Social media links
   - CTA to contact page

### Features
- ✅ Responsive design
- ✅ Team member cards with hover effects
- ✅ Animated stats counter
- ✅ Social media integration
- ✅ Image optimization

---

**Last Updated**: 2026-02-10
