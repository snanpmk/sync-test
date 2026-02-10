# SynConnect v3 - Technology Stack Decisions

## Authentication: NextAuth.js ✅

### Why NextAuth.js over Clerk?

**Cost:**
- NextAuth.js: **FREE** (self-hosted)
- Clerk: $25/month after 10,000 users

**Learning Curve:**
- You already know Google Auth for React
- NextAuth.js is just a wrapper around OAuth providers
- Clerk requires learning their API and UI components

**Control:**
- NextAuth.js: Full control over UI, database, logic
- Clerk: Limited to their components and styling

**Database:**
- NextAuth.js: Uses your MongoDB
- Clerk: Uses their database (vendor lock-in)

**Setup Time:**
- NextAuth.js: ~30 minutes (you know Google Auth)
- Clerk: ~1 hour + learning their docs

### NextAuth.js Implementation

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Your email/password logic
        const user = await verifyCredentials(credentials)
        return user
      }
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.role = token.role
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

**Usage in Components:**
```typescript
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  
  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  
  return (
    <>
      Not signed in
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  )
}
```

---

## Payment Gateway: Razorpay ✅

### Why Razorpay over Stripe for India?

**Transaction Fees:**
- Razorpay: **2%**
- Stripe: 2.9% + ₹2 per transaction
- **Savings**: 0.9% + ₹2 per transaction

**Settlement Time:**
- Razorpay: **T+1 days** (money next day)
- Stripe: T+7 days for India
- **Faster cash flow**: 6 days earlier

**India-Specific Features:**
- Razorpay: Native UPI, all Netbanking, Wallets (Paytm, PhonePe)
- Stripe: Limited UPI, limited banks, no wallets
- **Better conversion**: More payment options = more sales

**Your Knowledge:**
- You already know Razorpay
- Zero learning curve
- Faster implementation

**Customer Support:**
- Razorpay: India-based, IST hours
- Stripe: US-based, timezone issues

**KYC & Compliance:**
- Razorpay: Indian KYC process (easier)
- Stripe: Complex for Indian businesses

### Razorpay Implementation

#### Backend: Create Order
```typescript
// apps/api/src/routes/orders.ts
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Create order endpoint
app.post('/api/orders/create', async (req, res) => {
  const { amount, currency = 'INR', receipt } = req.body;
  
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
      receipt,
      notes: {
        productType: 'nfc_card',
        userId: req.user.id,
      }
    });
    
    res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Verify payment endpoint
app.post('/api/orders/verify', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!);
  hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');
  
  if (generated_signature === razorpay_signature) {
    // Payment verified - update order status
    await updateOrderStatus(razorpay_order_id, 'paid');
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid signature' });
  }
});
```

#### Frontend: Checkout
```typescript
// apps/web/src/components/Checkout.tsx
import { useRazorpay } from '@/hooks/useRazorpay';

export default function Checkout() {
  const handlePayment = async () => {
    // 1. Create order on backend
    const response = await fetch('/api/orders/create', {
      method: 'POST',
      body: JSON.stringify({
        amount: 2999, // ₹29.99
        receipt: `order_${Date.now()}`,
      }),
    });
    
    const { orderId, amount } = await response.json();
    
    // 2. Open Razorpay checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount,
      currency: 'INR',
      name: 'SynConnect',
      description: 'NFC Digital Business Card',
      order_id: orderId,
      handler: async function (response) {
        // 3. Verify payment on backend
        const verifyResponse = await fetch('/api/orders/verify', {
          method: 'POST',
          body: JSON.stringify(response),
        });
        
        if (verifyResponse.ok) {
          // Payment successful - redirect to confirmation
          router.push('/order-confirmation');
        }
      },
      prefill: {
        email: user.email,
        contact: user.phone,
      },
      theme: {
        color: '#00FF00', // Electric Green
      },
    };
    
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  return (
    <button onClick={handlePayment}>
      Pay ₹29.99
    </button>
  );
}
```

#### Load Razorpay Script
```typescript
// apps/web/src/hooks/useRazorpay.ts
import { useEffect } from 'react';

export function useRazorpay() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
```

---

## Cost Comparison

### Monthly Costs (Assuming 1000 transactions @ ₹30 each)

**Option 1: NextAuth.js + Razorpay (Recommended)**
```
Authentication: ₹0
Payment fees: ₹30,000 × 2% = ₹600
Total: ₹600/month
```

**Option 2: Clerk + Stripe**
```
Authentication: ₹2,000 (after 10k users)
Payment fees: ₹30,000 × 2.9% + (₹2 × 1000) = ₹870 + ₹2,000 = ₹2,870
Total: ₹4,870/month
```

**Savings with Recommended Stack: ₹4,270/month**

---

## Setup Time Comparison

### NextAuth.js + Razorpay
```
NextAuth.js setup: 30 minutes (you know Google Auth)
Razorpay setup: 15 minutes (you know Razorpay)
Total: 45 minutes
```

### Clerk + Stripe
```
Clerk setup: 1 hour (new learning)
Stripe setup: 1 hour (new learning + India KYC)
Total: 2 hours
```

**Time saved: 1 hour 15 minutes**

---

## Final Recommendation

### ✅ Use This Stack:
- **Authentication**: NextAuth.js
- **Payment**: Razorpay

### Why?
1. **You already know both** (Google Auth + Razorpay)
2. **Cheaper**: ₹4,270/month savings
3. **Faster setup**: 45 min vs 2 hours
4. **Better for India**: UPI, faster settlement, local support
5. **Full control**: Your database, your UI, your logic

### Migration Path (If Needed Later)
- NextAuth.js → Clerk: Easy (just change auth provider)
- Razorpay → Stripe: Easy (just change payment provider)
- No vendor lock-in with this approach

---

## Package Installation

```bash
# Authentication
npm install next-auth @auth/mongodb-adapter

# Payment
npm install razorpay

# Types
npm install -D @types/razorpay
```

---

**Last Updated**: 2026-02-10
