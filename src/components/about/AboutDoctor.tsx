"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const CREDENTIALS = [
  { abbr: "BDS",              full: "Bachelor of Dental Surgery" },
  { abbr: "MDS",              full: "Master of Dental Surgery" },
  { abbr: "MPerio (RCSEd)",   full: "Member in Periodontics, Royal College of Surgeons Edinburgh" },
  { abbr: "MICIO (USA)",      full: "Member, International Congress of Implantologists" },
  { abbr: "FAALT (EAU)",      full: "Fellow, European Academy of Aesthetic & Laser Therapy" },
];
const EXPERTISE = ["Periodontics", "Dental Implants", "Laser Dentistry", "Digital Smile Design", "Full Mouth Rehabilitation", "Cosmetic Dentistry"];
const MEMBERSHIPS = ["Royal College of Surgeons, Edinburgh", "International Congress of Implantologists", "European Academy of Aesthetic Dentistry"];

export default function AboutDoctor() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="doctor" ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>Meet the Doctor</p>
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>
            Expert Care,{" "}
            <span className="italic" style={{ color: GOLD }}>Personal Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 items-start">

          {/* Portrait */}
          <div
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)", transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s" }}
          >
            <div className="relative rounded-[24px] overflow-hidden aspect-[3/4]">
              <Image
                src="/dr-sabiha.png"
                alt="Dr. Sabiha Kouser M S"
                fill
                className="object-cover object-top"
                sizes="420px"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${GOLD}30 0%, transparent 50%)` }} />
            </div>

            {/* Quote card */}
            <div
              className="mt-6 rounded-2xl p-6"
              style={{ background: "#0B0B0A", borderWidth: "1px", borderStyle: "solid", borderColor: `${GOLD}30` }}
            >
              <p className={`${display.className} text-lg italic text-white/80 leading-relaxed`}>
                "Every smile tells a story. Our mission is to ensure yours reflects confidence, health, and happiness."
              </p>
              <p className="mt-3 text-sm font-semibold" style={{ color: GOLD }}>— Dr. Sabiha Kouser M S</p>
            </div>
          </div>

          {/* Details */}
          <div
            className="flex flex-col gap-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(40px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}
          >
            <div>
              <h3 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>Dr. Sabiha Kouser M S</h3>
              <p className="mt-2 text-base font-medium" style={{ color: GOLD }}>Periodontist, Implantologist &amp; Laser Dentistry Specialist</p>
              <p className="mt-1 text-sm text-gray-400" style={{ fontFamily: "monospace" }}>10+ Years of Clinical Experience</p>
            </div>

            <span className="block h-px w-16" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />

            <p className="text-gray-600 text-[16px] leading-relaxed">
              Dr. Sabiha Kouser M S brings over a decade of clinical expertise to every patient interaction. Trained at some of the world's most prestigious institutions, she combines international-standard techniques with a deeply personal, compassionate approach to care.
            </p>

            {/* Qualifications */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-gray-400" style={{ fontFamily: "monospace" }}>Qualifications</p>
              <div className="grid grid-cols-1 gap-2">
                {CREDENTIALS.map((c, i) => (
                  <div
                    key={c.abbr}
                    className="flex items-center gap-4 rounded-xl px-4 py-3"
                    style={{
                      background: i % 2 === 0 ? `${GOLD}08` : "transparent",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: `${GOLD}22`,
                    }}
                  >
                    <span
                      className="shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider"
                      style={{ background: `${GOLD}18`, color: GOLD, minWidth: "4.5rem", textAlign: "center" }}
                    >
                      {c.abbr}
                    </span>
                    <span className="text-[13px] text-gray-600 leading-snug">{c.full}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3 text-gray-400" style={{ fontFamily: "monospace" }}>Areas of Expertise</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                {EXPERTISE.map(e => (
                  <li key={e} className="flex items-center gap-2 text-[14px] text-gray-700">
                    <span style={{ color: GOLD }}>✔</span> {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Memberships */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3 text-gray-400" style={{ fontFamily: "monospace" }}>Professional Memberships</p>
              <ul className="flex flex-col gap-2">
                {MEMBERSHIPS.map(m => (
                  <li key={m} className="flex items-center gap-2 text-[14px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="self-start rounded-2xl px-8 py-4 text-[15px] font-bold text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(201,162,39,0.4)]"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #EBD08C, ${GOLD})` }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
