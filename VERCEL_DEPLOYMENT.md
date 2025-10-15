# Vercel Deployment Guide

This guide will help you deploy your Super Digital Editorial & Wedding Agency application to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Environment variables ready (see `.env.example`)

## Deployment Steps

### 1. Prepare Your Repository

Make sure all changes are committed and pushed to your Git repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your repository from the list
4. Vercel will auto-detect the project settings

### 3. Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Other (or None)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Set Up Environment Variables

In the Vercel dashboard, add these environment variables:

#### Required Variables:

1. **DATABASE_URL**
   - Your PostgreSQL database connection string
   - Format: `postgresql://user:password@host:port/database`
   - For Neon DB (recommended): Get from your Neon dashboard

2. **Google Drive Integration** (if using Google Drive for gallery):
   - **REPLIT_CONNECTORS_HOSTNAME**: Contact support or use alternative auth
   - **REPL_IDENTITY**: Contact support or use alternative auth
   - **WEB_REPL_RENEWAL**: Contact support or use alternative auth

   **Note**: Replit connectors are Replit-specific. For Vercel, you'll need to:
   - Set up Google Drive OAuth separately
   - Create a Google Cloud project and enable Drive API
   - Get OAuth credentials and add them as environment variables

3. **NODE_ENV**
   - Set to: `production`

### 5. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll get a URL like: `https://your-app.vercel.app`

## Database Setup

### Using Neon (Recommended for Vercel)

1. Create a free account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it as `DATABASE_URL` in Vercel environment variables
5. Push your database schema:
   ```bash
   npm run db:push
   ```

### Alternative: Supabase or PlanetScale

Both work well with Vercel and offer free tiers.

## Google Drive Integration for Vercel

Since Replit connectors won't work on Vercel, you have two options:

### Option 1: Use Google Cloud OAuth (Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google Drive API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs
6. Update `server/services/googleDrive.ts` to use OAuth credentials from environment variables

### Option 2: Use Service Account

1. Create a service account in Google Cloud
2. Download the JSON key file
3. Share your Google Drive folder with the service account email
4. Add the service account credentials as environment variables

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Verify `package.json` has correct build scripts

### API Routes Not Working

- Ensure API routes are in `/api` directory
- Check that `vercel.json` has correct rewrites
- Verify environment variables are set

### Database Connection Issues

- Double-check `DATABASE_URL` format
- Ensure database allows connections from Vercel's IP ranges
- For Neon/Supabase, enable connection pooling

### 404 Errors on Page Refresh

- This is handled by `vercel.json` rewrites
- If issues persist, check `vercel.json` configuration

## Post-Deployment

1. Test all functionality:
   - Homepage loads correctly
   - API endpoints respond
   - Database operations work
   - Google Drive images load (if configured)

2. Set up custom domain (optional):
   - Go to project settings in Vercel
   - Click "Domains"
   - Add your custom domain
   - Update DNS records as instructed

3. Enable automatic deployments:
   - Vercel automatically deploys on every git push to main branch
   - Configure preview deployments for pull requests

## Monitoring

Vercel provides built-in monitoring:

- **Analytics**: View page views and user metrics
- **Logs**: Check function logs for errors
- **Speed Insights**: Monitor performance

Access these from your Vercel dashboard.

## Cost Considerations

Vercel Free Tier includes:
- Unlimited deployments
- 100GB bandwidth/month
- Serverless function executions
- SSL certificates

For production apps with high traffic, consider upgrading to Pro.

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

**Your application is now Vercel-ready!** 🚀

For questions or issues, refer to the troubleshooting section or Vercel's support documentation.
