# Vercel Deployment Guide

This document explains how to deploy your portfolio website to Vercel with Cloudinary image integration.

## 🎯 Overview

Your portfolio website fetches images **directly from Cloudinary** without using any database. The images are retrieved on-demand using Cloudinary's API.

## 📋 Prerequisites

Before deploying, make sure you have:
1. A Vercel account
2. Your Cloudinary account credentials
3. This project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## 🚀 Deployment Steps

### Step 1: Connect Your Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect the settings

### Step 2: Configure Environment Variables

**CRITICAL**: You must add these three environment variables for the gallery to work:

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Click **"Create new"** or **"Add Another"**
3. Add the following three variables one by one:

**First Variable:**
- Key: `CLOUDINARY_CLOUD_NAME`
- Value: `dhzwv9qhg`

**Second Variable:**
- Key: `CLOUDINARY_API_KEY`
- Value: `556636492725719`

**Third Variable:**
- Key: `CLOUDINARY_API_SECRET`
- Value: `3M3--12VhJqSFCjtsDTJf44JdBI`

4. **IMPORTANT**: For each variable, make sure to select all three environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Click **"Save"** after adding all three variables

**After adding the variables, you MUST redeploy your project:**
- Go to the **Deployments** tab
- Click on the latest deployment
- Click **"Redeploy"** button

### Step 3: Verify Build Settings

Vercel should auto-detect these settings from `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

If not auto-detected, set them manually in **Settings** → **Build & Development Settings**

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete
3. Your site will be live at `your-project.vercel.app`

## 🔍 Troubleshooting

### Gallery Shows "Failed to Load Gallery"

**Cause**: Missing environment variables

**Solution**: 
1. Go to Vercel project **Settings** → **Environment Variables**
2. Verify all three Cloudinary variables are added
3. Redeploy the project from **Deployments** tab

### 404 Error on Gallery Page

**Cause**: Routing issue

**Solution**: This should be fixed automatically by the `vercel.json` configuration

### API Route Not Working

**Cause**: Serverless function not configured correctly

**Solution**: Ensure `api/index.ts` exists and `vercel.json` has the correct rewrites

## 📁 How It Works

### Architecture

```
Frontend (/gallery page)
    ↓
Calls /api/gallery/images
    ↓
Vercel Serverless Function (api/index.ts)
    ↓
Cloudinary API
    ↓
Returns images to frontend
```

### No Database Required

- Images are fetched directly from Cloudinary
- No PostgreSQL or any other database needed for the gallery
- Images are loaded fresh every time the gallery page is visited

## 🔐 Security

- Environment variables are stored securely in Vercel
- API secrets are never exposed to the frontend
- CORS is configured to allow requests from your domain

## 📊 Monitoring

After deployment, you can monitor:
- **Function Logs**: Check if Cloudinary API calls are successful
- **Analytics**: View traffic and performance
- **Error Tracking**: See any runtime errors

Go to your Vercel project dashboard to access these features.

## 🎨 Updating Images

To update your portfolio images:
1. Upload new images to your Cloudinary account in the "studio" folder
2. Your website will automatically show the new images on next page load
3. No need to redeploy or update any code!

## 🆘 Support

If you encounter issues:
1. Check Vercel function logs for errors
2. Verify environment variables are set correctly
3. Test the `/api/gallery/images` endpoint directly in your browser
4. Check Cloudinary dashboard to ensure images exist

---

**Last Updated**: October 18, 2025
