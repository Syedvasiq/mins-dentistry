import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tooth Filling | MINS Dentistry",
  description: "Tooth-coloured and durable tooth fillings at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Natural", label: "Tooth-coloured composite resin" },
  { value: "Durable", label: "Long-lasting restoration" },
  { value: "Precise", label: "Minimal healthy tooth removal" },
  { value: "Comfortable", label: "Quick and painless procedure" },
];
const indications = [
  { title: "Tooth decay", description: "Cavities caused by decay are the most common reason for fillings. Early treatment prevents the decay from spreading deeper." },
  { title: "Cracked or chipped teeth", description: "Minor cracks and chips can be restored with composite filling material to protect the tooth and restore its appearance." },
  { title: "Worn tooth surfaces", description: "Teeth worn down by grinding or acid erosion can be built back up with filling material to restore shape and function." },
  { title: "Replacing old fillings", description: "Old amalgam or worn fillings can be replaced with modern tooth-coloured composites for a more natural and durable result." },
];
const process = [
  { step: "01", title: "Examination", description: "We assess the extent of decay or damage using clinical examination and X-rays to plan the most appropriate filling." },
  { step: "02", title: "Preparation", description: "The decayed or damaged area is carefully removed and the tooth is cleaned and prepared for the filling material." },
  { step: "03", title: "Filling placement", description: "Tooth-coloured composite resin is applied in layers, shaped to match your natural tooth, and hardened with a curing light." },
  { step: "04", title: "Polish and check", description: "The filling is polished and your bite is checked to ensure comfort, proper function, and a seamless natural appearance." },
];
const benefits = [
  "Blends naturally with surrounding teeth",
  "Stops decay from spreading further",
  "Restores tooth strength and function",
  "Quick procedure with immediate results",
  "Minimal removal of healthy tooth structure",
  "Long-lasting with proper oral care",
];

export default function ToothFillingPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/resorative/tooth-filling.png" alt="Tooth filling at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Tooth Filling</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Restorative Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Tooth Fillings That Look and Feel Natural</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">MINS Dentistry uses tooth-coloured composite resin fillings that blend seamlessly with your natural teeth — providing a strong, aesthetically pleasing restoration that lasts for years.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Fillings</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Restoring teeth damaged by decay or wear</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Tooth fillings are one of the most common and effective dental treatments. They stop decay in its tracks, restore the tooth's shape and strength, and prevent further damage from occurring.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, we use modern composite resin materials that match your natural tooth colour, ensuring your restoration looks completely natural.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">A filling may be recommended when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>A cavity or decay is detected in a tooth.</li>
              <li>A tooth has a minor crack, chip, or worn surface.</li>
              <li>An old filling needs to be replaced.</li>
              <li>Sensitivity suggests early decay that needs treatment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>When It's Needed</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Common reasons for tooth fillings</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Treating decay early with a filling is far simpler and more affordable than waiting until a crown or root canal becomes necessary.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How your tooth filling is placed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">The filling process is straightforward, comfortable, and completed in a single visit in most cases.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why tooth-coloured fillings are the preferred choice</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Treat decay early for a healthier smile</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">If you suspect a cavity or have tooth sensitivity, our team can assess your teeth and recommend the most appropriate filling treatment to restore your smile.</p>
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
