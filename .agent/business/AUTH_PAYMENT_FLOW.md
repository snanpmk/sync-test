# SynConnect v3 - Authentication & Payment Flow Summary

## Quick Reference: How We Block Profile Creation Without Payment

### 🔑 Key Concept
**Payment always happens BEFORE profile becomes accessible**

---

## Two Purchase Paths Comparison

| Aspect | Quick Buy | Customize First |
|--------|-----------|-----------------|
| **When does user sign in?** | After receiving card (activation) | Before customizing profile |
| **When is payment?** | Step 1 (checkout) | After customization |
| **Profile creation** | After payment + card arrival | Before payment (but DRAFT mode) |
| **Profile accessible?** | ❌ No (until activation) | ❌ No (until payment) |
| **Friction level** | Low (2 min checkout) | Medium (sign in + customize) |

---

## Path A: Quick Buy - Detailed Breakdown

### Timeline
```
Browse → Checkout (PAYMENT) → Card Ships → Activation (SIGN IN) → Profile Live
```

### Step-by-Step with Payment/Auth Gates

#### 1. Browse & Click "Quick Buy"
- **Auth Required?** ❌ No
- **Payment Required?** ❌ No

#### 2. Quick Checkout
- **Auth Required?** ❌ No (guest checkout)
- **Payment Required?** ✅ **YES - PAYMENT HAPPENS HERE**
- User enters:
  - Email
  - Shipping address
  - Credit card (Stripe)

#### 3. After Payment Success
- Account created automatically (email from checkout)
- Order status: "paid"
- **Profile created?** ⚠️ Yes, but:
  - Status: `awaiting_activation`
  - `isPublic: false`
  - `content: null`
  - **NOT accessible via URL**

#### 4. Card Arrives → User Scans QR

#### 5. Activation Page
- **Auth Required?** ✅ **YES - MUST SIGN IN HERE**
- **Payment Required?** ✅ Already paid
- User must:
  - Sign in with Google OR
  - Set password for email account

#### 6. After Sign In → Profile Setup Wizard
- **Can they access this without paying?** ❌ No
  - Activation token only generated after payment
  - Token validation checks order is paid
- User fills profile details

#### 7. Profile Goes Live
- Status: `active`
- `isPublic: true`
- Now accessible via URL

### 🔒 How We Block Unpaid Access
1. **Activation token** only exists if order is paid
2. **Token validation** checks `order.status === "paid"`
3. **Profile setup wizard** requires valid token
4. Without payment → No token → Can't activate

---

## Path B: Customize First - Detailed Breakdown

### Timeline
```
Browse → Sign In (AUTH) → Customize → Checkout (PAYMENT) → Profile Live
```

### Step-by-Step with Payment/Auth Gates

#### 1. Browse & Click "Customize First"

#### 2. Sign In Page
- **Auth Required?** ✅ **YES - MUST SIGN IN HERE**
- **Payment Required?** ❌ No
- User must:
  - Sign in with Google OR
  - Create account with email/password

#### 3. Profile Builder (After Sign In)
- **Auth Required?** ✅ Yes (already signed in)
- **Payment Required?** ❌ Not yet
- User customizes profile
- **Profile created?** ⚠️ Yes, but:
  - Status: `draft`
  - `isPublic: false`
  - **NOT accessible via URL**

#### 4. Preview & Proceed to Checkout

#### 5. Checkout
- **Auth Required?** ✅ Yes (already signed in)
- **Payment Required?** ✅ **YES - PAYMENT HAPPENS HERE**
- User enters:
  - Shipping address
  - Credit card (Stripe)

#### 6. After Payment Success
- Profile status: `draft` → `active`
- `isPublic: true`
- **NOW accessible via URL**
- Order created with profileId

#### 7. Card Ships (Already Working)

### 🔒 How We Block Unpaid Access
1. **Profile in DRAFT mode** until payment
2. **Public access blocked** via `isPublic: false`
3. **Payment success webhook** changes status to active
4. Without payment → Profile stays draft → Not accessible

---

## Authentication Flow Details

### Google OAuth (Recommended)
```
User clicks "Continue with Google"
  ↓
Redirect to Google OAuth consent screen
  ↓
User approves
  ↓
Google redirects back with auth code
  ↓
Backend exchanges code for user info
  ↓
Create/update user record with googleId
  ↓
Generate JWT token
  ↓
User signed in ✅
```

### Email/Password (Fallback)
```
Quick Buy: Account created after payment
  ↓
User receives email: "Set your password"
  ↓
User clicks activation link
  ↓
Activation page: "Set password to continue"
  ↓
User sets password
  ↓
Generate JWT token
  ↓
User signed in ✅
```

---

## Database State Examples

### Quick Buy - Before Payment
```javascript
// Nothing exists yet
```

### Quick Buy - After Payment (Before Activation)
```javascript
User {
  _id: "user_123",
  email: "customer@example.com",
  authProvider: "email",
  hasPassword: false, // Not set yet
  isEmailVerified: false
}

Order {
  _id: "order_456",
  userId: "user_123",
  status: "paid", // ✅ Payment successful
  activationToken: "abc123xyz",
  isActivated: false // ⚠️ Not activated yet
}

Profile {
  _id: "temp_789",
  userId: "user_123",
  status: "awaiting_activation",
  isPublic: false, // 🔒 Not accessible
  content: null
}
```

### Quick Buy - After Activation
```javascript
User {
  _id: "user_123",
  email: "customer@example.com",
  authProvider: "google", // Signed in with Google
  googleId: "google_xyz",
  hasPassword: false
}

Order {
  _id: "order_456",
  userId: "user_123",
  status: "shipped",
  isActivated: true, // ✅ Activated
  finalProfileId: "507f1f77bcf86cd799439011"
}

Profile {
  _id: "507f1f77bcf86cd799439011",
  userId: "user_123",
  status: "active",
  isPublic: true, // ✅ Now accessible
  content: { name: "John Doe", ... }
}
```

### Customize First - After Sign In (Before Payment)
```javascript
User {
  _id: "user_789",
  email: "jane@example.com",
  authProvider: "google",
  googleId: "google_abc"
}

Profile {
  _id: "507f1f77bcf86cd799439011",
  userId: "user_789",
  status: "draft", // ⚠️ Draft mode
  isPublic: false, // 🔒 Not accessible
  content: { name: "Jane Smith", ... }
}

// No order yet
```

### Customize First - After Payment
```javascript
User {
  _id: "user_789",
  email: "jane@example.com",
  authProvider: "google",
  googleId: "google_abc"
}

Profile {
  _id: "507f1f77bcf86cd799439011",
  userId: "user_789",
  status: "active", // ✅ Active
  isPublic: true, // ✅ Now accessible
  content: { name: "Jane Smith", ... }
}

Order {
  _id: "order_999",
  userId: "user_789",
  profileId: "507f1f77bcf86cd799439011",
  status: "paid",
  isActivated: true // Already active
}
```

---

## Key Takeaways

### ✅ Payment Gates
1. **Quick Buy**: Payment → Token generated → Activation possible
2. **Customize First**: Payment → Profile becomes public

### ✅ Auth Gates
1. **Quick Buy**: No auth until activation (after card arrives)
2. **Customize First**: Auth required before customization

### ✅ Profile Accessibility
- **Always blocked until payment succeeds**
- Quick Buy: `awaiting_activation` → not public
- Customize First: `draft` → not public
- Both: Payment success → `active` + `isPublic: true`

### ✅ Dashboard Access
- Requires authentication (Google OAuth or email/password)
- Quick Buy users authenticate during activation
- Customize First users already authenticated

---

**Last Updated**: 2026-02-10
