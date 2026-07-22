import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invisible Aligners | MINS Dentistry",
  description: "Clear invisible aligners for discreet teeth straightening at MINS Dentistry.",
};

const highlights = [
  { value: "Invisible", label: "Nearly undetectable when worn" },
  { value: "Removable", label: "Take out for eating and cleaning" },
  { value: "Comfortable", label: "No metal wires or brackets" },
  { value: "Precise", label: "Custom-made for your teeth" },
];
const idealFor = [
  { title: "Mild to moderate alignment", description: "Invisible aligners are effective for correcting crowding, spacing, and mild bite issues with a discreet approach." },
  { title: "Adults and professionals", description: "The clear, removable design makes aligners ideal for adults who want orthodontic treatment without visible braces." },
  { title: "Active lifestyles", description: "Aligners can be removed for sports, special occasions, and meals — offering flexibility that fixed braces cannot." },
  { title: "Oral hygiene conscious patients", description: "Because aligners are removable, brushing and flossing remain easy throughout the entire treatment period." },
];
const process = [
  { step: "01", title: "Orthodontic assessment", description: "We evaluate your teeth, bite, and alignment to determine if invisible aligners are the right treatment for your case." },
  { step: "02", title: "Digital treatment planning", description: "A digital scan of your teeth is used to create a precise, customised aligner series mapped to your treatment goals." },
  { step: "03", title: "Aligner wear", description: "You wear each set of aligners for the prescribed period, gradually moving your teeth toward the desired position." },
  { step: "04", title: "Progress reviews", description: "Regular check-ins ensure your teeth are tracking correctly and adjustments are made as needed throughout treatment." },
];
const benefits = [
  "Nearly invisible — no one needs to know you're in treatment",
  "Removable for eating, drinking, and oral hygiene",
  "No metal brackets or wires for greater comfort",
  "Custom-made for precise, predictable tooth movement",
  "Suitable for a wide range of alignment concerns",
  "Shorter treatment time in many cases compared to braces",
];

export default function InvisibleAlignersPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/cometic/Invisible-Aligners.png" alt="Invisible aligners at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/orthodontics" className="hover:text-white/80 transition-colors">Orthodontics</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Invisible Aligners</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Discreet Orthodontics</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Invisible Aligners for Discreet, Comfortable Teeth Straightening</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Custom-made clear trays gradually shift your teeth into alignment with no metal wires or brackets. MINS Dentistry offers aligner treatment for mild to moderate cases with regular monitoring for optimal results.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book an Orthodontic Consultation</Link>
              <Link href="/orthodontics" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Orthodontic Care</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Aligners</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Straighten your teeth without anyone noticing</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Invisible aligners use a series of custom-made clear trays to gradually move your teeth into the correct position. Each tray is worn for a set period before progressing to the next, creating controlled, predictable movement.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, aligner treatment is planned with digital precision and monitored closely to ensure your teeth are tracking correctly throughout the process.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Invisible aligners may be right for you if</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>You want orthodontic treatment that is nearly invisible.</li>
              <li>You prefer a removable appliance over fixed braces.</li>
              <li>You have mild to moderate crowding or spacing concerns.</li>
              <li>You want the flexibility to remove your appliance when needed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Who It Suits</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Who commonly chooses invisible aligners</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Aligners are a popular choice for patients who want effective orthodontic results without the visibility of traditional braces.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {idealFor.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Journey</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How invisible aligner treatment is planned</h2>
            <p className="text-[15px] leading-relaxed text-white/75">From digital planning to final results, every step is designed for precision, comfort, and a smile you'll love.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why patients choose invisible aligners</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Straighten your smile discreetly with aligners</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Book an orthodontic consultation at MINS Dentistry to find out if invisible aligners are the right solution for your smile goals and alignment needs.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Consultation</Link>
              <Link href="/orthodontics" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Orthodontics</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
