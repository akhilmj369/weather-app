# Vercel Environment Variables Setup Guide

## The Issue
The error "Environment Variable 'JWT_SECRET' references Secret 'jwt_secret', which does not exist" occurs because Vercel doesn't have access to your local `.env` file. You need to manually set up environment variables in the Vercel dashboard.

## Solution: Add Environment Variables in Vercel Dashboard

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to your Vercel project dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click on your weather-app project

2. **Navigate to Settings:**
   - Click on the "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add the following environment variables:**

   **Variable 1:**
   - Name: `VITE_WEATHER_API_KEY`
   - Value: `c60ed326471faf710f0cd413433c8458`
   - Environment: Production, Preview, Development

   **Variable 2:**
   - Name: `JWT_SECRET`
   - Value: `weather_app_super_secret_jwt_key_2025_make_it_very_long_and_random_abc123xyz789`
   - Environment: Production, Preview, Development

   **Variable 3:**
   - Name: `VITE_API_URL`
   - Value: `https://your-app-name.vercel.app` (replace with your actual Vercel URL)
   - Environment: Production, Preview, Development

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add VITE_WEATHER_API_KEY
# Enter: c60ed326471faf710f0cd413433c8458

vercel env add JWT_SECRET
# Enter: weather_app_super_secret_jwt_key_2025_make_it_very_long_and_random_abc123xyz789

vercel env add VITE_API_URL
# Enter: https://your-app-name.vercel.app
```

## Important Notes

1. **VITE_API_URL**: This should point to your deployed Vercel URL, not localhost
2. **JWT_SECRET**: Keep this secret secure - never expose it in client-side code
3. **Environment Scope**: Make sure to add variables to all environments (Production, Preview, Development)

## After Adding Environment Variables

1. **Redeploy your application:**
   ```bash
   vercel --prod
   ```

2. **Or trigger a new deployment by:**
   - Pushing a new commit to your main branch
   - Or clicking "Redeploy" in the Vercel dashboard

## Verification

After deployment, check:
- Your app loads without environment variable errors
- Authentication works properly
- Weather API calls succeed

## Production API URL

Remember to update `VITE_API_URL` to your actual Vercel deployment URL:
- Format: `https://your-project-name.vercel.app`
- Example: `https://weather-app-abc123.vercel.app`
