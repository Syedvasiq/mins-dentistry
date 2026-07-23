"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ACCENT = "#C9A227";

const CREDENTIALS = ["BDS", "MDS", "MPerio (RCSEd, UK)", "MICIO (USA)", "FAALD (EAU)"];
const HIGHLIGHTS = [
  "Personalized Treatment",
  "Digital Dentistry",
  "Gentle Care",
  "Advanced Implant Procedures",
  "Modern Equipment",
  "Patient-first Approach",
];

/* ── Animated SVG signature path ── */
function SignatureLine({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 220 36"
      className="w-48 overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 28 C20 10 38 6 58 18 C72 26 80 8 96 12 C112 16 118 28 134 22 C150 16 158 4 176 10 C190 16 200 24 216 20"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 320,
          strokeDashoffset: animate ? 0 : 320,
          transition: animate ? "stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1) 0.3s" : "none",
        }}
      />
    </svg>
  );
}

/* ── Floating particle ── */
function Particle({ x, y, size, delay }: { x: string; y: string; size: number; delay: string }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: ACCENT,
        opacity: 0.18,
        animation: `doc-float 5s ease-in-out ${delay} infinite alternate`,
      }}
    />
  );
}

export default function Doctor() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [imgRevealed, setImgRevealed] = useState(false);
  const [sigAnimate, setSigAnimate] = useState(false);
  const [parallaxImg, setParallaxImg] = useState(0);
  const [parallaxTxt, setParallaxTxt] = useState(0);

  /* Intersection observer — trigger reveal */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setTimeout(() => setImgRevealed(true), 100);
          setTimeout(() => setSigAnimate(true), 900);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  /* Parallax scroll — image slower, text faster */
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      setParallaxImg(mid * 0.06);
      setParallaxTxt(mid * -0.04);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? `translateY(${parallaxTxt}px)` : `translateY(${32 + parallaxTxt}px)`,
    transition: `opacity 0.9s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.9s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <>
      {/* keyframes injected once */}
      <style>{`
        @keyframes doc-float {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-14px) scale(1.15); }
        }
        @keyframes doc-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes doc-tooth-pulse {
          0%,100% { opacity: 0.04; }
          50%      { opacity: 0.07; }
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
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #FCFCFC, #F5F5F5)" }}
      >
        {/* ── Background: giant tooth outline ── */}
        <svg
          viewBox="0 0 400 500"
          className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] select-none"
          fill="none"
          aria-hidden="true"
          style={{ animation: "doc-tooth-pulse 6s ease-in-out infinite" }}
        >
          <path
            d="M200 30 C270 30 310 70 305 120 C300 160 278 178 268 192 C278 230 300 300 300 360 C300 410 278 470 248 470 C224 470 212 440 200 410 C188 440 176 470 152 470 C122 470 100 410 100 360 C100 300 122 230 132 192 C122 178 100 160 95 120 C90 70 130 30 200 30 Z"
            stroke={ACCENT}
            strokeWidth="2"
          />
        </svg>

        {/* ── Floating particles ── */}
        <Particle x="8%"  y="15%" size={7}  delay="0s" />
        <Particle x="15%" y="72%" size={5}  delay="1.2s" />
        <Particle x="88%" y="20%" size={6}  delay="0.6s" />
        <Particle x="82%" y="78%" size={4}  delay="1.8s" />
        <Particle x="50%" y="5%"  size={5}  delay="0.9s" />

        {/* ── Section header ── */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="mb-14 text-center" style={fadeUp()}>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em]"
              style={{ color: ACCENT, fontFamily: "monospace" }}
            >
              Meet Your Dentist
            </p>
            <span
              className="mx-auto mt-3 block h-px w-16 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.8s ease-out 0.2s",
              }}
            />
            <h2
              className={`${display.className} mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-[3.25rem]`}
            >
              Experienced. Compassionate. Precise.
            </h2>
          </div>

          {/* ── Main 60/40 grid ── */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr]">

            {/* LEFT — Doctor portrait */}
            <div ref={imgRef} className="relative flex items-end justify-center lg:justify-start">

              {/* Gold spinning ring */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "min(590px, 98vw)",
                  height: "min(590px, 98vw)",
                  animation: "doc-ring-spin 22s linear infinite",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 1s ease 0.4s",
                }}
              >
                <svg viewBox="0 0 590 590" className="h-full w-full" aria-hidden="true">
                  <circle
                    cx="295" cy="295" r="285"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="1"
                    strokeDasharray="12 18"
                    opacity="0.45"
                  />
                </svg>
              </div>

              {/* Large transparent circle behind doctor */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: "min(560px, 95vw)",
                  height: "min(560px, 95vw)",
                  background: `radial-gradient(circle, ${ACCENT}12 0%, transparent 70%)`,
                }}
              />

              {/* Doctor image — clipped to circle, white bg removed */}
              <div
                className="relative z-10 mx-auto overflow-hidden rounded-full"
                style={{
                  width: "min(582px, 96vw)",
                  height: "min(582px, 96vw)",
                  transform: `translateY(${parallaxImg}px)`,
                  transition: "transform 0.15s linear",
                  opacity: imgRevealed ? 1 : 0,
                  transitionProperty: "opacity, transform",
                  transitionDuration: "1.1s, 0.15s",
                  transitionTimingFunction: "cubic-bezier(.4,0,.2,1), linear",
                  transitionDelay: "0.1s, 0s",

                }}
              >
                <Image
                  src="/dr-sabiha.png"
                  alt="Dr. Sabiha Kouser M S — Periodontist, Implantologist & Laser Dentistry Specialist"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 96vw, 582px"
                  priority
                />
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="relative z-10 flex flex-col gap-6">

              {/* Name & title */}
              <div style={fadeUp("0.15s")}>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                  style={{ fontFamily: "monospace" }}
                >
                  Meet
                </p>
                <h3 className={`${display.className} mt-2 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl`}>
                  Dr. Sabiha Kouser M S
                </h3>
                <p className="mt-1 text-base font-medium" style={{ color: ACCENT }}>
                  Periodontist, Implantologist &amp; Laser Dentistry Specialist
                </p>
              </div>

              {/* Story */}
              <p
                className="text-[15px] leading-relaxed text-gray-600 border-l-2 pl-4"
                style={{ borderColor: ACCENT, ...fadeUp("0.25s") }}
              >
                At MINS Dentistry, every treatment begins with listening. Our philosophy is
                simple — combine advanced dentistry with compassionate care to create healthy,
                confident smiles that last a lifetime.
              </p>

              {/* Quality highlights */}
              <div style={fadeUp("0.32s")}>
                <ul className="grid grid-cols-1 gap-y-2 sm:grid-cols-2">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[13px] text-gray-700">
                      <span style={{ color: ACCENT }} className="text-base leading-none">✔</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-2" style={fadeUp("0.4s")}>
                {CREDENTIALS.map((c) => (
                  <span
                    key={c}
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      border: `1px solid ${ACCENT}66`,
                      color: ACCENT,
                      backgroundColor: `${ACCENT}0d`,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={fadeUp("0.48s")}>
                <Link
                  href="/contact"
                  className="shimmer-btn relative inline-block overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A227] via-[#EBD08C] to-[#C9A227] px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]"
                >
                  <span className="relative z-10">Book Your Consultation</span>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
