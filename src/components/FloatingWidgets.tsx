"use client";

import { useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

const GOLD = "#C9A227";
const WA_NUMBER = "919008113963";

const QUICK_REPLIES = [
  "Book an appointment",
  "What treatments do you offer?",
  "What are your clinic hours?",
  "Do you offer EMI options?",
  "Where are you located?",
];

const BOT_ANSWERS: Record<string, string> = {
  "Book an appointment": "Great! You can book directly by calling us at +91 90081 13963 or clicking the WhatsApp button. We have slots available today!",
  "What treatments do you offer?": "We offer Dental Implants, Smile Makeover, Teeth Whitening, Root Canal, Aligners, Gum Treatment, Veneers, and much more. Which treatment are you interested in?",
  "What are your clinic hours?": "We are open Monday to Saturday, 9:00 AM – 8:00 PM. We also keep emergency slots available on all working days.",
  "Do you offer EMI options?": "Yes! We offer easy EMI options on selected treatments. Our team will help you choose the best payment plan before your treatment begins.",
  "Where are you located?": "We are located in Shimoga, Karnataka. Call us at +91 90081 13963 and we will share the exact directions to our clinic.",
};

type Message = { from: "user" | "bot"; text: string };

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hello! 👋 Welcome to MINS Dentistry. How can I help you today?" },
  ]);
  const [showReplies, setShowReplies] = useState(true);

  const handleQuickReply = (q: string) => {
    const answer = BOT_ANSWERS[q] ?? "Thank you for your question! Please call us at +91 90081 13963 for more details.";
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: answer },
    ]);
    setShowReplies(false);
  };

  const waLink = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20MINS%20Dentistry.`;

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
        @keyframes chatBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
        .wa-btn { animation: waPulse 2.5s ease-in-out infinite; }
        .chat-tooth { animation: chatBounce 2s ease-in-out infinite; }
        .chat-bubble-bot {
          background: #f1f1f1;
          border: 1px solid #e0e0e0;
          color: #333;
          border-radius: 0 14px 14px 14px;
        }
        .chat-bubble-user {
          background: linear-gradient(135deg, #C9A227, #EBD08C);
          color: #1a1200;
          border-radius: 14px 0 14px 14px;
          font-weight: 600;
        }
      `}</style>

      {/* Fixed container — bottom right */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

        {/* Chatbot panel */}
        {chatOpen && (
          <div
            className="flex flex-col overflow-hidden rounded-2xl shadow-2xl"
            style={{
              width: "320px",
              maxHeight: "480px",
              background: "#ffffff",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#e5e5e5",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3.5"
              style={{ background: "#ffffff", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#eeeeee" }}
            >
              <div className="flex items-center gap-2.5">
                {/* Tooth icon */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${GOLD}18`, borderWidth: "1px", borderStyle: "solid", borderColor: `${GOLD}40` }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c-1.2 0-2 .7-2.8.7-1 0-2 .8-2 2.6 0 2.1.7 3.7 1 5.2.3 1.1.6 2.2 1.4 2.2s1-.5 1.4-1.5c.2-.8.5-1.4 1-1.4s.8.6 1 1.4c.4 1 .6 1.5 1.4 1.5s1.1-1.1 1.4-2.2c.3-1.5 1-3.1 1-5.2 0-1.8-1-2.6-2-2.6C14 3.7 13.2 3 12 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-800">MINS Dentistry</p>
                  <p className="text-[10px] text-gray-400" style={{ fontFamily: "monospace" }}>Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-white" style={{ maxHeight: "260px" }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <p className={`text-[13px] leading-relaxed px-3.5 py-2.5 max-w-[85%] ${m.from === "bot" ? "chat-bubble-bot" : "chat-bubble-user"}`}>
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            {showReplies && (
              <div className="px-4 pb-4 flex flex-col gap-2 bg-white" style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#eeeeee", paddingTop: "12px" }}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1" style={{ fontFamily: "monospace" }}>Quick Replies</p>
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickReply(q)}
                    className="text-left text-[12px] px-3 py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "#e0d4b0",
                      color: "#555",
                      background: "#fdfaf3",
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-3 text-center bg-white" style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#eeeeee" }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-semibold transition-colors duration-200 hover:opacity-80"
                style={{ color: GOLD, fontFamily: "monospace" }}>
                Continue on WhatsApp →
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-btn w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
          style={{ background: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Chatbot toggle button */}
        <button
          onClick={() => setChatOpen((o) => !o)}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
          style={{
            background: chatOpen ? "#1a1200" : "white",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: chatOpen ? GOLD : "transparent",
          }}
        >
          {chatOpen ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <Image src="/chat-icon.png" alt="Chat" width={54} height={54} className="object-contain" />
          )}
        </button>

      </div>
    </>
  );
}
