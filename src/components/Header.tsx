"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CLINIC_PHONE = "90081 13963";
const CLINIC_TEL = "9008113963";

const minsLinks = [
  { label: "About", href: "/about" },
  { label: "Meet the Doctor", href: "/meet-the-doctor" },
  { label: "Before & After", href: "/before-after" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const serviceCategories = [
  {
    title: "Dental Implants",
    href: "/dental-implants",
    items: [
      { label: "Single Tooth Implant", href: "/single-tooth-implant" },
      { label: "Multiple Tooth Implants", href: "/multiple-tooth-implants" },
      { label: "Full Mouth Rehabilitation", href: "/full-mouth-rehabilitation" },
      { label: "Bone Grafting", href: "/bone-grafting" },
      { label: "Implant Consultation", href: "/implant-consultation" },
    ],
  },
  {
    title: "General & Restorative",
    href: "/general-restorative-dentistry",
    items: [
      { label: "Dental Consultation", href: "/dental-consultation" },
      { label: "Root Canal Treatment", href: "/root-canal-treatment" },
      { label: "Tooth Filling", href: "/tooth-filling" },
      { label: "Dental Crowns", href: "/dental-crowns" },
      { label: "Dental Bridges", href: "/dental-bridges" },
      { label: "Dentures", href: "/dentures" },
      { label: "Tooth Extraction", href: "/tooth-extraction" },
      { label: "Emergency Dental Care", href: "/emergency-dental-care" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    items: [
      { label: "Teeth Whitening", href: "/teeth-whitening" },
      { label: "Smile Makeover", href: "/smile-makeover" },
      { label: "Dental Veneers", href: "/dental-veneers" },
    ],
  },
  {
    title: "Orthodontics",
    href: "/orthodontics",
    items: [
      { label: "Invisible Aligners", href: "/invisible-aligners" },
      { label: "Metal Braces", href: "/metal-braces" },
      { label: "Ceramic Braces", href: "/ceramic-braces" },
    ],
  },
  {
    title: "Gum Care",
    href: "/gum-care",
    items: [
      { label: "Gum Treatment", href: "/gum-treatment" },
      { label: "Flap Surgery", href: "/flap-surgery" },
      { label: "Frenectomy", href: "/frenectomy" },
      { label: "Gingival Depigmentation", href: "/gingival-depigmentation" },
      { label: "Lip Repositioning", href: "/lip-repositioning" },
      { label: "Ridge Augmentation", href: "/ridge-augmentation" },
      { label: "Vestibuloplasty", href: "/vestibuloplasty" },
      { label: "Mucogingival Surgeries", href: "/mucogingival-surgeries" },
      { label: "Gingival Recession Therapy", href: "/gingival-recession-therapy" },
      { label: "Recession Therapy", href: "/recession-therapy" },
    ],
  },
];



const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MINS_KEY = "__mins__";

const goldenHover =
  "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-500 transition-all duration-200";

const navItemClass = "text-[15px] font-semibold tracking-wide";

/* ── Desktop hover dropdown ── */
function DesktopDropdown({
  label,
  align = "center",
  baseText,
  children,
}: {
  label: string;
  align?: "center" | "right";
  baseText: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 whitespace-nowrap ${navItemClass} ${baseText} ${goldenHover}`}
        aria-expanded={open}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        className={`absolute top-full pt-2 ${align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"} z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`origin-top transition-all duration-200 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const baseText = scrolled ? "text-gray-800" : "text-white";

  return (
    <>
      <style>{`
        .shimmer-header-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          animation: shimmer-h 4.5s ease-in-out infinite;
        }
        @keyframes shimmer-h {
          0%, 88% { left: -60%; }
          100% { left: 130%; }
        }
      `}</style>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24 py-1">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/mins-dentisrty-logo.png"
            alt="Mins Dentistry"
            width={280}
            height={100}
            priority
            style={{ height: "80px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav — hover dropdowns */}
        <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-5 xl:gap-6 mx-8 xl:mx-10">

          {serviceCategories.map((cat) =>
            cat.items.length === 0 ? (
              <Link
                key={cat.title}
                href={cat.href}
                className={`flex items-center gap-1 whitespace-nowrap ${navItemClass} ${baseText} ${goldenHover}`}
              >
                {cat.title}
              </Link>
            ) : (
              <DesktopDropdown key={cat.title} label={cat.title} baseText={baseText}>
                <ul className="w-64 flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
                  <li>
                    <Link
                      href={cat.href}
                      className={`block rounded-lg px-4 py-2.5 text-[15px] font-bold text-[#B8912A] border-b border-gray-100 mb-1`}
                    >
                      All {cat.title} →
                    </Link>
                  </li>
                  {cat.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-700 ${goldenHover}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DesktopDropdown>
            )
          )}

          {/* Mins dropdown — end of nav, aligns right */}
          <DesktopDropdown label="Mins" align="right" baseText={baseText}>
            <ul className="w-48 flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
              {minsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-700 ${goldenHover}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </DesktopDropdown>
        </nav>

        {/* Phone + Book CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${CLINIC_TEL}`}
            className={`flex items-center gap-2 whitespace-nowrap ${navItemClass} ${baseText} ${goldenHover}`}
          >
            <PhoneIcon />
            {CLINIC_PHONE}
          </a>
          <Link
            href="/contact"
            className="shimmer-header-btn relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A227] via-[#EBD08C] to-[#C9A227] px-5 py-2.5 text-[15px] font-bold text-black whitespace-nowrap shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]"
          >
            <span className="relative z-10">Book Appointment</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 shrink-0"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || menuOpen ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu — click accordions */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-300 bg-white ${
          menuOpen ? "max-h-[calc(100vh-80px)] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">

          {serviceCategories.map((cat) => {
            const open = openMobileCategory === cat.title;
            return cat.items.length === 0 ? (
              <Link
                key={cat.title}
                href={cat.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-colors"
              >
                {cat.title}
              </Link>
            ) : (
              <div key={cat.title}>
                <button
                  onClick={() => setOpenMobileCategory(open ? null : cat.title)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-colors"
                  aria-expanded={open}
                >
                  {cat.title}
                  <ChevronIcon open={open} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
                  <ul className="flex flex-col gap-1 pl-3 pb-2">
                    <li>
                      <Link
                        href={cat.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-[15px] font-bold text-[#B8912A] transition-colors"
                      >
                        All {cat.title} →
                      </Link>
                    </li>
                    {cat.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Mins accordion */}
          <div>
            <button
              onClick={() => setOpenMobileCategory(openMobileCategory === MINS_KEY ? null : MINS_KEY)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-colors"
              aria-expanded={openMobileCategory === MINS_KEY}
            >
              Mins
              <ChevronIcon open={openMobileCategory === MINS_KEY} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openMobileCategory === MINS_KEY ? "max-h-96" : "max-h-0"}`}>
              <ul className="flex flex-col gap-1 pl-3 pb-2">
                {minsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`tel:${CLINIC_TEL}`}
            className="flex items-center gap-2 rounded-xl px-3 py-3 text-[15px] font-semibold text-gray-800 hover:bg-amber-50 hover:text-amber-500 transition-colors"
          >
            <PhoneIcon />
            {CLINIC_PHONE}
          </a>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="shimmer-header-btn relative mt-2 block overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A227] via-[#EBD08C] to-[#C9A227] px-5 py-3 text-[15px] font-bold text-black text-center shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,175,55,0.45)]"
          >
            <span className="relative z-10">Book Appointment</span>
          </Link>
        </nav>
      </div>
    </header>
    </>
  );
}
