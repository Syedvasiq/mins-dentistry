"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

const GOLD = "#C9A227";

const CARDS = [
  {
    eyebrow: "Cashless",
    title: "Insurance",
    desc: "Accepted insurance partners for eligible dental treatments. We handle the paperwork so you can focus on your smile.",
    Icon: () => (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 5l9 3.7v6.5c0 6.3-3.9 10.7-9 12.6-5.1-1.9-9-6.3-9-12.6V8.7L16 5z" />
        <path d="M11.5 16.3l3 3 6-6.3" />
      </svg>
    ),
  },
  {
    eyebrow: "Easy",
    title: "EMI Options",
    desc: "Monthly installment plans available on selected treatments. Spread the cost with zero-stress financing tailored to you.",
    Icon: () => (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="9" width="24" height="16" rx="3" />
        <path d="M4 14h24" />
        <path d="M9 20h4" />
        <path d="M16 20h3" />
      </svg>
    ),
  },
  {
    eyebrow: "Digital",
    title: "Payments",
    desc: "UPI, Cards & Online Banking accepted securely. Fast, contactless, and hassle-free at every visit.",
    Icon: () => (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="22" height="18" rx="3" />
        <path d="M5 13h22" />
        <circle cx="10" cy="19" r="1.5" fill="currentColor" stroke="none" />
        <path d="M14 19h8" />
      </svg>
    ),
  },
  {
    eyebrow: "Secure",
    title: "Transactions",
    desc: "Safe, encrypted payment processing for every visit. Your financial data is always protected with us.",
    Icon: () => (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="16" height="12" rx="2" />
        <path d="M11 14v-3a5 5 0 0110 0v3" />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <path d="M16 21.5v2" />
      </svg>
    ),
  },
];

export default function PaymentInsurance() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF8F5] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div
          className="pay-fade"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s cubic-bezier(.2,.8,.2,1), transform 0.9s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-3" style={{ color: GOLD, fontFamily: "monospace" }}>
            Payment &amp; Insurance
          </p>
          <span className="block h-px w-16 mb-5" style={{
            background: `linear-gradient(to right, ${GOLD}, #F3DE9C, transparent)`,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.8s ease-out 0.15s",
          }} />
          <h2 className={`${display.className} text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-tight text-[#2B2B2B] mb-4 max-w-2xl`}>
            Flexible Payment Options <span className="italic" style={{ color: GOLD }}>Designed Around You</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#6A6A6A] max-w-xl">
            We make quality dental care accessible with secure payment methods, easy financing options, and accepted insurance plans.
          </p>
        </div>

        {/* 2×2 Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? hovered === i ? "translateY(-8px)" : "translateY(0)"
                  : "translateY(36px)",
                transition: `opacity 0.7s cubic-bezier(.2,.8,.2,1) ${i * 0.1}s, transform 0.4s cubic-bezier(.2,.8,.2,1)`,
                background: "#fff",
                borderRadius: "24px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: hovered === i ? `${GOLD}66` : "#EFE4C6",
                boxShadow: hovered === i
                  ? `0 20px 40px rgba(200,165,90,0.18), 0 0 0 1px ${GOLD}22`
                  : "0 2px 16px rgba(0,0,0,0.04)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: `${GOLD}12`,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: `${GOLD}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: GOLD,
                  transform: hovered === i ? "rotate(6deg) scale(1.08)" : "rotate(0deg) scale(1)",
                  transition: "transform 0.35s cubic-bezier(.2,.8,.2,1)",
                }}
              >
                <card.Icon />
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] mb-1" style={{ color: GOLD, fontFamily: "monospace" }}>
                  {card.eyebrow}
                </p>
                <h3 className={`${display.className} text-2xl font-semibold text-[#2B2B2B] mb-1`}>{card.title}</h3>
                <div className="h-px w-10 mb-3" style={{
                  background: `linear-gradient(to right, ${GOLD}, transparent)`,
                  transition: "width 0.4s",
                  width: hovered === i ? "48px" : "40px",
                }} />
                <p className="text-[14px] leading-relaxed text-[#6A6A6A]">{card.desc}</p>
              </div>

              {/* Learn more */}
              <div className="mt-auto">
                <span
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                  style={{ color: GOLD, opacity: hovered === i ? 1 : 0.5, transition: "opacity 0.3s" }}
                >
                  Learn More
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: hovered === i ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s" }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-10 rounded-[20px] px-8 py-10 text-center"
          style={{
            background: `linear-gradient(135deg, ${GOLD}0d, ${GOLD}06)`,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: `${GOLD}30`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(.2,.8,.2,1) 0.6s, transform 0.8s cubic-bezier(.2,.8,.2,1) 0.6s",
          }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 16 16" className="w-4 h-4" fill={GOLD}>
                <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
              </svg>
            ))}
          </div>
          <h3 className={`${display.className} text-2xl sm:text-3xl font-semibold text-[#2B2B2B] mb-2`}>
            Need a <span className="italic" style={{ color: GOLD }}>Flexible Payment Plan?</span>
          </h3>
          <p className="text-[14px] text-[#6A6A6A] mb-7 max-w-md mx-auto leading-relaxed">
            Our team can help you choose the best payment or EMI option before your treatment begins.
          </p>
          <a
            href="#book"
            className="cta-outline-btn inline-flex items-center gap-2 rounded-2xl px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: GOLD,
              color: "#8A6D1E",
            }}
          >
            Schedule Consultation
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

      </div>

      <style jsx>{`
        .cta-outline-btn:hover {
          background: rgba(201,162,39,0.1);
          color: #7A5D10;
        }
      `}</style>
    </section>
  );
}
