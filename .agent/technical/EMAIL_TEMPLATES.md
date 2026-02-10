# SynConnect v3 - Email Templates & Service

## Email Service Provider

### Resend ✅

**Why Resend?**
- ✅ **Modern & Developer-Friendly**: Clean API, great DX
- ✅ **Free Tier**: 100 emails/day, 3,000/month
- ✅ **Great Deliverability**: Built-in SPF/DKIM
- ✅ **React Email Support**: Write emails in React
- ✅ **Easy Setup**: 5 minutes to get started
- ✅ **Analytics**: Open rates, click rates, bounces

**Pricing:**
- Free: 3,000 emails/month
- Pro: $20/month for 50,000 emails
- Scale: Custom pricing

**Website**: https://resend.com

---

## Email Templates (v1)

### 1. Authentication Emails

#### 1.1 Welcome Email ✅
**Trigger**: User registers/signs up  
**Subject**: Welcome to SynConnect! 🎉

**Content:**
```
Hi [Name],

Welcome to SynConnect! 🎉

Your account has been created successfully. You're now ready to create your digital business card and start connecting with people.

Here's what you can do next:
1. Set up your profile
2. Customize your digital card
3. Start sharing your profile

[Go to Dashboard]

Need help? Reply to this email or visit our Help Center.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

---

#### 1.2 Email Verification ✅
**Trigger**: User registers with email/password  
**Subject**: Verify your email address

**Content:**
```
Hi [Name],

Thanks for signing up for SynConnect!

Please verify your email address by clicking the button below:

[Verify Email Address]

This link will expire in 24 hours.

If you didn't create an account, you can safely ignore this email.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

**Verification Link:**
```
https://synconnect.com/verify-email?token=[verificationToken]
```

---

#### 1.3 Password Reset ✅
**Trigger**: User requests password reset  
**Subject**: Reset your password

**Content:**
```
Hi [Name],

We received a request to reset your password.

Click the button below to create a new password:

[Reset Password]

This link will expire in 1 hour.

If you didn't request a password reset, you can safely ignore this email.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

**Reset Link:**
```
https://synconnect.com/reset-password?token=[resetToken]
```

---

### 2. Order Emails

#### 2.1 Order Confirmation ✅
**Trigger**: Payment successful  
**Subject**: Order Confirmation - Order #[orderNumber]

**Content:**
```
Hi [Name],

Thank you for your order! 🎉

Your order has been confirmed and we're preparing it for shipment.

ORDER DETAILS
Order Number: #[orderNumber]
Order Date: [orderDate]

ITEMS
- [quantity]× NFC Digital Business Card - [material], [color]
  ₹[price]

SUMMARY
Subtotal:  ₹[subtotal]
GST (18%): ₹[gst]
Shipping:  FREE
─────────────────
Total:     ₹[total]

SHIPPING ADDRESS
[name]
[address]
[city], [state] - [pincode]
[country]

WHAT'S NEXT?
1. We'll encode your card with your profile URL
2. We'll ship your card within 2-3 business days
3. You'll receive a shipping confirmation email with tracking

[View Order] [Track Order]

Questions? Reply to this email or contact support.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

---

#### 2.2 Order Shipped ✅
**Trigger**: Admin marks order as shipped  
**Subject**: Your order has shipped! 📦

**Content:**
```
Hi [Name],

Great news! Your order has been shipped. 📦

ORDER #[orderNumber]

TRACKING INFORMATION
Carrier: [carrierName]
Tracking Number: [trackingNumber]
Estimated Delivery: [estimatedDelivery]

[Track Shipment]

ITEMS SHIPPED
- [quantity]× NFC Digital Business Card - [material], [color]

SHIPPING ADDRESS
[name]
[address]
[city], [state] - [pincode]

WHAT'S NEXT?
1. Your card will arrive in 5-7 business days
2. Once you receive it, tap it with your phone to activate
3. Set up your profile and start connecting!

Questions? Reply to this email or contact support.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

---

#### 2.3 Order Delivered ✅
**Trigger**: Tracking shows delivered (webhook or manual)  
**Subject**: Your order has been delivered! 🎉

**Content:**
```
Hi [Name],

Your SynConnect card has been delivered! 🎉

ORDER #[orderNumber]
Delivered on: [deliveryDate]

ACTIVATE YOUR CARD
1. Tap your card with your phone
2. Follow the activation steps
3. Set up your profile
4. Start connecting!

[Activate Card] [Go to Dashboard]

NEED HELP?
- How to activate your card
- How to set up your profile
- How to customize your card

[Visit Help Center]

Questions? Reply to this email or contact support.

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

---

### 3. Connection Emails

#### 3.1 New Connection Notification ✅
**Trigger**: Someone submits "Connect with Me" form  
**Subject**: New connection from [visitorName]

**Content:**
```
Hi [profileOwnerName],

You have a new connection! 🤝

CONNECTION DETAILS
Name:    [visitorName]
Email:   [visitorEmail]
Phone:   [visitorPhone]
Company: [visitorCompany]

MESSAGE
"[visitorMessage]"

ADDITIONAL INFO
Location: [city], [country]
Device:   [device]
Time:     [timestamp]

[View in Dashboard] [Reply to [visitorName]]

You can manage this connection in your dashboard:
- Add notes
- Add tags (Client, Lead, Follow-up)
- Export to CSV

[Go to Connections]

Best,
The SynConnect Team

---
SynConnect - Your Digital Business Card
synconnect.com
```

---

## Email Template Design

### HTML Email Structure

**Design Principles:**
- Clean and minimal design
- Mobile-responsive (50%+ opens on mobile)
- Electric Green (#67D861) for CTAs
- Dark Grey (#1A1A1A) for text
- White background

**Example HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SynConnect</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Email Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center;">
              <img src="https://synconnect.com/logo.png" alt="SynConnect" width="150" />
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 20px 40px; color: #1A1A1A; font-size: 16px; line-height: 1.6;">
              <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 20px;">Welcome to SynConnect! 🎉</h1>
              <p>Hi [Name],</p>
              <p>Your account has been created successfully. You're now ready to create your digital business card and start connecting with people.</p>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://dashboard.synconnect.com" style="display: inline-block; padding: 14px 32px; background-color: #67D861; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Go to Dashboard
                    </a>
                  </td>
                </tr>
              </table>
              
              <p>Best,<br>The SynConnect Team</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px 40px; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0 0 10px;">SynConnect - Your Digital Business Card</p>
              <p style="margin: 0;"><a href="https://synconnect.com" style="color: #67D861; text-decoration: none;">synconnect.com</a></p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## Implementation

### Setup Resend

**1. Install Resend SDK:**
```bash
npm install resend
```

**2. Get API Key:**
- Sign up at https://resend.com
- Create API key
- Add to `.env`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**3. Verify Domain:**
- Add DNS records (SPF, DKIM)
- Verify domain in Resend dashboard
- Use `noreply@synconnect.com` as sender

---

### Send Email (Node.js)

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send welcome email
async function sendWelcomeEmail(user: { name: string; email: string }) {
  await resend.emails.send({
    from: 'SynConnect <noreply@synconnect.com>',
    to: user.email,
    subject: 'Welcome to SynConnect! 🎉',
    html: renderWelcomeEmail(user.name),
  });
}

// Send order confirmation
async function sendOrderConfirmation(order: Order) {
  await resend.emails.send({
    from: 'SynConnect <noreply@synconnect.com>',
    to: order.customerEmail,
    subject: `Order Confirmation - Order #${order.orderNumber}`,
    html: renderOrderConfirmationEmail(order),
  });
}

// Send connection notification
async function sendConnectionNotification(connection: Connection) {
  const profile = await Profile.findById(connection.profileId);
  const user = await User.findById(profile.userId);
  
  await resend.emails.send({
    from: 'SynConnect <noreply@synconnect.com>',
    to: user.email,
    subject: `New connection from ${connection.name}`,
    html: renderConnectionNotificationEmail(connection, profile),
  });
}
```

---

### React Email (Optional)

**Use React to write emails:**

```bash
npm install @react-email/components
```

```tsx
// emails/WelcomeEmail.tsx
import { Html, Head, Body, Container, Heading, Text, Button } from '@react-email/components';

export function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px' }}>
          <Heading style={{ fontSize: '24px', color: '#1A1A1A' }}>
            Welcome to SynConnect! 🎉
          </Heading>
          <Text style={{ fontSize: '16px', color: '#1A1A1A' }}>
            Hi {name},
          </Text>
          <Text style={{ fontSize: '16px', color: '#1A1A1A' }}>
            Your account has been created successfully. You're now ready to create your digital business card.
          </Text>
          <Button
            href="https://dashboard.synconnect.com"
            style={{
              backgroundColor: '#67D861',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Go to Dashboard
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
```

---

## Email Triggers

### Database Events

```typescript
// After user registration
User.post('save', async function(doc) {
  if (doc.isNew) {
    await sendWelcomeEmail(doc);
    
    if (doc.authProvider === 'email') {
      await sendEmailVerification(doc);
    }
  }
});

// After order payment
Order.post('save', async function(doc) {
  if (doc.status === 'paid' && !doc.confirmationEmailSent) {
    await sendOrderConfirmation(doc);
    doc.confirmationEmailSent = true;
    await doc.save();
  }
  
  if (doc.status === 'shipped' && !doc.shippingEmailSent) {
    await sendOrderShipped(doc);
    doc.shippingEmailSent = true;
    await doc.save();
  }
});

// After connection submission
Connection.post('save', async function(doc) {
  if (doc.isNew) {
    await sendConnectionNotification(doc);
  }
});
```

---

## Email Analytics

### Track Email Opens & Clicks

Resend automatically tracks:
- ✅ Email sent
- ✅ Email delivered
- ✅ Email opened
- ✅ Links clicked
- ✅ Bounces
- ✅ Spam complaints

**View in Resend Dashboard:**
- Open rate
- Click rate
- Bounce rate
- Spam rate

---

## Email Limits & Costs

### Resend Free Tier
- **Emails**: 3,000/month (100/day)
- **Domains**: 1
- **Team Members**: 1

### Estimated Usage (v1)
- **Welcome emails**: ~50/month
- **Email verifications**: ~50/month
- **Order confirmations**: ~100/month
- **Order shipped**: ~100/month
- **Order delivered**: ~100/month
- **Connection notifications**: ~500/month
- **Total**: ~900/month (well within free tier)

### When to Upgrade
- If we exceed 3,000 emails/month
- Pro plan: $20/month for 50,000 emails

---

## Environment Variables

```env
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email Sender
EMAIL_FROM=noreply@synconnect.com
EMAIL_FROM_NAME=SynConnect
```

---

## Email Templates Summary

| Email | Trigger | Subject |
|-------|---------|---------|
| **Welcome** | User registers | Welcome to SynConnect! 🎉 |
| **Email Verification** | User registers (email/password) | Verify your email address |
| **Password Reset** | User requests reset | Reset your password |
| **Order Confirmation** | Payment successful | Order Confirmation - Order #[number] |
| **Order Shipped** | Admin marks as shipped | Your order has shipped! 📦 |
| **Order Delivered** | Tracking shows delivered | Your order has been delivered! 🎉 |
| **New Connection** | Someone fills Connect form | New connection from [name] |

**Total**: 7 email templates for v1

---

**Last Updated**: 2026-02-10
