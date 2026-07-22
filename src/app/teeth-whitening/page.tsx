import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teeth Whitening | MINS Dentistry",
  description: "Professional teeth whitening for a brighter smile at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Brighter", label: "Visibly whiter smile results" },
  { value: "Safe", label: "Professional-grade whitening" },
  { value: "Custom", label: "Tailored to your sensitivity" },
  { value: "Fast", label: "Noticeable results quickly" },
];
const options = [
  { title: "In-clinic whitening", description: "Professional whitening performed in the clinic delivers dramatically brighter results in a single session with immediate effect." },
  { title: "Take-home whitening", description: "Custom-fitted trays and professional-grade gel allow you to whiten your teeth at home at your own pace and comfort." },
  { title: "Sensitivity-adjusted treatment", description: "Whitening is customised to your sensitivity levels to ensure a comfortable experience without compromising results." },
  { title: "Shade assessment", description: "We assess your current tooth shade and desired outcome to recommend the most effective whitening approach for you." },
];
const process = [
  { step: "01", title: "Shade assessment", description: "We evaluate your current tooth colour and discuss your desired shade to set realistic and achievable whitening goals." },
  { step: "02", title: "Gum protection", description: "A protective barrier is applied to your gums before the whitening agent is carefully applied to the tooth surfaces." },
  { step: "03", title: "Whitening treatment", description: "The professional whitening agent is activated and left to work, lifting stains and brightening the enamel effectively." },
  { step: "04", title: "Review and aftercare", description: "Results are reviewed and you receive guidance on maintaining your brighter smile and avoiding re-staining." },
];
const benefits = [
  "Dramatically brighter smile in a short time",
  "Safe, professional-grade whitening agents",
  "Customised to your sensitivity and shade goals",
  "Removes surface stains from food, drinks, and ageing",
  "Boosts confidence and smile aesthetics",
  "Available as in-clinic or take-home treatment",
];

export default function TeethWhiteningPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/cometic/teeth-whitening.png" alt="Teeth whitening at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/cosmetic-dentistry" className="hover:text-white/80 transition-colors">Cosmetic Dentistry</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Teeth Whitening</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Smile Enhancement</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Professional Teeth Whitening for a Brighter, Fresher Smile</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Professional teeth whitening at MINS Dentistry delivers dramatically brighter results compared to over-the-counter products — safely, quickly, and customised to your sensitivity levels and desired shade.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <Link href="/cosmetic-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Cosmetic Dentistry</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Whitening</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">A safe, effective way to brighten your smile</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Professional teeth whitening uses clinically proven agents to lift deep stains and brighten enamel safely. Unlike store-bought products, professional whitening is customised to your teeth and sensitivity for optimal results.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, whitening is approached with care to ensure your comfort throughout the process and a result that looks naturally bright rather than artificial.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Teeth whitening works well for</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Staining from coffee, tea, wine, or food.</li>
              <li>Age-related yellowing or dullness of teeth.</li>
              <li>Patients wanting a brighter smile before an event.</li>
              <li>Anyone seeking a quick, non-invasive cosmetic improvement.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Whitening Options</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Professional whitening options available</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">We offer both in-clinic and take-home whitening to suit your schedule, sensitivity, and desired results.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {options.map((item) => (
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How professional teeth whitening is performed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">The whitening process is straightforward, comfortable, and designed to deliver the best possible results safely.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why professional whitening outperforms store-bought options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Brighten your smile with professional whitening</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Book a whitening consultation at MINS Dentistry and discover the most suitable option for your smile goals and sensitivity levels.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Consultation</Link>
              <Link href="/cosmetic-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Explore Cosmetic Dentistry</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
