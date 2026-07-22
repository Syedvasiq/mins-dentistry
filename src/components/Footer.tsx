"use client";

import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const GOLD = "#C9A227";

const LINKS = {
  Treatments: ["Dental Implants", "Smile Makeover", "Teeth Whitening", "Root Canal", "Aligners", "Gum Treatment"],
  "Quick Links": ["About Us", "Our Doctor", "Services", "Before & After", "Testimonials", "Contact Us"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#080807" }} className="relative overflow-hidden">
      {/* Top gold border */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}55, transparent)` }} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${GOLD}06 0%, transparent 70%)` }} />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image src="/mins-dentisrty-logo.png" alt="MINS Dentistry" width={160} height={60} className="object-contain" />
            </div>
            <p className="text-[13px] leading-relaxed text-white/65 mb-6 max-w-xs">
              Advanced dental care with a gentle touch. Trusted by thousands of patients across Shimoga for over a decade.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${GOLD}60`; (e.currentTarget as HTMLElement).style.color = GOLD; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD, fontFamily: "monospace" }}>{heading}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-white/65 transition-colors duration-200 hover:text-white/90 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px transition-all duration-300 group-hover:w-5" style={{ background: GOLD, opacity: 0.5 }} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] mb-5" style={{ color: GOLD, fontFamily: "monospace" }}>Contact</p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />,
                  text: "+91 90081 13963",
                  href: "tel:+919008113963",
                },
                {
                  icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></>,
                  text: "info@minsdentistry.com",
                  href: "mailto:info@minsdentistry.com",
                },
                {
                  icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
                  text: "Shimoga, Karnataka",
                  href: "#",
                },
                {
                  icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
                  text: "Mon – Sat: 9:00 AM – 8:00 PM",
                  href: "#",
                },
              ].map(({ icon, text, href }, i) => (
                <li key={i}>
                  <a href={href} className="flex items-center gap-3 group">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{ background: "rgba(255,255,255,0.04)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.07)" }}>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                        {icon}
                      </svg>
                    </span>
                    <span className="text-[13px] text-white/65 leading-relaxed group-hover:text-white/90 transition-colors duration-200">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[11px] text-white/40"
          style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgba(255,255,255,0.06)", fontFamily: "monospace" }}
        >
          <p>© {new Date().getFullYear()} MINS Dentistry. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="hover:text-white/50 transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
