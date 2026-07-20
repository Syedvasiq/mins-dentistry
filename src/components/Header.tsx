"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CLINIC_PHONE = "+61 400 000 000";
const CLINIC_TEL = "+61400000000";

const minsLinks = [
  { label: "About", href: "/about" },
  { label: "Doctor", href: "/doctor" },
  { label: "Tips", href: "/tips" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

const serviceCategories = [
  {
    title: "Dental Implants",
    items: [
      "Single Tooth Implant",
      "Multiple Tooth Implants",
      "Full Mouth Rehabilitation",
      "Bone Grafting",
      "Implant Consultation",
    ],
  },
  {
    title: "General & Restorative",
    items: [
      "Dental Consultation",
      "Root Canal Treatment",
      "Tooth Filling",
      "Dental Crowns",
      "Dental Bridges",
      "Dentures",
      "Tooth Extraction",
      "Emergency Dental Care",
    ],
  },
  {
    title: "Cosmetic & Smile",
    items: [
      "Teeth Whitening",
      "Smile Makeover",
      "Dental Veneers",
      "Invisible Aligners",
      "Metal Braces",
      "Ceramic Braces",
    ],
  },
  {
    title: "Gum Care",
    items: [
      "Gum Treatment",
      "Flap Surgery",
      "Frenectomy",
      "Oral Surgery",
    ],
  },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/[()&]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();

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
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8">

          {serviceCategories.map((cat) => (
            <DesktopDropdown key={cat.title} label={cat.title} baseText={baseText}>
              <ul className="w-64 flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
                {cat.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/services/${slugify(item)}`}
                      className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-700 ${goldenHover}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </DesktopDropdown>
          ))}

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
            className="relative rounded-2xl px-5 py-2.5 text-[15px] font-bold text-white whitespace-nowrap overflow-hidden
              bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
              shadow-[0_2px_12px_rgba(234,179,8,0.45)]
              hover:shadow-[0_4px_20px_rgba(234,179,8,0.65)]
              hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400
              transition-all duration-300
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
              before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
          >
            Book Appointment
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
            return (
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
                    {cat.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/services/${slugify(item)}`}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors"
                        >
                          {item}
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
            className="mt-2 rounded-2xl px-5 py-3 text-[15px] font-bold text-white text-center
              bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
              shadow-[0_2px_12px_rgba(234,179,8,0.4)]
              hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400
              transition-all duration-300"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
