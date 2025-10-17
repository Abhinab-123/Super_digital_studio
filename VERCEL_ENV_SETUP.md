# 🔐 Vercel Environment Variables Setup

After deploying to Vercel, you need to add these environment variables.

## 📋 How to Add Variables in Vercel:

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable below

---

## 🔑 Required Variables:

### Database (PostgreSQL)
**Variable Name:** `DATABASE_URL`  
**Value:** Get from [neon.tech](https://neon.tech) or your PostgreSQL provider  
**Example:** `postgresql://user:password@host:5432/database?sslmode=require`

---

### Cloudinary (Image Hosting)
**Variable Name:** `CLOUDINARY_CLOUD_NAME`  
**Value:** `dhzwv9qhg`

**Variable Name:** `CLOUDINARY_API_KEY`  
**Value:** `556636492725719`

**Variable Name:** `CLOUDINARY_API_SECRET`  
**Value:** `3M3--12VhJqSFCjtsDTJf44JdBI`

---

### Node Environment
**Variable Name:** `NODE_ENV`  
**Value:** `production`

---

## ✅ After Adding Variables:

1. Go to **Deployments** tab
2. Find your latest deployment
3. Click the **⋯** menu → **Redeploy**
4. Your app will rebuild with the new environment variables

---

## 📝 Quick Copy-Paste Format:

```
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
CLOUDINARY_CLOUD_NAME=dhzwv9qhg
CLOUDINARY_API_KEY=556636492725719
CLOUDINARY_API_SECRET=3M3--12VhJqSFCjtsDTJf44JdBI
NODE_ENV=production
```

---

**💡 Tip:** For DATABASE_URL, we recommend using [Neon](https://neon.tech) - it's free and works perfectly with Vercel!
