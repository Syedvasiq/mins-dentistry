"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

const GOLD = "#C9A227";

export default function EmergencyCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const fadeUp = (delay = "0s"): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 1s cubic-bezier(.2,.8,.2,1) ${delay}, transform 1s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <>
      <style>{`
        @keyframes ctaShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-shimmer-btn {
          background: linear-gradient(90deg, #C9A227, #EBD08C, #C9A227);
          background-size: 200% auto;
          animation: ctaShimmer 3s linear infinite;
          color: #1a1200;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          border-radius: 14px;
          padding: 16px 40px;
          cursor: pointer;
          transition: opacity 0.2s;
          display: inline-block;
          text-decoration: none;
        }
        .cta-shimmer-btn:hover { opacity: 0.88; }
        .cta-outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 14px;
          padding: 15px 36px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(201,162,39,0.5);
          color: rgba(255,255,255,0.7);
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .cta-outline-btn:hover {
          background: rgba(201,162,39,0.1);
          border-color: rgba(201,162,39,0.8);
          color: #EBD08C;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "#0B0B0A" }}
      >
        {/* Top border */}
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}55, transparent)` }} />

        {/* Large ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(ellipse, ${GOLD}10 0%, transparent 65%)` }}
          />
          <div className="absolute -left-40 top-0 w-[400px] h-[400px] rounded-full"
            style={{ background: `radial-gradient(circle, ${GOLD}07 0%, transparent 70%)` }} />
          <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] rounded-full"
            style={{ background: `radial-gradient(circle, ${GOLD}07 0%, transparent 70%)` }} />
        </div>

        {/* Decorative horizontal lines */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-[0.04]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-px w-full" style={{ background: GOLD }} />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 text-center">

          {/* Eyebrow */}
          <div style={fadeUp()}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>
              Start Your Journey
            </p>
            <span
              className="mx-auto block h-px w-16 mb-8"
              style={{
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.9s ease-out 0.2s",
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className={`${display.className} text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-semibold leading-[1.05] text-white`}
            style={fadeUp("0.1s")}
          >
            Ready for a Healthier,{" "}
            <span className="italic" style={{ color: GOLD }}>Brighter Smile?</span>
          </h2>

          {/* Subtext */}
          <p
            className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/40 max-w-lg mx-auto"
            style={fadeUp("0.2s")}
          >
            Book your consultation today and let our experts create the perfect treatment plan for you.
          </p>

          {/* Buttons */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={fadeUp("0.32s")}
          >
            <a href="#book" className="cta-shimmer-btn">
              Book Appointment
            </a>
            <a href="tel:+919008113963" className="cta-outline-btn">
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-[11px] text-white/20 uppercase tracking-[0.3em]" style={{ ...fadeUp("0.42s"), fontFamily: "monospace" }}>
            Open Today · 9:00 AM – 8:00 PM · +91 90081 13963
          </p>

        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}55, transparent)` }} />
      </section>
    </>
  );
}
