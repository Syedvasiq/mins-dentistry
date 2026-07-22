import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthodontics — Braces & Aligners | MINS Dentistry",
  description: "Straighten your teeth with orthodontic treatment at MINS Dentistry — invisible aligners, metal braces, and ceramic braces.",
};

const highlights = [
  { value: "3 Options", label: "Aligners & braces" },
  { value: "All Ages", label: "Teens and adults" },
  { value: "Discreet", label: "Clear aligner options" },
  { value: "Precise", label: "Digital treatment planning" },
];

const TREATMENTS = [
  {
    label: "Invisible Aligners",
    href: "/invisible-aligners",
    description: "Removable clear aligners that straighten teeth discreetly — no wires, no brackets.",
  },
  {
    label: "Metal Braces",
    href: "/metal-braces",
    description: "The most reliable orthodontic option for correcting complex alignment and bite issues.",
  },
  {
    label: "Ceramic Braces",
    href: "/ceramic-braces",
    description: "Tooth-coloured brackets that blend with your smile while delivering precise correction.",
  },
];

export default function OrthodonticsPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/cometic/Invisible-Aligners.png" alt="Orthodontics at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Orthodontics</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Teeth Straightening</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Orthodontics — Braces &amp; Aligners</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Properly aligned teeth are healthier and more beautiful. MINS Dentistry offers modern orthodontic solutions for all ages — from discreet clear aligners to traditional braces — tailored to your lifestyle and goals.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Orthodontics</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Straightening teeth for a healthier, more confident smile</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Orthodontic treatment corrects misaligned teeth and improper bites, improving both the function and appearance of your smile. Straight teeth are easier to clean, reducing the risk of decay and gum disease over time.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, we use digital planning tools to map your treatment from start to finish, giving you a clear picture of your expected results before treatment even begins.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Orthodontics may be right for you if</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Your teeth are crowded, spaced, or overlapping.</li>
              <li>You have an overbite, underbite, or crossbite.</li>
              <li>You want a straighter smile without visible metal brackets.</li>
              <li>You are an adult who missed orthodontic treatment earlier in life.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Options</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Choose the right orthodontic solution</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Each option has its own advantages. Our orthodontist will help you choose the best fit for your case, lifestyle, and budget.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {TREATMENTS.map((t) => (
            <Link key={t.href} href={t.href} className="group rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-8 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)] flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1F1A17] mb-3 group-hover:text-[#B8912A] transition-colors">{t.label}</h3>
                <p className="text-[15px] leading-relaxed text-[#5F574D]">{t.description}</p>
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
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Start your journey to a straighter smile</h3>
              <p className="text-[15px] leading-relaxed text-white/85 max-w-2xl">Book an orthodontic consultation and our team will assess your teeth, discuss your options, and create a personalised treatment plan with a clear timeline and expected outcome.</p>
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
