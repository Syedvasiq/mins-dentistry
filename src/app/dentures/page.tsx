import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dentures | MINS Dentistry",
  description: "Custom full and partial dentures at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Custom", label: "Fitted to your unique oral structure" },
  { value: "Natural", label: "Designed to look and feel real" },
  { value: "Comfortable", label: "Stable fit for daily confidence" },
  { value: "Functional", label: "Restores eating and speaking ability" },
];

const types = [
  { title: "Complete Dentures", description: "Full dentures replace all teeth in the upper or lower jaw, restoring a complete smile and full chewing function." },
  { title: "Partial Dentures", description: "Partial dentures fill gaps left by missing teeth while preserving and supporting the remaining natural teeth." },
  { title: "Implant-Supported Dentures", description: "Secured by dental implants for superior stability, these dentures eliminate slipping and improve bite confidence." },
  { title: "Immediate Dentures", description: "Placed on the same day as extractions so you are never without teeth during the healing period." },
];

const process = [
  { step: "01", title: "Oral assessment", description: "We evaluate your gum health, bone structure, and remaining teeth to determine the most suitable denture type." },
  { step: "02", title: "Impressions and measurements", description: "Precise impressions are taken to ensure your dentures fit comfortably and function naturally." },
  { step: "03", title: "Custom fabrication", description: "Your dentures are crafted to match your natural tooth shade, shape, and facial proportions." },
  { step: "04", title: "Fitting and adjustment", description: "The final dentures are fitted and fine-tuned for comfort, bite balance, and a natural appearance." },
];

const benefits = [
  "Restores a complete and natural-looking smile",
  "Improves chewing efficiency and speech clarity",
  "Supports facial structure and prevents sagging",
  "Custom-made for a comfortable, secure fit",
  "Available in multiple types to suit your needs",
  "Boosts confidence in daily social interactions",
];

export default function DenturesPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/resorative/dentures.png" alt="Dentures at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dentures</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Tooth Replacement</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Dentures for a Complete, Comfortable, and Confident Smile</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Modern dentures at MINS Dentistry are custom-fitted, natural-looking, and designed to restore your ability to eat, speak, and smile with full confidence.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <Link href="/general-restorative-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Restorative Care</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Dentures</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">A trusted solution for replacing missing teeth</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Dentures have evolved significantly and today offer a comfortable, natural-looking way to replace missing teeth. Whether you need to replace a few teeth or a full arch, modern dentures are designed to restore function and aesthetics.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, every denture is custom-crafted to suit your oral structure, facial features, and lifestyle needs.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Dentures may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Multiple or all teeth are missing in one or both arches.</li>
              <li>Remaining teeth are too damaged to restore.</li>
              <li>A removable tooth replacement option is preferred.</li>
              <li>Implant-supported stability is desired for better function.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Types of Dentures</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Denture options tailored to your needs</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">The right type of denture depends on how many teeth are missing, your bone health, and your lifestyle preferences.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How your dentures are carefully made and fitted</h2>
            <p className="text-[15px] leading-relaxed text-white/75">A well-fitting denture depends on accurate impressions, careful fabrication, and precise adjustments at every stage.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why dentures remain a trusted tooth replacement option</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Find the right denture solution for your smile</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your oral condition and guide you toward the most comfortable and natural-looking denture option for your needs.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Appointment</Link>
              <Link href="/general-restorative-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Restorative Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
