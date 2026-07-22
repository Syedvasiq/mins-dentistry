import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gum Treatment | MINS Dentistry",
  description: "Expert gum disease treatment and periodontal care at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Thorough", label: "Deep cleaning and root planing" },
  { value: "Preventive", label: "Stops disease progression" },
  { value: "Gentle", label: "Comfortable periodontal care" },
  { value: "Long-term", label: "Ongoing gum health support" },
];
const stages = [
  { title: "Gingivitis", description: "The earliest stage of gum disease, characterised by red, swollen, or bleeding gums. Highly treatable with professional cleaning and improved oral hygiene." },
  { title: "Early periodontitis", description: "Gum disease that has progressed beyond the gum line, beginning to affect the bone. Deep cleaning is typically effective at this stage." },
  { title: "Moderate periodontitis", description: "More significant bone and tissue loss requiring thorough scaling and root planing, and possibly additional periodontal procedures." },
  { title: "Advanced periodontitis", description: "Severe bone loss and deep pockets around teeth. May require surgical intervention alongside intensive periodontal therapy." },
];
const process = [
  { step: "01", title: "Periodontal assessment", description: "We measure gum pocket depths, assess bone levels, and evaluate the extent of gum disease to plan the most effective treatment." },
  { step: "02", title: "Professional cleaning", description: "Scaling removes plaque and tartar from above and below the gum line, while root planing smooths root surfaces to discourage bacteria." },
  { step: "03", title: "Ongoing maintenance", description: "Regular periodontal maintenance visits help keep gum disease under control and prevent recurrence after initial treatment." },
  { step: "04", title: "Advanced treatment if needed", description: "For more severe cases, additional procedures such as flap surgery or bone grafting may be recommended." },
];
const benefits = [
  "Halts the progression of gum disease",
  "Reduces gum pocket depth and inflammation",
  "Protects teeth from loosening and loss",
  "Improves overall oral and systemic health",
  "Prevents recurrence with ongoing maintenance",
  "Restores healthy, firm gum tissue",
];

export default function GumTreatmentPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/gum-treatment.png" alt="Gum treatment at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Gum Treatment</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Periodontal Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Gum Treatment to Restore and Protect Your Periodontal Health</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Gum disease ranges from mild gingivitis to severe periodontitis. MINS Dentistry provides comprehensive gum treatment — including deep cleaning and ongoing periodontal maintenance — to halt disease progression and restore gum health.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Gum Treatment</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Healthy gums are the foundation of a healthy smile</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Gum disease is one of the most common dental conditions and, if left untreated, can lead to tooth loss and affect overall health. Early and consistent treatment is the most effective way to manage and reverse its effects.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, gum treatment is approached with thoroughness and care — from initial deep cleaning to long-term maintenance — to keep your gums healthy and your smile stable.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Seek gum treatment if you notice</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Gums that bleed when brushing or flossing.</li>
              <li>Red, swollen, or tender gum tissue.</li>
              <li>Gums that appear to be pulling away from teeth.</li>
              <li>Persistent bad breath or a bad taste in the mouth.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Stages of Gum Disease</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Understanding the stages of gum disease</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Early detection and treatment at any stage can significantly improve outcomes and protect your long-term oral health.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stages.map((item) => (
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How gum treatment is carefully delivered</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Effective gum treatment requires thorough assessment, professional cleaning, and a commitment to ongoing maintenance for lasting results.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why treating gum disease early matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Protect your gums and your smile</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">If you have noticed any signs of gum disease, our team can assess your periodontal health and recommend the most effective treatment to restore and maintain healthy gums.</p>
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
