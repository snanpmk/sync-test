# SynConnect Business Flow

## Overview
SynConnect uses a **Hybrid Purchase Model** that balances conversion optimization with customer choice.

---

## 🛍️ Purchase Flow: Two Paths

### **Authentication Overview**
SynConnect uses **Google OAuth** as the primary authentication method, with email/password as a fallback.

**Account Creation:**
- **Quick Buy**: Account created automatically after payment (email from checkout)
- **Customize First**: User must sign in BEFORE customizing

**Dashboard Access:**
- Users sign in via Google OAuth or email/password
- Dashboard URL: `dashboard.synconnect.com`
- Manages profiles, views analytics, and orders

---

### **Path A: Quick Buy** (Recommended Default - Low Friction)
**Goal**: Maximize conversions with minimal friction

```
Browse → Quick Checkout (2 min) → Receive Card → Activate & Setup
```

**Steps:**
1. **Product Page**: User clicks "🚀 Buy Now"

2. **Quick Checkout** (Guest Checkout):
   - Email (for account creation + order confirmation)
   - Quantity selector
   - Shipping address
   - Payment (Stripe)
   - Total time: ~2 minutes
   - **NO sign-in required yet**

3. **Payment Success**:
   - Stripe payment confirmed
   - **Account created automatically** if email doesn't exist:
     ```javascript
     User {
       email: "customer@example.com",
       authProvider: "email", // Will upgrade to Google if they sign in with Google
       isEmailVerified: false,
       hasPassword: false, // They'll set it during activation
     }
     ```
   - Order created with status: "paid"
   - Temporary profile placeholder created (NOT accessible)

4. **Order Confirmation Email**:
   ```
   Subject: Your SynConnect card is on the way! 🎉
   
   Hi there!
   
   Your order is confirmed. We'll send you tracking info soon.
   
   When your card arrives, you'll activate it and set up your profile.
   
   [Track Order] [What's Next?]
   ```

5. **Card Shipped**: 
   - Admin encodes card with activation URL
   - Customer receives card with QR code

6. **Activation Flow** (Post-Purchase):
   
   **Step 1: Scan QR or click email link**
   - Goes to: `synconnect.com/activate/[orderToken]`
   
   **Step 2: Authentication Required**
   ```
   ┌─────────────────────────────────────────────────────────┐
   │  Welcome! Let's activate your SynConnect card           │
   │                                                          │
   │  Sign in to get started:                                │
   │                                                          │
   │  [🔵 Continue with Google]                              │
   │                                                          │
   │  ─────────── or ───────────                             │
   │                                                          │
   │  Email: customer@example.com (pre-filled)               │
   │  Password: [________] [Set Password]                    │
   │                                                          │
   │  [Continue →]                                           │
   └─────────────────────────────────────────────────────────┘
   ```
   
   **Step 3: Profile Setup Wizard** (After sign-in)
   - 3-step setup (5-10 min):
     - Step 1: Basic info (name, title, company)
     - Step 2: Contact & social links
     - Step 3: Customize appearance & theme
   
   **Step 4: Profile Goes Live**
   - Profile created with MongoDB ObjectId
   - Status: `active`, `isPublic: true`
   - Redirect to dashboard
   - Email: "Your card is live! Here's your profile link"

### **Path B: Customize First** (Optional - For Detail-Oriented Customers)
**Goal**: Let customers preview before buying

```
Browse → Sign In → Customize Profile (10-15 min) → Preview → Checkout → Receive Card (already working)
```

**Steps:**
1. **Product Page**: User clicks "👀 Customize & Preview"

2. **Authentication Required**:
   ```
   ┌─────────────────────────────────────────────────────────┐
   │  Sign in to start customizing your profile              │
   │                                                          │
   │  [🔵 Continue with Google]                              │
   │                                                          │
   │  ─────────── or ───────────                             │
   │                                                          │
   │  Email: [________________]                              │
   │  Password: [________________]                           │
   │  [Sign In] [Create Account]                             │
   └─────────────────────────────────────────────────────────┘
   ```

3. **Profile Builder** (After sign-in):
   - Full customization interface
   - Live preview on right side
   - All fields available (basic info, links, theme, etc.)
   - Profile saved as **DRAFT** (not public):
     ```javascript
     Profile {
       _id: "507f1f77bcf86cd799439011",
       userId: "user_123",
       status: "draft",
       isPublic: false, // Not accessible via URL yet
       content: { ... }
     }
     ```
   - Can save progress and come back later

4. **Preview & Confirm**:
   - See exactly what profile will look like
   - Test interactions
   - "Looks good? Proceed to checkout"

5. **Checkout**:
   - User already signed in
   - Shows profile preview
   - Shipping address
   - Payment (Stripe)

6. **Payment Success**:
   - Profile status updated: `draft` → `active`
   - Profile becomes public: `isPublic: true`
   - Order created with profileId
   - Email: "Your card is being prepared!"

7. **Card Shipped**:
   - Card encoded with profile URL: `synconnect.com/profile/507f1f77bcf86cd799439011`
   - Works immediately when received
   - User can access dashboard to manage profile

---

## 📦 Order Fulfillment Flow

### Admin Side (admin.synconnect.com)

```
Order Received → Get Encoding URL → Program Cards → Ship → Update Status
```

**Order Dashboard:**
```
┌──────────────────────────────────────────────────────────────┐
│ Order #1234                                    Status: PAID  │
├──────────────────────────────────────────────────────────────┤
│ Customer: John Doe (john@example.com)                        │
│ Product: NFC Digital Business Card × 2                       │
│ Purchase Path: Quick Buy (Activation pending)                │
│                                                               │
│ Profile Status: ⚠️ Not Activated Yet                         │
│ Encoding URL: synconnect.com/activate/abc123xyz             │
│                                                               │
│ [Show QR Code] [Copy URL] [Mark as Encoding]                │
│                                                               │
│ Shipping: 123 Main St, City, State 12345                    │
│ [Update Status: Encoding → Shipped → Delivered]             │
└──────────────────────────────────────────────────────────────┘
```

**For "Customize First" orders:**
```
Profile Status: ✅ Active
Encoding URL: synconnect.com/profile/507f1f77bcf86cd799439011
```

### Encoding Process:

**Option 1: Manual (Small Scale)**
1. View order in admin panel
2. Click "Show QR Code" for encoding URL
3. Use NFC writer app to scan QR
4. Write to blank NFC card
5. Repeat for quantity ordered

**Option 2: Bulk Export (Scalable)**
1. Select multiple orders
2. Click "Export Encoding URLs"
3. Download CSV:
   ```csv
   OrderID,Quantity,EncodingURL,Type
   1234,2,synconnect.com/activate/abc123,activation
   1235,1,synconnect.com/profile/507f1f77,direct
   ```
4. Send to 3rd party NFC encoding service
5. Service programs and ships directly

---

## 🎯 Customer Journey After Purchase

### Quick Buy Path (Activation Required)

**Email Sequence:**
```
Day 0: Order Confirmation
Subject: "Your SynConnect card is on the way! 🎉"
- Order summary
- What to expect
- Estimated delivery

Day 3: Shipped Notification
Subject: "Your card has shipped! Get ready to activate 🚀"
- Tracking number
- Activation instructions preview
- Video: "How to activate your card"

Day 7: Delivered (Estimated)
Subject: "Your card arrived! Activate it now in 5 minutes ⚡"
- Big CTA: [Activate Your Card]
- Link to activation page
- QR code in email (can scan from computer)

Day 10: Reminder (If not activated)
Subject: "Quick reminder: Activate your SynConnect card"
- Helpful tips
- Video tutorial
- Support link

Day 14: Final Nudge (If still not activated)
Subject: "Need help activating? We're here for you! 💬"
- Personal support offer
- FAQ link
- Live chat option
```

**Activation Page Flow:**
```
synconnect.com/activate/[orderToken]

┌─────────────────────────────────────────────────────────────┐
│  Welcome to SynConnect! 🎉                                  │
│  Let's set up your card in 3 easy steps                     │
│                                                              │
│  Progress: [●○○] Step 1 of 3                                │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Step 1: Basic Information                              │ │
│  │                                                        │ │
│  │ Full Name:     [________________]                     │ │
│  │ Job Title:     [________________]                     │ │
│  │ Company:       [________________]                     │ │
│  │ Profile Photo: [Upload Image]                         │ │
│  │                                                        │ │
│  │              [Continue to Step 2 →]                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ⏱️ Takes about 5 minutes                                   │
│  💾 Your progress is automatically saved                    │
└─────────────────────────────────────────────────────────────┘
```

**After Activation:**
- Profile goes live at: `synconnect.com/profile/[mongodbObjectId]`
- Customer redirected to dashboard
- Email: "Your card is live! Here's your profile link"
- Can immediately test by tapping card

---

## 🔄 Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ CUSTOMER VISITS SHOP                                        │
│ synconnect.com/shop                                         │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│ CHOOSE PURCHASE PATH                                        │
│ ┌──────────────────┐         ┌──────────────────┐          │
│ │ 🚀 Quick Buy     │   OR    │ 👀 Customize     │          │
│ │ (2 min)          │         │ (10-15 min)      │          │
│ └──────────────────┘         └──────────────────┘          │
└────────┬─────────────────────────────┬───────────────────────┘
         │                             │
         ▼                             ▼
┌──────────────────────┐    ┌────────────────────────────────┐
│ QUICK CHECKOUT       │    │ PROFILE BUILDER                │
│ - Email              │    │ - Full customization           │
│ - Shipping           │    │ - Live preview                 │
│ - Payment            │    │ - Then checkout                │
│ Creates temp profile │    │ Profile already active         │
└────────┬─────────────┘    └────────┬───────────────────────┘
         │                           │
         └───────────┬───────────────┘
                     ▼
         ┌───────────────────────────┐
         │ ORDER CREATED (PAID)      │
         │ - Quick Buy: activation   │
         │ - Customize: direct URL   │
         └───────────┬───────────────┘
                     ▼
         ┌───────────────────────────┐
         │ ADMIN FULFILLMENT         │
         │ - Get encoding URL        │
         │ - Program NFC cards       │
         │ - Ship to customer        │
         └───────────┬───────────────┘
                     ▼
         ┌───────────────────────────┐
         │ CUSTOMER RECEIVES CARD    │
         └───────────┬───────────────┘
                     │
         ┌───────────┴───────────────┐
         ▼                           ▼
┌──────────────────┐      ┌────────────────────────┐
│ QUICK BUY:       │      │ CUSTOMIZE FIRST:       │
│ Scan QR →        │      │ Card works             │
│ Activate →       │      │ immediately            │
│ Profile live ✅  │      │ ✅                     │
└──────────────────┘      └────────────────────────┘
         │                           │
         └───────────┬───────────────┘
                     ▼
         ┌───────────────────────────┐
         │ CUSTOMER USES CARD        │
         │ - Tap to share profile    │
         │ - Manage via dashboard    │
         │ - View analytics          │
         └───────────────────────────┘
```

---

## 📊 Database Records for Each Path

### Quick Buy Path
```javascript
// Order created at checkout
Order {
  _id: "order_123",
  userId: "user_456",
  profileId: "temp_profile_789", // Temporary, inactive
  productType: "nfc_card",
  quantity: 1,
  status: "paid",
  purchasePath: "quick_buy",
  activationToken: "abc123xyz",
  encodingUrl: "synconnect.com/activate/abc123xyz",
  isActivated: false,
  shippingAddress: { ... },
  paymentDetails: { ... }
}

// Profile (inactive until activation)
Profile {
  _id: "temp_profile_789",
  userId: "user_456",
  isActive: false,
  awaitingActivation: true,
  content: null, // Will be filled during activation
  type: "DigitalCard"
}

// After activation
Profile {
  _id: "507f1f77bcf86cd799439011", // New permanent ID
  userId: "user_456",
  isActive: true,
  content: { name: "John Doe", ... },
  type: "DigitalCard"
}

Order {
  ...
  isActivated: true,
  activatedAt: "2026-02-15T10:30:00Z",
  finalProfileId: "507f1f77bcf86cd799439011",
  encodingUrl: "synconnect.com/profile/507f1f77bcf86cd799439011" // Updated
}
```

### Customize First Path
```javascript
// Profile created during customization
Profile {
  _id: "507f1f77bcf86cd799439011",
  userId: "user_456",
  isActive: true,
  content: { name: "Jane Smith", ... },
  type: "DigitalCard"
}

// Order created at checkout
Order {
  _id: "order_124",
  userId: "user_456",
  profileId: "507f1f77bcf86cd799439011",
  productType: "nfc_card",
  quantity: 1,
  status: "paid",
  purchasePath: "customize_first",
  encodingUrl: "synconnect.com/profile/507f1f77bcf86cd799439011",
  isActivated: true, // Already active
  shippingAddress: { ... },
  paymentDetails: { ... }
}
```

---

## 🎯 Key Features to Build

### Customer-Facing App (apps/web)
- [ ] Product pages with dual CTA (Quick Buy vs Customize)
- [ ] Quick checkout flow (minimal fields)
- [ ] Profile builder with live preview
- [ ] Activation page (`/activate/[token]`)
- [ ] 3-step activation wizard
- [ ] Public profile pages (`/profile/[id]`)

### User Dashboard (apps/dashboard)
- [ ] Profile management (edit after activation)
- [ ] Analytics dashboard
- [ ] Order history
- [ ] Reorder functionality

### Admin Panel (apps/admin)
- [ ] Order management with encoding URLs
- [ ] Distinguish between activation URLs and direct profile URLs
- [ ] Bulk export for encoding
- [ ] Track activation status
- [ ] Send activation reminders manually

### Backend API (apps/api)
- [ ] Create order (both paths)
- [ ] Generate activation tokens
- [ ] Activation endpoint (validates token, activates profile)
- [ ] Update encoding URL after activation
- [ ] Email service integration (SendGrid/Mailgun)

---

**Last Updated**: 2026-02-10
