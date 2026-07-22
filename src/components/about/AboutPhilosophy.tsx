"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.2 0-2 .7-2.8.7-1 0-2 .8-2 2.6 0 2.1.7 3.7 1 5.2.3 1.1.6 2.2 1.4 2.2s1-.5 1.4-1.5c.2-.8.5-1.4 1-1.4s.8.6 1 1.4c.4 1 .6 1.5 1.4 1.5s1.1-1.1 1.4-2.2c.3-1.5 1-3.1 1-5.2 0-1.8-1-2.6-2-2.6C14 3.7 13.2 3 12 3z" />
        <path d="M8.5 15.5c.5 2 1.5 5.5 3.5 5.5s3-3.5 3.5-5.5" />
      </svg>
    ),
    title: "Personalized Care",
    desc: "Every treatment plan is tailored to your unique dental needs, lifestyle, and goals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Clinical Excellence",
    desc: "Evidence-based dentistry delivered with precision, expertise, and the highest standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Patient Comfort",
    desc: "A relaxing, anxiety-free environment with gentle, pain-conscious treatments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="3" />
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Advanced Technology",
    desc: "Digital dentistry tools for greater accuracy, faster results, and predictable outcomes.",
  },
];

export default function AboutPhilosophy() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 overflow-hidden" style={{ background: "#FAF8F5" }}>
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>Our Philosophy</p>
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>
            The Principles That{" "}
            <span className="italic" style={{ color: GOLD }}>Guide Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="group relative rounded-[20px] p-8 bg-white transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ease ${i * 0.1 + 0.2}s, transform 0.7s ease ${i * 0.1 + 0.2}s, box-shadow 0.4s ease`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 40px ${GOLD}25`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)")}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6"
                style={{ background: `${GOLD}12`, color: GOLD }}
              >
                {card.icon}
              </div>
              <h3 className={`${display.className} text-xl font-semibold text-gray-900 mb-3`}>{card.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{card.desc}</p>

              {/* Bottom gold line on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
