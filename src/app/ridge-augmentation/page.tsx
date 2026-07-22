import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Ridge Augmentation | MINS Dentistry", description: "Ridge augmentation to restore jawbone contour after tooth loss at MINS Dentistry." };

const highlights = [{ value: "Restorative", label: "Rebuilds lost bone contour" }, { value: "Precise", label: "Surgical bone and tissue repair" }, { value: "Foundation", label: "Prepares site for implants" }, { value: "Aesthetic", label: "Restores natural jaw shape" }];
const indications = [
  { title: "Bone loss after extraction", description: "After a tooth is removed, the underlying bone can shrink. Ridge augmentation rebuilds this area before implant placement." },
  { title: "Improving bridge aesthetics", description: "A collapsed ridge under a bridge can create an unnatural appearance. Augmentation restores the natural contour for a better result." },
  { title: "Implant site preparation", description: "When insufficient bone exists for implant placement, ridge augmentation creates the necessary volume and shape." },
  { title: "Restoring facial contour", description: "Significant bone loss can affect facial appearance. Ridge augmentation helps restore natural jaw shape and support." },
];
const process = [
  { step: "01", title: "Assessment and imaging", description: "We evaluate the ridge defect using clinical examination and imaging to plan the most effective augmentation approach." },
  { step: "02", title: "Surgical procedure", description: "Bone graft material is placed to rebuild the deficient ridge, restoring the natural contour and volume." },
  { step: "03", title: "Healing period", description: "The graft integrates with the existing bone over several months, creating a stable foundation for future treatment." },
  { step: "04", title: "Implant or restoration", description: "Once healing is confirmed, implant placement or prosthetic restoration can proceed on the rebuilt ridge." },
];
const benefits = ["Restores natural jawbone contour", "Creates a stable foundation for implants", "Improves the aesthetics of bridges and prosthetics", "Prevents further bone collapse", "Supports long-term oral structure", "Enhances facial appearance and support"];

export default function RidgeAugmentationPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/gum traetment/oral-surgery.png" alt="Ridge augmentation at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link><span className="text-white/30">/</span>
            <Link href="/gum-care" className="hover:text-white/80 transition-colors">Gum Care</Link><span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Ridge Augmentation</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Bone Reconstruction</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Ridge Augmentation to Restore Jawbone Shape and Implant Readiness</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">After tooth loss, the jawbone can shrink and lose its natural contour. Ridge augmentation rebuilds the bone and gum tissue to restore the ridge's original shape — creating a solid foundation for dental implants or improving bridge aesthetics.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Rebuilding the jawbone for a stronger restorative foundation</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">When a tooth is lost, the bone that supported it begins to resorb. Ridge augmentation uses bone graft material to rebuild this area, restoring the natural contour and creating the volume needed for implants or improved prosthetic aesthetics.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, ridge augmentation is performed with precision to achieve optimal bone volume and shape for each patient's specific restorative needs.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Ridge augmentation may be needed when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Bone has collapsed after tooth extraction.</li>
              <li>Insufficient bone exists for implant placement.</li>
              <li>A bridge looks unnatural due to a collapsed ridge.</li>
              <li>Facial contour has been affected by bone loss.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Common Indications</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">When ridge augmentation is commonly recommended</h2></div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Ridge augmentation is a key preparatory step for many restorative and implant treatments.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {indications.map((item) => (<article key={item.title} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"><h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.title}</h3><p className="text-[15px] leading-relaxed text-[#5F574D]">{item.description}</p></article>))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Treatment Process</p><h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How ridge augmentation is carefully performed</h2><p className="text-[15px] leading-relaxed text-white/75">The procedure is staged to ensure proper healing and integration before any further restorative treatment is planned.</p></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">{process.map((item) => (<div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p><h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3><p className="text-sm leading-relaxed text-white/70">{item.description}</p></div>))}</div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Key Benefits</p><h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why ridge augmentation is an important restorative step</h2><div className="grid sm:grid-cols-2 gap-4">{benefits.map((item) => (<div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>))}</div></div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Rebuild your jawbone for a stronger smile foundation</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Our team will assess your bone condition and recommend whether ridge augmentation is the right step toward your implant or restorative treatment goals.</p>
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
