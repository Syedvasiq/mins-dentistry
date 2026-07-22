"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const IMAGES = [
  { src: "/dr-sabiha.png", span: "col-span-2 row-span-2" },
  { src: "/dr-sabiha.png", span: "col-span-1 row-span-1" },
  { src: "/dr-sabiha.png", span: "col-span-1 row-span-1" },
  { src: "/dr-sabiha.png", span: "col-span-1 row-span-1" },
  { src: "/dr-sabiha.png", span: "col-span-1 row-span-1" },
  { src: "/dr-sabiha.png", span: "col-span-2 row-span-1" },
];

export default function AboutGallery() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 overflow-hidden" style={{ background: "#FAF8F5" }}>
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>Our Clinic</p>
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>
            A Glimpse Inside{" "}
            <span className="italic" style={{ color: GOLD }}>Mins Dentistry</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative rounded-[20px] overflow-hidden group cursor-pointer`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.7s ease ${i * 0.1 + 0.2}s, transform 0.7s ease ${i * 0.1 + 0.2}s`,
              }}
            >
              <Image
                src={img.src}
                alt={`Clinic gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 400px"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `${GOLD}20` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
