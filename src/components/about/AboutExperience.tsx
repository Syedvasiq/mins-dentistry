"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const GOLD = "#C9A227";

const BLOCKS = [
  {
    title: "Comfortable Environment",
    desc: "Our luxury waiting lounge and treatment rooms are thoughtfully designed to reduce anxiety and create a sense of calm. Soft lighting, curated interiors, and a welcoming team ensure every visit feels like a retreat.",
    image: "/dr-sabiha.png",
  },
  {
    title: "Advanced Dental Technology",
    desc: "We invest in the latest dental technology — Digital X-rays, Intraoral Scanners, 3D CBCT Imaging, Laser Dentistry, and Microscope-assisted procedures — to deliver precise, predictable, and minimally invasive treatments.",
    image: "/dr-sabiha.png",
  },
  {
    title: "Comprehensive Dental Care",
    desc: "From Preventive and Cosmetic to Restorative, Implantology, Orthodontics, Pediatric, and Oral Surgery — all under one roof. One trusted team for every dental need across every stage of life.",
    image: "/dr-sabiha.png",
  },
];

function Block({ title, desc, image, reverse, index }: { title: string; desc: string; image: string; reverse: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div
        style={{
          direction: "ltr",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : `translateX(${reverse ? "40px" : "-40px"})`,
          transition: `opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s`,
        }}
      >
        <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 700px" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${GOLD}10, transparent 60%)` }} />
        </div>
      </div>

      <div
        className="flex flex-col gap-5"
        style={{
          direction: "ltr",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : `translateX(${reverse ? "-40px" : "40px"})`,
          transition: `opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s`,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: GOLD, fontFamily: "monospace" }}>
          0{index + 1}
        </p>
        <h3 className={`${display.className} text-3xl sm:text-4xl font-semibold text-gray-900`}>{title}</h3>
        <span className="block h-px w-12" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
        <p className="text-gray-600 text-[16px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function AboutExperience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div
          className="text-center mb-20"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: GOLD, fontFamily: "monospace" }}>The Experience</p>
          <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold text-gray-900`}>
            A Dental Experience{" "}
            <span className="italic" style={{ color: GOLD }}>Designed Around You</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {BLOCKS.map((b, i) => (
            <Block key={b.title} {...b} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
