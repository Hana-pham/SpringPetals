# Google Places API Setup Guide

Your Spring Petals website now uses **real flower shop data** from Google Places API! Follow these steps to set it up.

## Step 1: Get Your Google API Key

1. **Go to Google Cloud Console**: https://console.cloud.google.com/

2. **Create a New Project** (or select an existing one):
   - Click the project dropdown at the top
   - Click "New Project"
   - Name it "Spring Petals" or anything you like
   - Click "Create"

3. **Enable the Places API**:
   - In the left sidebar, go to **"APIs & Services" > "Library"**
   - Search for "Places API"
   - Click on it and click **"Enable"**

4. **Create an API Key**:
   - Go to **"APIs & Services" > "Credentials"**
   - Click **"Create Credentials" > "API Key"**
   - Copy your new API key (looks like: `AIzaSyD...`)

5. **Restrict Your API Key** (Important for security):
   - Click on your API key to edit it
   - Under "API restrictions":
     - Select "Restrict key"
     - Check "Places API"
   - Under "Application restrictions":
     - For development: Choose "None" (but be careful!)
     - For production: Choose "HTTP referrers" and add your domain
   - Click "Save"

## Step 2: Add Your API Key to Your Project

1. **Open the `.env.local` file** in your project root (already created for you)

2. **Replace `your_api_key_here` with your actual API key**:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyD...your_actual_key
   ```

3. **Restart your dev server**:
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Step 3: Test It Out

1. **Open your website**: http://localhost:3000

2. **Allow location access** when prompted by your browser

3. **You should see**:
   - "Near you" section showing real florists near your location
   - "Top rated" section showing highest-rated florists in Sydney
   - Real ratings, reviews, and distances calculated from your location

## What's Working Now

✅ **NearYou component** (`src/components/NearYou.tsx`):
   - Fetches real florists within 10km of your location
   - Calculates actual distances using GPS coordinates
   - Estimates delivery times based on distance
   - Shows real ratings and review counts

✅ **TopRated component** (`src/components/TopRated.tsx`):
   - Fetches real florists in Sydney CBD area (15km radius)
   - Filters by rating (4.5+ with 10+ reviews)
   - Sorts by rating and review count
   - Shows real business data

✅ **API Routes**:
   - `/api/florists/nearby` - Get florists near coordinates
   - `/api/florists/search` - Search florists by query

## API Costs

Google Places API has a **free tier**:
- **$200 free credit per month**
- Nearby Search: $32 per 1,000 requests
- Text Search: $32 per 1,000 requests
- Photos: $7 per 1,000 requests

For a small site, you'll likely stay within the free tier.

## Next Steps (Optional)

Want to add more real data? You can update these components:
- `BestValue.tsx` - Show florists with best price/value
- `AvailableNow.tsx` - Show florists open right now
- `PopularInSydney.tsx` - Show popular florists by neighborhood

All the infrastructure is ready - just follow the pattern in `NearYou.tsx`!

## Troubleshooting

**"Finding florists near you..." shows forever**:
- Check your API key is correct in `.env.local`
- Make sure you enabled "Places API" in Google Cloud Console
- Check browser console for errors

**No florists showing up**:
- Your location might not have many florists nearby
- Try increasing the radius in the API call
- Check if the API key has proper restrictions

**"Failed to fetch florists" error**:
- Restart your dev server after adding the API key
- Check that `.env.local` is in the root directory
- Make sure the API key doesn't have extra spaces

## Security Note

⚠️ Never commit your `.env.local` file to Git! It's already in `.gitignore` to protect your API key.

For production, consider:
1. Using API key restrictions (HTTP referrers)
2. Setting up a backend proxy to hide your API key
3. Implementing rate limiting to prevent abuse
