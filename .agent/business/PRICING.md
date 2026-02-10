# SynConnect v3 - Pricing Strategy

## Product Pricing

### Base Prices

| Product | Price (excl. GST) | GST (18%) | Total Price |
|---------|-------------------|-----------|-------------|
| **NFC Digital Business Card** | ₹1,499 | ₹270 | ₹1,769 |
| **Smart Review Stand** | ₹1,299 | ₹234 | ₹1,533 |

### Pricing Display

**At Checkout:**
- Show base price: ₹1,499
- Show GST separately: + ₹270 (18% GST)
- Show total: ₹1,769

**Example Cart:**
```
┌────────────────────────────────────────────────────┐
│ Cart Summary                                       │
├────────────────────────────────────────────────────┤
│ 2× NFC Digital Business Card       ₹2,998         │
│ 1× Smart Review Stand              ₹1,299         │
│                                                    │
│ Subtotal:                          ₹4,297         │
│ GST (18%):                         ₹773           │
│ Shipping:                          FREE           │
│ ──────────────────────────────────────────────────│
│ Total:                             ₹5,070         │
└────────────────────────────────────────────────────┘
```

---

## Bulk Discounts

**Status**: ❌ No bulk discounts for v1

All quantities charged at standard price.

---

## Shipping

**Policy**: ✅ FREE shipping on all orders

- No minimum order value required
- Free shipping across India
- Delivery: 5-7 business days

---

## Tax (GST)

**GST Rate**: 18%

**Display Method**: Show GST separately at checkout
- Product page: Show base price (₹1,499)
- Cart page: Show base price + GST breakdown
- Checkout page: Show total including GST

**Example:**
```
Product Price:  ₹1,499
GST (18%):      ₹270
─────────────────────
Total:          ₹1,769
```

---

## Price Calculations

### NFC Digital Business Card
```javascript
const basePrice = 1499;
const gstRate = 0.18;
const gstAmount = Math.round(basePrice * gstRate); // ₹270
const totalPrice = basePrice + gstAmount; // ₹1,769
```

### Smart Review Stand
```javascript
const basePrice = 1299;
const gstRate = 0.18;
const gstAmount = Math.round(basePrice * gstRate); // ₹234
const totalPrice = basePrice + gstAmount; // ₹1,533
```

---

## Razorpay Integration

### Order Creation
```javascript
// Create Razorpay order
const order = await razorpay.orders.create({
  amount: 176900, // Amount in paise (₹1,769 × 100)
  currency: 'INR',
  receipt: 'order_' + orderId,
  notes: {
    product: 'NFC Digital Business Card',
    quantity: 1,
    basePrice: 1499,
    gst: 270,
  }
});
```

---

---

## Subscription Model

### v1: One-Time Purchase ✅
- **Model**: Buy card once, use forever
- **No recurring fees**
- Users pay only for the physical card
- Dashboard access included for lifetime

### Future (v2): Optional Premium Subscription
- Subscription model will be introduced when innovative features are added
- Base features remain free for all card purchasers
- Premium features available via subscription

---

## User Limits (v1)

### Profile Limits
**1 Profile per Card Purchased**
- User buys 1 card → Can create 1 profile
- User buys 3 cards → Can create 3 profiles
- Each card is linked to one profile

**Example:**
```javascript
// User purchases
Order {
  userId: "user_123",
  items: [
    { product: "NFC Card", quantity: 2 }
  ]
}

// User can create
Profiles: 2 (one per card)
```

### Connection Limits
**Unlimited Connections** ✅
- No monthly limit on connections
- Users can receive unlimited "Connect with Me" form submissions
- No restrictions on lead generation

### Analytics Data Retention
**5 Years** 📊
- Analytics data stored for 5 years from creation date
- After 5 years, data is automatically archived/deleted
- Users can export data anytime before deletion

**Timeline:**
```
Profile created: Jan 1, 2026
Analytics available until: Jan 1, 2031
Auto-delete after: Jan 1, 2031
```

### Product Showcase Limits
**Maximum 10 Products per Profile** 🛍️
- Users can add up to 10 products/portfolio items
- Each product can have:
  - Multiple images
  - Description
  - Price
  - CTA link

**Validation:**
```javascript
if (profile.products.length >= 10) {
  throw new Error("Maximum 10 products allowed per profile");
}
```

### Social Links Limits
**Maximum 30 Social Links per Profile** 🔗
- Users can add up to 30 social media links
- Covers all major platforms + custom links
- Examples: LinkedIn, Twitter, Instagram, Facebook, GitHub, Portfolio, etc.

**Validation:**
```javascript
if (profile.socialLinks.length >= 30) {
  throw new Error("Maximum 30 social links allowed per profile");
}
```

---

## Limits Summary Table

| Feature | Limit | Notes |
|---------|-------|-------|
| **Profiles** | 1 per card purchased | Buy 3 cards = 3 profiles |
| **Connections** | Unlimited | No monthly cap |
| **Analytics Retention** | 5 years | Auto-delete after 5 years |
| **Products per Profile** | 10 | Portfolio/showcase items |
| **Social Links per Profile** | 30 | All platforms + custom |
| **Profile Views** | Unlimited | Track all taps/views |
| **Dashboard Access** | Lifetime | Included with card purchase |

---

## Database Considerations

### Enforcing Limits

**Profile Creation:**
```javascript
// Check if user has available profile slots
const purchasedCards = await Order.countDocuments({
  userId: user._id,
  status: 'delivered'
});

const existingProfiles = await Profile.countDocuments({
  userId: user._id
});

if (existingProfiles >= purchasedCards) {
  throw new Error("You need to purchase more cards to create additional profiles");
}
```

**Product Addition:**
```javascript
// Check product limit
if (profile.products.length >= 10) {
  throw new Error("Maximum 10 products allowed per profile");
}
```

**Social Link Addition:**
```javascript
// Check social links limit
if (profile.socialLinks.length >= 30) {
  throw new Error("Maximum 30 social links allowed per profile");
}
```

**Analytics Cleanup:**
```javascript
// Cron job to delete old analytics (runs daily)
const fiveYearsAgo = new Date();
fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

await Analytics.deleteMany({
  createdAt: { $lt: fiveYearsAgo }
});
```

---

## Future Considerations

### Potential Bulk Pricing (v2)
If we decide to add bulk discounts later:

| Quantity | Discount | Price per Card |
|----------|----------|----------------|
| 1-4      | 0%       | ₹1,499         |
| 5-9      | 10%      | ₹1,349         |
| 10-19    | 15%      | ₹1,274         |
| 20+      | 20%      | ₹1,199         |

### Premium Subscription Tiers (v2)
When innovative features are added:

**Free Tier** (Included with card purchase):
- 1 profile per card
- Unlimited connections
- 5 years analytics
- 10 products per profile
- 30 social links
- Standard support

**Pro Tier** (₹___/month - TBD):
- Unlimited profiles
- Unlimited connections
- Forever analytics
- Unlimited products
- Unlimited social links
- Custom domain
- Remove "Powered by SynConnect"
- Priority support

**Business Tier** (₹___/month - TBD):
- Everything in Pro
- White label option
- Advanced analytics
- Team collaboration
- API access
- Dedicated support

---

**Last Updated**: 2026-02-10
