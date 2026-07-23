"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"] });

const SERVICE_HREFS: Record<string, string> = {
  "Single Tooth Implant":      "/single-tooth-implant",
  "Multiple Tooth Implants":   "/multiple-tooth-implants",
  "Full Mouth Rehabilitation": "/full-mouth-rehabilitation",
  "Bone Grafting":             "/bone-grafting",
  "Root Canal Treatment":      "/root-canal-treatment",
  "Tooth Filling":             "/tooth-filling",
  "Dental Crowns":             "/dental-crowns",
  "Dental Bridges":            "/dental-bridges",
  "Dentures":                  "/dentures",
  "Tooth Extraction":          "/tooth-extraction",
  "Teeth Whitening":           "/teeth-whitening",
  "Smile Makeover":            "/smile-makeover",
  "Dental Veneers":            "/dental-veneers",
  "Invisible Aligners":        "/invisible-aligners",
  "Metal Braces":              "/metal-braces",
  "Ceramic Braces":            "/ceramic-braces",
  "Gum Treatment":             "/gum-treatment",
  "Flap Surgery":              "/flap-surgery",
  "Frenectomy":                "/frenectomy",
  "Oral Surgery":              "/oral-surgery",
};

const ACCENT = "#C9A227";
const BG     = "#0B0B0A";

/* ── Dental Implants items ── */
const IMPLANT_ITEMS = [
  { label: "Single Tooth Implant",     desc: "Replace one missing tooth with a permanent, natural-looking implant crown.",         image: "/implants/single-tooth-implant.png" },
  { label: "Multiple Tooth Implants",  desc: "Restore several missing teeth individually without affecting adjacent teeth.",        image: "/implants/multiple-tooth-implant.png" },
  { label: "Full Mouth Rehabilitation",desc: "A complete restoration of all teeth using implants, crowns, and bridges.",            image: "/implants/Full-Mouth-Rehabilitation.png" },
  { label: "Bone Grafting",            desc: "Build up jawbone density to support implant placement where bone has been lost.",     image: "/implants/bone-crafting.png" },

];

/* ── Light-bg service categories ── */
type Item = { label: string; desc: string; image: string | null };

const LIGHT_CATEGORIES: { title: string; items: Item[] }[] = [
  {
    title: "General & Restorative",
    items: [
      { label: "Root Canal Treatment", desc: "Remove infected pulp and seal the tooth to relieve pain and prevent extraction.",   image: "/resorative/root-canal-treatment.png" },
      { label: "Tooth Filling",        desc: "Restore decayed or damaged teeth with durable, tooth-coloured composite fillings.", image: "/resorative/tooth-filling.png" },
      { label: "Dental Crowns",        desc: "Cap a weakened or broken tooth to restore its shape, strength, and appearance.",    image: "/resorative/dental-crowns.png" },
      { label: "Dental Bridges",       desc: "Bridge the gap of one or more missing teeth using adjacent teeth as anchors.",      image: "/resorative/dental-bridges.png" },
      { label: "Dentures",             desc: "Custom-fitted removable appliances to replace multiple or all missing teeth.",      image: "/resorative/dentures.png" },
      { label: "Tooth Extraction",     desc: "Safe, gentle removal of severely damaged, infected, or overcrowded teeth.",         image: "/resorative/tooth-extraction.png" },
    ],
  },
];

const COSMETIC_ITEMS: Item[] = [
  { label: "Teeth Whitening",    desc: "Professional-grade whitening to brighten your smile by several shades in one visit.", image: "/cometic/teeth-whitening.png" },
  { label: "Smile Makeover",     desc: "A tailored combination of treatments designed to transform your smile completely.",   image: "/cometic/smile-makeover.png" },
  { label: "Dental Veneers",     desc: "Ultra-thin porcelain shells bonded to the front of teeth for a flawless finish.",    image: "/cometic/dental-veeners.png" },
  { label: "Invisible Aligners", desc: "Discreet, removable aligners that gradually straighten teeth without metal brackets.", image: "/cometic/Invisible-Aligners.png" },
  { label: "Metal Braces",       desc: "Reliable, time-tested orthodontic braces for precise alignment of all teeth.",        image: "/cometic/metal-braces.png" },
  { label: "Ceramic Braces",     desc: "Tooth-coloured brackets that blend with your smile while delivering effective correction.", image: "/cometic/Ceramic-Braces.png" },
];

/* ══════════════════════════════════════════════
   Light section — mirrors dental implants layout
   Image: right full-bleed  |  Content: left
   BG: #F5F6F8
══════════════════════════════════════════════ */
function LightSection({ title, items }: { title: string; items: Item[] }) {
  const ref = useRef<HTMLElement>(null);
  const [visible,   setVisible]   = useState(false);
  const [activeSub, setActiveSub] = useState(items[0].label);
  const [parallaxY, setParallaxY] = useState(0);

  const activeItem = items.find((it) => it.label === activeSub)!;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setParallaxY((rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.85s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.85s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] overflow-hidden"
      style={{ backgroundColor: "#F5F6F8" }}
    >
      {/* ── Right: full-bleed background images (same technique as dental implants) ── */}
      {items.map((item) =>
        item.image ? (
          <div
            key={item.label}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeSub === item.label ? 1 : 0 }}
          >
            <div
              className="absolute -inset-x-0 -inset-y-[10%]"
              style={{ transform: `translateY(${parallaxY}px)`, transition: "transform 0.12s linear" }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            {/* gradient LEFT-to-RIGHT so content on right stays readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/10 via-[#F5F6F8]/70 to-[#F5F6F8]" />
          </div>
        ) : null
      )}

      {/* Fallback for no-image items */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: activeItem.image ? 0 : 1 }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "#F5F6F8" }} />
      </div>

      {/* ── Content — right side, same padding as dental implants left side ── */}
      <div
        className="relative z-10 py-12 lg:py-16"
        style={{ ...fadeIn() }}
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 flex justify-end">
          <div className="w-full max-w-lg">
            <h3
              className={`${display.className} text-3xl font-semibold leading-snug text-gray-900 sm:text-4xl lg:text-5xl`}
              style={fadeIn("0.08s")}
            >
              {title}
            </h3>

            <ul className="mt-10 flex flex-col" style={{ borderTop: `1px solid ${ACCENT}33` }}>
              {items.map((item, idx) => {
                const isActive = activeSub === item.label;
                return (
                  <li key={item.label} style={{ borderBottom: `1px solid ${ACCENT}33` }}>
                    <button
                      onClick={() => setActiveSub(item.label)}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300"
                          style={{ backgroundColor: isActive ? ACCENT : `${ACCENT}22`, color: isActive ? "#fff" : "#8C877A" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-[15px] font-semibold transition-colors duration-300"
                          style={{ color: isActive ? ACCENT : "#3a3a3a" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? ACCENT : "#8C877A"} strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-300"
                        style={{ transform: isActive ? "translateX(4px)" : "translateX(0)" }}
                      >
                        <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isActive ? "64px" : "0" }}
                    >
                      <p className="pb-4 pl-11 text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10" style={fadeIn("0.22s")}>
              <Link
                href={SERVICE_HREFS[activeSub] ?? "/general-restorative-dentistry"}
                className="inline-flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9A227]/10"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GUM_ITEMS: Item[] = [
  { label: "Gum Treatment", desc: "Deep cleaning and therapy to treat gum disease and restore healthy gum tissue.",            image: "/gum traetment/gum-treatment.png" },
  { label: "Flap Surgery",  desc: "Surgical access to clean deep pockets of infection and reattach gum tissue.",              image: "/gum traetment/flap-surgery.png" },
  { label: "Frenectomy",    desc: "Removal of restrictive tissue connecting the lip or tongue to improve function.",          image: "/gum traetment/frenectomy-procedure.png" },
  { label: "Oral Surgery",  desc: "Minor surgical procedures performed in-clinic with precision and patient comfort in mind.", image: "/gum traetment/oral-surgery.png" },
];

/* ══════════════════════════════════════════════
   Cosmetic section — same layout as Dental Implants
   Content left, image bleeds right, BG #FCF8F3
══════════════════════════════════════════════ */
function CosmeticSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible,   setVisible]   = useState(false);
  const [activeSub, setActiveSub] = useState(COSMETIC_ITEMS[0].label);
  const [parallaxY, setParallaxY] = useState(0);

  const activeItem = COSMETIC_ITEMS.find((it) => it.label === activeSub) ?? COSMETIC_ITEMS[0];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setParallaxY((rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.85s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.85s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] overflow-hidden"
      style={{ backgroundColor: "#FCF8F3" }}
    >
      {/* Background images — bleed right, gradient left-to-right covers content side */}
      {COSMETIC_ITEMS.map((item) =>
        item.image ? (
          <div
            key={item.label}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeSub === item.label ? 1 : 0 }}
          >
            <div
              className="absolute -inset-x-0 -inset-y-[10%]"
              style={{ transform: `translateY(${parallaxY}px)`, transition: "transform 0.12s linear" }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FCF8F3] via-[#FCF8F3]/80 to-[#FCF8F3]/10" />
          </div>
        ) : null
      )}

      {/* Fallback */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: activeItem.image ? 0 : 1 }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "#FCF8F3" }} />
      </div>

      {/* Content — left, same container + padding as dental implants */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-16"
        style={fadeIn()}
      >
        <h3
          className={`${display.className} text-3xl font-semibold leading-snug text-gray-900 sm:text-4xl lg:text-5xl`}
          style={fadeIn("0.08s")}
        >
          Cosmetic &amp; Smile
        </h3>

        <ul className="mt-10 max-w-lg flex flex-col" style={{ borderTop: `1px solid ${ACCENT}33` }}>
          {COSMETIC_ITEMS.map((item, idx) => {
            const isActive = activeSub === item.label;
            return (
              <li key={item.label} style={{ borderBottom: `1px solid ${ACCENT}33` }}>
                <button
                  onClick={() => setActiveSub(item.label)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300"
                      style={{ backgroundColor: isActive ? ACCENT : `${ACCENT}22`, color: isActive ? "#fff" : "#8C877A" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[15px] font-semibold transition-colors duration-300"
                      style={{ color: isActive ? ACCENT : "#3a3a3a" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={isActive ? ACCENT : "#8C877A"} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-300"
                    style={{ transform: isActive ? "translateX(4px)" : "translateX(0)" }}
                  >
                    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isActive ? "64px" : "0" }}
                >
                  <p className="pb-4 pl-11 text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10" style={fadeIn("0.22s")}>
          <Link
            href={SERVICE_HREFS[activeSub] ?? "/cosmetic-dentistry"}
            className="inline-flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9A227]/10"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   Gum Care — same as General & Restorative
   Content right, image bleeds left, BG #7A4050
══════════════════════════════════════════════ */
function GumSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible,   setVisible]   = useState(false);
  const [activeSub, setActiveSub] = useState(GUM_ITEMS[0].label);
  const [parallaxY, setParallaxY] = useState(0);

  const activeItem = GUM_ITEMS.find((it) => it.label === activeSub) ?? GUM_ITEMS[0];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setParallaxY((rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.85s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.85s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  const BG_GUM = "#7A4050";

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] overflow-hidden"
      style={{ backgroundColor: BG_GUM }}
    >
      {/* Background images — bleed left, gradient right-to-left covers content on right */}
      {GUM_ITEMS.map((item) =>
        item.image ? (
          <div
            key={item.label}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeSub === item.label ? 1 : 0 }}
          >
            <div
              className="absolute -inset-x-0 -inset-y-[10%]"
              style={{ transform: `translateY(${parallaxY}px)`, transition: "transform 0.12s linear" }}
            >
              <Image src={item.image} alt={item.label} fill className="object-cover object-center" sizes="100vw" />
            </div>
            <div className="absolute inset-0" style={{ background: `linear-gradient(to left, ${BG_GUM} 35%, ${BG_GUM}cc 60%, ${BG_GUM}22 100%)` }} />
          </div>
        ) : null
      )}

      {/* Fallback */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: activeItem.image ? 0 : 1 }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: BG_GUM }} />
      </div>

      {/* Content — right side */}
      <div className="relative z-10 py-12 lg:py-16" style={fadeIn()}>
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 flex justify-end">
          <div className="w-full max-w-lg">
            <h3
              className={`${display.className} text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl`}
              style={{ color: "#F9EEF1", ...fadeIn("0.08s") }}
            >
              Gum Care
            </h3>

            <ul className="mt-10 flex flex-col" style={{ borderTop: `1px solid rgba(249,238,241,0.2)` }}>
              {GUM_ITEMS.map((item, idx) => {
                const isActive = activeSub === item.label;
                return (
                  <li key={item.label} style={{ borderBottom: `1px solid rgba(249,238,241,0.2)` }}>
                    <button
                      onClick={() => setActiveSub(item.label)}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300"
                          style={{ backgroundColor: isActive ? ACCENT : `${ACCENT}33`, color: isActive ? "#fff" : "#D4A8B0" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-[15px] font-semibold transition-colors duration-300"
                          style={{ color: isActive ? ACCENT : "#E8CDD2" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? ACCENT : "#D4A8B0"} strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-300"
                        style={{ transform: isActive ? "translateX(4px)" : "translateX(0)" }}
                      >
                        <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isActive ? "64px" : "0" }}
                    >
                      <p className="pb-4 pl-11 text-[13px] leading-relaxed" style={{ color: "#C9A0AA" }}>{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10" style={fadeIn("0.22s")}>
              <Link
                href={SERVICE_HREFS[activeSub] ?? "/gum-care"}
                className="inline-flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9A227]/10"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   Main export
══════════════════════════════════════════════ */
export default function Services() {
  const introRef = useRef<HTMLDivElement>(null);
  const bodyRef  = useRef<HTMLDivElement>(null);

  const [introVisible, setIntroVisible] = useState(false);
  const [bodyVisible,  setBodyVisible]  = useState(true);
  const [activeSub,    setActiveSub]    = useState(IMPLANT_ITEMS[0].label);

  const [parallaxY,    setParallaxY]    = useState(0);

  const activeItem = IMPLANT_ITEMS.find((it) => it.label === activeSub) ?? IMPLANT_ITEMS[0];

  useEffect(() => {
    const node = introRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIntroVisible(true); },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const node = bodyRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setBodyVisible(true); },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = bodyRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setParallaxY((rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = (visible: boolean, delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.85s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.85s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <>
      {/* ── Intro ── */}
      <section ref={introRef} className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div style={fadeIn(introVisible)}>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A]"
              style={{ fontFamily: "monospace" }}
            >
              Our Services
            </p>
            <span
              className="mt-4 block h-px w-16 bg-gradient-to-r from-[#C9A227] via-[#F3DE9C] to-transparent"
              style={{
                transform: introVisible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.8s ease-out 0.15s",
              }}
            />
            <h2
              className={`${display.className} mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-[3.25rem]`}
              style={fadeIn(introVisible, "0.1s")}
            >
              Comprehensive Care, Crafted for Every Smile.
            </h2>
            <p
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-gray-600"
              style={fadeIn(introVisible, "0.2s")}
            >
              From your first consultation to your final result, every treatment is delivered with precision, care, and a commitment to your long-term oral health.
            </p>
          </div>
        </div>
      </section>

      {/* ── All service sections — siblings with sticky + increasing zIndex ── */}
      <div style={{ position: "relative" }}>

        {/* 1. Dental Implants — sticky z1 */}
        <section
          ref={bodyRef}
          className="relative min-h-[70vh] overflow-hidden bg-[#0B0B0A]"
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          {IMPLANT_ITEMS.map((item) =>
            item.image ? (
              <div
                key={item.label}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: activeSub === item.label ? 1 : 0 }}
              >
                <div
                  className="absolute -inset-x-0 -inset-y-[10%]"
                  style={{ transform: `translateY(${parallaxY}px)`, transition: "transform 0.12s linear" }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={item.label === IMPLANT_ITEMS[0].label}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A] via-[#0B0B0A]/75 to-[#0B0B0A]/20" />
              </div>
            ) : null
          )}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeItem.image ? 0 : 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0A] via-[#111008] to-[#1a1508]" />
          </div>
          <div
            className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-16"
            style={fadeIn(bodyVisible)}
          >
            <h3
              className={`${display.className} text-3xl font-semibold leading-snug text-[#F3EFE6] sm:text-4xl lg:text-5xl`}
              style={fadeIn(bodyVisible, "0.08s")}
            >
              Dental Implants
            </h3>
            <ul className="mt-10 max-w-lg flex flex-col" style={{ borderTop: `1px solid ${ACCENT}22` }}>
              {IMPLANT_ITEMS.map((item, idx) => {
                const isActive = activeSub === item.label;
                return (
                  <li key={item.label} style={{ borderBottom: `1px solid ${ACCENT}22` }}>
                    <button
                      onClick={() => setActiveSub(item.label)}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300"
                          style={{ backgroundColor: isActive ? ACCENT : `${ACCENT}18`, color: isActive ? BG : "#8C877A" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-[15px] font-semibold transition-colors duration-300"
                          style={{ color: isActive ? ACCENT : "#C8C2B8" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? ACCENT : "#8C877A"} strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-300"
                        style={{ transform: isActive ? "translateX(4px)" : "translateX(0)" }}
                      >
                        <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isActive ? "64px" : "0" }}
                    >
                      <p className="pb-4 pl-11 text-[13px] leading-relaxed text-[#8C877A]">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10" style={fadeIn(bodyVisible, "0.22s")}>
              <Link
                href={SERVICE_HREFS[activeSub] ?? "/dental-implants"}
                className="inline-flex items-center gap-2.5 rounded-2xl border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9A227]/10"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. General & Restorative — sticky z2, overlaps Dental Implants */}
        <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
          {LIGHT_CATEGORIES.map((cat) => (
            <LightSection key={cat.title} title={cat.title} items={cat.items} />
          ))}
        </div>

        {/* 3. Cosmetic & Smile — sticky z3, overlaps General & Restorative */}
        <div style={{ position: "sticky", top: 0, zIndex: 3 }}>
          <CosmeticSection />
        </div>

        {/* 4. Gum Care — sticky z4, overlaps Cosmetic & Smile */}
        <div style={{ position: "sticky", top: 0, zIndex: 4 }}>
          <GumSection />
        </div>

      </div>
    </>
  );
}
