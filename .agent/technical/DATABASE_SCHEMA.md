# SynConnect v3 - Complete Database Schema

## Overview

**Database**: MongoDB (MongoDB Atlas)  
**ODM**: Mongoose  
**Collections**: 6 main collections

---

## Collections

1. **users** - User accounts and authentication
2. **profiles** - Digital business cards and review stands
3. **products** - Product catalog (NFC cards, review stands)
4. **orders** - Customer orders
5. **connections** - Lead form submissions
6. **analytics** - Event tracking data

---

## 1. Users Collection

### Schema

```typescript
interface User {
  _id: ObjectId;
  
  // Basic Info
  name: string;
  email: string;                    // Unique
  phone?: string;
  
  // Authentication
  passwordHash?: string;             // bcrypt hash (if using email/password)
  authProvider: 'google' | 'email' | 'both';
  googleId?: string;                 // Google OAuth ID
  isEmailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  
  // Password Reset
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  
  // Profile
  profilePicture?: string;           // Cloudinary URL
  
  // Account Status
  role: 'user' | 'admin';
  isActive: boolean;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}
```

### Mongoose Schema

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  passwordHash: {
    type: String,
  },
  authProvider: {
    type: String,
    enum: ['google', 'email', 'both'],
    required: true,
  },
  googleId: {
    type: String,
    sparse: true, // Allows null values
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  profilePicture: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLoginAt: Date,
}, {
  timestamps: true, // Auto-creates createdAt and updatedAt
});

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });

const User = mongoose.model('User', userSchema);
```

---

## 2. Profiles Collection

### Schema

```typescript
interface Profile {
  _id: ObjectId;                     // Used in URL: /profile/[_id]
  userId: ObjectId;                  // Reference to User
  
  // Profile Type
  type: 'DigitalCard' | 'ReviewStand';
  
  // Basic Info
  name: string;
  title?: string;                    // Job title (for DigitalCard)
  company?: string;
  bio?: string;
  
  // Images
  profilePicture?: {
    url: string;
    publicId: string;                // Cloudinary public ID
  };
  coverPhoto?: {
    url: string;
    publicId: string;
  };
  logo?: {                           // For ReviewStand
    url: string;
    publicId: string;
  };
  
  // Contact Info
  email?: string;
  phone?: string;
  website?: string;
  location?: string;
  
  // Social Links (max 30)
  socialLinks: Array<{
    platform: string;                // 'linkedin', 'twitter', 'instagram', etc.
    url: string;
    order: number;                   // Display order
  }>;
  
  // Services (for DigitalCard)
  services?: string[];               // Array of service names
  
  // Products/Portfolio (max 10)
  products: Array<{
    _id: ObjectId;
    name: string;
    description?: string;
    price?: number;
    images: Array<{
      url: string;
      publicId: string;
      order: number;
    }>;
    ctaText?: string;                // "Buy Now", "Learn More"
    ctaLink?: string;
    order: number;                   // Display order
  }>;
  
  // Review Stand Specific
  reviewLogic?: {
    threshold: number;               // e.g., 3 (stars)
    googleReviewUrl?: string;        // For high ratings
  };
  businessHours?: Array<{
    day: string;                     // 'Monday', 'Tuesday', etc.
    open: string;                    // '09:00'
    close: string;                   // '18:00'
    isClosed: boolean;
  }>;
  
  // Settings
  isActive: boolean;
  customSlug?: string;               // Optional custom URL
  theme?: {
    primaryColor?: string;
    layout?: string;
  };
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  
  // Stats (cached for performance)
  stats: {
    totalTaps: number;
    totalViews: number;
    totalConnections: number;
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### Mongoose Schema

```javascript
const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['DigitalCard', 'ReviewStand'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: String,
  company: String,
  bio: String,
  profilePicture: {
    url: String,
    publicId: String,
  },
  coverPhoto: {
    url: String,
    publicId: String,
  },
  logo: {
    url: String,
    publicId: String,
  },
  email: String,
  phone: String,
  website: String,
  location: String,
  socialLinks: [{
    platform: String,
    url: String,
    order: Number,
  }],
  services: [String],
  products: [{
    name: String,
    description: String,
    price: Number,
    images: [{
      url: String,
      publicId: String,
      order: Number,
    }],
    ctaText: String,
    ctaLink: String,
    order: Number,
  }],
  reviewLogic: {
    threshold: Number,
    googleReviewUrl: String,
  },
  businessHours: [{
    day: String,
    open: String,
    close: String,
    isClosed: Boolean,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  customSlug: {
    type: String,
    unique: true,
    sparse: true,
  },
  theme: {
    primaryColor: String,
    layout: String,
  },
  metaTitle: String,
  metaDescription: String,
  stats: {
    totalTaps: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    totalConnections: { type: Number, default: 0 },
  },
}, {
  timestamps: true,
});

// Indexes
profileSchema.index({ userId: 1 });
profileSchema.index({ customSlug: 1 });
profileSchema.index({ isActive: 1 });

// Validation
profileSchema.pre('save', function(next) {
  if (this.socialLinks.length > 30) {
    return next(new Error('Maximum 30 social links allowed'));
  }
  if (this.products.length > 10) {
    return next(new Error('Maximum 10 products allowed'));
  }
  next();
});

const Profile = mongoose.model('Profile', profileSchema);
```

---

## 3. Products Collection

### Schema

```typescript
interface Product {
  _id: ObjectId;
  
  // Basic Info
  name: string;
  sku: string;                       // Unique product code
  description: string;
  
  // Pricing
  basePrice: number;                 // Price excluding GST
  gst: number;                       // GST amount (18%)
  totalPrice: number;                // Base + GST
  
  // Images
  images: Array<{
    url: string;
    publicId: string;
    order: number;
  }>;
  
  // Category
  category: 'nfc_card' | 'review_stand';
  
  // Variants
  variants?: Array<{
    name: string;                    // 'Material', 'Color'
    options: string[];               // ['PVC', 'Metal'], ['Black', 'White']
  }>;
  
  // Inventory
  stock: number;
  lowStockThreshold: number;
  
  // Physical Properties
  weight?: number;                   // In grams
  dimensions?: {
    length: number;                  // In cm
    width: number;
    height: number;
  };
  
  // Status
  isActive: boolean;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### Mongoose Schema

```javascript
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  gst: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  images: [{
    url: String,
    publicId: String,
    order: Number,
  }],
  category: {
    type: String,
    enum: ['nfc_card', 'review_stand'],
    required: true,
  },
  variants: [{
    name: String,
    options: [String],
  }],
  stock: {
    type: Number,
    default: 0,
  },
  lowStockThreshold: {
    type: Number,
    default: 50,
  },
  weight: Number,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  metaTitle: String,
  metaDescription: String,
}, {
  timestamps: true,
});

// Indexes
productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ isActive: 1 });

const Product = mongoose.model('Product', productSchema);
```

---

## 4. Orders Collection

### Schema

```typescript
interface Order {
  _id: ObjectId;
  orderNumber: string;               // Unique, e.g., "ORD-20260210-001"
  
  // Customer
  userId: ObjectId;                  // Reference to User
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  
  // Items
  items: Array<{
    productId: ObjectId;
    productName: string;
    quantity: number;
    basePrice: number;
    gst: number;
    totalPrice: number;
    variant?: {
      material?: string;
      color?: string;
    };
  }>;
  
  // Pricing
  subtotal: number;                  // Sum of base prices
  gstAmount: number;                 // Sum of GST
  shippingCost: number;              // Always 0 (free shipping)
  discountAmount: number;            // If promo code applied
  totalAmount: number;               // Final amount
  
  // Promo Code
  promoCode?: string;
  
  // Shipping Address
  shippingAddress: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  
  // Billing Address (same as shipping for v1)
  billingAddress: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  
  // Payment (Razorpay)
  payment: {
    razorpayOrderId: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    method?: string;                 // 'card', 'upi', 'netbanking'
    status: 'pending' | 'paid' | 'failed' | 'refunded';
    paidAt?: Date;
  };
  
  // Order Status
  status: 'pending' | 'paid' | 'encoding' | 'shipped' | 'delivered' | 'cancelled';
  
  // Shipping
  shipping?: {
    carrier: string;
    trackingNumber: string;
    shippedAt?: Date;
    estimatedDelivery?: Date;
    deliveredAt?: Date;
  };
  
  // Profile Assignment (for NFC cards)
  profileAssignments?: Array<{
    cardNumber: number;              // Which card (1, 2, 3...)
    profileId?: ObjectId;            // Assigned profile
    encodedUrl?: string;             // URL encoded on card
  }>;
  
  // Card Design Information (for printing)
  cardDesign?: {
    logo?: {
      url: string;
      publicId: string;
    };
    name: string;                    // Name to print on card
    title?: string;                  // Title/tagline
    company?: string;                // Company name
    isApproved: boolean;             // Design approved by customer
    approvedAt?: Date;
  };
  
  // Design Team Status
  designStatus: 'pending' | 'contacted' | 'approved' | 'printed';
  designTeamNotes?: string;
  
  // Notes
  customerNotes?: string;
  adminNotes?: string;
  
  // Email Tracking
  confirmationEmailSent: boolean;
  shippingEmailSent: boolean;
  deliveryEmailSent: boolean;
  
  // Refund
  refund?: {
    amount: number;
    reason: string;
    refundedAt: Date;
    razorpayRefundId: string;
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### Mongoose Schema

```javascript
const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    productName: String,
    quantity: Number,
    basePrice: Number,
    gst: Number,
    totalPrice: Number,
    variant: {
      material: String,
      color: String,
    },
  }],
  subtotal: Number,
  gstAmount: Number,
  shippingCost: { type: Number, default: 0 },
  discountAmount: { type: Number, default: 0 },
  totalAmount: Number,
  promoCode: String,
  shippingAddress: {
    name: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
  billingAddress: {
    name: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
  payment: {
    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,
    method: String,
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending',
    },
    paidAt: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'encoding', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  shipping: {
    carrier: String,
    trackingNumber: String,
    shippedAt: Date,
    estimatedDelivery: Date,
    deliveredAt: Date,
  },
  profileAssignments: [{
    cardNumber: Number,
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
    encodedUrl: String,
  }],
  cardDesign: {
    logo: {
      url: String,
      publicId: String,
    },
    name: {
      type: String,
      required: true,
    },
    title: String,
    company: String,
    isApproved: {
      type: Boolean,
      default: false,
    },
    approvedAt: Date,
  },
  designStatus: {
    type: String,
    enum: ['pending', 'contacted', 'approved', 'printed'],
    default: 'pending',
  },
  designTeamNotes: String,
  customerNotes: String,
  adminNotes: String,
  confirmationEmailSent: { type: Boolean, default: false },
  shippingEmailSent: { type: Boolean, default: false },
  deliveryEmailSent: { type: Boolean, default: false },
  refund: {
    amount: Number,
    reason: String,
    refundedAt: Date,
    razorpayRefundId: String,
  },
}, {
  timestamps: true,
});

// Indexes
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ userId: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ 'payment.status': 1 });
orderSchema.index({ createdAt: -1 });

const Order = mongoose.model('Order', orderSchema);
```

---

## 5. Connections Collection

### Schema

```typescript
interface Connection {
  _id: ObjectId;
  profileId: ObjectId;               // Reference to Profile
  
  // Visitor Information (from form)
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  
  // Metadata (auto-captured)
  timestamp: Date;
  location: {
    city?: string;
    country?: string;
  };
  device: 'iOS' | 'Android' | 'Desktop';
  browser: string;
  ipHash: string;                    // Hashed IP
  
  // Status (managed by profile owner)
  isRead: boolean;
  tags: string[];                    // ['Client', 'Lead', 'Follow-up']
  notes: string;                     // Private notes
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### Mongoose Schema

```javascript
const connectionSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  company: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    city: String,
    country: String,
  },
  device: {
    type: String,
    enum: ['iOS', 'Android', 'Desktop'],
  },
  browser: String,
  ipHash: String,
  isRead: {
    type: Boolean,
    default: false,
  },
  tags: [String],
  notes: String,
}, {
  timestamps: true,
});

// Indexes
connectionSchema.index({ profileId: 1, createdAt: -1 });
connectionSchema.index({ email: 1 });

const Connection = mongoose.model('Connection', connectionSchema);
```

---

## 6. Analytics Collection

### Schema

```typescript
interface Analytics {
  _id: ObjectId;
  
  // Event Info
  eventType: 'profile_view' | 'profile_tap' | 'link_click' | 'vcard_download' | 'connection_submit';
  profileId?: ObjectId;              // For profile events
  
  // Metadata (Anonymous)
  timestamp: Date;
  device: 'iOS' | 'Android' | 'Desktop';
  browser: string;
  location: {
    city?: string;
    country?: string;
    latitude?: number;               // For heat map visualization
    longitude?: number;              // For heat map visualization
  };
  ipHash: string;
  
  // Additional Data
  metadata?: {
    linkType?: string;               // For link_click
    productId?: string;              // For product events
  };
  
  // Timestamps
  createdAt: Date;
}
```

### Mongoose Schema

```javascript
const analyticsSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: ['profile_view', 'profile_tap', 'link_click', 'vcard_download', 'connection_submit'],
    required: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  device: {
    type: String,
    enum: ['iOS', 'Android', 'Desktop'],
  },
  browser: String,
  location: {
    city: String,
    country: String,
    latitude: Number,
    longitude: Number,
  },
  ipHash: String,
  metadata: {
    linkType: String,
    productId: String,
  },
}, {
  timestamps: { createdAt: true, updatedAt: false }, // Only createdAt
});

// Indexes
analyticsSchema.index({ profileId: 1, timestamp: -1 });
analyticsSchema.index({ eventType: 1 });
analyticsSchema.index({ createdAt: 1 }); // For TTL (auto-delete after 5 years)

// TTL Index (auto-delete after 5 years)
analyticsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 157680000 }); // 5 years in seconds

const Analytics = mongoose.model('Analytics', analyticsSchema);
```

---

## Relationships

```
User (1) ──────< (N) Profile
User (1) ──────< (N) Order

Profile (1) ────< (N) Connection
Profile (1) ────< (N) Analytics

Product (1) ────< (N) Order.items

Order (1) ──────< (N) Profile (via profileAssignments)
```

---

## Indexes Summary

### Critical Indexes (for performance)

```javascript
// Users
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ googleId: 1 }, { sparse: true });

// Profiles
db.profiles.createIndex({ userId: 1 });
db.profiles.createIndex({ customSlug: 1 }, { unique: true, sparse: true });
db.profiles.createIndex({ isActive: 1 });

// Products
db.products.createIndex({ sku: 1 }, { unique: true });
db.products.createIndex({ category: 1, isActive: 1 });

// Orders
db.orders.createIndex({ orderNumber: 1 }, { unique: true });
db.orders.createIndex({ userId: 1, createdAt: -1 });
db.orders.createIndex({ status: 1 });

// Connections
db.connections.createIndex({ profileId: 1, createdAt: -1 });

// Analytics
db.analytics.createIndex({ profileId: 1, timestamp: -1 });
db.analytics.createIndex({ createdAt: 1 }, { expireAfterSeconds: 157680000 });
```

---

## Sample Data

### Sample User
```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "John Doe",
  email: "john@example.com",
  passwordHash: "$2b$10$...",
  authProvider: "email",
  isEmailVerified: true,
  role: "user",
  isActive: true,
  createdAt: ISODate("2026-02-10T10:00:00Z"),
  updatedAt: ISODate("2026-02-10T10:00:00Z")
}
```

### Sample Profile (Digital Card)
```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439012"),
  userId: ObjectId("507f1f77bcf86cd799439011"),
  type: "DigitalCard",
  name: "John Doe",
  title: "Senior Product Designer",
  company: "Tech Innovations Inc.",
  bio: "Passionate about creating user-centered designs...",
  email: "john@example.com",
  phone: "+91 98765 43210",
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com/in/johndoe", order: 0 },
    { platform: "twitter", url: "https://twitter.com/johndoe", order: 1 }
  ],
  products: [],
  isActive: true,
  stats: {
    totalTaps: 150,
    totalViews: 200,
    totalConnections: 25
  },
  createdAt: ISODate("2026-02-10T10:00:00Z"),
  updatedAt: ISODate("2026-02-10T10:00:00Z")
}
```

### Sample Order
```javascript
{
  _id: ObjectId("507f1f77bcf86cd799439013"),
  orderNumber: "ORD-20260210-001",
  userId: ObjectId("507f1f77bcf86cd799439011"),
  customerEmail: "john@example.com",
  customerName: "John Doe",
  customerPhone: "+91 98765 43210",
  items: [
    {
      productId: ObjectId("507f1f77bcf86cd799439014"),
      productName: "NFC Digital Business Card",
      quantity: 2,
      basePrice: 1499,
      gst: 270,
      totalPrice: 1769
    }
  ],
  subtotal: 2998,
  gstAmount: 540,
  shippingCost: 0,
  totalAmount: 3538,
  payment: {
    razorpayOrderId: "order_xxxxx",
    razorpayPaymentId: "pay_xxxxx",
    status: "paid",
    paidAt: ISODate("2026-02-10T10:05:00Z")
  },
  status: "paid",
  confirmationEmailSent: true,
  createdAt: ISODate("2026-02-10T10:00:00Z"),
  updatedAt: ISODate("2026-02-10T10:05:00Z")
}
```

---

**Last Updated**: 2026-02-10
