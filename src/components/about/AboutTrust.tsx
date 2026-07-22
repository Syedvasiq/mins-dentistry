"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const TRUST_POINTS = [
  "Experienced Dental Specialists",
  "Digital Smile Design",
  "Advanced Diagnostic Equipment",
  "International Sterilization Protocols",
  "Personalized Treatment Planning",
  "Premium Patient Experience",
  "Transparent Pricing",
  "Emergency Dental Care",
];

export default function AboutTrust() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — clinic image */}
          <div
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)", transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
              <Image
                src="/dr-sabiha.png"
                alt="Mins Dentistry Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 700px"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${GOLD}15 0%, transparent 60%)` }} />
            </div>
          </div>

          {/* Right — trust points */}
          <div
            className="flex flex-col gap-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(40px)", transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: GOLD, fontFamily: "monospace" }}>Why Patients Trust Us</p>
            <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight`}>
              A Clinic Built on{" "}
              <span className="italic" style={{ color: GOLD }}>Trust &amp; Excellence</span>
            </h2>
            <span className="block h-px w-16" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
            <p className="text-gray-600 text-[16px] leading-relaxed">
              From your first consultation to your final follow-up, every step of your journey at Mins Dentistry is designed to exceed expectations.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_POINTS.map((point, i) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-[14px] text-gray-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.6s ease ${i * 0.07 + 0.4}s, transform 0.6s ease ${i * 0.07 + 0.4}s`,
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold"
                    style={{ background: `${GOLD}18`, color: GOLD }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
