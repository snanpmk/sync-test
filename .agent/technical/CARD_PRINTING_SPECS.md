# SynConnect v3 - NFC Card & Stand Printing Specifications

## Physical Card/Stand Design

### What Gets Printed

**NFC Digital Business Card:**
```
┌─────────────────────────────────────┐
│                                     │
│         [Customer Logo]             │
│                                     │
│         John Doe                    │
│    Product Designer                 │
│    Tech Innovations Inc.            │
│                                     │
│    [QR Code]    Tap or Scan         │
│                 to connect          │
│                                     │
│    synconnect.com                   │
│                                     │
└─────────────────────────────────────┘
```

**Smart Review Stand:**
```
┌─────────────────────────────────────┐
│                                     │
│         [Business Logo]             │
│                                     │
│      Cafe Delight                   │
│   Mumbai's Best Coffee Shop         │
│                                     │
│    [QR Code]    Tap or Scan         │
│                 to review           │
│                                     │
│    synconnect.com                   │
│                                     │
└─────────────────────────────────────┘
```

### Required Information (4 Items)

1. **Logo** - Customer's brand logo
2. **Name** - Person name (Digital Card) or Business name (Review Stand)
3. **Company Name** - Company/tagline
4. **QR Code** - Auto-generated based on profile URL

---

## Customer Workflow

### Option 1: Upload Logo During Order (Recommended)

**Checkout Flow:**
```
Cart → Checkout → Logo Upload (Optional) → Payment → Confirmation
```

**Checkout Page:**
```tsx
// apps/web/app/checkout/page.tsx

<div className="logo-upload-section">
  <h3>Card Design (Optional)</h3>
  <p>Upload your logo now, or our design team will contact you after your order.</p>
  
  <div className="upload-box">
    <input type="file" accept="image/*" onChange={handleLogoUpload} />
    <p>Upload Logo (PNG, JPG, SVG - Max 2MB)</p>
  </div>
  
  <div className="text-inputs">
    <input
      type="text"
      placeholder="Name (e.g., John Doe)"
      value={cardName}
      onChange={(e) => setCardName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Title/Tagline (e.g., Product Designer)"
      value={cardTitle}
      onChange={(e) => setCardTitle(e.target.value)}
    />
    <input
      type="text"
      placeholder="Company Name (e.g., Tech Innovations Inc.)"
      value={cardCompany}
      onChange={(e) => setCardCompany(e.target.value)}
    />
  </div>
  
  <div className="preview">
    <h4>Card Preview</h4>
    <CardPreview
      logo={logoPreview}
      name={cardName}
      title={cardTitle}
      company={cardCompany}
    />
  </div>
</div>
```

### Option 2: Design Team Contacts Customer (Fallback)

**If customer doesn't upload logo:**
```
Order Placed → Order Confirmation Email → Design Team Contacts Customer
```

**Order Confirmation Email (Updated):**
```
Subject: Order Confirmation - Order #1234

Hi John,

Thank you for your order! 🎉

ORDER DETAILS
Order Number: #1234
Items: 2× NFC Digital Business Card

NEXT STEPS:

✅ Payment Confirmed

📋 Card Design:
You didn't upload a logo during checkout. No worries!
Our design team will contact you within 24 hours to:
- Collect your logo
- Confirm name, title, and company details
- Share a design preview for approval

📦 Production:
Once you approve the design, we'll:
- Print your cards
- Encode them with your profile URL
- Ship within 2-3 business days

Questions? Reply to this email.

Best,
The SynConnect Team
```

---

## Order Schema Update

### Add Card Design Info to Orders

```typescript
interface Order {
  // ... existing fields
  
  // Card Design Information
  cardDesign?: {
    logo?: {
      url: string;
      publicId: string;
    };
    name: string;              // "John Doe" or "Cafe Delight"
    title?: string;            // "Product Designer" or "Mumbai's Best Coffee"
    company?: string;          // "Tech Innovations Inc."
    isApproved: boolean;       // Design approved by customer
    approvedAt?: Date;
  };
  
  // Design Team Status
  designStatus: 'pending' | 'contacted' | 'approved' | 'printed';
  designTeamNotes?: string;
}
```

### Mongoose Schema

```javascript
const orderSchema = new mongoose.Schema({
  // ... existing fields
  
  cardDesign: {
    logo: {
      url: String,
      publicId: String,
    },
    name: {
      type: String,
      required: true,  // Required for card printing
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
});
```

---

## Admin Dashboard - Order Management

### Order Detail View (Updated)

```tsx
// apps/admin/components/OrderDetails.tsx

function OrderDetails({ order }: { order: Order }) {
  return (
    <div className="order-details">
      <h2>Order #{order.orderNumber}</h2>
      
      {/* Order Status */}
      <div className="status-section">
        <p>Payment Status: {order.payment.status}</p>
        <p>Design Status: {order.designStatus}</p>
        <p>Order Status: {order.status}</p>
      </div>
      
      {/* Card Design Section */}
      <div className="card-design-section">
        <h3>Card Design Information</h3>
        
        {/* Logo */}
        {order.cardDesign?.logo ? (
          <div>
            <p>✅ Logo Uploaded</p>
            <img src={order.cardDesign.logo.url} alt="Logo" width={200} />
            <a href={order.cardDesign.logo.url} download>
              Download Logo
            </a>
          </div>
        ) : (
          <div>
            <p>❌ Logo Not Uploaded</p>
            <button onClick={contactCustomer}>
              Contact Customer for Logo
            </button>
          </div>
        )}
        
        {/* Text Information */}
        <div className="text-info">
          <p><strong>Name:</strong> {order.cardDesign?.name || 'Not provided'}</p>
          <p><strong>Title:</strong> {order.cardDesign?.title || 'Not provided'}</p>
          <p><strong>Company:</strong> {order.cardDesign?.company || 'Not provided'}</p>
        </div>
        
        {/* QR Code */}
        <div className="qr-code">
          <p><strong>QR Code URL:</strong></p>
          <p>{order.profileAssignments?.[0]?.encodedUrl}</p>
          <QRCodeGenerator url={order.profileAssignments?.[0]?.encodedUrl} />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
        
        {/* Card Preview */}
        <div className="card-preview">
          <h4>Card Preview</h4>
          <CardPreview
            logo={order.cardDesign?.logo?.url}
            name={order.cardDesign?.name}
            title={order.cardDesign?.title}
            company={order.cardDesign?.company}
            qrCodeUrl={order.profileAssignments?.[0]?.encodedUrl}
          />
        </div>
        
        {/* Design Approval */}
        {!order.cardDesign?.isApproved && (
          <div className="approval-section">
            <button onClick={markAsApproved}>
              Mark Design as Approved
            </button>
          </div>
        )}
        
        {order.cardDesign?.isApproved && (
          <div className="approved">
            <p>✅ Design Approved on {order.cardDesign.approvedAt}</p>
            <button onClick={markAsPrinted}>
              Mark as Printed
            </button>
          </div>
        )}
      </div>
      
      {/* Design Team Notes */}
      <div className="notes-section">
        <h4>Design Team Notes</h4>
        <textarea
          value={designNotes}
          onChange={(e) => setDesignNotes(e.target.value)}
          placeholder="Add notes about customer communication, design changes, etc."
        />
        <button onClick={saveNotes}>Save Notes</button>
      </div>
    </div>
  );
}
```

---

## QR Code Generation

### Auto-Generate QR Code

```typescript
// apps/api/src/services/qrcode.service.ts
import QRCode from 'qrcode';

export async function generateQRCode(url: string): Promise<string> {
  // Generate QR code as data URL
  const qrCodeDataUrl = await QRCode.toDataURL(url, {
    width: 400,
    margin: 2,
    color: {
      dark: '#1A1A1A',  // Dark grey
      light: '#FFFFFF', // White
    },
  });
  
  return qrCodeDataUrl;
}

// Generate and upload to Cloudinary
export async function generateAndUploadQRCode(profileId: string): Promise<string> {
  const url = `https://synconnect.com/profile/${profileId}`;
  const qrCodeDataUrl = await generateQRCode(url);
  
  // Upload to Cloudinary
  const result = await cloudinary.uploader.upload(qrCodeDataUrl, {
    folder: 'synconnect/qrcodes',
    public_id: `qr_${profileId}`,
  });
  
  return result.secure_url;
}
```

### Install QR Code Library

```bash
npm install qrcode
npm install --save-dev @types/qrcode
```

---

## Marketing Pages Update

### Product Detail Page - Mention Design Process

```tsx
// apps/web/app/shop/[product-id]/page.tsx

<section className="design-process">
  <h2>How It Works</h2>
  
  <div className="steps">
    <div className="step">
      <div className="step-number">1</div>
      <h3>Place Your Order</h3>
      <p>Choose your product and complete checkout. You can optionally upload your logo during checkout.</p>
    </div>
    
    <div className="step">
      <div className="step-number">2</div>
      <h3>Design Your Card</h3>
      <p>
        <strong>Option A:</strong> Upload your logo during checkout<br/>
        <strong>Option B:</strong> Our design team will contact you within 24 hours to collect your logo and design details
      </p>
      <p className="what-we-need">
        <strong>What we need:</strong>
        <br/>• Your logo (PNG, JPG, or SVG)
        <br/>• Name to print on card
        <br/>• Title/tagline
        <br/>• Company name
      </p>
    </div>
    
    <div className="step">
      <div className="step-number">3</div>
      <h3>We Print & Ship</h3>
      <p>Once you approve the design, we'll print your cards, encode them with your profile URL, and ship within 2-3 business days.</p>
    </div>
    
    <div className="step">
      <div className="step-number">4</div>
      <h3>Start Connecting</h3>
      <p>Receive your card, tap it with any phone, and start sharing your profile instantly!</p>
    </div>
  </div>
</section>

<section className="faq">
  <h2>Frequently Asked Questions</h2>
  
  <div className="faq-item">
    <h3>What gets printed on the card?</h3>
    <p>Your logo, name, title/tagline, company name, and a QR code. The QR code is automatically generated based on your profile URL.</p>
  </div>
  
  <div className="faq-item">
    <h3>Do I need to upload my logo during checkout?</h3>
    <p>No, it's optional. If you don't upload it during checkout, our design team will contact you within 24 hours to collect it.</p>
  </div>
  
  <div className="faq-item">
    <h3>What logo format should I use?</h3>
    <p>PNG, JPG, or SVG. For best results, use a high-resolution logo (at least 400×400px). Transparent background (PNG) works best.</p>
  </div>
  
  <div className="faq-item">
    <h3>Can I see a preview before printing?</h3>
    <p>Yes! Our design team will share a preview for your approval before we print your cards.</p>
  </div>
  
  <div className="faq-item">
    <h3>How long does it take?</h3>
    <p>Once you approve the design, we print and ship within 2-3 business days. Delivery takes 5-7 business days.</p>
  </div>
</section>
```

---

## Landing Page Update

### Add "How It Works" Section

```tsx
// apps/web/app/page.tsx

<section className="how-it-works">
  <h2>How It Works</h2>
  <p className="subtitle">Get your smart business card in 4 simple steps</p>
  
  <div className="steps-grid">
    <div className="step">
      <div className="icon">🛒</div>
      <h3>1. Order Your Card</h3>
      <p>Choose your product and checkout. Optionally upload your logo, or we'll contact you for it.</p>
    </div>
    
    <div className="step">
      <div className="icon">🎨</div>
      <h3>2. Design Approval</h3>
      <p>Our design team creates your card with your logo, name, and company details. You approve the design.</p>
    </div>
    
    <div className="step">
      <div className="icon">📦</div>
      <h3>3. We Print & Ship</h3>
      <p>We print your card, encode it with your profile URL, and ship it to you within 2-3 days.</p>
    </div>
    
    <div className="step">
      <div className="icon">🚀</div>
      <h3>4. Start Sharing</h3>
      <p>Tap your card on any phone to instantly share your profile. Track every interaction in your dashboard.</p>
    </div>
  </div>
</section>
```

---

## Workflow Summary

### Complete Order-to-Delivery Flow

```
1. Customer places order
   ├─ Option A: Uploads logo during checkout ✅
   └─ Option B: Skips logo upload ⏭️

2. Order created in database
   ├─ cardDesign.logo: uploaded or null
   ├─ cardDesign.name: required
   ├─ cardDesign.title: optional
   └─ cardDesign.company: optional

3. Design Team receives order
   ├─ If logo uploaded:
   │  └─ Create design preview → Send to customer for approval
   └─ If logo NOT uploaded:
      └─ Contact customer → Collect logo → Create design preview

4. Customer approves design
   └─ Admin marks: cardDesign.isApproved = true

5. Print team prints card
   ├─ Logo
   ├─ Name
   ├─ Title/Company
   ├─ QR Code (auto-generated)
   └─ Admin marks: designStatus = 'printed'

6. Admin encodes card
   └─ Writes profile URL to NFC chip

7. Admin ships card
   └─ status = 'shipped'

8. Customer receives card
   └─ status = 'delivered'
```

---

## Design Team Checklist

### For Each Order:

- [ ] Check if logo uploaded
  - If yes: Download logo
  - If no: Contact customer for logo
- [ ] Verify text information (name, title, company)
- [ ] Generate QR code for profile URL
- [ ] Create card design preview
- [ ] Send preview to customer for approval
- [ ] Wait for approval
- [ ] Send approved design to print team
- [ ] Mark order as `designStatus: 'approved'`

---

## Print Specifications

### Card Dimensions
- **Size**: 85.6mm × 54mm (standard credit card size)
- **Material**: PVC (standard) or Metal (premium)
- **Thickness**: 0.76mm

### Print Quality
- **Resolution**: 300 DPI minimum
- **Color Mode**: CMYK
- **Logo**: Transparent background recommended

### QR Code Specifications
- **Size**: 30mm × 30mm
- **Error Correction**: Medium (M)
- **Quiet Zone**: 2mm margin

---

**Last Updated**: 2026-02-10
