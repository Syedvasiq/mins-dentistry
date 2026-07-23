"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const fadeLeft = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-32px)",
    transition: "opacity 0.9s cubic-bezier(.2,.8,.2,1) 0.1s, transform 0.9s cubic-bezier(.2,.8,.2,1) 0.1s",
  };

  const fadeRight = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(32px)",
    transition: "opacity 0.9s cubic-bezier(.2,.8,.2,1) 0.25s, transform 0.9s cubic-bezier(.2,.8,.2,1) 0.25s",
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — text */}
          <div style={fadeLeft} className="flex flex-col gap-6">

            {/* Large bold heading */}
            <h2 className={`${display.className} text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-[1.08] tracking-tight text-[#1F1A17]`}>
              Meet MINS Dentistry: Your Premier Dental Clinic in Shimoga
            </h2>

            {/* Body text */}
            <p className="text-[15px] font-medium leading-relaxed text-[#5F574D] max-w-xl">
              MINS Dentistry is a specialist dental practice offering comprehensive oral healthcare under one roof. Founded by Dr. Sabiha Kouser M S — a qualified Periodontist, Implantologist, and Laser Dentistry Specialist — the clinic brings together advanced dental technology with a warm, patient-first environment.
            </p>
            <p className="text-[15px] font-medium leading-relaxed text-[#5F574D] max-w-xl">
              From routine check-ups to full mouth rehabilitations, every treatment is planned with precision and care. We take the time to understand your needs, walk you through every option, and ensure your experience is comfortable, clear, and completely tailored to you.
            </p>

            {/* Gold subheading + paragraph — matching reference */}
            <div className="mt-2 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A]" style={{ fontFamily: "monospace" }}>
                Excellence &amp; Continuity of Care
              </p>
              <p className="text-[15px] font-medium leading-relaxed text-[#5F574D] max-w-xl">
                At MINS Dentistry, our team is dedicated, skilled, and built for the long term. We pride ourselves on low staff turnover — so you can expect to see the same familiar faces visit after visit. Our personalised care, punctual appointments, and genuinely warm team make every visit feel effortless.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { value: "4.9", label: "Google Rating", sub: "★★★★★", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
                { value: "14+", label: "Years Experience", sub: "Est. 2010", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
                { value: "1500+", label: "Patients Treated", sub: "Trusted Care", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              ].map((card, i) => (
                <div
                  key={card.label}
                  className="flex flex-col gap-2 rounded-2xl p-4"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.6s ease ${i * 0.1 + 0.5}s, transform 0.6s ease ${i * 0.1 + 0.5}s`,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: `${GOLD}30`,
                    background: `${GOLD}06`,
                  }}
                >
                  <div className="flex items-center gap-2" style={{ color: GOLD }}>
                    {card.icon}
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A37B1B]" style={{ fontFamily: "monospace" }}>{card.label}</span>
                  </div>
                  <p className={`${display.className} text-3xl font-semibold text-[#1F1A17]`}>{card.value}</p>
                  <p className="text-[12px] text-[#8C877A]">{card.sub}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — image */}
          <div style={fadeRight} className="relative w-full h-full">
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/about-us.png"
                alt="MINS Dentistry Clinic"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
