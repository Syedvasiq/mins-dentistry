"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

const GOLD = "#C9A227";

const FAQS = [
  {
    q: "Does root canal treatment hurt?",
    a: "Modern root canal treatment is virtually painless. We use advanced local anaesthesia to ensure you feel nothing during the procedure. Most patients are surprised by how comfortable it is — the relief from the pre-existing toothache is usually felt immediately after treatment.",
  },
  {
    q: "How long do dental veneers last?",
    a: "With proper care, porcelain veneers typically last 10 to 15 years, and sometimes longer. Composite veneers last around 5 to 7 years. Avoiding habits like nail-biting, chewing hard objects, and maintaining regular dental check-ups will significantly extend their lifespan.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Yes, professional teeth whitening performed at our clinic is completely safe. We assess your teeth and gums before treatment to ensure you are a suitable candidate. Some patients experience mild sensitivity for a day or two afterwards, which resolves on its own.",
  },
  {
    q: "How many visits are needed for dental implants?",
    a: "The implant process typically involves 3 to 4 visits spread over 4 to 6 months. This includes the initial consultation, implant placement, a healing period for osseointegration, and finally the placement of the crown. We will give you a clear timeline at your first appointment.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we welcome patients of all ages including young children. Our team is experienced in making children feel comfortable and at ease. We recommend bringing children in for their first check-up as soon as their first teeth appear to build positive dental habits early.",
  },
  {
    q: "Do you offer emergency dental appointments?",
    a: "Absolutely. We keep slots available for dental emergencies and do our best to see urgent cases the same day. If you are experiencing severe pain, a broken tooth, swelling, or any other dental emergency, call us immediately on +91 90081 13963.",
  },
  {
    q: "How long do dental implants last?",
    a: "Dental implants are designed to be a permanent solution and can last a lifetime with proper care. The titanium post that integrates with your jawbone is extremely durable. The crown on top may need replacement after 15 to 20 years depending on wear.",
  },
  {
    q: "What is the difference between aligners and traditional braces?",
    a: "Aligners are clear, removable trays that straighten teeth discreetly without metal brackets or wires. They are nearly invisible and can be removed for eating and cleaning. Traditional braces are fixed and generally more effective for complex cases. Dr. Sabiha will recommend the best option after assessing your teeth.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a routine check-up and professional cleaning every 6 months. However, patients with gum disease, a history of cavities, or ongoing treatments may need more frequent visits. Regular check-ups allow us to catch issues early before they become costly problems.",
  },
  {
    q: "Is gum treatment painful?",
    a: "Gum treatments such as deep cleaning and scaling are performed under local anaesthesia, so you will not feel pain during the procedure. Some tenderness and sensitivity in the gums for a few days afterwards is normal and manageable with over-the-counter pain relief.",
  },
];

function FAQItem({ faq, index, visible }: { faq: { q: string; a: string }; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(.2,.8,.2,1) ${index * 0.06}s, transform 0.7s cubic-bezier(.2,.8,.2,1) ${index * 0.06}s`,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#EFE4C6",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span
          className={`${display.className} text-[1.15rem] sm:text-[1.25rem] font-medium leading-snug transition-colors duration-300`}
          style={{ color: open ? GOLD : "#2B2B2B" }}
        >
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? GOLD : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: open ? GOLD : "#D9C99A",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: open ? "#1a1200" : GOLD }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? "400px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <p className="pb-6 text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#6A6A6A" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s cubic-bezier(.2,.8,.2,1), transform 0.9s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-3" style={{ color: GOLD, fontFamily: "monospace" }}>
            FAQ
          </p>
          <span
            className="block h-px w-16 mb-5"
            style={{
              background: `linear-gradient(to right, ${GOLD}, #F3DE9C, transparent)`,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.8s ease-out 0.15s",
            }}
          />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <h2 className={`${display.className} text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-tight text-[#2B2B2B] max-w-xl`}>
              Frequently Asked <span className="italic" style={{ color: GOLD }}>Questions</span>
            </h2>
            <p className="text-[14px] text-[#6A6A6A] max-w-sm lg:text-right leading-relaxed">
              Everything you need to know before your visit. Can&apos;t find your answer?{" "}
              <a href="tel:+919008113963" className="font-semibold transition-colors" style={{ color: GOLD }}>
                Call us directly.
              </a>
            </p>
          </div>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div>
            {left.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} visible={visible} />
            ))}
          </div>
          <div>
            {right.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i + half} visible={visible} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
