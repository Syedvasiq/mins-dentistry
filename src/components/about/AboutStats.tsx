"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const STATS = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 1500, suffix: "+", label: "Smile Transformations" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

function Counter({ value, suffix, visible }: { value: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutStats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 overflow-hidden" style={{ background: "#0B0B0A" }}>
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${i * 0.12 + 0.1}s, transform 0.7s ease ${i * 0.12 + 0.1}s`,
              }}
            >
              <p className={`${display.className} text-5xl sm:text-6xl font-semibold`} style={{ color: GOLD }}>
                <Counter value={s.value} suffix={s.suffix} visible={visible} />
              </p>
              <p className="text-white/55 text-sm uppercase tracking-[0.25em]" style={{ fontFamily: "monospace" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
