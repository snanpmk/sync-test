# 🎨 Card Printing Specifications - Quick Summary

## What Gets Printed on Physical Cards

### 4 Required Elements:

1. **Logo** - Customer's brand logo (PNG/JPG/SVG)
2. **Name** - Person/Business name
3. **Company Name** - Company or tagline
4. **QR Code** - Auto-generated from profile URL

---

## Customer Workflow (Hybrid Approach)

### Option A: Upload During Checkout ✅ (Recommended)
```
Cart → Checkout → Upload Logo + Enter Details → Payment → Done
```

**Benefits:**
- Faster processing
- Customer sees preview immediately
- No follow-up needed

### Option B: Design Team Contacts Later ✅ (Fallback)
```
Cart → Checkout (skip logo) → Payment → Design Team Contacts → Customer Sends Logo → Done
```

**Benefits:**
- Easier for customers who don't have logo ready
- Design team can help with logo quality

---

## Marketing Pages - What to Mention

### Product Detail Page:

**"How It Works" Section:**
```
Step 1: Place Your Order
- Choose your product
- OPTIONAL: Upload your logo during checkout
- OR: Our design team will contact you within 24 hours

Step 2: Design Approval
- We create a preview with your logo, name, and company
- You approve the design

Step 3: We Print & Ship
- Cards printed and encoded
- Shipped within 2-3 business days

Step 4: Start Connecting
- Tap to share your profile instantly
```

**FAQ Section:**
- "What gets printed on the card?"
  → Logo, name, title, company, and QR code
  
- "Do I need to upload my logo during checkout?"
  → No, it's optional. Design team will contact you if you don't.
  
- "What logo format should I use?"
  → PNG, JPG, or SVG (min 400×400px, transparent background recommended)

---

## Database Changes

### Order Schema - New Fields:

```typescript
cardDesign: {
  logo?: { url, publicId },
  name: string,              // REQUIRED
  title?: string,
  company?: string,
  isApproved: boolean,
  approvedAt?: Date
}

designStatus: 'pending' | 'contacted' | 'approved' | 'printed'
designTeamNotes?: string
```

---

## Admin Dashboard Updates

### Order Detail View - New Sections:

1. **Card Design Information**
   - Logo preview + download button
   - Name, title, company display
   - QR code preview + download
   - Card preview

2. **Design Approval**
   - "Mark Design as Approved" button
   - "Mark as Printed" button

3. **Design Team Notes**
   - Text area for communication notes

---

## QR Code Generation

**Auto-generated when order is created:**
```typescript
import QRCode from 'qrcode';

const url = `https://synconnect.com/profile/${profileId}`;
const qrCode = await QRCode.toDataURL(url);
```

**Specifications:**
- Size: 30mm × 30mm
- Error Correction: Medium (M)
- Colors: Dark grey (#1A1A1A) on white

---

## Complete Workflow

```
1. Customer places order
   ├─ Uploads logo? → Yes ✅ / No ⏭️
   └─ Enters name, title, company

2. Order created
   └─ QR code auto-generated

3. Design Team
   ├─ If logo uploaded: Create preview
   └─ If no logo: Contact customer → Get logo → Create preview

4. Customer approves design
   └─ Admin marks: isApproved = true

5. Print Team
   └─ Prints card with logo, name, title, company, QR code

6. Admin encodes NFC chip
   └─ Writes profile URL

7. Ship to customer
   └─ Delivery in 5-7 days
```

---

## Files Updated

✅ **CARD_PRINTING_SPECS.md** - Complete specifications  
✅ **DATABASE_SCHEMA.md** - Order schema updated  
✅ Marketing pages guidance included  
✅ Admin dashboard workflow defined  

---

**Ready to implement!** 🚀

**Last Updated**: 2026-02-10
