import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize the Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// System prompt for the flower AI assistant
const SYSTEM_PROMPT = `You are Bloom 🌸, an enthusiastic and knowledgeable AI assistant specializing in flowers, floristry, and plant care. You help users discover flowers, learn about their meanings and symbolism, find care tips, and make recommendations for gifts and occasions.

Your personality:
- Warm, friendly, and encouraging
- Passionate about flowers and their meanings
- Helpful and informative without being overwhelming
- Use flower emojis occasionally to add charm (🌸🌹🌷🌺🌼💐)

Your expertise includes:
- Flower meanings and symbolism across different cultures
- Care instructions for various flowers
- Seasonal availability of blooms
- Gift recommendations for different occasions
- Flower arrangement ideas
- Connecting users with local florists in Sydney

Keep responses concise but informative. If asked about local florists, mention that you can help connect them with Sydney-based flower shops. Always be encouraging and make flower discovery feel exciting and accessible.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          error: 'API key not configured',
          response: "I'm sorry, but I'm not fully configured yet. Please add your ANTHROPIC_API_KEY to the .env.local file to enable AI responses. 🌸"
        },
        { status: 200 } // Return 200 so the chat doesn't break
      );
    }

    // Build messages array from conversation history
    const messages: Anthropic.MessageParam[] = [];

    if (conversationHistory && Array.isArray(conversationHistory)) {
      // Add previous messages (excluding the system welcome message)
      conversationHistory
        .filter((msg: any) => msg.id !== 'welcome')
        .forEach((msg: any) => {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          });
        });
    }

    // Add the current user message
    messages.push({
      role: 'user',
      content: message
    });

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    // Extract the response text
    const responseText = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, but I had trouble generating a response. Please try again!';

    return NextResponse.json({
      response: responseText,
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
      }
    });

  } catch (error: any) {
    console.error('Error calling Claude API:', error);

    // Handle specific API errors
    if (error.status === 401) {
      return NextResponse.json(
        {
          error: 'Invalid API key',
          response: "There's an issue with the API configuration. Please check your API key. 🌸"
        },
        { status: 200 }
      );
    }

    if (error.status === 429) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          response: "I'm receiving too many requests right now. Please try again in a moment! 🌸"
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        response: "I encountered an unexpected error. Please try again! 🌸"
      },
      { status: 200 }
    );
  }
}
