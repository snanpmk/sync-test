# Additional Pages - Part 2

## 4. Contact Page (`/contact`)

### Purpose
Provide easy access to customer support and inquiries.

### Business Requirements
- **Goal**: < 24 hour response time
- **Multiple Channels**: Email, phone, form
- **Self-Service**: FAQ section
- **Trust**: Show availability and response time

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                      Contact Us                              │
│                                                              │
│  We're here to help! Get in touch with us.                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────┐  ┌──────────────────────────┐│
│  │ Get in Touch             │  │ Contact Information      ││
│  │ ──────────────────────── │  │ ──────────────────────── ││
│  │                          │  │                          ││
│  │ Name:                    │  │ 📧 Email                 ││
│  │ [___________________]    │  │ support@synconnect.com   ││
│  │                          │  │                          ││
│  │ Email:                   │  │ 📱 Phone                 ││
│  │ [___________________]    │  │ +91 98765 43210          ││
│  │                          │  │                          ││
│  │ Subject:                 │  │ 🕐 Hours                 ││
│  │ [General Inquiry ▼]      │  │ Mon-Fri: 9 AM - 6 PM IST ││
│  │                          │  │ Sat: 10 AM - 4 PM IST    ││
│  │ Message:                 │  │ Sun: Closed              ││
│  │ [___________________]    │  │                          ││
│  │ [___________________]    │  │ 📍 Location              ││
│  │ [___________________]    │  │ Mumbai, India            ││
│  │ [___________________]    │  │                          ││
│  │                          │  │ ⏱️ Response Time         ││
│  │ [Send Message]           │  │ Within 24 hours          ││
│  │                          │  │                          ││
│  │ 🔒 Your privacy is       │  │ [LinkedIn] [Twitter]     ││
│  │    protected             │  │ [Instagram]              ││
│  └──────────────────────────┘  └──────────────────────────┘│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Frequently Asked Questions                                  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ▼ How does shipping work?                                   │
│    We offer free shipping on all orders. Delivery takes     │
│    5-7 business days within India.                           │
│                                                              │
│  ▼ Can I return my card?                                     │
│    Yes! We offer a 30-day money-back guarantee. See our     │
│    refund policy for details.                                │
│                                                              │
│  ▼ How do I update my profile?                               │
│    Log in to your dashboard and edit your profile anytime.  │
│    Changes are instant!                                      │
│                                                              │
│  ▼ What if my card gets damaged?                             │
│    We offer a 1-year warranty. Contact us for a replacement.│
│                                                              │
│  [View All FAQs →]                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Other Ways to Reach Us                                      │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 💬 Live Chat │  │ 📚 Help      │  │ 🐛 Report    │      │
│  │              │  │    Center    │  │    a Bug     │      │
│  │ Chat with us │  │              │  │              │      │
│  │ Mon-Fri      │  │ Browse our   │  │ Found an     │      │
│  │ 9 AM - 6 PM  │  │ knowledge    │  │ issue? Let   │      │
│  │              │  │ base         │  │ us know      │      │
│  │              │  │              │  │              │      │
│  │ [Start Chat] │  │ [Browse]     │  │ [Report]     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display

**Contact Form:**
- Name (required)
- Email (required)
- Subject dropdown:
  - General Inquiry
  - Order Support
  - Technical Issue
  - Billing Question
  - Partnership
  - Other
- Message (required, min 10 characters)
- Submit button: "Send Message"
- Privacy note: "Your privacy is protected"

**Contact Information:**
- Email: support@synconnect.com
- Phone: +91 98765 43210
- Hours: Mon-Fri 9 AM - 6 PM IST, Sat 10 AM - 4 PM IST
- Location: Mumbai, India
- Response time: Within 24 hours
- Social media links

**FAQ Section:**
- 4-5 common questions (accordion)
- Link to full FAQ page

**Other Channels:**
- Live chat (if available)
- Help center link
- Bug report link

### Features
- ✅ Contact form with validation
- ✅ Email notification to support team
- ✅ Auto-reply to customer
- ✅ Subject categorization
- ✅ FAQ accordion
- ✅ Live chat integration (optional)
- ✅ Form spam protection (reCAPTCHA)

### Implementation

```tsx
// apps/web/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="contact-page">
      <div className="hero">
        <h1>Contact Us</h1>
        <p>We're here to help! Get in touch with us.</p>
      </div>
      
      <div className="container">
        <div className="grid">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Get in Touch</h2>
            
            {isSubmitted ? (
              <div className="success-message">
                <p>✅ Message sent successfully!</p>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                    minLength={10}
                  />
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="privacy-note">🔒 Your privacy is protected</p>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <h3>📧 Email</h3>
              <a href="mailto:support@synconnect.com">support@synconnect.com</a>
            </div>
            
            <div className="info-item">
              <h3>📱 Phone</h3>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            
            <div className="info-item">
              <h3>🕐 Hours</h3>
              <p>Mon-Fri: 9 AM - 6 PM IST</p>
              <p>Sat: 10 AM - 4 PM IST</p>
              <p>Sun: Closed</p>
            </div>
            
            <div className="info-item">
              <h3>📍 Location</h3>
              <p>Mumbai, India</p>
            </div>
            
            <div className="info-item">
              <h3>⏱️ Response Time</h3>
              <p>Within 24 hours</p>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/company/synconnect">LinkedIn</a>
              <a href="https://twitter.com/synconnect">Twitter</a>
              <a href="https://instagram.com/synconnect">Instagram</a>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {/* FAQ accordion component */}
        </div>
      </div>
    </div>
  );
}
```

---

## 5. Orders Page - Customer Dashboard (`/orders`)

### Purpose
Allow customers to view order history and track shipments.

### Business Requirements
- **Goal**: Reduce support inquiries about order status
- **Transparency**: Clear order status and tracking
- **Easy Access**: Quick reorder, download invoice

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Dashboard > Orders                                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  My Orders                                                   │
│                                                              │
│  [All Orders ▼]  [Search orders...]                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Order #1234                           Feb 10, 2026     │ │
│  │ ──────────────────────────────────────────────────────│ │
│  │                                                        │ │
│  │ ┌──────────────────────────────────────────────────┐ │ │
│  │ │ [Image] 2× NFC Digital Business Card - Metal     │ │ │
│  │ │         Black                                     │ │ │
│  │ └──────────────────────────────────────────────────┘ │ │
│  │                                                        │ │
│  │ Status: 📦 Shipped                                     │ │
│  │ Tracking: DTDC123456789                                │ │
│  │ Estimated Delivery: Feb 15, 2026                       │ │
│  │                                                        │ │
│  │ Total: ₹5,998                                          │ │
│  │                                                        │ │
│  │ [Track Order] [View Details] [Download Invoice]       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Order #1233                           Feb 5, 2026      │ │
│  │ ──────────────────────────────────────────────────────│ │
│  │                                                        │ │
│  │ ┌──────────────────────────────────────────────────┐ │ │
│  │ │ [Image] 1× Smart Review Stand - Acrylic          │ │ │
│  │ └──────────────────────────────────────────────────┘ │ │
│  │                                                        │ │
│  │ Status: ✅ Delivered                                   │ │
│  │ Delivered on: Feb 8, 2026                              │ │
│  │                                                        │ │
│  │ Total: ₹4,999                                          │ │
│  │                                                        │ │
│  │ [View Details] [Reorder] [Download Invoice]           │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Order #1232                           Jan 28, 2026     │ │
│  │ ──────────────────────────────────────────────────────│ │
│  │                                                        │ │
│  │ ┌──────────────────────────────────────────────────┐ │ │
│  │ │ [Image] 1× NFC Digital Business Card - PVC       │ │ │
│  │ │         White                                     │ │ │
│  │ └──────────────────────────────────────────────────┘ │ │
│  │                                                        │ │
│  │ Status: ⏳ Processing                                  │ │
│  │ Expected Ship Date: Jan 30, 2026                       │ │
│  │                                                        │ │
│  │ Total: ₹2,999                                          │ │
│  │                                                        │ │
│  │ [View Details] [Contact Support]                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Content to Display

**Order List:**
- Order number
- Order date
- Product images and names
- Quantity and variant
- Order status with icon:
  - ⏳ Processing
  - 🎨 Design Approval Pending
  - 🖨️ Printing
  - 📦 Shipped
  - ✅ Delivered
  - ❌ Cancelled
- Tracking number (if shipped)
- Estimated/actual delivery date
- Total amount
- Action buttons

**Filters:**
- All Orders
- Processing
- Shipped
- Delivered
- Cancelled

**Search:**
- Search by order number, product name

**Actions per Order:**
- Track Order (if shipped)
- View Details → Order detail page
- Download Invoice (PDF)
- Reorder (if delivered)
- Contact Support (if issues)

### Order Detail Page

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back to Orders                                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Order #1234                                                 │
│  Placed on Feb 10, 2026                                      │
│                                                              │
│  ┌──────────────────────────┐  ┌──────────────────────────┐│
│  │ Order Status             │  │ Shipping Address         ││
│  │ ──────────────────────── │  │ ──────────────────────── ││
│  │                          │  │                          ││
│  │ ✅ Order Placed          │  │ John Doe                 ││
│  │    Feb 10, 9:00 AM       │  │ 123 Main Street          ││
│  │                          │  │ Apartment 4B             ││
│  │ ✅ Payment Confirmed     │  │ Mumbai, Maharashtra      ││
│  │    Feb 10, 9:05 AM       │  │ 400001                   ││
│  │                          │  │ India                    ││
│  │ ✅ Design Approved       │  │                          ││
│  │    Feb 10, 2:00 PM       │  │ Phone: +91 98765 43210   ││
│  │                          │  │ Email: john@example.com  ││
│  │ ✅ Shipped               │  └──────────────────────────┘│
│  │    Feb 11, 10:00 AM      │                              │
│  │    Tracking: DTDC123456  │                              │
│  │                          │                              │
│  │ 🚚 In Transit            │                              │
│  │    Expected: Feb 15      │                              │
│  └──────────────────────────┘                              │
│                                                              │
│  Order Items                                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Image] NFC Digital Business Card - Metal, Black      │ │
│  │         Quantity: 2                                    │ │
│  │         Price: ₹2,999 each                             │ │
│  │         Subtotal: ₹5,998                               │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Order Summary                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Subtotal:                                   ₹5,998    │ │
│  │ Shipping:                                   FREE       │ │
│  │ Tax (18% GST):                              ₹1,080    │ │
│  │ ──────────────────────────────────────────────────────│ │
│  │ Total:                                      ₹7,078    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Payment Information                                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Payment Method: UPI                                    │ │
│  │ Transaction ID: pay_123456789                          │ │
│  │ Payment Status: Paid                                   │ │
│  │ Paid on: Feb 10, 2026 at 9:05 AM                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  [Track Shipment] [Download Invoice] [Contact Support]      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Features
- ✅ Order list with filters and search
- ✅ Order status tracking
- ✅ Shipment tracking integration
- ✅ Invoice download (PDF)
- ✅ Reorder functionality
- ✅ Order detail page
- ✅ Timeline view of order progress
- ✅ Responsive design

---

## 6. Legal Pages

### Privacy Policy (`/privacy`)

**Purpose**: Explain data collection and usage

**Sections:**
1. Information We Collect
2. How We Use Your Information
3. Data Storage and Security
4. Cookies and Tracking
5. Third-Party Services
6. Your Rights (GDPR compliance)
7. Contact Us

**Template:**
```markdown
# Privacy Policy

Last Updated: [Date]

## 1. Information We Collect

We collect information you provide directly:
- Name, email, phone number
- Shipping address
- Payment information (processed by Razorpay)
- Profile information (bio, social links, etc.)

We automatically collect:
- Device information (iOS/Android/Desktop)
- Browser type
- IP address (hashed for privacy)
- Location (city/country level only)
- Analytics data (profile views, taps, clicks)

## 2. How We Use Your Information

- Process orders and deliver products
- Provide customer support
- Send order updates and notifications
- Improve our services
- Analytics and insights

## 3. Data Storage and Security

- Data stored on MongoDB Atlas (encrypted)
- Images stored on Cloudinary (secure CDN)
- HTTPS encryption for all communications
- Regular security audits

## 4. Cookies and Tracking

We use cookies for:
- Authentication
- Shopping cart
- Analytics (anonymous)

## 5. Third-Party Services

- Razorpay (payment processing)
- Cloudinary (image hosting)
- Resend (email delivery)
- MongoDB Atlas (database)

## 6. Your Rights

You have the right to:
- Access your data
- Update your data
- Delete your account
- Export your data
- Opt-out of analytics

## 7. Contact Us

Email: privacy@synconnect.com
```

---

### Terms of Service (`/terms`)

**Purpose**: Legal agreement between SynConnect and users

**Sections:**
1. Acceptance of Terms
2. Use of Service
3. Account Registration
4. Orders and Payments
5. Refunds and Returns
6. Intellectual Property
7. Limitation of Liability
8. Termination
9. Changes to Terms
10. Contact Information

---

### Refund Policy (`/refund-policy`)

**Purpose**: Explain return and refund process

**Content:**
```markdown
# Refund Policy

## 30-Day Money-Back Guarantee

We offer a 30-day money-back guarantee on all products.

## Eligibility

- Product must be unused and in original condition
- Must include original packaging
- Must be within 30 days of delivery

## How to Request a Refund

1. Email support@synconnect.com with order number
2. We'll provide a return shipping label
3. Ship the product back to us
4. Refund processed within 5-7 business days

## Refund Method

- Original payment method
- Processing time: 5-7 business days

## Non-Refundable Items

- Customized products (with uploaded logo)
- Damaged products (due to misuse)
- Products returned after 30 days

## Contact Us

Email: support@synconnect.com
Phone: +91 98765 43210
```

---

### Shipping Policy (`/shipping-policy`)

**Purpose**: Explain shipping process and timelines

**Content:**
```markdown
# Shipping Policy

## Free Shipping

We offer free shipping on all orders within India.

## Processing Time

- Design approval: 1-2 business days
- Printing and encoding: 1-2 business days
- Total processing: 2-4 business days

## Shipping Time

- Delivery: 5-7 business days
- Total time (order to delivery): 7-11 business days

## Shipping Carrier

We use DTDC, Delhivery, or India Post.

## Tracking

You'll receive a tracking number via email once shipped.

## International Shipping

Not available at this time.

## Lost or Damaged Shipments

Contact us immediately if:
- Package is lost
- Package is damaged
- Package is delayed beyond 15 days

We'll send a replacement or issue a refund.

## Contact Us

Email: support@synconnect.com
Phone: +91 98765 43210
```

---

**Last Updated**: 2026-02-10
