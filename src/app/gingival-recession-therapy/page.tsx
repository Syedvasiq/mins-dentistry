import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Gingival Recession Therapy | MINS Dentistry", description: "Gingival recession therapy to treat receding gums at MINS Dentistry." };

const highlights = [{ value: "Restorative", label: "Covers exposed tooth roots" }, { value: "Protective", label: "Prevents further recession" }, { value: "Aesthetic", label: "Restores natural gum line" }, { value: "Comfortable", label: "Reduces root sensitivity" }];
const causes = [
  { title: "Aggressive brushing", description: "Brushing too hard or with a hard-bristled brush can gradually wear away gum tissue, leading to recession over time." },
  { title: "Gum disease", description: "Periodontal disease destroys the gum tissue and bone that support teeth, causing the gums to pull away from the tooth surface." },
  { title: "Thin gum tissue", description: "Some patients naturally have thin or fragile gum tissue that is more susceptible to recession with minimal provocation." },
  { title: "Tooth misalignment", description: "Teeth that are out of alignment can place uneven pressure on the gum tissue, contributing to localised recession." },
];
const process = [
  { step: "01", title: "Recession assessment", description: "We measure the extent of recession, evaluate root exposure, and assess the cause to plan the most effective therapy." },
  { step: "02", title: "Treatment selection", description: "The most appropriate grafting or regenerative technique is chosen based on the severity and location of recession." },
  { step: "03", title: "Surgical treatment", description: "Gum tissue is grafted or repositioned to cover the exposed root and restore a healthy, natural gum line." },
  { step: "04", title: "Healing and maintenance", description: "The treated area is monitored during healing and ongoing maintenance is recommended to prevent recurrence." },
];
const benefits = ["Covers exposed tooth roots effectively", "Reduces sensitivity from root exposure", "Restores a natural, healthy gum line", "Prevents further recession and bone loss", "Improves the aesthetics of the smile", "Protects teeth from decay at the root surface"];

export default function GingivalRecessionTherapyPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/gum-treatment.png" alt="Gingival recession therapy at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link><span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link><span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Gingival Recession Therapy</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Recession Treatment</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Gingival Recession Therapy to Restore Your Gum Line</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Gingival recession exposes tooth roots, causing sensitivity and aesthetic concerns. MINS Dentistry provides targeted recession therapy using advanced grafting and regenerative techniques to cover exposed roots and restore a healthy gum line.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <Link href="/gum-care" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Gum Care</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            {highlights.map((item) => (<div key={item.label} className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-md"><p className="text-lg sm:text-xl font-semibold text-white">{item.value}</p><p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/75">{item.label}</p></div>))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About This Treatment</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Treating receding gums before they cause lasting damage</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Gum recession is a progressive condition that, if left untreated, can lead to significant root exposure, sensitivity, and increased risk of decay. Early treatment is the most effective way to stop recession and restore the gum line.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, recession therapy is tailored to each patient's specific pattern of recession, using the most appropriate grafting technique for lasting results.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Seek recession therapy if you notice</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Teeth that appear longer than they used to.</li>
              <li>Sensitivity to hot, cold, or sweet foods and drinks.</li>
              <li>Visible root surfaces on one or more teeth.</li>
              <li>Notching at the gum line of affected teeth.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Common Causes</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">What causes gingival recession</h2></div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Understanding the cause of recession helps us plan the most effective treatment and prevent it from recurring.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {causes.map((item) => (<article key={item.title} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"><h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.title}</h3><p className="text-[15px] leading-relaxed text-[#5F574D]">{item.description}</p></article>))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p><h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How gingival recession therapy is delivered</h2><p className="text-[15px] leading-relaxed text-white/75">Treatment is carefully planned to address the specific pattern and severity of recession for each patient.</p></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">{process.map((item) => (<div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p><h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3><p className="text-sm leading-relaxed text-white/70">{item.description}</p></div>))}</div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Key Benefits</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why treating recession early matters</h2><div className="grid sm:grid-cols-2 gap-4">{benefits.map((item) => (<div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>))}</div></div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Restore your gum line and protect your teeth</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your recession and recommend the most effective therapy to restore your gum line and prevent further damage.</p>
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
