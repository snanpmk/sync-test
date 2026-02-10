# Environment Variables & Credentials Checklist

**Before starting development, please provide the following credentials and configuration.**

---

## 🔐 Required Credentials

### 1. Database (MongoDB Atlas)

**What we need:**
- [ ] **MongoDB Connection URI**

**How to get it:**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free cluster (if you don't have one)
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

**Format:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/synconnect?retryWrites=true&w=majority
```

**Notes:**
- Free tier is sufficient for development
- Database name: `synconnect` (or your choice)

---

### 2. Authentication (Google OAuth)

**What we need:**
- [ ] **Google Client ID**
- [ ] **Google Client Secret**

**How to get it:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Application type: "Web application"
6. Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://synconnect.com/api/auth/callback/google` (production)
   - `https://dashboard.synconnect.com/api/auth/callback/google` (production)

**Format:**
```
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnop
```

---

### 3. NextAuth (Authentication)

**What we need:**
- [ ] **NextAuth Secret** (we'll generate this)
- [ ] **NextAuth URL**

**How to generate:**
```bash
# Run this command to generate a random secret
openssl rand -base64 32
```

**Format:**
```
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000  # Development
# NEXTAUTH_URL=https://synconnect.com  # Production
```

---

### 4. Payment Gateway (Razorpay)

**What we need:**
- [ ] **Razorpay Key ID**
- [ ] **Razorpay Key Secret**
- [ ] **Razorpay Webhook Secret**

**How to get it:**
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up / Log in
3. Go to "Settings" → "API Keys"
4. Generate Test Keys (for development)
5. Generate Live Keys (for production)
6. For webhook secret: "Settings" → "Webhooks" → Create webhook

**Format:**
```
# Test Mode (Development)
RAZORPAY_KEY_ID=rzp_test_abcdefghijklmnop
RAZORPAY_KEY_SECRET=abcdefghijklmnopqrstuvwxyz123456

# Live Mode (Production)
# RAZORPAY_KEY_ID=rzp_live_abcdefghijklmnop
# RAZORPAY_KEY_SECRET=abcdefghijklmnopqrstuvwxyz123456

RAZORPAY_WEBHOOK_SECRET=whsec_abcdefghijklmnop
```

**Webhook URL:**
- Development: `http://localhost:4000/api/webhooks/razorpay`
- Production: `https://api.synconnect.com/api/webhooks/razorpay`

---

### 5. Image Storage (Cloudinary)

**What we need:**
- [ ] **Cloudinary Cloud Name**
- [ ] **Cloudinary API Key**
- [ ] **Cloudinary API Secret**

**How to get it:**
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for free account
3. Go to Dashboard
4. Copy Cloud Name, API Key, and API Secret

**Format:**
```
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

**Notes:**
- Free tier: 25 GB storage, 25 GB bandwidth/month
- Sufficient for development and early production

---

### 6. Email Service (Resend)

**What we need:**
- [ ] **Resend API Key**

**How to get it:**
1. Go to [Resend](https://resend.com/)
2. Sign up for free account
3. Go to "API Keys"
4. Create new API key

**Format:**
```
RESEND_API_KEY=re_abcdefghijklmnopqrstuvwxyz123456
```

**Notes:**
- Free tier: 100 emails/day, 3,000 emails/month
- Need to verify your domain for production

**From Email:**
```
EMAIL_FROM=SynConnect <noreply@synconnect.com>
```

---

### 7. Domain Configuration

**What we need:**
- [ ] **Primary Domain** (for marketing site)
- [ ] **Dashboard Domain** (for customer dashboard)
- [ ] **Admin Domain** (for admin panel)
- [ ] **API Domain** (for backend API)

**Suggested:**
```
NEXT_PUBLIC_APP_URL=https://synconnect.com
NEXT_PUBLIC_DASHBOARD_URL=https://dashboard.synconnect.com
NEXT_PUBLIC_ADMIN_URL=https://admin.synconnect.com
NEXT_PUBLIC_API_URL=https://api.synconnect.com
```

**Development:**
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3001
NEXT_PUBLIC_ADMIN_URL=http://localhost:3002
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

### 8. JWT Secrets (for API authentication)

**What we need:**
- [ ] **JWT Secret** (we'll generate this)
- [ ] **JWT Expiry**

**How to generate:**
```bash
# Run this command to generate a random secret
openssl rand -base64 32
```

**Format:**
```
JWT_SECRET=your-generated-secret-here
JWT_EXPIRY=7d  # 7 days
```

---

## 📋 Optional (Can be added later)

### 9. Analytics (Optional - for production)

**Google Analytics:**
- [ ] **Google Analytics ID** (optional)

**Format:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

### 10. Error Monitoring (Optional - for production)

**Sentry (optional):**
- [ ] **Sentry DSN**

**Format:**
```
SENTRY_DSN=https://abcdefghijklmnop@sentry.io/1234567
```

---

## 📝 Complete .env Template

Here's the complete template. I'll create this file once you provide the credentials:

```bash
# ============================================
# DATABASE
# ============================================
MONGODB_URI=

# ============================================
# AUTHENTICATION
# ============================================
# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# JWT (for API)
JWT_SECRET=
JWT_EXPIRY=7d

# ============================================
# PAYMENTS
# ============================================
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# ============================================
# FILE STORAGE
# ============================================
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# ============================================
# EMAIL
# ============================================
RESEND_API_KEY=
EMAIL_FROM=SynConnect <noreply@synconnect.com>

# ============================================
# DOMAINS (Development)
# ============================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3001
NEXT_PUBLIC_ADMIN_URL=http://localhost:3002
NEXT_PUBLIC_API_URL=http://localhost:4000

# ============================================
# OPTIONAL (Production)
# ============================================
# NEXT_PUBLIC_GA_ID=
# SENTRY_DSN=
```

---

## ✅ Checklist Summary

### Must Have (Before Starting):
- [ ] MongoDB URI
- [ ] Google OAuth (Client ID + Secret)
- [ ] NextAuth Secret (generate with OpenSSL)
- [ ] Razorpay (Test Keys)
- [ ] Cloudinary (Cloud Name + API Key + Secret)
- [ ] Resend API Key
- [ ] JWT Secret (generate with OpenSSL)

### Can Add Later:
- [ ] Razorpay Live Keys (for production)
- [ ] Domain names (for production)
- [ ] Google Analytics (optional)
- [ ] Sentry (optional)

---

## 🚀 Next Steps

1. **Provide the credentials** listed above
2. I'll create the `.env.example` and `.env.local` files
3. We'll initialize the monorepo
4. Start building!

---

## 📞 Help Getting Credentials

### Need help with any service?

**MongoDB Atlas:**
- Free tier: https://www.mongodb.com/cloud/atlas/register
- Tutorial: https://www.mongodb.com/docs/atlas/getting-started/

**Google OAuth:**
- Console: https://console.cloud.google.com/
- Tutorial: https://support.google.com/cloud/answer/6158849

**Razorpay:**
- Sign up: https://dashboard.razorpay.com/signup
- Test mode: Automatically enabled for new accounts

**Cloudinary:**
- Sign up: https://cloudinary.com/users/register/free
- Free tier: 25 GB storage

**Resend:**
- Sign up: https://resend.com/signup
- Free tier: 3,000 emails/month

---

**Ready when you are!** Just provide the credentials and we'll get started. 🚀

**Last Updated**: 2026-02-10
