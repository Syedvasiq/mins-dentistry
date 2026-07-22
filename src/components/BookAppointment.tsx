"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

const ACCENT = "#C9A227";
const BG = "#070706";

const PERKS = [
  "Comprehensive Dental Examination",
  "Personalized Treatment Plan",
  "Digital Smile Assessment",
  "Experienced Dental Specialists",
  "Comfortable & Painless Care",
  "Flexible Appointment Timings",
];

const TREATMENTS = [
  "Dental Implants",
  "Smile Makeover",
  "Teeth Whitening",
  "Aligners",
  "Root Canal",
  "Gum Treatment",
  "General Consultation",
];

export default function BookAppointment() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", date: "", time: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: focused === name ? ACCENT + "88" : "rgba(255,255,255,0.09)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "inherit",
  });

  return (
    <>
      <style>{`
        @keyframes shimmerBook {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .book-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #C9A227, #EBD08C, #C9A227);
          background-size: 200% auto;
          animation: shimmerBook 3s linear infinite;
          color: #1a1200;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          padding: 14px 32px;
          cursor: pointer;
          width: 100%;
          transition: opacity 0.2s;
        }
        .book-btn:hover { opacity: 0.9; }
        ::placeholder { color: rgba(255,255,255,0.2); }
        select option { background: #111; color: #fff; }
      `}</style>

      <section style={{ background: BG }} className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-3" style={{ color: ACCENT, fontFamily: "monospace" }}>
                Consultation
              </p>
              <span className="block h-px w-16 mb-5" style={{ background: `linear-gradient(to right, ${ACCENT}, #F3DE9C, transparent)` }} />
              <h2 className={`${display.className} text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-tight text-white mb-4`}>
                Book Your Smile <span className="italic" style={{ color: ACCENT }}>Consultation</span>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10 max-w-md">
                Your journey to a healthier, more confident smile starts here.
              </p>

              {/* Perks */}
              <ul className="flex flex-col gap-3.5 mb-12">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}>
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <span className="text-[14px] text-white/65">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-1" style={{ fontFamily: "monospace" }}>Need Immediate Assistance?</p>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}35` }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </span>
                  <a href="tel:+919008113963" className="text-[15px] font-semibold transition-colors" style={{ color: ACCENT }}>
                    +91 90081 13963
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}35` }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-white/50">Open Today: 9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="rounded-2xl p-8 lg:p-10" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className={`${display.className} text-2xl font-semibold text-white mb-7`}>
                Schedule an <span className="italic" style={{ color: ACCENT }}>Appointment</span>
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-[15px]">Your appointment request has been sent!</p>
                  <p className="text-white/35 text-[13px]">We'll confirm your slot within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input required placeholder="Full Name" value={form.name} onChange={(e) => set("name", e.target.value)}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} />

                  <input required placeholder="Mobile Number" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={inputStyle("phone")} />

                  <input placeholder="Email Address (Optional)" type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} />

                  <select required value={form.treatment} onChange={(e) => set("treatment", e.target.value)}
                    onFocus={() => setFocused("treatment")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("treatment"), color: form.treatment ? "#fff" : "rgba(255,255,255,0.2)" }}>
                    <option value="" disabled>Select Treatment</option>
                    {TREATMENTS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>

                  <div className="grid grid-cols-2 gap-4">
                    <input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                      onFocus={() => setFocused("date")} onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("date"), colorScheme: "dark" }} />
                    <input required type="time" value={form.time} onChange={(e) => set("time", e.target.value)}
                      onFocus={() => setFocused("time")} onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("time"), colorScheme: "dark" }} />
                  </div>

                  <textarea placeholder="Message (Optional)" rows={3} value={form.message} onChange={(e) => set("message", e.target.value)}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }} />

                  <button type="submit" className="book-btn mt-2">Book Appointment</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
