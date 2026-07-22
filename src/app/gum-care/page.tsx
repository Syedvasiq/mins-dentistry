import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gum Care & Periodontal Treatment | MINS Dentistry",
  description: "Comprehensive gum care and periodontal treatments at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "10 Services", label: "Periodontal care" },
  { value: "Surgical", label: "Advanced procedures" },
  { value: "Aesthetic", label: "Gum line correction" },
  { value: "Preventive", label: "Stop disease early" },
];

const TREATMENTS = [
  { label: "Gum Treatment", href: "/gum-treatment", description: "Non-surgical deep cleaning and scaling to treat gum disease and restore periodontal health." },
  { label: "Flap Surgery", href: "/flap-surgery", description: "Surgical access to deep pockets to remove infection and regenerate supporting bone and tissue." },
  { label: "Frenectomy", href: "/frenectomy", description: "Removal of restrictive frenum tissue that causes gum recession or limits tongue movement." },
  { label: "Gingival Depigmentation", href: "/gingival-depigmentation", description: "Removal of dark pigmentation from the gums to reveal a brighter, more uniform gum colour." },
  { label: "Lip Repositioning", href: "/lip-repositioning", description: "Surgical correction of a gummy smile by limiting how high the upper lip rises when smiling." },
  { label: "Ridge Augmentation", href: "/ridge-augmentation", description: "Rebuilding the jaw ridge after tooth loss to restore natural contour and support future restorations." },
  { label: "Vestibuloplasty", href: "/vestibuloplasty", description: "Deepening the oral vestibule to improve denture fit, function, and soft tissue stability." },
  { label: "Mucogingival Surgeries", href: "/mucogingival-surgeries", description: "Procedures that correct the relationship between gum tissue and the mucosa for improved health and aesthetics." },
  { label: "Gingival Recession Therapy", href: "/gingival-recession-therapy", description: "Grafting and regenerative techniques to cover exposed roots and restore a healthy gum line." },
  { label: "Single & Multiple Tooth Recession Therapy", href: "/recession-therapy", description: "Targeted grafting for one or several teeth affected by recession, with long-lasting root coverage." },
];

export default function GumCarePage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/gum-treatment.png" alt="Gum care and periodontal treatment at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Gum Care</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Periodontal Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Gum Care &amp; Periodontal Treatment</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Healthy gums are the foundation of a healthy smile. MINS Dentistry provides comprehensive periodontal care — from routine gum treatment to advanced surgical procedures — to prevent, diagnose, and treat gum disease and soft tissue conditions at every stage.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Gum Care</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Protecting the foundation that holds your smile together</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Gum disease is one of the most common — and most preventable — causes of tooth loss. When caught early, it can be managed with non-surgical treatment. When more advanced, our surgical options can halt progression and restore lost tissue.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Beyond disease management, our gum care services also include aesthetic procedures to correct gummy smiles, uneven gum lines, and pigmentation — helping you feel confident in your smile.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Signs you may need gum care</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Gums that bleed when brushing or flossing.</li>
              <li>Swollen, red, or tender gum tissue.</li>
              <li>Receding gums or teeth that appear longer.</li>
              <li>Persistent bad breath despite good oral hygiene.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Treatments</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">All gum care &amp; periodontal services</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Select a treatment to learn more about the procedure, who it is for, and what to expect during and after care.</p>
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
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Take the first step toward healthier gums</h3>
              <p className="text-[15px] leading-relaxed text-white/85 max-w-2xl">Whether you have early signs of gum disease or need advanced periodontal surgery, our team will assess your condition and recommend the most effective treatment to restore and maintain your gum health.</p>
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
