// app/chat/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { id: string; role: 'user' | 'assistant'; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I’m Bloom 🌸 — ask me about flower meanings, care, and gift ideas.",
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages.length]);

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMsgs: Msg[] = [
      ...messages,
      { id: crypto.randomUUID(), role: 'user', content: text },
      // placeholder assistant echo (replace with your API call)
      { id: crypto.randomUUID(), role: 'assistant', content: "Got it! (I'll answer once API is hooked up.)" },
    ];
    setMessages(newMsgs);
    setInput('');
  }

  return (
    <div className="chat-shell">
      {/* main column */}
      <div className="chat-main">
        <div className="chat-scroll" ref={scrollRef}>

          {/* Empty state suggestions */}
          {messages.length <= 1 && (
            <div className="chips">
              {[
                "How do I keep peonies fresh for 5 days?",
                "Flowers to say ‘I’m sorry’ (not romantic)",
                "What’s a spring bouquet under $50?",
                "Care guide for tulips at home",
              ].map((q) => (
                <button
                  key={q}
                  className="chip"
                  onClick={() => setInput(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div className="messages">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`msg ${m.role === 'assistant' ? 'msg-assistant' : 'msg-user'}`}
              >
                <div className="bubble">{m.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* composer */}
        <form className="composer" onSubmit={onSend}>
          <input
            className="composer-input"
            placeholder="Ask Bloom about flowers, meanings, and care…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="composer-send" type="submit">Send</button>
        </form>
      </div>

      {/* optional right panel (tips / history / images) */}
      <aside className="chat-side">
        <h3>Quick tips</h3>
        <ul>
          <li>Ask for bouquet ideas by occasion.</li>
          <li>Paste an image URL (planned) to identify a flower.</li>
          <li>Request care instructions for specific stems.</li>
        </ul>
      </aside>
    </div>
  );
}
