import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Vestibuloplasty | MINS Dentistry", description: "Vestibuloplasty to deepen the oral vestibule and improve denture fit at MINS Dentistry." };

const highlights = [{ value: "Functional", label: "Improves denture stability" }, { value: "Surgical", label: "Precise soft tissue procedure" }, { value: "Preparatory", label: "Readies mouth for prosthetics" }, { value: "Lasting", label: "Long-term functional improvement" }];
const process = [
  { step: "01", title: "Assessment", description: "We evaluate the depth of the vestibule and the functional needs of your denture or implant treatment plan." },
  { step: "02", title: "Surgical deepening", description: "The vestibule is surgically deepened by repositioning the muscle attachments to create more space for the denture flange." },
  { step: "03", title: "Tissue management", description: "The exposed area is managed with a graft or allowed to heal naturally, depending on the technique used." },
  { step: "04", title: "Healing and fitting", description: "Once healed, your denture or implant prosthetic can be fitted with improved stability and comfort." },
];
const benefits = ["Improves denture retention and stability", "Creates more space for prosthetic flanges", "Prepares the mouth for implant placement", "Reduces denture movement and discomfort", "Improves chewing efficiency and confidence", "Long-lasting functional improvement"];

export default function VestibuloplastyPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/oral-surgery.png" alt="Vestibuloplasty at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link><span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link><span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Vestibuloplasty</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Oral Surgery</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Vestibuloplasty to Improve Denture Fit and Oral Function</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Vestibuloplasty deepens the space between the lips or cheeks and the gums — improving the fit and stability of dentures or preparing the mouth for implant placement with enhanced function and comfort.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Creating a better foundation for dentures and implants</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">The vestibule is the space between the inner surface of the lips or cheeks and the gums. When this space is too shallow, dentures may not fit securely. Vestibuloplasty deepens this space to improve prosthetic stability and function.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, vestibuloplasty is performed with precision to enhance both function and comfort for patients requiring prosthetic or implant solutions.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Vestibuloplasty may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Dentures are unstable due to a shallow vestibule.</li>
              <li>Muscle attachments are interfering with denture fit.</li>
              <li>Implant placement requires improved soft tissue conditions.</li>
              <li>Bone resorption has reduced the vestibular depth.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p><h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How vestibuloplasty is performed</h2><p className="text-[15px] leading-relaxed text-white/75">The procedure is carefully planned to achieve the optimal vestibular depth for your specific prosthetic or implant needs.</p></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">{process.map((item) => (<div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p><h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3><p className="text-sm leading-relaxed text-white/70">{item.description}</p></div>))}</div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Key Benefits</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why vestibuloplasty improves prosthetic outcomes</h2><div className="grid sm:grid-cols-2 gap-4">{benefits.map((item) => (<div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>))}</div></div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Improve your denture fit with vestibuloplasty</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your oral anatomy and recommend whether vestibuloplasty can improve your denture stability or prepare your mouth for implant treatment.</p>
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
