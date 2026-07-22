import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tooth Extraction | MINS Dentistry",
  description: "Safe and gentle tooth extraction at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Gentle", label: "Minimally invasive technique" },
  { value: "Precise", label: "Careful and controlled removal" },
  { value: "Comfortable", label: "Full anaesthesia for pain-free care" },
  { value: "Guided", label: "Clear aftercare and next steps" },
];
const indications = [
  { title: "Severe decay or damage", description: "When a tooth is too damaged or decayed to be saved with a filling, crown, or root canal, extraction is the safest option." },
  { title: "Advanced gum disease", description: "Severe periodontal disease can loosen teeth to the point where extraction is necessary to protect surrounding oral health." },
  { title: "Impacted wisdom teeth", description: "Wisdom teeth that are impacted, misaligned, or causing pain are commonly removed to prevent further complications." },
  { title: "Orthodontic preparation", description: "In some cases, teeth are extracted to create space for proper alignment during orthodontic treatment." },
];
const process = [
  { step: "01", title: "Assessment and X-ray", description: "We examine the tooth and surrounding bone to plan the safest and most effective extraction approach." },
  { step: "02", title: "Anaesthesia", description: "The area is fully numbed to ensure you feel no pain during the procedure. Sedation options are available if needed." },
  { step: "03", title: "Careful extraction", description: "The tooth is gently loosened and removed with precision to minimise trauma to the surrounding tissue and bone." },
  { step: "04", title: "Aftercare guidance", description: "You receive clear instructions for recovery and guidance on tooth replacement options to restore your smile." },
];
const benefits = [
  "Eliminates pain from severely damaged teeth",
  "Prevents infection from spreading further",
  "Protects surrounding teeth and gum health",
  "Performed with full anaesthesia for comfort",
  "Smooth recovery with clear aftercare guidance",
  "Opens the path to tooth replacement planning",
];

export default function ToothExtractionPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/resorative/tooth-extraction.png" alt="Tooth extraction at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Tooth Extraction</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Oral Surgery</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Safe and Gentle Tooth Extraction with Expert Care</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">When a tooth cannot be saved, extraction is performed at MINS Dentistry with precision, full anaesthesia, and a smooth recovery plan — followed by guidance on the best tooth replacement options.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Extraction</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">When removing a tooth is the right decision</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Tooth extraction is always a last resort. We first explore every option to save the natural tooth. When extraction is necessary, it is performed with the utmost care to minimise discomfort and support a smooth recovery.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">After extraction, our team will guide you through the best tooth replacement options — including implants, bridges, or dentures — to restore your smile and function.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Extraction may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>A tooth is too damaged or decayed to restore.</li>
              <li>Severe gum disease has loosened a tooth significantly.</li>
              <li>A wisdom tooth is impacted or causing problems.</li>
              <li>Space is needed for orthodontic treatment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Common Reasons</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">When tooth extraction is commonly advised</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Extraction protects your overall oral health and creates the foundation for a proper tooth replacement plan.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How tooth extraction is carefully performed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Our extraction process prioritises your comfort, safety, and a smooth recovery from start to finish.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why timely extraction protects your oral health</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Next Steps</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Plan your extraction and tooth replacement together</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your tooth, perform the extraction with care, and guide you toward the best replacement option — whether that's an implant, bridge, or denture.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Appointment</Link>
              <Link href="/dental-implants" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Explore Implant Options</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
