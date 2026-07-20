"use client";

import { useEffect, useRef, useState, ReactElement } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

type Pillar = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  cta: { label: string; href: string };
  Icon: () => ReactElement;
};

function ScannerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10c3-3.4 6.6-5 10-5s7 1.6 10 5" />
      <path d="M5 14h22" opacity="0.9" />
      <path d="M6 18h20" opacity="0.7" />
      <path d="M8 22h16" opacity="0.5" />
      <path d="M10 26c1.8 2 4 3 6 3s4.2-1 6-3" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 27c-4-2.9-9-6.7-9-11.6C7 12 9.6 9 13 9c1.9 0 3.6.9 4.5 2.3.9-1.4 2.6-2.3 4.5-2.3 3.4 0 6 3 6 6.4 0 4.9-5 8.7-9 11.6z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5.5l9 3.7v6.5c0 6.3-3.9 10.7-9 12.6-5.1-1.9-9-6.3-9-12.6V9.2l9-3.7z" />
      <path d="M11.5 16.3l3 3 6-6.3" />
    </svg>
  );
}

function SparkleToothIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7c-1.6 0-2.7.9-3.8.9-1.4 0-2.7 1.1-2.7 3.5 0 2.8.9 4.9 1.4 6.9.4 1.5.8 2.9 1.9 2.9s1.3-2 1.7-3.6c.3-1 .7-1.9 1.5-1.9s1.2.9 1.5 1.9c.4 1.6.7 3.6 1.7 3.6s1.5-1.4 1.9-2.9c.5-2 1.4-4.1 1.4-6.9 0-2.4-1.3-3.5-2.7-3.5-1.1 0-2.2-.9-3.8-.9z" />
      <path d="M24 6.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const pillars: Pillar[] = [
  {
    id: "care",
    eyebrow: "Patient-Focused Care",
    title: "Personalized Care",
    description:
      "Every treatment is designed around your individual dental needs, comfort level, and long-term oral health goals rather than a one-size-fits-all approach. We take the time to understand your dental history, concerns, and expectations before recommending any treatment. Our dentists walk you through every option clearly, so you always feel informed and in control of your care journey.",
    cta: { label: "Learn About Our Care", href: "/about" },
    Icon: CareIcon,
  },
  {
    id: "sterile",
    eyebrow: "Clinical Excellence",
    title: "Safe & Sterile",
    description:
      "Our clinic follows strict sterilization and hygiene protocols to maintain a safe, clean, and professional environment you can trust with confidence. Every instrument is sterilized to hospital-grade standards after each use, and our clinical spaces are thoroughly sanitized between appointments. We leave nothing to chance when it comes to your safety and wellbeing. From the moment you walk in.",
    cta: { label: "Our Clinical Standards", href: "/about" },
    Icon: ShieldIcon,
  },
  {
    id: "comfort",
    eyebrow: "Gentle Experience",
    title: "Comfort First",
    description:
      "From consultation to treatment, we focus on reducing stress and creating a calm, welcoming experience that helps every visit feel easier and more reassuring. Our team is trained to recognise dental anxiety and respond with patience and care. Whether it is your first visit or a complex procedure, we move at your pace and ensure you feel supported, heard, and at ease throughout.",
    cta: { label: "Book Your Visit", href: "/contact" },
    Icon: SparkleToothIcon,
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number>(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a - 1 + pillars.length) % pillars.length);
  const next = () => setActive((a) => (a + 1) % pillars.length);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Heading */}
        <div>
          <span className={`why-divider block h-px w-20 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent ${visible ? "why-divider-in" : ""}`} />
          <p className={`why-fade mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#AF8824] ${visible ? "why-fade-in" : ""}`}>
            Why Choose MINS Dentistry
          </p>
          <h2
            className={`${display.className} why-fade mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] text-[#1F1A17] sm:text-4xl md:text-5xl ${visible ? "why-fade-in" : ""}`}
            style={{ animationDelay: "0.08s" }}
          >
            Exceptional Dentistry Built on Precision, Trust, and a Better Patient Experience.
          </h2>
        </div>

        {/* Desktop — 3 cards */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.id}
              className={`why-card group relative flex min-h-[430px] flex-col overflow-hidden rounded-[30px] bg-white p-8 transition-all duration-500 hover:-translate-y-2 ${visible ? "why-card-in" : ""}`}
              style={{ animationDelay: `${i * 0.14}s` }}
            >
              <div className="absolute inset-0 rounded-[30px] border border-gray-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#C9A227]/20 text-[#B58A23]">
                    <pillar.Icon />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A37B1B]">
                    {pillar.eyebrow}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug text-[#201B17]">
                  {pillar.title}
                </h3>
                <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent transition-all duration-500 group-hover:w-24" />

                <p className="mt-5 text-[15px] leading-7 text-[#5F574D]">
                  {pillar.description}
                </p>

                <div className="mt-auto pt-7">
                  <a
                    href={pillar.cta.href}
                    className="group/btn inline-flex items-center gap-2 rounded-2xl border border-[#C9A227] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#8A6D1E] transition-colors duration-300 hover:bg-[#C9A227]/10"
                  >
                    {pillar.cta.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile — one card at a time slider */}
        <div className="mt-12 md:hidden">
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (diff > 40) next();
              else if (diff < -40) prev();
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="relative min-h-[420px] w-full shrink-0 flex-col overflow-hidden rounded-[30px] bg-white p-8 flex"
                >
                  <div className="absolute inset-0 rounded-[30px] border border-gray-100" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#C9A227]/20 text-[#B58A23]">
                        <pillar.Icon />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A37B1B]">
                        {pillar.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold leading-snug text-[#201B17]">{pillar.title}</h3>
                    <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#C9A227] to-transparent" />
                    <p className="mt-5 text-[15px] leading-7 text-[#5F574D]">{pillar.description}</p>
                    <div className="mt-auto pt-7">
                      <a
                        href={pillar.cta.href}
                        className="group/btn inline-flex items-center gap-2 rounded-2xl border border-[#C9A227] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#8A6D1E] transition-colors duration-300 hover:bg-[#C9A227]/10"
                      >
                        {pillar.cta.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots + arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/40 text-[#B58A23] transition hover:bg-[#C9A227]/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="flex gap-2">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#C9A227]" : "w-2 bg-[#C9A227]/30"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/40 text-[#B58A23] transition hover:bg-[#C9A227]/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .why-fade { opacity: 0; transform: translateY(26px); }
        .why-fade-in { animation: whyUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes whyUp { to { opacity: 1; transform: translateY(0); } }

        .why-divider { transform: scaleX(0); transform-origin: left; }
        .why-divider-in { animation: whyLine 0.8s ease-out forwards; }
        @keyframes whyLine { to { transform: scaleX(1); } }

        .why-card { opacity: 0; transform: translateY(36px); filter: blur(8px); }
        .why-card-in { animation: whyCard 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes whyCard { to { opacity: 1; transform: translateY(0); filter: blur(0); } }

        @media (prefers-reduced-motion: reduce) {
          .why-fade, .why-card { opacity: 1; transform: none; filter: none; }
          .why-fade-in, .why-divider-in, .why-card-in { animation: none !important; }
          .why-divider { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
