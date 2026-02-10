# SynConnect v3 - NFC Card Encoding & Activation

## NFC Chip Specification

### Chip Model: NTAG213

**Technical Specs:**
- **Memory**: 144 bytes usable
- **Read Range**: Up to 10cm
- **Compatibility**: All NFC-enabled smartphones (iOS & Android)
- **Cost**: ₹15-25 per chip
- **Standard**: ISO14443A

**Why NTAG213?**
- ✅ Sufficient storage for URL (our use case)
- ✅ Most cost-effective option
- ✅ Universal compatibility
- ✅ Reliable and proven technology

---

## Data Encoded on Chip

### What's Stored: URL Only ✅

**Encoded Data:**
```
synconnect.com/profile/507f1f77bcf86cd799439011
```

**Why URL only?**
- ✅ Simple and reliable
- ✅ Data stays on server (easy to update)
- ✅ User can update profile without re-encoding card
- ✅ Smaller data size = faster read times
- ✅ More secure (no personal data on chip)

**NOT Encoded:**
- ❌ vCard data
- ❌ Contact information
- ❌ Social links
- ❌ Any personal data

**How it works:**
```
User taps card → Phone reads URL → Browser opens profile page
```

---

## Encoding Process (v1)

### Method: Manual Encoding ⚙️

**Workflow:**

#### Step 1: Customer Places Order
```
Customer orders 2× NFC Cards
↓
Order created in database
↓
Order status: "Paid"
```

#### Step 2: Admin Receives Order
```
Admin Dashboard → Orders → New Order #1234
↓
Order details:
- Customer: John Doe
- Email: john@example.com
- Quantity: 2× NFC Cards
- Shipping Address: Mumbai, India
```

#### Step 3: Customer Sets Up Profile (Optional)
```
Customer receives email: "Set up your profile"
↓
Customer logs in to dashboard
↓
Customer creates profile
↓
Profile ID generated: 507f1f77bcf86cd799439011
```

**OR** (if customer hasn't set up profile yet):
```
Admin creates temporary profile placeholder
↓
Profile ID: temp_507f1f77bcf86cd799439011
↓
Customer activates later
```

#### Step 4: Admin Encodes Cards
```
Admin uses NFC writer app (e.g., NFC Tools)
↓
Writes URL to NTAG213 chip:
synconnect.com/profile/507f1f77bcf86cd799439011
↓
Locks chip (optional, for security)
↓
Marks order as "Encoded" in dashboard
```

#### Step 5: Admin Ships Cards
```
Admin packages cards
↓
Updates order status: "Shipped"
↓
Adds tracking number
↓
Customer receives shipping notification email
```

#### Step 6: Customer Receives & Uses Card
```
Customer receives card
↓
Taps card with phone
↓
Profile page opens
↓
If profile not set up yet → Activation flow
If profile already set up → Profile displays
```

---

## NFC Writer App (For Admin)

### Recommended App: NFC Tools

**Download:**
- iOS: [NFC Tools on App Store](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [NFC Tools on Play Store](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)

**Encoding Steps:**
1. Open NFC Tools app
2. Go to "Write" tab
3. Select "Add a record"
4. Choose "URL/URI"
5. Enter: `https://synconnect.com/profile/507f1f77bcf86cd799439011`
6. Tap "Write"
7. Hold card near phone
8. Wait for "Write successful" message

**Lock Chip (Optional):**
- Go to "Other" tab
- Select "Lock tag"
- Confirm lock
- **Warning**: Once locked, chip cannot be re-encoded

---

## Re-Encoding Policy (v1)

### Re-Encoding: Allowed ✅

**When re-encoding is needed:**
- User wants to link card to a different profile
- User accidentally deleted their profile
- Card was encoded with wrong URL

**How to re-encode:**
1. User contacts support
2. Admin verifies ownership
3. Admin uses NFC writer app to overwrite URL
4. Admin ships card back to user (or user brings card to office)

**Limitations:**
- Requires physical access to card
- User must send card to admin (or visit office)
- Not instant (takes time for shipping)

**Future Improvement (v2):**
- Remote re-encoding via activation tokens
- User can re-link card to different profile via dashboard

---

## QR Code Backup

### QR Code: Included ✅

**Why QR Code?**
- ✅ Works if NFC fails (older phones, damaged chip)
- ✅ Works on all smartphones (even without NFC)
- ✅ Faster for some users (no need to tap)
- ✅ Can be scanned from a distance

**Card Design:**
```
┌─────────────────────────────────┐
│                                 │
│         [Company Logo]          │
│                                 │
│         John Doe                │
│    Product Designer             │
│                                 │
│    [QR Code]    Tap or Scan     │
│                 to connect      │
│                                 │
│    synconnect.com               │
│                                 │
└─────────────────────────────────┘
```

**QR Code Content:**
```
https://synconnect.com/profile/507f1f77bcf86cd799439011
```

**Same URL as NFC chip** - ensures consistency

---

## Card Activation Flow

### Scenario 1: User Sets Up Profile Before Card Arrives ✅

```
1. User orders card
2. User receives "Set up your profile" email
3. User logs in to dashboard
4. User creates profile (ID: 507f1f77bcf86cd799439011)
5. Admin encodes card with this profile ID
6. User receives card
7. User taps card → Profile displays immediately
```

### Scenario 2: User Receives Card Before Setting Up Profile

```
1. User orders card
2. Admin creates temporary profile (ID: temp_507f1f77bcf86cd799439011)
3. Admin encodes card with temp profile ID
4. User receives card
5. User taps card → Activation page displays
6. User clicks "Activate Card"
7. User logs in / signs up
8. User sets up profile
9. Temp profile ID is replaced with real profile ID
10. Card now works with user's profile
```

**Activation Page:**
```
┌─────────────────────────────────────────┐
│  Activate Your SynConnect Card          │
├─────────────────────────────────────────┤
│                                         │
│  Welcome! Let's activate your card.     │
│                                         │
│  [Sign In] [Create Account]            │
│                                         │
└─────────────────────────────────────────┘
```

---

## Security Considerations

### Chip Locking
**v1 Decision**: Do NOT lock chips
- Allows re-encoding if needed
- More flexible for users
- Lower support burden

**Future (v2)**: Lock chips after first activation
- More secure (prevents tampering)
- Requires better remote re-linking system

### URL Security
- Use HTTPS only
- Profile IDs are MongoDB ObjectIDs (hard to guess)
- No sensitive data on chip

### Lost/Stolen Cards
**If card is lost:**
1. User logs in to dashboard
2. User deactivates profile
3. Card URL still works, but profile shows "Deactivated"
4. User can reactivate anytime

**If card is stolen:**
1. User deactivates profile
2. User orders new card
3. New card gets new profile ID
4. Old card becomes useless

---

## Admin Dashboard Integration

### Order Management

**Encoding Workflow in Admin Dashboard:**

```
┌────────────────────────────────────────────────────┐
│  Order #1234                                       │
├────────────────────────────────────────────────────┤
│  Customer: John Doe (john@example.com)             │
│  Items: 2× NFC Digital Business Card               │
│  Status: Paid                                      │
│                                                    │
│  📋 Encoding Information:                          │
│  Profile ID: 507f1f77bcf86cd799439011              │
│  Encode URL: synconnect.com/profile/507f...        │
│                                                    │
│  [Copy URL] [Mark as Encoded] [Mark as Shipped]   │
└────────────────────────────────────────────────────┘
```

**Workflow:**
1. Admin clicks "Copy URL"
2. Admin opens NFC Tools app
3. Admin encodes cards
4. Admin clicks "Mark as Encoded"
5. Admin ships cards
6. Admin clicks "Mark as Shipped"
7. Admin enters tracking number

---

## Future Enhancements (v2)

### Automated Encoding
- Use NFC writer hardware (e.g., ACR122U USB reader)
- Batch encode multiple cards
- Integrate with admin dashboard

### Remote Re-Linking
- User can re-link card to different profile via dashboard
- No need to physically re-encode card
- Uses activation tokens

### NFC Business Card Templates
- Pre-designed templates for different industries
- User selects template during setup
- Card displays template-specific design

---

## Technical Specifications

### NTAG213 Memory Layout

```
Total Memory: 180 bytes
User Memory: 144 bytes
Reserved: 36 bytes (UID, lock bits, etc.)
```

### URL Format

**Standard Format:**
```
https://synconnect.com/profile/[profileId]
```

**Example:**
```
https://synconnect.com/profile/507f1f77bcf86cd799439011
```

**URL Length:** ~60 characters (well within 144 bytes limit)

### NDEF Record

```
NDEF Message:
  Record 1: URI
    Type: Well-known (0x01)
    Payload: https://synconnect.com/profile/507f1f77bcf86cd799439011
```

---

## Cost Breakdown

### Per Card Cost

| Component | Cost |
|-----------|------|
| NTAG213 Chip | ₹20 |
| PVC Card (blank) | ₹15 |
| Printing (full color) | ₹25 |
| QR Code Printing | ₹5 |
| Packaging | ₹10 |
| **Total Cost** | **₹75** |

**Selling Price:** ₹1,499  
**Gross Margin:** ₹1,424 (95%)

---

**Last Updated**: 2026-02-10
