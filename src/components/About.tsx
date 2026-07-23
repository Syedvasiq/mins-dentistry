"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

function ArrowIcon() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1.5"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-20">

          {/* Left — content */}
          <div className="flex flex-1 flex-col justify-between">

            {/* Top content block */}
            <div>
              <p
                className={`about-reveal text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] ${visible ? "about-reveal-in" : ""}`}
                style={{ animationDelay: "0.05s" }}
              >
                Welcome to MINS Dentistry Dental Clinic &amp; Implant Center
              </p>

              <span
                className={`about-divider mt-4 block h-px w-16 bg-gradient-to-r from-[#C9A227] via-[#F3DE9C] to-transparent ${visible ? "about-divider-in" : ""}`}
              />

              <h2
                className={`${display.className} about-reveal mt-6 text-5xl font-semibold leading-tight text-gray-900 sm:text-6xl md:text-7xl ${visible ? "about-reveal-in" : ""}`}
                style={{ animationDelay: "0.2s" }}
              >
                Expert Dental Care<br />
                <span className="italic text-gray-700">Designed Around You</span>
              </h2>

              <p
                className={`about-reveal mt-6 text-[15px] leading-relaxed text-gray-700 font-medium max-w-lg ${visible ? "about-reveal-in" : ""}`}
                style={{ animationDelay: "0.35s" }}
              >
                At MINS Dentistry, we believe every smile tells a story. Our team of
                experienced dental professionals combines cutting-edge technology with
                a gentle, patient-first approach — ensuring every visit is comfortable,
                effective, and tailored to your unique needs.
              </p>

              <p
                className={`about-reveal mt-4 text-[15px] leading-relaxed text-gray-700 font-medium max-w-lg ${visible ? "about-reveal-in" : ""}`}
                style={{ animationDelay: "0.45s" }}
              >
                From preventive care and cosmetic enhancements to complex implant
                surgeries, we offer a full spectrum of dental services under one roof —
                so you never have to look elsewhere for the smile you deserve.
              </p>

              {/* Golden tagline with vertical line */}
              <div
                className={`about-reveal mt-8 flex gap-4 ${visible ? "about-reveal-in" : ""}`}
                style={{ animationDelay: "0.55s" }}
              >
                <div className="flex flex-col items-center pt-1">
                  <span className="block w-px flex-1 bg-gradient-to-b from-[#C9A227] to-transparent" style={{ minHeight: "64px" }} />
                </div>
                <p className={`${display.className} text-2xl italic font-semibold leading-relaxed sm:text-3xl bg-gradient-to-r from-[#B8912A] via-[#E8C96A] to-[#B8912A] bg-clip-text text-transparent`}>
                  &ldquo;Where advanced dentistry meets<br />
                  warmth, precision, and care.&rdquo;
                </p>
              </div>
            </div>

            {/* Button pinned to bottom */}
            <a
              href="/about"
              className={`about-reveal group mt-10 inline-flex items-center gap-2 rounded-2xl border border-[#C9A227] px-7 py-3 text-sm font-semibold tracking-wide text-[#8A6D1E] transition-colors duration-300 hover:bg-[#C9A227]/10 self-start ${visible ? "about-reveal-in" : ""}`}
              style={{ animationDelay: "0.75s" }}
            >
              Know More About Us
              <ArrowIcon />
            </a>
          </div>

          {/* Right — image */}
          <div
            className={`about-mask relative w-full lg:w-[48%] overflow-hidden rounded-2xl ${visible ? "about-mask-in" : ""}`}
            style={{ minHeight: "520px" }}
          >
            <Image
              src="/about-us.png"
              alt="MINS Dentistry clinic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .about-reveal {
          opacity: 0;
          transform: translateY(24px);
        }
        .about-reveal-in {
          animation: aboutUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes aboutUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .about-divider {
          transform: scaleX(0);
          transform-origin: left;
        }
        .about-divider-in {
          animation: dividerGrow 0.8s ease-out 0.15s forwards;
        }
        @keyframes dividerGrow {
          to { transform: scaleX(1); }
        }
        .about-mask {
          clip-path: inset(0 100% 0 0);
        }
        .about-mask-in {
          animation: maskReveal 1.1s cubic-bezier(0.65, 0, 0.35, 1) 0.4s forwards;
        }
        @keyframes maskReveal {
          to { clip-path: inset(0 0 0 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-reveal-in, .about-divider-in, .about-mask-in { animation: none !important; }
          .about-reveal { opacity: 1; transform: none; }
          .about-divider { transform: scaleX(1); }
          .about-mask { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </section>
  );
}
