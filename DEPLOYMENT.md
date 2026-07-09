# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the official hosting platform for Next.js and offers a seamless deployment experience.

### Prerequisites
- GitHub account with this repository pushed
- Vercel account (free tier available at [vercel.com](https://vercel.com))

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub account and find this repository
   - Click "Import"

3. **Configure Build Settings**
   - Vercel auto-detects Next.js
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)
   - Click "Deploy"

4. **Add Environment Variables (if needed)**
   - After deployment, go to Settings → Environment Variables
   - Add any necessary `.env` variables from your `.env.local`
   - For contact form: ensure Node.js runtime is available (default)

5. **Verify Deployment**
   - Vercel provides a preview URL
   - Your site is live at the generated URL (e.g., `your-project.vercel.app`)
   - Any future pushes to `main` auto-deploy

### Custom Domain (Optional)
   - In Vercel Dashboard → Settings → Domains
   - Add your custom domain (e.g., `moises.dev`)
   - Follow DNS setup instructions from your domain registrar

## Build Locally

```bash
npm install
npm run build
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000)

## Development

```bash
npm run dev
```

Watch mode with hot reload on [http://localhost:3000](http://localhost:3000)

## Troubleshooting

**Build fails with missing route errors:**
```bash
rm -rf .next
npm run build
```

**Vercel deployment fails:**
- Check build logs in Vercel Dashboard
- Verify all environment variables are set
- Ensure Node.js 20+ is specified in `package.json` engines

**Contact form not sending:**
- Verify Nodemailer configuration in `src/libs/email.ts`
- Check email service credentials in `.env.local`
- Test locally first with `npm run dev`
