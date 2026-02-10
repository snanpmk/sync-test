# SynConnect v3 - Deployment & Infrastructure

## Hosting Strategy

### Frontend & Backend: DigitalOcean Droplets ✅
### Database: MongoDB Atlas ✅

---

## Infrastructure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Users (Web & Mobile)                                       │
│                                                             │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  Cloudflare (Optional CDN & DNS)                            │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  DigitalOcean Droplet #1 (Frontend)                         │
│  ─────────────────────────────────────────────────────────  │
│  • Ubuntu 22.04 LTS                                         │
│  • Nginx (reverse proxy)                                    │
│  • PM2 (process manager)                                    │
│  • Next.js apps:                                            │
│    - synconnect.com (marketing + profiles)                  │
│    - dashboard.synconnect.com (customer dashboard)          │
│    - admin.synconnect.com (admin dashboard)                 │
└─────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  DigitalOcean Droplet #2 (Backend)                          │
│  ─────────────────────────────────────────────────────────  │
│  • Ubuntu 22.04 LTS                                         │
│  • Nginx (reverse proxy)                                    │
│  • PM2 (process manager)                                    │
│  • Express.js API:                                          │
│    - api.synconnect.com                                     │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  MongoDB Atlas (Database)                                   │
│  ─────────────────────────────────────────────────────────  │
│  • Managed MongoDB cluster                                  │
│  • Free tier: M0 (512MB storage)                            │
│  • Auto-backups                                             │
│  • Global availability                                      │
└─────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│  External Services                                          │
│  ─────────────────────────────────────────────────────────  │
│  • Cloudinary (image storage)                               │
│  • Resend (email service)                                   │
│  • Razorpay (payment gateway)                               │
└─────────────────────────────────────────────────────────────┘
```

---

## DigitalOcean Droplet Configuration

### Droplet #1: Frontend (Next.js Apps)

**Specifications:**
- **Size**: Basic Droplet - $6/month
  - 1 GB RAM
  - 1 vCPU
  - 25 GB SSD
  - 1 TB transfer
- **OS**: Ubuntu 22.04 LTS
- **Region**: Bangalore (closest to India)
- **Hostname**: `synconnect-frontend`

**Apps Hosted:**
- `synconnect.com` (marketing + public profiles)
- `dashboard.synconnect.com` (customer dashboard)
- `admin.synconnect.com` (admin dashboard)

**Why Separate Droplet for Frontend?**
- ✅ Isolate frontend from backend
- ✅ Easier to scale independently
- ✅ Better security (frontend is public, backend is protected)

---

### Droplet #2: Backend (Express API)

**Specifications:**
- **Size**: Basic Droplet - $6/month
  - 1 GB RAM
  - 1 vCPU
  - 25 GB SSD
  - 1 TB transfer
- **OS**: Ubuntu 22.04 LTS
- **Region**: Bangalore
- **Hostname**: `synconnect-backend`

**Apps Hosted:**
- `api.synconnect.com` (Express.js REST API)

**Why Separate Droplet for Backend?**
- ✅ Isolate API from frontend
- ✅ Easier to scale independently
- ✅ Better security (can restrict access)

---

## MongoDB Atlas Configuration

### Cluster Setup

**Tier**: M0 (Free Tier) ✅
- **Storage**: 512 MB
- **RAM**: Shared
- **Backups**: Not included (manual backups)
- **Region**: Mumbai (AWS ap-south-1)

**Why MongoDB Atlas?**
- ✅ Fully managed (no server maintenance)
- ✅ Free tier is sufficient for v1
- ✅ Auto-scaling when needed
- ✅ Built-in security
- ✅ Easy to upgrade

**Connection String:**
```
mongodb+srv://synconnect:<password>@cluster0.xxxxx.mongodb.net/synconnect?retryWrites=true&w=majority
```

---

## Domain & DNS Setup

### Domains Required

| Domain | Points To | Purpose |
|--------|-----------|---------|
| `synconnect.com` | Frontend Droplet IP | Marketing + Profiles |
| `dashboard.synconnect.com` | Frontend Droplet IP | Customer Dashboard |
| `admin.synconnect.com` | Frontend Droplet IP | Admin Dashboard |
| `api.synconnect.com` | Backend Droplet IP | REST API |

### DNS Configuration (Cloudflare or DigitalOcean DNS)

```
A     synconnect.com              → Frontend Droplet IP
A     dashboard.synconnect.com    → Frontend Droplet IP
A     admin.synconnect.com        → Frontend Droplet IP
A     api.synconnect.com          → Backend Droplet IP
```

---

## Frontend Droplet Setup

### 1. Initial Server Setup

```bash
# SSH into droplet
ssh root@<frontend-droplet-ip>

# Update system
apt update && apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2 (process manager)
npm install -g pm2

# Install Nginx
apt install -y nginx

# Install Certbot (for SSL)
apt install -y certbot python3-certbot-nginx

# Create app user
adduser synconnect
usermod -aG sudo synconnect
```

### 2. Deploy Next.js Apps

```bash
# Switch to app user
su - synconnect

# Clone repository
git clone https://github.com/your-username/synconnect-v3.git
cd synconnect-v3

# Install dependencies
npm install

# Build all apps
npm run build

# Start apps with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3. PM2 Ecosystem Config

```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'web',
      cwd: './apps/web',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    {
      name: 'dashboard',
      cwd: './apps/dashboard',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'admin',
      cwd: './apps/admin',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
```

### 4. Nginx Configuration

```nginx
# /etc/nginx/sites-available/synconnect.com
server {
    listen 80;
    server_name synconnect.com www.synconnect.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# /etc/nginx/sites-available/dashboard.synconnect.com
server {
    listen 80;
    server_name dashboard.synconnect.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# /etc/nginx/sites-available/admin.synconnect.com
server {
    listen 80;
    server_name admin.synconnect.com;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable sites
ln -s /etc/nginx/sites-available/synconnect.com /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/dashboard.synconnect.com /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/admin.synconnect.com /etc/nginx/sites-enabled/

# Test Nginx config
nginx -t

# Restart Nginx
systemctl restart nginx
```

### 5. SSL Certificates (Let's Encrypt)

```bash
# Get SSL certificates
certbot --nginx -d synconnect.com -d www.synconnect.com
certbot --nginx -d dashboard.synconnect.com
certbot --nginx -d admin.synconnect.com

# Auto-renewal (already set up by certbot)
certbot renew --dry-run
```

---

## Backend Droplet Setup

### 1. Initial Server Setup

```bash
# SSH into droplet
ssh root@<backend-droplet-ip>

# Update system
apt update && apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt install -y nginx

# Install Certbot
apt install -y certbot python3-certbot-nginx

# Create app user
adduser synconnect
usermod -aG sudo synconnect
```

### 2. Deploy Express API

```bash
# Switch to app user
su - synconnect

# Clone repository
git clone https://github.com/your-username/synconnect-v3.git
cd synconnect-v3

# Install dependencies
npm install

# Build API
cd apps/api
npm run build

# Start API with PM2
pm2 start dist/index.js --name api
pm2 save
pm2 startup
```

### 3. Nginx Configuration (Backend)

```nginx
# /etc/nginx/sites-available/api.synconnect.com
server {
    listen 80;
    server_name api.synconnect.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/api.synconnect.com /etc/nginx/sites-enabled/

# Test and restart
nginx -t
systemctl restart nginx

# Get SSL certificate
certbot --nginx -d api.synconnect.com
```

---

## Environment Variables

### Frontend Apps (.env.production)

```env
# API URL
NEXT_PUBLIC_API_URL=https://api.synconnect.com

# NextAuth
NEXTAUTH_URL=https://dashboard.synconnect.com
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Razorpay (Public Key)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
```

### Backend API (.env)

```env
# Server
NODE_ENV=production
PORT=4000

# Database
MONGODB_URI=mongodb+srv://synconnect:<password>@cluster0.xxxxx.mongodb.net/synconnect

# JWT
JWT_SECRET=your-jwt-secret-here
JWT_EXPIRES_IN=7d

# Razorpay
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=your-razorpay-secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# CORS
CORS_ORIGIN=https://synconnect.com,https://dashboard.synconnect.com,https://admin.synconnect.com
```

---

## CI/CD Pipeline (GitHub Actions)

### Auto-Deploy on Push to Main

```yaml
# .github/workflows/deploy.yml
name: Deploy to DigitalOcean

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Frontend Droplet
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.FRONTEND_DROPLET_IP }}
          username: synconnect
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd ~/synconnect-v3
            git pull origin main
            npm install
            npm run build
            pm2 restart all

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Backend Droplet
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.BACKEND_DROPLET_IP }}
          username: synconnect
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd ~/synconnect-v3
            git pull origin main
            cd apps/api
            npm install
            npm run build
            pm2 restart api
```

---

## Monitoring & Backups

### Server Monitoring

**DigitalOcean Monitoring (Free):**
- CPU usage
- Memory usage
- Disk usage
- Bandwidth

**PM2 Monitoring:**
```bash
pm2 monit  # Real-time monitoring
pm2 logs   # View logs
```

### Database Backups

**MongoDB Atlas:**
- Manual backups (free tier)
- Scheduled backups (paid tier)

**Manual Backup Script:**
```bash
# Backup MongoDB to local file
mongodump --uri="mongodb+srv://..." --out=/backups/$(date +%Y%m%d)

# Upload to DigitalOcean Spaces or AWS S3
# (Optional, for extra safety)
```

---

## Security

### Firewall (UFW)

```bash
# Frontend Droplet
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw enable

# Backend Droplet
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw enable
```

### SSH Key Authentication

```bash
# Disable password authentication
nano /etc/ssh/sshd_config
# Set: PasswordAuthentication no

# Restart SSH
systemctl restart sshd
```

### Fail2Ban (Brute Force Protection)

```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

---

## Cost Breakdown

### Monthly Costs

| Service | Cost |
|---------|------|
| **DigitalOcean Droplet #1** (Frontend) | $6/month |
| **DigitalOcean Droplet #2** (Backend) | $6/month |
| **MongoDB Atlas** (Free Tier) | $0 |
| **Cloudinary** (Free Tier) | $0 |
| **Resend** (Free Tier) | $0 |
| **Domain** (synconnect.com) | ~$12/year (~$1/month) |
| **SSL Certificates** (Let's Encrypt) | $0 |
| **Total** | **$13/month** |

**Razorpay Fees**: 2% per transaction (deducted from revenue)

---

## Scaling Strategy

### When to Upgrade

**Upgrade Frontend Droplet** when:
- CPU usage > 80% consistently
- Memory usage > 80%
- Response times > 2 seconds

**Upgrade Backend Droplet** when:
- API response times > 200ms
- CPU usage > 80%
- Memory usage > 80%

**Upgrade MongoDB Atlas** when:
- Storage > 400MB (80% of 512MB)
- Connection limits reached

### Upgrade Path

**DigitalOcean Droplets:**
- $6/month (1GB RAM) → $12/month (2GB RAM)
- $12/month (2GB RAM) → $24/month (4GB RAM)

**MongoDB Atlas:**
- M0 (Free, 512MB) → M10 ($57/month, 10GB)

---

## Deployment Checklist

### Pre-Deployment
- [ ] Register domain (synconnect.com)
- [ ] Create DigitalOcean account
- [ ] Create MongoDB Atlas account
- [ ] Create Cloudinary account
- [ ] Create Resend account
- [ ] Create Razorpay account

### Droplet Setup
- [ ] Create frontend droplet
- [ ] Create backend droplet
- [ ] Configure DNS records
- [ ] Set up SSH keys
- [ ] Install Node.js, PM2, Nginx
- [ ] Configure firewall (UFW)

### Application Deployment
- [ ] Clone repository
- [ ] Set environment variables
- [ ] Build applications
- [ ] Configure Nginx
- [ ] Get SSL certificates
- [ ] Start apps with PM2

### Post-Deployment
- [ ] Test all domains (synconnect.com, dashboard, admin, api)
- [ ] Test SSL certificates
- [ ] Test payment flow (Razorpay)
- [ ] Test email sending (Resend)
- [ ] Test image uploads (Cloudinary)
- [ ] Set up monitoring
- [ ] Set up backups

---

**Last Updated**: 2026-02-10
