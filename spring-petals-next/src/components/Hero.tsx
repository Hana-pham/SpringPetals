'use client';

import { Send, Sparkles, ChevronDown, User } from "lucide-react";
import { useState, useEffect } from "react";

const suggestedQuestions = [
  "What flowers bloom in spring?",
  "Find florists near me",
  "What do roses symbolize?"
];

const sampleConversation = [
  { text: "Hi! I'm Bloom, your AI flower discovery companion. Ask me anything about flowers, florists, or what blooms mean! 🌸", isUser: false },
];

export function Hero() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(sampleConversation);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { text: message, isUser: true }]);
    setMessage("");
    setIsTyping(true);
    
    // Simulated AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: "That's a wonderful question! 🌺 Let me help you discover the perfect blooms. Sydney has amazing florists in every suburb. Which area are you interested in?", 
        isUser: false 
      }]);
    }, 1500);
  };

  const handleSuggestionClick = (question: string) => {
    setMessage(question);
  };

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex flex-col">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F5] via-[#FFF5F8] to-[#FFE8EF] dark:from-[#0F0F0F] dark:via-[#1A0F14] dark:to-[#1F0A14] -z-10" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #FFB5C5 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #FFB5C5 0px, transparent 1px, transparent 40px)`
        }}
      />

      {/* Floating Flower Petals */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float-delayed">🌺</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-float-slow">🌷</div>
        <div className="absolute top-1/3 right-1/3 text-4xl opacity-20 animate-float-delayed">🌼</div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center">
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB5C5] to-[#FF85A6] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B8D4C8] to-[#8FB5A5] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB5C5] to-[#FF85A6] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1A1]">Join 10,000+ flower enthusiasts</p>
        </div>

        {/* Overline */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FFB5C5] dark:text-[#FF85A6] font-medium">
            Introducing Bloom
          </span>
        </div>

        {/* Headline with Gradient Text */}
        <h1 
          className="mb-6 text-[#2C2C2C] dark:text-[#F5F5F5] leading-[1.1] tracking-tight"
          style={{ 
            fontFamily: 'Clash Display, sans-serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            letterSpacing: '-0.02em'
          }}
        >
          Build with Community,
          <br />
          <span className="bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] bg-clip-text text-transparent">
            Bloom
          </span> for Community
        </h1>
        
        <p className="text-lg md:text-xl text-[#2C2C2C]/70 dark:text-[#F5F5F5]/70 mb-10 max-w-2xl mx-auto">
          Your AI companion to discover flowers, connect with local florists, and explore the meaning behind every petal.
        </p>

        {/* Glassmorphic Chat Interface */}
        <div 
          className="max-w-[680px] mx-auto"
          style={{ transform: 'rotate(-0.5deg)' }}
        >
          <div 
            className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20"
            style={{ 
              boxShadow: '0px 20px 60px rgba(255, 181, 197, 0.15), 0px 4px 12px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] px-6 py-4 flex items-center gap-3">
              <div 
                className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl cursor-pointer transform transition-transform hover:scale-110"
                onMouseEnter={() => setHoveredIcon(true)}
                onMouseLeave={() => setHoveredIcon(false)}
              >
                🌸
                {hoveredIcon && (
                  <span className="absolute -top-1 -right-1 text-lg animate-sparkle">✨</span>
                )}
                <div className="absolute inset-0 rounded-full bg-[#FFB5C5]/30 blur-lg animate-pulse" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-white flex items-center gap-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  Bloom
                  {isTyping && (
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  )}
                </h3>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Powered by AI
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-[#FFF9F5]/30 dark:to-[#1A1A1A]/30">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-message-slide-in`}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                      msg.isUser
                        ? 'bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white shadow-lg'
                        : 'bg-white/90 dark:bg-white/10 text-[#2C2C2C] dark:text-[#F5F5F5] shadow-md border border-[#FFB5C5]/10 dark:border-[#FF85A6]/10'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 py-3 flex flex-wrap gap-2 border-t border-[#FFB5C5]/10 dark:border-[#FF85A6]/10 bg-white/40 dark:bg-white/5">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                    className="px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-sm text-[#2C2C2C] dark:text-[#F5F5F5] hover:bg-gradient-to-r hover:from-[#FFB5C5] hover:to-[#FF85A6] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white/50 dark:bg-white/5 border-t border-[#FFB5C5]/10 dark:border-[#FF85A6]/10 backdrop-blur-sm relative">
              {showTooltip && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C] px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in">
                  Try: "What flowers bloom in spring?" 
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2C2C2C] dark:bg-white rotate-45"></div>
                </div>
              )}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Bloom anything about flowers..."
                  className="flex-1 px-5 py-3 rounded-full bg-white dark:bg-[#1A1A1A] border-2 border-[#FFB5C5]/30 dark:border-[#FF85A6]/30 focus:border-[#FFB5C5] dark:focus:border-[#FF85A6] focus:outline-none focus:ring-4 focus:ring-[#FFB5C5]/10 dark:focus:ring-[#FF85A6]/10 transition-all placeholder:bg-gradient-to-r placeholder:from-[#FFB5C5] placeholder:to-[#FF85A6] placeholder:bg-clip-text"
                  style={{
                    background: 'linear-gradient(to right, transparent, transparent)',
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="group px-6 py-3 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white rounded-full hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFB5C5]/30"
                >
                  <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#FFB5C5] dark:text-[#FF85A6]" />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
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
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.2) rotate(180deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-message-slide-in { animation: message-slide-in 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-sparkle { animation: sparkle 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
