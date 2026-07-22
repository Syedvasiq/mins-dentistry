"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const STEPS = [
  { step: "01", title: "Consultation", desc: "A thorough discussion of your dental concerns, goals, and medical history." },
  { step: "02", title: "Digital Diagnosis", desc: "Advanced imaging and digital scans for precise, comprehensive assessment." },
  { step: "03", title: "Treatment Plan", desc: "A personalized, transparent plan tailored to your needs and budget." },
  { step: "04", title: "Comfortable Treatment", desc: "Gentle, pain-conscious procedures in a calm, supportive environment." },
  { step: "05", title: "Smile Transformation", desc: "Witness the change — a healthier, more confident smile revealed." },
  { step: "06", title: "Long-term Follow-up", desc: "Ongoing care and check-ins to maintain your results for life." },
];

export default function AboutTimeline() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>Our Approach</p>
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>
            Your Treatment{" "}
            <span className="italic" style={{ color: GOLD }}>Journey</span>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div
            className="absolute top-10 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${GOLD}40, ${GOLD}60, ${GOLD}40, transparent)`,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.2s cubic-bezier(.4,0,.2,1) 0.3s",
              transformOrigin: "left",
            }}
          />

          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className="flex flex-col items-center text-center gap-4 pt-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s ease ${i * 0.12 + 0.4}s, transform 0.7s ease ${i * 0.12 + 0.4}s`,
                }}
              >
                {/* Circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{ background: "#0B0B0A", borderWidth: "2px", borderStyle: "solid", borderColor: GOLD }}
                >
                  <span className={`${display.className} text-xl font-semibold`} style={{ color: GOLD }}>{s.step}</span>
                </div>
                <h3 className={`${display.className} text-lg font-semibold text-gray-900`}>{s.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.step}
              className="flex gap-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity 0.7s ease ${i * 0.1 + 0.2}s, transform 0.7s ease ${i * 0.1 + 0.2}s`,
              }}
            >
              {/* Left — circle + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#0B0B0A", borderWidth: "2px", borderStyle: "solid", borderColor: GOLD }}
                >
                  <span className={`${display.className} text-sm font-semibold`} style={{ color: GOLD }}>{s.step}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: `${GOLD}30` }} />
                )}
              </div>
              {/* Right — text */}
              <div className="pb-8 pt-2">
                <h3 className={`${display.className} text-xl font-semibold text-gray-900`}>{s.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
