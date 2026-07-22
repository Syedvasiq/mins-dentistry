"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal"] });
const GOLD = "#C9A227";

export default function AboutTeamBanner() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const t = textRef.current;
    const i = imgRef.current;
    if (!t || !i) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === t && e.isIntersecting) setTextVisible(true);
          if (e.target === i && e.isIntersecting) setImgVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    io.observe(t);
    io.observe(i);
    return () => io.disconnect();
  }, []);

  const fadeUp = (delay = "0s") => ({
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.9s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.9s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <section className="bg-white overflow-hidden">
      {/* ── Text block ── */}
      <div
        ref={textRef}
        className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 pt-16 pb-14"
      >
        {/* Block 1 */}
        <div className="w-full mb-10" style={fadeUp("0s")}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Dentistry with Heart &amp; Precision</p>
          <p className="text-[15px] font-medium leading-relaxed text-[#5F574D]">
            At MINS Dentistry, we believe beautiful smiles start with beautiful care. As a
            trusted family and cosmetic dentist, we take deep satisfaction in helping every
            patient feel confident in their smile — and we work hard to create an
            environment that reflects that. Our modern dental clinic is designed to be
            calm, elegant, and welcoming, because we believe the space you walk into is
            part of the experience itself. Whether you're visiting us for a routine
            check-up and cleaning, cosmetic dentistry, dental implants, or a same-day
            emergency appointment, our hope is that you genuinely look forward to each
            visit.
          </p>
        </div>

        {/* Block 2 */}
        <div className="w-full mb-10" style={fadeUp("0.12s")}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Genuine Connection</p>
          <p className="text-[15px] font-medium leading-relaxed text-[#5F574D] mb-5">
            Our team is as professional as they come — and we also believe in showing up as
            our full selves. We want you to feel you know us. Feel comfortable asking
            questions, sharing concerns, or simply talking. Our goal for every patient is
            that they enjoy their visits and feel a genuine rapport with everyone they meet
            here, from your first consultation through every follow-up appointment.
          </p>

          {/* Blockquote list */}
          <div
            className="pl-5 flex flex-col gap-2"
            style={{ borderLeft: `3px solid ${GOLD}` }}
          >
            {[
              "Your oral health is part of your entire well-being — and we treat it that way.",
              "Excellent care and lasting results come from genuine relationships built on trust.",
              "You deserve a dental team that understands your full picture, not just your teeth.",
            ].map((line) => (
              <p key={line} className="text-[14px] font-medium leading-relaxed text-[#5F574D]">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Block 3 — services & local SEO copy */}
        <div className="w-full" style={fadeUp("0.24s")}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Comprehensive Dental Care, All in One Place</p>
          <p className="text-[15px] font-medium leading-relaxed text-[#5F574D] mb-5">
            From preventive check-ups to advanced restorative work, MINS Dentistry brings
            together general, cosmetic, and specialty dental services so your whole family
            can be seen under one roof. Our services include general dentistry and dental
            cleanings, cosmetic dentistry and teeth whitening, porcelain veneers, dental
            implants and full-mouth restorations, Invisalign and clear aligners, root canal
            therapy, pediatric dentistry, and emergency dental care for unexpected pain or
            injury. Every treatment plan is backed by digital X-rays and modern diagnostic
            technology, so you always know exactly what to expect before we begin.
          </p>
          <p className="text-[15px] font-medium leading-relaxed text-[#5F574D]">
            Looking for a dentist near you who treats you like family? Book a consultation
            with the MINS Dentistry team and experience dental care built around your
            comfort, your schedule, and your long-term oral health.
          </p>
        </div>
      </div>

      {/* ── Full-width team image with overlay ── */}
      <div ref={imgRef} className="relative w-full" style={{ aspectRatio: "16/7" }}>
        {/* Image */}
        <div
          style={{
            opacity: imgVisible ? 1 : 0,
            transition: "opacity 1.1s cubic-bezier(.2,.8,.2,1) 0.1s",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/meet-team-image.png"
            alt="The MINS Dentistry team — general, cosmetic, and family dentists"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Bottom-left text + CTA */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 pb-10 sm:pb-14">
            <p
              className={`${display.className} text-white text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-wide mb-6`}
            >
              MINS Family
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-[13px] font-bold uppercase tracking-widest text-black transition-opacity duration-300 hover:opacity-90 rounded-sm"
              style={{ background: GOLD }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
