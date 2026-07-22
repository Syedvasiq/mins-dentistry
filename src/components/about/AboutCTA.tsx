"use client";

import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

export default function AboutCTA() {
  return (
    <>
      <style>{`
        @keyframes aboutCtaShimmer {
          0%, 88% { left: -60%; }
          100% { left: 130%; }
        }
        .about-cta-btn::after {
          content: "";
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          animation: aboutCtaShimmer 4.5s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B0B0A 0%, #1a1400 50%, #0B0B0A 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${GOLD}18 0%, transparent 70%)` }}
        />

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-6" style={{ color: GOLD, fontFamily: "monospace" }}>
            Begin Your Journey
          </p>
          <h2 className={`${display.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 max-w-3xl mx-auto`}>
            Experience Dentistry{" "}
            <span className="italic" style={{ color: GOLD }}>Beyond Expectations</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Your healthiest, most confident smile begins with a personalized consultation. Let us craft a treatment plan designed entirely around you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="about-cta-btn relative overflow-hidden rounded-2xl px-10 py-4 text-[15px] font-bold text-black shadow-[0_0_28px_rgba(201,162,39,0.3)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(201,162,39,0.5)]"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #EBD08C, ${GOLD})` }}
            >
              <span className="relative z-10">Book Your Appointment Today</span>
            </Link>
            <a
              href="tel:+919008113963"
              className="rounded-2xl px-10 py-4 text-[15px] font-semibold text-white/80 transition-all duration-300 hover:text-white hover:bg-white/5"
              style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.2)" }}
            >
              Call +91 90081 13963
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
