"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

const ACCENT = "#C9A227";
const BG = "#0B0B0A";

interface Card { label: string; duration: string; before: string | null; after: string | null; }
interface Tab  { id: string; label: string; count: string; cards: Card[]; }

/* ── Data ─────────────────────────────────────────────────────── */
const implantCards: Card[] = [
  { label: "Single Tooth Implant",      duration: "4 Months",  before: "/before and after/dental-implant-before-1.png", after: "/before and after/dental-implant-after-1.png" },
  { label: "Multiple Tooth Implants",   duration: "6 Months",  before: "/before and after/dental-implant-before-2.png", after: "/before and after/dental-implant-after-2.png" },
  { label: "Full Mouth Rehabilitation", duration: "8 Months",  before: "/before and after/dental-implant-before-3.png", after: "/before and after/dental-implant-after-3.png" },
  { label: "Bone Grafting",             duration: "3 Months",  before: "/before and after/dental-implant-before-1.png", after: "/before and after/dental-implant-after-1.png" },
  { label: "Single Tooth Implant",      duration: "5 Months",  before: "/before and after/dental-implant-before-2.png", after: "/before and after/dental-implant-after-2.png" },
  { label: "Full Mouth Rehabilitation", duration: "10 Months", before: "/before and after/dental-implant-before-3.png", after: "/before and after/dental-implant-after-3.png" },
  { label: "Multiple Tooth Implants",   duration: "6 Months",  before: "/before and after/dental-implant-before-1.png", after: "/before and after/dental-implant-after-1.png" },
  { label: "Bone Grafting",             duration: "2 Months",  before: "/before and after/dental-implant-before-2.png", after: "/before and after/dental-implant-after-2.png" },
];

function placeholder(labels: string[], durations: string[]): Card[] {
  return Array.from({ length: 8 }, (_, i) => ({
    label: labels[i % labels.length],
    duration: durations[i % durations.length],
    before: null,
    after: null,
  }));
}

const TABS: Tab[] = [
  { id: "implants",    label: "Dental Implants",       count: "08", cards: implantCards },
  { id: "restorative", label: "General & Restorative", count: "08", cards: placeholder(["Root Canal Treatment","Dental Crowns","Tooth Filling","Dental Bridges","Dentures","Tooth Extraction"],["1 Visit","2 Weeks","1 Visit","3 Weeks"]) },
  { id: "cosmetic",    label: "Cosmetic & Smile",      count: "08", cards: placeholder(["Teeth Whitening","Smile Makeover","Dental Veneers","Invisible Aligners","Metal Braces","Ceramic Braces"],["1 Session","3 Months","2 Weeks","6 Months"]) },
  { id: "gum",         label: "Gum Care",              count: "08", cards: placeholder(["Gum Treatment","Flap Surgery","Frenectomy","Oral Surgery"],["1 Visit","2 Weeks","1 Session","3 Weeks"]) },
];

/* ── Drag slider ──────────────────────────────────────────────── */
function CompareSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full select-none cursor-col-resize overflow-hidden"
      onMouseDown={() => { dragging.current = true; }}
      onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={() => { dragging.current = true; }}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onTouchEnd={() => { dragging.current = false; }}
    >
      <Image src={after}  alt="After"  fill className="object-cover" sizes="22vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image src={before} alt="Before" fill className="object-cover" sizes="22vw" />
      </div>
      {/* line */}
      <div className="absolute top-0 bottom-0 w-px pointer-events-none" style={{ left: `${pos}%`, background: "rgba(255,255,255,0.75)", boxShadow: "0 0 12px rgba(0,0,0,0.5)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.35)" }}>
          <svg viewBox="0 0 20 20" className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 4l-4 6 4 6M13 4l4 6-4 6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <span className="absolute bottom-2 left-2.5 text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.55)", color: "#999" }}>Before</span>
      <span className="absolute bottom-2 right-2.5 text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>After</span>
    </div>
  );
}

/* ── Card ─────────────────────────────────────────────────────── */
function CaseCard({ card, index, visible }: { card: Card; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const hasImage = card.before && card.after;

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: hovered ? "#161614" : "#111110",
        border: `1px solid ${hovered ? ACCENT + "55" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 0 1px ${ACCENT}22, 0 20px 48px rgba(0,0,0,0.5)` : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.6s ease ${index * 0.055}s, transform 0.6s cubic-bezier(.2,.8,.2,1) ${index * 0.055}s, border-color 0.3s, box-shadow 0.3s, background 0.3s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: "#1a1a18" }}>
        {hasImage ? (
          <>
            <CompareSlider before={card.before!} after={card.after!} />
            <div
              className="absolute top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none transition-opacity duration-300"
              style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)", opacity: hovered ? 0 : 1 }}
            >
              Drag to compare
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${ACCENT}0a, transparent)` }}>
            <svg viewBox="0 0 48 56" className="w-9 h-9" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.2">
              <path d="M24 4C15 4 9 11 9.5 18C10 24 13.5 26.5 14 30C15 37 15.5 52 20 52C23 52 23.5 47 24 43C24.5 47 25 52 28 52C32.5 52 33 37 34 30C34.5 26.5 38 24 38.5 18C39 11 33 4 24 4Z" />
            </svg>
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT, opacity: 0.3 }}>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div>
          <p className="text-[12px] font-semibold leading-tight text-white/80">{card.label}</p>
          <p className="mt-0.5 text-[10px] text-white/30" style={{ fontFamily: "monospace" }}>{card.duration}</p>
        </div>
        <span
          className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0"
          style={{ background: `${ACCENT}18`, color: ACCENT, border: `1px solid ${ACCENT}30` }}
        >
          Result
        </span>
      </div>
    </article>
  );
}

/* ── Main ─────────────────────────────────────────────────────── */
export default function SmileTransformations() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [visible, setVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [sliding, setSliding] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeData = TABS.find((t) => t.id === activeTab)!;

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGridVisible(true); }, { threshold: 0.04 });
    if (gridRef.current) io.observe(gridRef.current);
    return () => io.disconnect();
  }, []);

  const handleTab = (id: string) => {
    if (id === activeTab) return;
    setSliding(true);
    setGridVisible(false);
    setTimeout(() => { setActiveTab(id); setSliding(false); setTimeout(() => setGridVisible(true), 60); }, 220);
  };

  const fadeUp = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s cubic-bezier(.2,.8,.2,1) ${delay}, transform 0.9s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: BG }}
    >
      {/* Subtle radial glow top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}0a 0%, transparent 70%)` }} />
      {/* Subtle radial glow bottom-right */}
      <div className="pointer-events-none absolute -right-40 -bottom-40 w-[500px] h-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}07 0%, transparent 70%)` }} />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* ── Top header row ── */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between mb-12" style={fadeUp()}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT, fontFamily: "monospace" }}>
              Before &amp; After
            </p>
            <span
              className="mt-3 block h-px w-16"
              style={{
                background: `linear-gradient(to right, ${ACCENT}, #F3DE9C, transparent)`,
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.8s ease-out 0.15s",
              }}
            />
            <h2
              className={`${display.className} mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-[3.25rem]`}
              style={fadeUp("0.1s")}
            >
              Smile <span className="italic" style={{ color: ACCENT }}>Transformations</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/40 lg:text-right" style={fadeUp("0.2s")}>
            Real patients, real results — drag any slider to reveal the transformation.
          </p>
        </div>

        {/* ── Body: sidebar + grid ── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 lg:items-start">

          {/* LEFT — vertical tab list */}
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-0 lg:w-56 lg:shrink-0" style={fadeUp("0.25s")}>
            {TABS.map((tab, i) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTab(tab.id)}
                  className="group relative flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 lg:rounded-none lg:rounded-r-xl lg:border-l-2"
                  style={{
                    background: isActive ? `${ACCENT}10` : "transparent",
                    outline: "none",
                  }}
                >
                  {/* mobile: pill style */}
                  <span
                    className="lg:hidden absolute inset-0 rounded-xl border transition-colors duration-300"
                    style={{ borderColor: isActive ? ACCENT + "66" : "rgba(255,255,255,0.08)" }}
                  />
                  {/* desktop: left border */}
                  <span
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300"
                    style={{ background: isActive ? ACCENT : "rgba(255,255,255,0.08)" }}
                  />

                  <span
                    className="relative z-10 text-[13px] font-semibold leading-tight transition-colors duration-300"
                    style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.35)" }}
                  >
                    {tab.label}
                  </span>
                  <span
                    className="relative z-10 text-[10px] font-bold shrink-0 transition-colors duration-300"
                    style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.18)", fontFamily: "monospace" }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}

            {/* Thin gold line below tabs on desktop */}
            <div className="hidden lg:block mt-6 h-px w-full" style={{ background: `linear-gradient(to right, ${ACCENT}40, transparent)` }} />
            <p className="hidden lg:block mt-4 text-[10px] uppercase tracking-[0.3em] text-white/20" style={{ fontFamily: "monospace" }}>
              Select Category
            </p>
          </div>

          {/* RIGHT — card grid */}
          <div className="flex-1 min-w-0">
            {/* Active tab label */}
            <div
              className="mb-6 flex items-center gap-3"
              style={{
                opacity: sliding ? 0 : 1,
                transform: sliding ? "translateX(12px)" : "translateX(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <span className="h-px flex-1 max-w-[32px]" style={{ background: `linear-gradient(to right, ${ACCENT}, transparent)` }} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40" style={{ fontFamily: "monospace" }}>
                {activeData.label}
              </p>
            </div>

            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
              style={{
                opacity: sliding ? 0 : 1,
                transform: sliding ? "translateX(16px)" : "translateX(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {activeData.cards.map((card, i) => (
                <CaseCard key={`${activeTab}-${i}`} card={card} index={i} visible={gridVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
