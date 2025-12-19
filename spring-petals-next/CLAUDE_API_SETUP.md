# Claude API Setup Guide

Your Spring Petals chat is now powered by Claude AI! Follow these steps to get it working:

## 1. Get Your API Key

1. Go to [Anthropic Console](https://console.anthropic.com/settings/keys)
2. Sign in or create an account
3. Click "Create Key" to generate a new API key
4. Copy your API key

## 2. Add Your API Key

1. Open the `.env.local` file in the `spring-petals-next` folder
2. Replace `your_api_key_here` with your actual API key:

```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
```

3. Save the file

## 3. Restart the Development Server

After adding your API key, restart the dev server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## 4. Test the Chat

1. Go to http://localhost:3000
2. Click "Chat with Bloom AI" button
3. Start chatting!

## Features

Your Bloom AI assistant can help with:
- 🌸 Flower meanings and symbolism
- 💐 Care tips for different flowers
- 🎁 Gift recommendations for occasions
- 🌷 Seasonal flower information
- 🏪 Local florist suggestions

## Troubleshooting

### "API key not configured" error
- Make sure you saved the `.env.local` file
- Check that your API key is correctly pasted
- Restart the dev server

### Chat not responding
- Check your internet connection
- Verify your API key is valid
- Check the browser console for errors (F12)

### Rate limit errors
- You may have exceeded your API usage limits
- Check your usage at https://console.anthropic.com/settings/usage

## Important Notes

- **Never commit your `.env.local` file to Git** - it contains your private API key
- The `.env.local` file is already in `.gitignore` to protect your key
- Each API request costs tokens - monitor your usage in the Anthropic Console
- Chat history is saved locally in your browser (localStorage)

## Model Information

The chat uses **Claude 3.5 Sonnet**, which provides:
- High-quality, natural responses
- Deep knowledge about flowers and plants
- Conversational and helpful personality
- Up to 1024 tokens per response

Enjoy your AI-powered flower companion! 🌸
