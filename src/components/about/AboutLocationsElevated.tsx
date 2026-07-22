"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const GOLD = "#C9A227";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

const LOCATIONS = [
  { name: "Shimoga", image: "/location.png", alt: "MINS Dentistry Shimoga clinic entrance" },
  { name: "Bangalore", image: "/location.png", alt: "MINS Dentistry Bangalore treatment room" },
];

const SECTIONS = [
  {
    heading: "First Impressions Matter",
    body: "We believe the moment you walk in sets the tone for your entire visit. That's why every MINS Dentistry space is designed to feel warm and considered rather than clinical — a first impression that puts you at ease before treatment even begins.",
  },
  {
    heading: "Attentive Care, Start to Finish",
    body: "Our team is trained to anticipate your needs, answer your questions fully, and check in on your comfort throughout your visit — so you leave feeling looked after, not just treated.",
  },
  {
    heading: "Treatment Plans Built Around You",
    body: "No two patients are alike, so we take the time to understand your dental history, lifestyle, and preferences before recommending a path forward. The result is a plan that fits your life, not a one-size-fits-all script.",
  },
  {
    heading: "A Dental Practice That Knows Your Neighborhood",
    body: "MINS Dentistry is built into the communities we serve. We hold ourselves to the same values our patients do, aiming to deliver clinical excellence alongside a genuinely personal experience.",
  },
  {
    heading: "Two Locations, One Standard of Care",
    body: "MINS Dentistry operates from two locations — Shimoga and Bangalore — each equipped with modern diagnostic technology. Digital X-rays, intraoral cameras, and 3D imaging help our team diagnose accurately and plan treatment with confidence, wherever you visit us.",
  },
  {
    heading: "Why Patients Choose MINS Dentistry",
    body: "Choosing MINS Dentistry means choosing a patient-first approach, where your comfort shapes every decision we make. We want every patient to feel heard, understood, and cared for — walking out ready to take on whatever's next with a smile they trust.",
  },
  {
    heading: "Comprehensive Dental Care, Close to Home",
    body: "Our team is here to help you start — or continue — a healthier dental journey. Book an appointment online, or get in touch to learn more about the care and services MINS Dentistry offers across both our locations.",
  },
];

export default function AboutLocationsElevated() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
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

        {/* ── Locations heading ── */}
        <div style={fadeUp("0s")} className="mb-12">
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-tight text-[#1F1A17] mb-5`}>
            We Have Two Beautiful Locations
          </h2>
          <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] w-full">
            We want to change how people feel about visiting the dentist by creating beautiful spaces and streamlining every step of your visit. We know how much atmosphere matters, so every MINS Dentistry location is designed to calm and reassure our patients — an experience that carries through from friendly faces to efficient systems and state-of-the-art technology.
          </p>
        </div>

        {/* ── Location cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {LOCATIONS.map(({ name, image, alt }, i) => (
            <div
              key={name}
              style={fadeUp(`${0.1 + i * 0.1}s`)}
              className="bg-gray-50 rounded-sm overflow-hidden flex flex-col"
            >
              <p className="text-center pt-6 pb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A]" style={{ fontFamily: "monospace" }}>
                {name}
              </p>
              <div className="relative w-full aspect-[16/7] px-6">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 text-[13px] font-bold uppercase tracking-widest text-black transition-opacity duration-300 hover:opacity-90 rounded-sm"
                  style={{ background: GOLD }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px mb-20" style={{ background: `linear-gradient(to right, transparent, ${GOLD}40, transparent)` }} />

        {/* ── Elevated experience heading ── */}
        <div style={fadeUp("0s")} className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.35em] mb-6" style={{ color: "#B8912A", fontFamily: "monospace" }}>
            An Elevated Experience at MINS Dentistry
          </h2>
        </div>

        {/* ── Body sections ── */}
        <div className="flex flex-col gap-8 w-full">
          {SECTIONS.map(({ heading, body }, i) => (
            <div key={heading} style={fadeUp(`${0.05 + i * 0.06}s`)}>
              <h3 className={`${display.className} text-2xl font-semibold text-[#1F1A17] mb-2`}>{heading}</h3>
              <p className="text-[15px] font-medium leading-[1.85] text-[#5F574D] w-full">{body}</p>
            </div>
          ))}
        </div>

        {/* ── Closing CTA ── */}
        <div style={fadeUp(`${0.05 + SECTIONS.length * 0.06 + 0.1}s`)} className="text-center mt-16">
          <p className={`${display.className} text-3xl sm:text-4xl font-semibold uppercase tracking-wide mb-8`} style={{ color: GOLD }}>
            More Reasons to Smile
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-[13px] font-bold uppercase tracking-widest text-black transition-opacity duration-300 hover:opacity-90 rounded-sm"
            style={{ background: GOLD }}
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
