# 🚀 Quick Vercel Deployment Guide

Your website is **100% Vercel-ready**! Follow these simple steps to deploy.

## ⚡ Quick Steps (5 minutes)

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your repository
4. Click **"Deploy"**

### 3. Add Environment Variables
After deployment, go to: **Project Settings → Environment Variables**

Add these 4 variables:

| Variable | Where to Get It |
|----------|----------------|
| `DATABASE_URL` | Your PostgreSQL connection string (try [neon.tech](https://neon.tech) for free) |
| `CLOUDINARY_CLOUD_NAME` | [Cloudinary Dashboard](https://cloudinary.com/console) |
| `CLOUDINARY_API_KEY` | [Cloudinary Dashboard](https://cloudinary.com/console) |
| `CLOUDINARY_API_SECRET` | [Cloudinary Dashboard](https://cloudinary.com/console) |

### 4. Redeploy
After adding variables:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

## ✅ That's It!

Your website will be live at: `https://your-project.vercel.app`

---

## 📝 Important Notes

### Database Setup (Neon - Free)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a project
3. Copy the connection string
4. Add as `DATABASE_URL` in Vercel
5. Run `npm run db:push` to sync schema

### Cloudinary Setup
Your Cloudinary is already configured! Images in the "studio" folder will automatically appear in your gallery.

### Custom Domain (Optional)
1. Go to **Project Settings → Domains**
2. Add your domain
3. Update DNS records as shown

---

## 🐛 Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all environment variables are added

**Gallery images not showing?**
- Verify Cloudinary credentials are correct
- Make sure images are in "studio" folder

**API not working?**
- Check environment variables
- Verify DATABASE_URL is correct

---

## 📚 Need More Details?

See the complete guide: [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

---

**Your website is production-ready!** 🎉
