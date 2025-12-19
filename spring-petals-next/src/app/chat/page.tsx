'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Trash2, MessageSquare, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Msg = { id: string; role: 'user' | 'assistant'; content: string; timestamp: number };

const STORAGE_KEY = 'bloom-chat-history';

// Call Claude API for AI responses
async function getAIResponse(userMessage: string, conversationHistory: Msg[]): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        conversationHistory: conversationHistory,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('API Error:', data.error);
    }

    return data.response || "I'm sorry, I couldn't generate a response. Please try again!";
  } catch (error) {
    console.error('Error calling chat API:', error);
    return "I'm having trouble connecting right now. Please check your internet connection and try again! 🌸";
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
      } catch (e) {
        console.error('Failed to load chat history:', e);
        setMessages([{
          id: 'welcome',
          role: 'assistant',
          content: "Hi! I'm Bloom 🌸 — your AI companion for discovering flowers, learning their meanings, and finding the perfect blooms for any occasion. Ask me anything!",
          timestamp: Date.now()
        }]);
      }
    } else {
      setMessages([{
        id: 'welcome',
        role: 'assistant',
        content: "Hi! I'm Bloom 🌸 — your AI companion for discovering flowers, learning their meanings, and finding the perfect blooms for any occasion. Ask me anything!",
        timestamp: Date.now()
      }]);
    }
  }, []);

  // Save to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Get AI response from Claude API
      const response = await getAIResponse(text, messages);

      const assistantMsg: Msg = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMsg: Msg = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again!",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  }

  function clearHistory() {
    const confirmClear = window.confirm('Are you sure you want to clear all chat history?');
    if (confirmClear) {
      const welcomeMsg: Msg = {
        id: 'welcome',
        role: 'assistant',
        content: "Chat history cleared! How can I help you today? 🌸",
        timestamp: Date.now()
      };
      setMessages([welcomeMsg]);
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const suggestedQuestions = [
    "What flowers bloom in spring?",
    "How do I care for roses?",
    "Best flowers for a wedding?",
    "What do sunflowers symbolize?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F5] via-[#FFF5F8] to-[#FFE8EF] dark:from-[#0F0F0F] dark:via-[#1A0F14] dark:to-[#1F0A14] py-6 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#FFB5C5] dark:text-[#FF85A6]" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-[#F5F5F5] flex items-center gap-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                <span className="text-3xl">🌸</span>
                Chat with Bloom
              </h1>
              <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1A1]">Your AI flower companion</p>
            </div>
          </div>
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-[#2C2C2C] dark:text-[#F5F5F5] text-sm transition-all"
          >
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        </div>

        {/* Chat Container */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 shadow-2xl overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>

          {/* Messages Area */}
          <div ref={scrollRef} className="h-[calc(100%-140px)] overflow-y-auto p-6 space-y-4">

            {/* Empty state suggestions */}
            {messages.length <= 1 && (
              <div className="mb-6">
                <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1A1] mb-3 text-center">Try asking:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => setInput(question)}
                      className="p-3 text-left rounded-xl bg-white/80 dark:bg-white/10 hover:bg-gradient-to-r hover:from-[#FFB5C5] hover:to-[#FF85A6] hover:text-white border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-sm transition-all duration-300 hover:scale-105"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-message-slide-in`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white shadow-lg'
                      : 'bg-white/90 dark:bg-white/10 text-[#2C2C2C] dark:text-[#F5F5F5] shadow-md border border-[#FFB5C5]/10 dark:border-[#FF85A6]/10'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-white/70' : 'text-[#6B6B6B] dark:text-[#A1A1A1]'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start animate-message-slide-in">
                <div className="max-w-[80%] px-5 py-3 rounded-2xl bg-white/90 dark:bg-white/10 shadow-md border border-[#FFB5C5]/10 dark:border-[#FF85A6]/10">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[#FFB5C5] dark:bg-[#FF85A6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#FFB5C5] dark:bg-[#FF85A6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#FFB5C5] dark:bg-[#FF85A6] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/50 dark:bg-white/5 border-t border-[#FFB5C5]/10 dark:border-[#FF85A6]/10 backdrop-blur-sm">
            <form onSubmit={onSend} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Bloom about flowers, meanings, and care..."
                disabled={isLoading}
                className="flex-1 px-5 py-3 rounded-full bg-white dark:bg-[#1A1A1A] border-2 border-[#FFB5C5]/30 dark:border-[#FF85A6]/30 focus:border-[#FFB5C5] dark:focus:border-[#FF85A6] focus:outline-none focus:ring-4 focus:ring-[#FFB5C5]/10 dark:focus:ring-[#FF85A6]/10 transition-all disabled:opacity-50 text-[#2C2C2C] dark:text-[#F5F5F5]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="group px-6 py-3 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white rounded-full hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFB5C5]/30"
              >
                <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </form>
            <p className="text-xs text-center text-[#6B6B6B] dark:text-[#A1A1A1] mt-2">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Powered by AI • Chat history is saved locally
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-4 p-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-[#FFB5C5] dark:text-[#FF85A6] mt-0.5" />
            <div>
              <p className="text-sm text-[#2C2C2C] dark:text-[#F5F5F5] font-medium mb-1">
                Your conversations are saved locally
              </p>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1A1]">
                Chat history is stored in your browser and persists between sessions. Clear it anytime using the button above.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes message-slide-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-message-slide-in {
          animation: message-slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
