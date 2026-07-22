import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Braces | MINS Dentistry",
  description: "Effective metal braces for teeth straightening at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Effective", label: "Proven orthodontic correction" },
  { value: "Reliable", label: "Handles complex alignment cases" },
  { value: "Precise", label: "Controlled tooth movement" },
  { value: "Trusted", label: "Time-tested orthodontic solution" },
];
const idealFor = [
  { title: "Complex alignment cases", description: "Metal braces are highly effective for correcting severe crowding, significant bite issues, and complex tooth movements." },
  { title: "Children and teenagers", description: "Metal braces are a popular and reliable choice for younger patients who need comprehensive orthodontic correction." },
  { title: "Cost-conscious patients", description: "Metal braces are generally the most affordable orthodontic option while still delivering excellent, predictable results." },
  { title: "Patients needing maximum control", description: "For cases requiring precise, controlled movement of multiple teeth, metal braces offer the highest level of orthodontic control." },
];
const process = [
  { step: "01", title: "Orthodontic evaluation", description: "We assess your teeth, bite, and jaw to determine the extent of correction needed and plan your treatment." },
  { step: "02", title: "Bracket placement", description: "Metal brackets are bonded to each tooth and connected with an archwire that guides tooth movement." },
  { step: "03", title: "Regular adjustments", description: "Periodic appointments allow us to tighten the wire and monitor progress, keeping treatment on track." },
  { step: "04", title: "Retainer phase", description: "After braces are removed, a retainer is provided to maintain your new smile and prevent teeth from shifting back." },
];
const benefits = [
  "Most effective for complex orthodontic cases",
  "Highly precise and controlled tooth movement",
  "Suitable for all ages and alignment concerns",
  "Most affordable orthodontic treatment option",
  "Proven track record of reliable results",
  "Comprehensive correction in a structured timeline",
];

export default function MetalBracesPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/cometic/metal-braces.png" alt="Metal braces at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/orthodontics" className="hover:text-white/80 transition-colors">Orthodontics</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Metal Braces</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Orthodontic Treatment</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Metal Braces for Reliable, Effective Teeth Straightening</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Metal braces remain one of the most effective orthodontic treatments for correcting complex alignment issues. Modern metal braces are smaller, more comfortable, and more efficient than ever before.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Metal Braces</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">The gold standard for comprehensive orthodontic correction</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Metal braces use brackets bonded to the teeth and connected by an archwire to apply gentle, consistent pressure that gradually moves teeth into the correct position. They are the most versatile orthodontic option available.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, metal braces treatment is planned with precision and monitored carefully to ensure the best possible outcome for each patient.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Metal braces may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Significant crowding, spacing, or bite correction is needed.</li>
              <li>Complex tooth movements require maximum control.</li>
              <li>A cost-effective orthodontic solution is preferred.</li>
              <li>Treatment is being planned for children or teenagers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Who It Suits</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Who commonly chooses metal braces</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Metal braces are the most versatile orthodontic option and are suitable for a wide range of patients and alignment concerns.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How metal braces treatment is planned and delivered</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Orthodontic results depend on accurate diagnosis, controlled tooth movement, and regular review throughout the treatment period.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why metal braces remain a trusted orthodontic choice</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Start your orthodontic journey with confidence</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team can assess your alignment needs and help you understand whether metal braces are the right fit for your smile goals and orthodontic treatment plan.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Appointment</Link>
              <Link href="/orthodontics" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Orthodontics</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
