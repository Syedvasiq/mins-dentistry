import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flap Surgery | MINS Dentistry",
  description: "Periodontal flap surgery for advanced gum disease at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Advanced", label: "Treatment for severe gum disease" },
  { value: "Thorough", label: "Deep root and bone cleaning" },
  { value: "Precise", label: "Surgical periodontal technique" },
  { value: "Restorative", label: "Supports long-term gum health" },
];
const indications = [
  { title: "Deep gum pockets", description: "When gum pockets are too deep to clean with non-surgical methods, flap surgery allows thorough access to the root surfaces." },
  { title: "Bone loss from gum disease", description: "Flap surgery enables direct assessment and treatment of bone damage caused by advanced periodontal disease." },
  { title: "Failed non-surgical treatment", description: "If scaling and root planing have not adequately controlled the disease, flap surgery provides a more definitive solution." },
  { title: "Preparation for bone grafting", description: "Flap surgery is often performed alongside bone grafting procedures to rebuild lost bone support around teeth." },
];
const process = [
  { step: "01", title: "Periodontal assessment", description: "We evaluate pocket depths, bone levels, and the extent of disease to determine if flap surgery is the appropriate treatment." },
  { step: "02", title: "Anaesthesia and incision", description: "The area is fully numbed and a small incision is made to gently fold back the gum tissue for access." },
  { step: "03", title: "Deep cleaning", description: "Root surfaces and bone are thoroughly cleaned of bacteria, tartar, and diseased tissue under direct vision." },
  { step: "04", title: "Closure and healing", description: "The gum tissue is repositioned and sutured. Healing is monitored with follow-up appointments." },
];
const benefits = [
  "Provides access for thorough deep cleaning",
  "Reduces deep gum pockets effectively",
  "Removes bacteria and diseased tissue directly",
  "Supports bone and tissue regeneration",
  "Prevents further tooth and bone loss",
  "Creates a healthier environment for long-term gum health",
];

export default function FlapSurgeryPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/flap-surgery.png" alt="Flap surgery at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Flap Surgery</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Periodontal Surgery</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Flap Surgery for Advanced Gum Disease Treatment</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Flap surgery is recommended for advanced gum disease where deep cleaning alone is insufficient. The gum tissue is gently folded back to allow thorough cleaning of tooth roots and bone — performed with precision at MINS Dentistry.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <Link href="/gum-care" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Gum Care</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Flap Surgery</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">A surgical solution for deep periodontal disease</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">When gum disease has progressed to the point where non-surgical cleaning cannot reach the affected areas, flap surgery provides direct access to clean root surfaces and treat bone damage effectively.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, flap surgery is performed with precision and care to achieve the best possible outcomes for long-term gum health and tooth preservation.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Flap surgery may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Gum pockets are too deep for non-surgical cleaning.</li>
              <li>Significant bone loss has occurred around teeth.</li>
              <li>Previous scaling and root planing has not resolved the disease.</li>
              <li>Bone grafting is planned alongside periodontal treatment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>When It's Needed</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Situations where flap surgery is commonly advised</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Flap surgery is a targeted intervention for cases where gum disease has advanced beyond what non-surgical treatment can address.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {indications.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]">
              <h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#5F574D]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How flap surgery is carefully performed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">The procedure is performed under local anaesthesia and is designed to be as comfortable and effective as possible.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why flap surgery is an effective periodontal treatment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Address advanced gum disease with expert care</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our periodontal team will assess your gum health and recommend the most appropriate treatment to restore health and protect your teeth long-term.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Appointment</Link>
              <Link href="/gum-care" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Gum Care</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
