"use client";

import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const trustStats = [
  { value: 25000, suffix: "+", label: "Happy Patients" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Successful Implants" },
];

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 2 + (i % 3),
  duration: 14 + (i % 6) * 2,
  delay: (i % 7) * 1.3,
}));

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.4 6.98.63-5.28 4.7 1.6 6.87L12 17.35 5.8 21.1l1.6-6.87-5.28-4.7 6.98-.63L12 2.5z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1.5"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 hero-gold-wash" />

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-[#E8C878]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content — pt accounts for fixed header height */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-[80px] text-center">
        <p
          className={`hero-reveal mb-5 bg-gradient-to-r from-[#C9A227] via-[#F3DE9C] to-[#C9A227] bg-clip-text text-xs font-semibold uppercase tracking-[0.35em] text-transparent ${loaded ? "hero-reveal-in" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Trusted Dental Care — General, Cosmetic &amp; Implants
        </p>

        <h1 className={`${display.className} text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl`}>
          <span
            className={`hero-reveal block ${loaded ? "hero-reveal-in" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            Expert Dental Care
          </span>
          <span
            className={`hero-reveal mt-1 block bg-gradient-to-r from-[#D4AF37] via-[#F6E7B4] to-[#D4AF37] bg-clip-text text-transparent ${loaded ? "hero-reveal-in" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            For Every Smile
          </span>
        </h1>

        <p
          className={`hero-reveal mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/75 sm:text-base ${loaded ? "hero-reveal-in" : ""}`}
          style={{ animationDelay: "0.7s" }}
        >
          At Mins Dentistry, we provide comprehensive dental treatments — from
          routine check-ups and teeth whitening to dental implants and smile
          makeovers. Trusted by 25,000+ patients for gentle, effective care.
        </p>

        {/* CTAs */}
        <div
          className={`hero-reveal mt-9 flex flex-col items-center gap-4 sm:flex-row ${loaded ? "hero-reveal-in" : ""}`}
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href="/contact"
            className="shimmer-btn relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A227] via-[#EBD08C] to-[#C9A227] px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]"
          >
            <span className="relative z-10">Book Consultation</span>
          </a>
          <a
            href="/services"
            className="group flex items-center gap-2 rounded-2xl border border-[#D4AF37]/70 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F3DE9C] transition-colors duration-300 hover:bg-[#D4AF37]/10"
          >
            Explore Treatments
            <ArrowIcon />
          </a>
        </div>

        {/* Badge row */}
        <div
          className={`hero-reveal mt-10 flex flex-wrap items-center justify-center gap-3 ${loaded ? "hero-reveal-in" : ""}`}
          style={{ animationDelay: "1.3s" }}
        >
          {["Pain-Free Treatments", "Same-Day Appointments", "Advanced Technology"].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#F3DE9C]"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`hero-reveal scroll-float mt-8 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-white/60 ${loaded ? "hero-reveal-in" : ""}`}
          style={{ animationDelay: "1.7s" }}
        >
          Scroll to Discover
          <ChevronDownIcon />
        </div>
      </div>

      <style jsx>{`
        .hero-video {
          animation: kenburns 22s ease-in-out infinite alternate;
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .hero-vignette {
          background: radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%);
        }
        .hero-gold-wash {
          background: radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 60%);
          mix-blend-mode: screen;
        }
        .hero-reveal {
          opacity: 0;
          transform: translateY(24px);
        }
        .hero-reveal-in {
          animation: revealUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .particle {
          opacity: 0;
          animation: drift linear infinite;
        }
        @keyframes drift {
          0% { opacity: 0; transform: translate3d(0, 10px, 0); }
          10% { opacity: 0.55; }
          90% { opacity: 0.4; }
          100% { opacity: 0; transform: translate3d(6px, -60px, 0); }
        }
        .shimmer-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          animation: shimmer 4.5s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 88% { left: -60%; }
          100% { left: 130%; }
        }
        .scroll-float {
          animation: floatY 2.4s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-video, .particle, .shimmer-btn::after, .scroll-float, .hero-reveal-in {
            animation: none !important;
          }
          .hero-reveal { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
