import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Mucogingival Surgeries | MINS Dentistry", description: "Mucogingival surgeries to correct gum and soft tissue issues at MINS Dentistry." };

const highlights = [{ value: "Specialised", label: "Advanced soft tissue surgery" }, { value: "Protective", label: "Covers exposed tooth roots" }, { value: "Aesthetic", label: "Improves gum appearance" }, { value: "Functional", label: "Restores healthy gum tissue" }];
const procedures = [
  { title: "Connective tissue grafts", description: "Tissue taken from the palate is used to cover exposed roots and increase the thickness of gum tissue around teeth." },
  { title: "Free gingival grafts", description: "A strip of tissue from the palate is grafted to areas with insufficient attached gingiva to protect against recession." },
  { title: "Pedicle grafts", description: "Gum tissue adjacent to the recession site is rotated or advanced to cover the exposed root surface." },
  { title: "Guided tissue regeneration", description: "A membrane is placed to encourage the growth of new bone and gum tissue in areas affected by recession or disease." },
];
const process = [
  { step: "01", title: "Assessment", description: "We evaluate the extent of recession, tissue quality, and the most appropriate mucogingival technique for your case." },
  { step: "02", title: "Treatment planning", description: "A personalised surgical plan is created to address your specific gum tissue deficiency and aesthetic goals." },
  { step: "03", title: "Surgical procedure", description: "The chosen grafting or tissue management technique is performed with precision under local anaesthesia." },
  { step: "04", title: "Healing and review", description: "The treated area is monitored during healing to ensure successful tissue integration and optimal results." },
];
const benefits = ["Covers exposed tooth roots effectively", "Reduces sensitivity from root exposure", "Increases gum tissue thickness and stability", "Improves the aesthetics of the gum line", "Protects teeth from further recession", "Supports long-term periodontal health"];

export default function MucogingivaSurgeriesPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/oral-surgery.png" alt="Mucogingival surgeries at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link><span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link><span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Mucogingival Surgeries</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Advanced Gum Surgery</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Mucogingival Surgeries to Restore Gum Health and Aesthetics</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Mucogingival surgeries address problems at the junction between gum tissue and oral mucosa — including recession, inadequate attached gingiva, and soft tissue defects — to restore gum health and protect tooth roots.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About These Procedures</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Specialised surgery for complex gum tissue concerns</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Mucogingival surgeries encompass a range of procedures designed to correct deficiencies in gum tissue quantity, quality, and position. They are used to treat recession, protect exposed roots, and improve the overall health and appearance of the gum line.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, these procedures are performed with advanced techniques and careful planning to achieve the best functional and aesthetic outcomes for each patient.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Mucogingival surgery may be needed when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Gum recession has exposed tooth roots.</li>
              <li>Insufficient attached gingiva exists around teeth.</li>
              <li>Soft tissue defects are affecting aesthetics or function.</li>
              <li>Root sensitivity from recession needs to be addressed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Procedures Available</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Types of mucogingival procedures we offer</h2></div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">The most appropriate technique is selected based on the extent of recession, tissue availability, and your specific treatment goals.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {procedures.map((item) => (<article key={item.title} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"><h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.title}</h3><p className="text-[15px] leading-relaxed text-[#5F574D]">{item.description}</p></article>))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p><h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How mucogingival surgery is planned and performed</h2><p className="text-[15px] leading-relaxed text-white/75">Each procedure is tailored to the patient's specific tissue needs and performed with precision for the best possible outcome.</p></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">{process.map((item) => (<div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p><h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3><p className="text-sm leading-relaxed text-white/70">{item.description}</p></div>))}</div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Key Benefits</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why mucogingival surgery makes a lasting difference</h2><div className="grid sm:grid-cols-2 gap-4">{benefits.map((item) => (<div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>))}</div></div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Restore your gum health with expert surgical care</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your gum tissue and recommend the most appropriate mucogingival procedure to restore health, protect your teeth, and improve your smile.</p>
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
