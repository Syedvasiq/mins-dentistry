"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const GOLD = "#C9A227";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

const CARE_TYPES = [
  {
    bold: "Preventive Care:",
    text: "Regular check-ups, teeth cleanings, oral cancer screenings, and patient education on maintaining good oral hygiene habits for life.",
  },
  {
    bold: "Restorative Treatments:",
    text: "Procedures to restore the function and aesthetics of your teeth in the case of dental decay, trauma, or disease — including fillings, root canals, crowns, and dental implants.",
  },
  {
    bold: "Cosmetic Enhancements:",
    text: "Services designed to improve your smile's appearance, including teeth whitening, porcelain veneers, invisible aligners, and more.",
  },
  {
    bold: "Emergency Care:",
    text: "We're here for dental emergencies. Call us anytime, day or night, and we'll provide a calming, reassuring presence, quickly advise you on what to do next, and get you in for an appointment ASAP.",
  },
  {
    bold: "Surgical Needs:",
    text: "Here's hoping you never need oral surgery — but if you do, we can handle it all under one roof at MINS Dentistry.",
  },
];

const WHY_MATTERS = [
  {
    bold: "Whole-body wellness connection:",
    text: "Your oral health doesn't exist in isolation — it is closely linked to your overall health. Comprehensive care helps address conditions that can impact or be affected by other health issues. We want to know you as a whole person.",
  },
  {
    bold: "Convenience and comfort:",
    text: "Comprehensive dental care means no unnecessary referrals, no trips to unfamiliar clinics for imaging or specialist procedures. Everything you need is available in one calm, familiar environment.",
  },
  {
    bold: "Personalised, consistent care:",
    text: "Getting to know our patients well means we can provide treatment plans tailored to your unique needs. Seeing the same providers consistently also means better monitoring of your oral health over time.",
  },
  {
    bold: "Continuity of care:",
    text: "Working with specialists who collaborate every day is a significant difference from a fragmented approach. Your providers communicate clearly and effectively about every detail of your dental care.",
  },
];

const SERVICES_LIST = [
  ["Tooth-Coloured Fillings", "Porcelain Veneers", "Full-Mouth Restoration", "Botox", "Emergency Care"],
  ["Exams & Cleanings", "Dental Bridges", "Teeth Whitening", "Root Canals", "Sedation & Anaesthesia"],
  ["Dental Crowns", "Dentures & All-on-X", "Invisalign & Braces", "Tooth Extraction", "Dental Implants"],
];

export default function AboutComprehensiveCare() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const fadeUp = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.9s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.9s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* ── Main heading ── */}
        <div style={fadeUp("0s")}>
          <h2
            className="text-xs font-semibold uppercase tracking-[0.35em] mb-5"
            style={{ color: "#B8912A", fontFamily: "monospace" }}
          >
            The Importance of Comprehensive Dental Care
          </h2>
          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] w-full mb-12">
            Dental care is much more than just addressing immediate issues or attending
            occasional check-ups. At MINS Dentistry, we believe in the value of
            comprehensive dental care for maintaining overall health, creating a radiant,
            confidence-boosting smile, and building a lasting relationship around your
            oral wellbeing. Here is what comprehensive dental care means — and why it
            matters so much.
          </p>
        </div>

        {/* ── What Is Comprehensive Dental Care ── */}
        <div style={fadeUp("0.1s")} className="mb-12">
          <h3 className={`${display.className} text-2xl font-semibold text-[#1F1A17] mb-4`}>
            What Is Comprehensive Dental Care?
          </h3>
          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] mb-5 w-full">
            Comprehensive dental care is a holistic, big-picture, long-term approach to
            oral health which spans several key areas:
          </p>

          {/* Bordered list */}
          <div
            className="flex flex-col gap-3 pl-5 w-full"
            style={{ borderLeft: `3px solid ${GOLD}` }}
          >
            {CARE_TYPES.map(({ bold, text }) => (
              <p key={bold} className="text-[14px] leading-relaxed text-[#5F574D]">
                <span className="font-bold text-[#1F1A17]">{bold}</span>{" "}{text}
              </p>
            ))}
          </div>

          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] mt-6 w-full">
            The goal of comprehensive care is not solely to address immediate issues but
            to maintain optimal oral health over the long term. We nurture our
            relationships with patients because we believe that strong relationships
            result in better, more personalised care.
          </p>
        </div>

        {/* ── Why Comprehensive Dental Care Matters ── */}
        <div style={fadeUp("0.2s")} className="mb-14">
          <h3 className={`${display.className} text-2xl font-semibold text-[#1F1A17] mb-4`}>
            Why Comprehensive Dental Care Matters
          </h3>
          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] mb-5 w-full">
            What does comprehensive care mean for you? Here are four key reasons why it
            makes a significant difference:
          </p>

          {/* Bordered list */}
          <div
            className="flex flex-col gap-3 pl-5 w-full"
            style={{ borderLeft: `3px solid ${GOLD}` }}
          >
            {WHY_MATTERS.map(({ bold, text }) => (
              <p key={bold} className="text-[14px] leading-relaxed text-[#5F574D]">
                <span className="font-bold text-[#1F1A17]">{bold}</span>{" "}{text}
              </p>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px mb-14"
          style={{ background: `linear-gradient(to right, ${GOLD}55, transparent)` }}
        />

        {/* ── Services grid ── */}
        <div style={fadeUp("0.3s")}>
          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] mb-8 w-full">
            At MINS Dentistry, we take pride in delivering comprehensive dental care that
            considers all facets of your oral health. We are proud to offer a wide range
            of services, including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {SERVICES_LIST.map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-2">
                {col.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#5F574D]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
