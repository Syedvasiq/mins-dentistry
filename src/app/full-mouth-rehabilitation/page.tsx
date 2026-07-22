import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Mouth Rehabilitation | MINS Dentistry",
  description: "Complete full mouth rehabilitation with dental implants at MINS Dentistry.",
};

const highlights = [
  { value: "Complete", label: "Full arch restoration solution" },
  { value: "Permanent", label: "Fixed implant-supported teeth" },
  { value: "Functional", label: "Restored bite and chewing ability" },
  { value: "Transformative", label: "Comprehensive smile rehabilitation" },
];
const benefits = [
  "Restores full mouth function and aesthetics",
  "Permanent fixed teeth supported by implants",
  "Eliminates the need for removable dentures",
  "Preserves jawbone and facial structure",
  "Improves confidence, speech, and quality of life",
  "Comprehensive treatment planned as one cohesive solution",
];
const process = [
  { step: "01", title: "Full mouth assessment", description: "A comprehensive evaluation of your teeth, gums, bone, and bite to understand the full scope of rehabilitation needed." },
  { step: "02", title: "Personalised treatment plan", description: "A detailed plan is created covering all required procedures — extractions, grafting, implants, and final restorations." },
  { step: "03", title: "Implant placement", description: "Implants are strategically placed to support the full arch restoration with optimal stability and function." },
  { step: "04", title: "Final restoration", description: "Custom prosthetic teeth are attached to the implants, completing your full mouth rehabilitation with a natural result." },
];

export default function FullMouthRehabilitationPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/implants/Full-Mouth-Rehabilitation.png" alt="Full mouth rehabilitation at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/dental-implants" className="hover:text-white/80 transition-colors">Dental Implants</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Full Mouth Rehabilitation</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Advanced Implant Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Full Mouth Rehabilitation for a Complete Smile Transformation</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Full mouth rehabilitation combines multiple dental procedures to completely restore the health, function, and aesthetics of your entire mouth — using implants, crowns, and other restorations for a fully functional, beautiful smile.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <Link href="/dental-implants" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Implant Services</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About This Treatment</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">A comprehensive solution for extensive tooth loss</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Full mouth rehabilitation is designed for patients who have lost most or all of their teeth, or whose teeth are severely damaged. It combines implant placement with custom prosthetic restorations to rebuild the entire smile.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, every rehabilitation plan is personalised to the patient's oral condition, bone structure, and aesthetic goals for a result that is both functional and transformative.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Full mouth rehabilitation may be right for you if</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Most or all teeth are missing or severely damaged.</li>
              <li>You want a permanent, fixed alternative to full dentures.</li>
              <li>Multiple restorative procedures are needed together.</li>
              <li>You want to restore full function and a natural smile.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How full mouth rehabilitation is carefully planned</h2>
            <p className="text-[15px] leading-relaxed text-white/75">A successful rehabilitation requires thorough planning, staged treatment, and close attention to both function and aesthetics at every step.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {process.map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Key Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Life-changing benefits of full mouth rehabilitation</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Begin your full mouth transformation today</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will conduct a thorough assessment and create a personalised rehabilitation plan that restores your smile, function, and confidence completely.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Consultation</Link>
              <Link href="/dental-implants" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Implant Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
