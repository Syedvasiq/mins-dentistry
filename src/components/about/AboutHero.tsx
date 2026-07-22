"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"] });
const GOLD = "#C9A227";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(340px, 55vw, 620px)" }}>
      {/* Full-bleed image */}
      <Image
        src="/about-us-hero-image.png"
        alt="MINS Dentistry Team"
        fill
        className="object-cover object-top"
        priority
        sizes="100vw"
      />

      {/* Subtle dark gradient at bottom so text is legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 40%, transparent 70%)",
        }}
      />

      {/* Text — bottom center, matching reference */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 pb-10 sm:pb-14 flex flex-col items-center text-center">
          <h1
            className={`${display.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight`}
          >
            <span className="text-white">ABOUT MINS </span>
            <span style={{ color: GOLD }}>DENTISTRY</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
