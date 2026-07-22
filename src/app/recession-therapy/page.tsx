import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Single & Multiple Tooth Recession Therapy | MINS Dentistry",
  description: "Single and multiple tooth recession therapy at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Restorative", label: "Covers exposed tooth roots" },
  { value: "Precise", label: "Targeted graft techniques" },
  { value: "Aesthetic", label: "Improves gum line appearance" },
  { value: "Protective", label: "Prevents further recession" },
];

const types = [
  { title: "Single tooth recession", description: "Recession affecting one tooth is treated with a targeted connective tissue or pedicle graft to restore coverage and reduce sensitivity." },
  { title: "Multiple tooth recession", description: "When several teeth are affected, a comprehensive grafting plan is designed to address each area efficiently in a staged or combined approach." },
  { title: "Generalised recession", description: "Widespread recession across the arch requires a thorough assessment and a phased treatment plan to restore gum coverage systematically." },
  { title: "Recession with bone loss", description: "Where recession is accompanied by bone deficiency, guided tissue regeneration or combined grafting may be recommended." },
];

const process = [
  { step: "01", title: "Clinical assessment", description: "We measure the extent of recession, evaluate tissue thickness and quality, and confirm the most appropriate grafting technique." },
  { step: "02", title: "Treatment planning", description: "A personalised plan is created based on how many teeth are affected, tissue availability, and your aesthetic and functional goals." },
  { step: "03", title: "Grafting procedure", description: "Connective tissue or other suitable graft material is used to cover the exposed root surfaces with precision and care." },
  { step: "04", title: "Healing and review", description: "The treated sites are monitored during healing. Most patients see complete or near-complete root coverage with good long-term stability." },
];

const benefits = [
  "Covers exposed root surfaces effectively",
  "Reduces tooth sensitivity from recession",
  "Prevents further gum and bone loss",
  "Improves the appearance of the gum line",
  "Treats single or multiple teeth in one plan",
  "Long-lasting results with proper maintenance",
];

export default function RecessionTherapyPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/oral-surgery.png" alt="Recession therapy at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Recession Therapy</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Gum Recession Treatment</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Single &amp; Multiple Tooth Recession Therapy</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Whether recession affects one tooth or many, MINS Dentistry offers tailored grafting solutions to restore gum coverage, reduce sensitivity, and protect your teeth from further deterioration — with results that are both functional and aesthetic.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About This Treatment</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Restoring gum coverage where it has been lost</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Gum recession occurs when the gum tissue pulls away from the tooth, exposing the root surface. Left untreated, it can cause sensitivity, increased risk of decay, and eventual tooth loss. Recession therapy uses proven grafting techniques to restore coverage and halt further progression.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, every recession therapy plan is personalised — whether you need treatment for one tooth or multiple sites — ensuring the most effective and lasting outcome for your gum health.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Recession therapy may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>One or more teeth show visible root exposure.</li>
              <li>Tooth sensitivity from recession is affecting daily life.</li>
              <li>Gum recession is progressing despite good oral hygiene.</li>
              <li>Recession is affecting the appearance of your smile.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Types of Recession</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Recession patterns we treat at MINS Dentistry</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">The treatment approach depends on the number of teeth affected, the severity of recession, and the condition of surrounding gum and bone tissue.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {types.map((item) => (
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How recession therapy is planned and performed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Each case is assessed individually to ensure the right technique is chosen and the best possible root coverage is achieved.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why recession therapy makes a lasting difference</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Restore your gum coverage with expert care</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">If you have noticed exposed roots or sensitivity, our team can assess the extent of recession and recommend the most effective grafting approach for your needs.</p>
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
