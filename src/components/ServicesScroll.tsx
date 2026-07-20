"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * ServicesScroll
 * Full-bleed, scroll-driven "story scroll" services section for a luxury
 * dental implant clinic. Each service owns 100dvh, its own palette, and a
 * bespoke SVG composition that fills the frame behind the copy — no stock
 * photography anywhere.
 *
 * Parallax: each section's visual composition drifts at ~40% of normal
 * scroll speed while the text moves at normal speed, so the visual lags
 * behind as you scroll through that section. One layer, one speed, no
 * scroll-jacking or animation library.
 *
 * Fonts: add to your root layout with next/font/google, e.g.
 *
 *   import { Fraunces, Inter, Space_Mono } from "next/font/google";
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
 *   const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
 *   const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"], variable: "--font-mono" });
 *
 *   <body className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}>
 *
 * Then in tailwind.config.ts, extend fontFamily:
 *   display: ["var(--font-display)", "serif"],
 *   body: ["var(--font-body)", "sans-serif"],
 *   mono: ["var(--font-mono)", "monospace"],
 *
 * IMPORTANT: render <ServicesScroll /> outside any parent with a max-width
 * or horizontal padding (e.g. not inside a `container mx-auto px-6` wrapper).
 * It needs the full viewport width to bleed edge-to-edge.
 */

type ServiceId = "implants" | "smile" | "rootcanal" | "aligners" | "whitening";

interface Service {
  id: ServiceId;
  index: string;
  name: string;
  eyebrow: string;
  headline: string;
  copy: string;
  cta: string;
  bg: string;
  text: string;
  textMuted: string;
  accent: string;
  accentText: string;
}

const SERVICES: Service[] = [
  {
    id: "implants",
    index: "01",
    name: "Dental implants",
    eyebrow: "Permanent · strong · natural",
    headline: "Built to last a lifetime",
    copy: "A titanium root fuses with your jawbone, then carries a crown indistinguishable from the tooth it replaces. No slipping, no removing, no compromise.",
    cta: "Explore implants",
    bg: "#0B0B0A",
    text: "#F3EFE6",
    textMuted: "#9C9688",
    accent: "#C9A24B",
    accentText: "#0B0B0A",
  },
  {
    id: "smile",
    index: "02",
    name: "Smile makeover",
    eyebrow: "Your smile, reimagined",
    headline: "See it before you begin",
    copy: "Veneers, contouring and whitening designed together as one plan. Drag the divider to see how a full makeover changes the whole face, not just the teeth.",
    cta: "Design my smile",
    bg: "#FBF3E7",
    text: "#2A2115",
    textMuted: "#7A6A4C",
    accent: "#C79A46",
    accentText: "#FBF3E7",
  },
  {
    id: "rootcanal",
    index: "03",
    name: "Root canal therapy",
    eyebrow: "Pain-free · precise",
    headline: "Relief, engineered precisely",
    copy: "Micro-magnification and gentle technique remove infection at its source, so the tooth stays yours. Most patients feel nothing worse than a filling.",
    cta: "Understand the procedure",
    bg: "#0B2545",
    text: "#EAF1FB",
    textMuted: "#8FA9CC",
    accent: "#6FA8DC",
    accentText: "#0B2545",
  },
  {
    id: "aligners",
    index: "04",
    name: "Clear aligners",
    eyebrow: "Invisible · comfortable",
    headline: "Straightening, quietly",
    copy: "Custom-milled, near-invisible trays move your teeth in small, precise steps. Removable for meals, barely there in every photo between now and your reveal.",
    cta: "Start my alignment plan",
    bg: "#F3F5F6",
    text: "#20272B",
    textMuted: "#6E7C83",
    accent: "#7C929B",
    accentText: "#20272B",
  },
  {
    id: "whitening",
    index: "05",
    name: "Teeth whitening",
    eyebrow: "Brighter, in one visit",
    headline: "Your brightest smile yet",
    copy: "A clinical-strength gel and gentle light lift years of staining in a single session, several shades brighter, with sensitivity kept to a minimum.",
    cta: "Book a whitening session",
    bg: "#FFFFFF",
    text: "#20201C",
    textMuted: "#7A7568",
    accent: "#E0A82E",
    accentText: "#20201C",
  },
];

export default function ServicesScroll() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visualLayerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({ 0: true });

  // Simple section-wise parallax: each section's visual layer moves at
  // ~40% of scroll speed relative to that section, so it drifts behind
  // the text as you scroll through. One layer, one speed, per section.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      sectionRefs.current.forEach((el, i) => {
        const visual = visualLayerRefs.current[i];
        if (!el || !visual) return;
        const offset = el.getBoundingClientRect().top;
        visual.style.transform = `translate3d(0, ${offset * 0.4}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Active-section tracking + one-time reveal animation trigger.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setRevealed((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }));
            if (entry.intersectionRatio > 0.5) setActiveIndex(idx);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = SERVICES[activeIndex];

  const scrollTo = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full font-body transition-colors duration-700 ease-out"
      style={{ backgroundColor: active.bg, color: active.text } as CSSProperties}
    >
      <style>{`
        @keyframes ss-mask-reveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0; }
          to { clip-path: inset(0 0 0 0); opacity: 1; }
        }
        @keyframes ss-rise {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes ss-shimmer {
          0% { background-position: -140% 0; }
          100% { background-position: 240% 0; }
        }
        @keyframes ss-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes ss-pulse-line {
          0% { stroke-dashoffset: 240; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        @keyframes ss-sparkle-sweep {
          0% { transform: translateX(-120%) rotate(18deg); opacity: 0; }
          15% { opacity: 1; }
          50% { opacity: 1; }
          100% { transform: translateX(220%) rotate(18deg); opacity: 0; }
        }
        .ss-reveal { animation: ss-mask-reveal 0.9s cubic-bezier(.2,.8,.2,1) forwards; }
        .ss-rise { animation: ss-rise 0.8s cubic-bezier(.2,.8,.2,1) forwards; }
        .ss-rise-1 { animation-delay: 0.08s; }
        .ss-rise-2 { animation-delay: 0.18s; }
        .ss-float { animation: ss-float 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ss-reveal, .ss-rise, .ss-float { animation: none !important; opacity: 1 !important; transform: none !important; clip-path: none !important; }
        }
      `}</style>

      {/* Section intro */}
      <div className="w-full px-6 py-24 md:px-16">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em]" style={{ color: active.accent }}>
          What we treat
        </p>
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          Transforming smiles, one treatment at a time
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: active.textMuted }}>
          Explore our specialized treatments, each designed to restore health,
          confidence and a smile that feels entirely your own.
        </p>
      </div>

      {/* Fixed index rail */}
      <nav aria-label="Services" className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-5 md:right-10 md:flex">
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            className="group flex items-center justify-end gap-3 text-right transition-opacity"
            style={{ opacity: activeIndex === i ? 1 : 0.45 }}
            aria-current={activeIndex === i}
          >
            <span
              className="max-w-0 overflow-hidden whitespace-nowrap font-body text-xs opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100"
              style={{ color: active.text }}
            >
              {s.name}
            </span>
            <span className="font-mono text-xs tracking-widest" style={{ color: activeIndex === i ? active.accent : active.textMuted }}>
              {s.index}
            </span>
            <span
              className="h-px transition-all duration-300"
              style={{ width: activeIndex === i ? "28px" : "14px", backgroundColor: activeIndex === i ? active.accent : active.textMuted }}
            />
          </button>
        ))}
      </nav>

      {/* Service panels — visuals bleed full width behind the copy */}
      {SERVICES.map((service, i) => (
        <div
          key={service.id}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          data-index={i}
          className="relative flex min-h-screen w-full items-center overflow-hidden border-t"
          style={{ borderColor: `${service.text}14` }}
        >
          {/* Visual composition — full-bleed, moves at ~40% of scroll speed */}
          <div
            ref={(el) => {
              visualLayerRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-end"
            style={{ willChange: "transform" }}
          >
            <div className="h-[85%] w-full max-w-3xl px-6 md:pr-16 lg:pr-28">
              <ServiceVisual service={service} />
            </div>
          </div>

          {/* Legibility scrim so text reads over the full-bleed visual */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${service.bg} 0%, ${service.bg}cc 32%, transparent 62%)` }}
          />

          {/* Text — natural scroll speed (100%), reads as pinned/foreground */}
          <div className="relative z-10 w-full px-6 py-20 md:px-16">
            <div className="max-w-md">
              <p
                className={`mb-4 font-mono text-xs uppercase tracking-[0.2em] ${revealed[i] ? "ss-reveal" : "opacity-0"}`}
                style={{ color: service.accent }}
              >
                {service.eyebrow}
              </p>
              <h3 className={`font-display text-3xl leading-[1.08] tracking-tight md:text-5xl ${revealed[i] ? "ss-reveal" : "opacity-0"}`}>
                {service.headline}
              </h3>
              <p
                className={`mt-6 max-w-sm text-sm leading-relaxed md:text-base ${revealed[i] ? "ss-rise ss-rise-1" : "opacity-0"}`}
                style={{ color: service.textMuted }}
              >
                {service.copy}
              </p>
              <button
                className={`relative mt-9 inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium ${revealed[i] ? "ss-rise ss-rise-2" : "opacity-0"}`}
                style={{
                  color: service.accentText,
                  backgroundImage: `linear-gradient(110deg, ${service.accent} 0%, ${service.accent} 35%, #fff8e0 50%, ${service.accent} 65%, ${service.accent} 100%)`,
                  backgroundSize: "220% 100%",
                  animation: "ss-shimmer 3.2s linear infinite",
                }}
              >
                {service.cta}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceVisual({ service }: { service: Service }) {
  switch (service.id) {
    case "implants":
      return <ImplantVisual service={service} />;
    case "smile":
      return <SmileVisual service={service} />;
    case "rootcanal":
      return <RootCanalVisual service={service} />;
    case "aligners":
      return <AlignerVisual service={service} />;
    case "whitening":
      return <WhiteningVisual service={service} />;
    default:
      return null;
  }
}

/** 01 — Implant assembles itself: bone -> post -> abutment -> crown */
function ImplantVisual({ service }: { service: Service }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center">
      <svg viewBox="0 0 240 340" className="h-full w-full" role="img" aria-label="Implant assembly illustration">
        <ellipse cx="120" cy="300" rx="90" ry="26" fill={`${service.accent}14`} />
        <g className="ss-rise" style={{ animationDelay: "500ms" }}>
          <rect x="60" y="230" width="120" height="60" rx="10" fill={`${service.accent}22`} stroke={service.accent} strokeWidth="1" />
          <path d="M70 245h100M70 260h100M70 275h100" stroke={service.accent} strokeWidth="0.75" opacity="0.5" />
        </g>
        <g className="ss-rise" style={{ animationDelay: "300ms" }}>
          <rect x="112" y="150" width="16" height="110" rx="4" fill={service.accent} />
          <rect x="106" y="145" width="6" height="14" rx="2" fill={service.accent} opacity="0.7" />
          <rect x="128" y="145" width="6" height="14" rx="2" fill={service.accent} opacity="0.7" />
        </g>
        <g className="ss-rise" style={{ animationDelay: "150ms" }}>
          <path d="M105 130 L135 130 L128 150 L112 150 Z" fill={service.accent} />
        </g>
        <g className="ss-rise" style={{ animationDelay: "0ms" }}>
          <path
            d="M120 40 C150 40 165 65 160 95 C157 118 145 130 120 130 C95 130 83 118 80 95 C75 65 90 40 120 40 Z"
            fill={service.text}
            opacity="0.95"
          />
          <path d="M120 55 C138 55 148 72 145 92" stroke={service.bg} strokeWidth="2" opacity="0.25" fill="none" />
        </g>
      </svg>
    </div>
  );
}

/** 02 — Draggable before/after comparison */
function SmileVisual({ service }: { service: Service }) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const teethRow = (shade: string, gap: number) => (
    <svg viewBox="0 0 320 160" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 8 }).map((_, idx) => (
        <rect key={idx} x={20 + idx * (35 + gap)} y="55" width="30" height="55" rx="8" fill={shade} stroke={service.accent} strokeWidth="0.5" />
      ))}
    </svg>
  );

  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center">
      <div className="w-full">
        <div
          ref={trackRef}
          className="relative h-64 w-full select-none overflow-hidden rounded-2xl md:h-80"
          style={{ backgroundColor: `${service.text}08`, touchAction: "none" }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-70">{teethRow(`${service.textMuted}40`, 2)}</div>
          <div className="absolute inset-y-0 left-0 flex items-center justify-center overflow-hidden" style={{ width: `${pos}%` }}>
            <div className="flex h-full w-full items-center justify-center" style={{ minWidth: "22rem" }}>
              {teethRow("#FFFDF6", 6)}
            </div>
          </div>
          <div
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
            className="absolute inset-y-0 z-10 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center"
            style={{ left: `${pos}%` }}
          >
            <div className="h-full w-px" style={{ backgroundColor: service.accent }} />
            <div
              className="absolute flex h-9 w-9 items-center justify-center rounded-full text-xs"
              style={{ backgroundColor: service.accent, color: service.accentText }}
            >
              &#8596;
            </div>
          </div>
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: service.textMuted }}>
            After
          </span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: service.textMuted }}>
            Before
          </span>
        </div>
        <p className="mt-3 text-center text-xs" style={{ color: service.textMuted }}>
          Drag to compare
        </p>
      </div>
    </div>
  );
}

/** 03 — Cross-section tooth with a pulsing nerve line, framed like a microscope view */
function RootCanalVisual({ service }: { service: Service }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center">
      <div className="relative flex h-[380px] w-[380px] max-h-full max-w-full items-center justify-center rounded-full" style={{ border: `1px solid ${service.text}1f` }}>
        <div className="absolute inset-4 rounded-full" style={{ border: `1px solid ${service.text}14` }} />
        <svg viewBox="0 0 200 260" className="h-[80%] w-[80%]" role="img" aria-label="Root canal cross section illustration">
          <path
            d="M100 20 C140 20 155 45 152 70 C150 90 138 98 132 105 C138 130 150 170 150 200 C150 225 138 245 122 245 C110 245 104 225 100 205 C96 225 90 245 78 245 C62 245 50 225 50 200 C50 170 62 130 68 105 C62 98 50 90 48 70 C45 45 60 20 100 20 Z"
            fill="none"
            stroke={service.text}
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M100 45 C100 80 96 110 100 150 C104 190 100 215 100 235"
            fill="none"
            stroke={service.accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 6"
            style={{ animation: "ss-pulse-line 2.6s ease-in-out infinite" }}
          />
          <circle cx="100" cy="45" r="4" fill={service.accent} />
        </svg>
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
          style={{ backgroundColor: service.bg, color: service.accent, border: `1px solid ${service.accent}55` }}
        >
          Live nerve path
        </span>
      </div>
    </div>
  );
}

/** 04 — Floating, slowly rotating aligner */
function AlignerVisual({ service }: { service: Service }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm items-center justify-center">
      <div className="ss-float">
        <svg viewBox="0 0 220 140" className="h-56 w-56" role="img" aria-label="Clear aligner illustration">
          <path
            d="M20 70 C20 40 55 20 110 20 C165 20 200 40 200 70 C200 100 165 120 110 120 C55 120 20 100 20 70 Z"
            fill={`${service.text}0a`}
            stroke={service.accent}
            strokeWidth="1.25"
          />
          <path
            d="M35 70 C35 48 65 32 110 32 C155 32 185 48 185 70 C185 92 155 108 110 108 C65 108 35 92 35 70 Z"
            fill="none"
            stroke={service.text}
            strokeWidth="0.75"
            opacity="0.35"
          />
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1={40 + i * 16} y1="34" x2={40 + i * 16} y2="106" stroke={service.text} strokeWidth="0.5" opacity="0.15" />
          ))}
        </svg>
      </div>
    </div>
  );
}

/** 05 — Whitened teeth row with a diagonal sparkle sweep */
function WhiteningVisual({ service }: { service: Service }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-lg overflow-hidden rounded-2xl" style={{ backgroundColor: `${service.accent}0d` }}>
      <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full">
        {Array.from({ length: 8 }).map((_, idx) => (
          <rect key={idx} x={20 + idx * 37} y="55" width="30" height="55" rx="8" fill="#FFFFFF" stroke={`${service.text}22`} strokeWidth="0.75" />
        ))}
      </svg>
      <div
        className="absolute inset-y-0 w-24"
        style={{
          background: `linear-gradient(100deg, transparent, ${service.accent}55, transparent)`,
          animation: "ss-sparkle-sweep 3.4s ease-in-out infinite",
        }}
      />
    </div>
  );
}