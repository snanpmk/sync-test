# 🚀 SynConnect v3: Vercel Deployment Guide

Since SynConnect v3 is a **NX/Turborepo Monorepo** with no external backend (currently frontend-only with mock data), deploying it to Vercel is straightforward. Follow these steps to get your Marketing Site, Dashboard, and Admin panel live.

---

## 🏗️ 1. Project Organization
The project is split into three main applications:
- **`apps/web`**: Marketing Landing Page & Public Profile routes.
- **`apps/dashboard`**: Customer Personal CRM & Analytics Dashboard.
- **`apps/admin`**: Internal Administrative controls.

---

## ☁️ 2. Deploying to Vercel (Step-by-Step)

### Step 1: Push to GitHub/GitLab
Ensure your project is in a remote repository.
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create a Project in Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import your `synconnect-v3` repository.

### Step 3: Configure the Framework
Vercel will detect it's a Monorepo. You should create **three separate Vercel projects** (one for each app) or use the automatic monorepo detection.

#### For each App (Web, Dashboard, Admin):
1. **Root Directory**: Select the specific app folder (e.g., `apps/dashboard`).
2. **Framework Preset**: Next.js.
3. **Build Settings**: 
   - Vercel usually handles this automatically for Turborepo, but if it asks:
   - **Build Command**: `cd ../.. && npx turbo run build --filter=dashboard` (Replace `dashboard` with `web` or `admin`).
   - **Output Directory**: `.next`
   - **Install Command**: `npm install` (from root).

---

## 🛠️ 3. Handling the "No Backend" Factor
Currently, SynConnect v3 uses local state and mock data (located in `apps/dashboard/data/mock-data.ts`). 

- **Static Pre-rendering**: Since there is no database call, your pages will be extremely fast as Next.js will pre-render them at build time.
- **API Routes**: If you have added any local `/api` routes in Next.js, they will work fine.
- **Client-Side Persistence**: Any changes you make in the Dashboard (e.g., adding a connection) will live in the browser's session/memory and will reset on refresh until a database is connected.

---

## 🔑 4. Environment Variables
Although we have no backend, you might want to set these standard Next.js variables for future use:
```env
NEXT_PUBLIC_APP_URL=https://your-dashboard-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=SynConnect
```

---

## 📡 5. Custom Domains (Optional)
Once deployed, you can assign subdomains for a professional setup:
- `synconnect.me` → Points to **Web** project.
- `app.synconnect.me` → Points to **Dashboard** project.
- `admin.synconnect.me` → Points to **Admin** project.

---

## 🧪 6. Verification
After the Vercel build is complete:
1. Visit your URL.
2. Check the console for any "404" or "Module not found" errors (common in monorepos if shared packages aren't linked correctly).
3. Verify that the **Electric Green (#CCFF00)** brand colors and **32px** rounding are rendering exactly as intended.

---

**Next Steps**: Once you're ready to add a backend, we can integrate **Supabase**, **Prisma**, or **Firebase** by updating the `data` folders to fetch from an actual API!
