import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General & Restorative Dentistry | MINS Dentistry",
  description: "Comprehensive general and restorative dental care at MINS Dentistry — from routine consultations to root canals, crowns, bridges, and more.",
};

const highlights = [
  { value: "8 Services", label: "Under one roof" },
  { value: "Preventive", label: "Catch problems early" },
  { value: "Restorative", label: "Preserve natural teeth" },
  { value: "Emergency", label: "Same-day care available" },
];

const TREATMENTS = [
  { label: "Dental Consultation", href: "/dental-consultation", description: "Comprehensive oral health assessment and personalised treatment planning." },
  { label: "Root Canal Treatment", href: "/root-canal-treatment", description: "Save infected teeth and eliminate pain with precision endodontic care." },
  { label: "Tooth Filling", href: "/tooth-filling", description: "Restore decayed or damaged teeth with durable, tooth-coloured fillings." },
  { label: "Dental Crowns", href: "/dental-crowns", description: "Full-coverage restorations that protect and strengthen compromised teeth." },
  { label: "Dental Bridges", href: "/dental-bridges", description: "Fixed prosthetics that replace missing teeth and restore your bite." },
  { label: "Dentures", href: "/dentures", description: "Custom removable or implant-supported solutions for multiple missing teeth." },
  { label: "Tooth Extraction", href: "/tooth-extraction", description: "Safe, comfortable extractions when a tooth cannot be saved." },
  { label: "Emergency Dental Care", href: "/emergency-dental-care", description: "Prompt treatment for dental pain, trauma, and urgent oral health needs." },
];

export default function GeneralRestorativePage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/dental-consultaion-hero.png" alt="General and restorative dentistry at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">General &amp; Restorative</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">General &amp; Restorative Dentistry</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">From your first consultation to complex restorations, MINS Dentistry provides complete general and restorative dental care. We focus on preserving your natural teeth and restoring full function with precision and compassion.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Call +91 90081 13963</a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-md">
                <p className="text-lg sm:text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About This Department</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Comprehensive care to keep your natural teeth for life</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">General and restorative dentistry forms the foundation of good oral health. Whether you need a routine check-up, a filling, or a full-coverage crown, our team provides thorough, evidence-based care tailored to your individual needs.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, we believe in preserving what you have. Every treatment decision is guided by the principle of minimal intervention — doing what is necessary, and nothing more.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">When to visit us</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Routine check-ups and professional cleaning every 6 months.</li>
              <li>Tooth pain, sensitivity, or visible decay requiring prompt attention.</li>
              <li>A broken, cracked, or heavily worn tooth needing restoration.</li>
              <li>Dental emergencies — trauma, lost fillings, or acute infection.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Treatments</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">All general &amp; restorative services</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Select a treatment below to learn more about what it involves, who it is for, and what to expect.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TREATMENTS.map((t) => (
            <Link key={t.href} href={t.href} className="group rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)] flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1F1A17] mb-3 group-hover:text-[#B8912A] transition-colors">{t.label}</h3>
                <p className="text-[14px] leading-relaxed text-[#5F574D]">{t.description}</p>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#B8912A]">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Get Started</p>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Ready to take care of your teeth?</h3>
              <p className="text-[15px] leading-relaxed text-white/85 max-w-2xl">Book a consultation with our team and we will assess your oral health, answer your questions, and create a personalised treatment plan that fits your needs and budget.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-col lg:items-stretch">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8] whitespace-nowrap">Book a Consultation</Link>
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 whitespace-nowrap">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
