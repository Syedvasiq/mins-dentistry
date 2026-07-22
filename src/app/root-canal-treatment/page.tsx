import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Root Canal Treatment | MINS Dentistry",
  description: "Pain-free root canal treatment at MINS Dentistry, Shimoga & Bangalore. Save your natural tooth.",
};

const highlights = [
  { value: "Pain-free", label: "Comfortable modern technique" },
  { value: "Tooth-saving", label: "Preserves your natural tooth" },
  { value: "Precise", label: "Thorough infection removal" },
  { value: "Lasting", label: "Long-term restorative outcome" },
];

const indications = [
  { title: "Deep tooth decay", description: "When decay reaches the inner pulp of the tooth, root canal treatment removes the infection and saves the tooth from extraction." },
  { title: "Severe toothache", description: "Persistent, throbbing pain — especially when biting or applying pressure — often signals pulp infection requiring treatment." },
  { title: "Dental abscess", description: "A pus-filled pocket near the tooth root indicates a serious infection that needs immediate root canal intervention." },
  { title: "Cracked or fractured tooth", description: "A crack that extends into the pulp can allow bacteria to enter, making root canal treatment necessary to prevent spread." },
];

const process = [
  { step: "01", title: "Diagnosis and X-ray", description: "We assess the extent of infection using clinical examination and X-rays to plan the most effective treatment approach." },
  { step: "02", title: "Anaesthesia and access", description: "The area is numbed for complete comfort, and a small opening is made to access the infected pulp chamber." },
  { step: "03", title: "Pulp removal and cleaning", description: "The infected pulp is carefully removed and the root canals are cleaned, shaped, and disinfected thoroughly." },
  { step: "04", title: "Sealing and restoration", description: "The canals are sealed with a biocompatible material and the tooth is restored, usually with a crown for long-term protection." },
];

const benefits = [
  "Saves your natural tooth from extraction",
  "Eliminates infection and relieves pain",
  "Prevents spread of infection to surrounding teeth",
  "Restores normal biting and chewing function",
  "Long-lasting result with proper restoration",
  "Preserves jawbone and facial structure",
];

export default function RootCanalTreatmentPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/resorative/root-canal-treatment.png" alt="Root canal treatment at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Root Canal Treatment</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Tooth Preservation</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Root Canal Treatment to Save Your Natural Tooth</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Root canal treatment removes infected pulp, relieves pain, and saves your natural tooth. At MINS Dentistry, the procedure is performed with modern techniques for a comfortable, effective, and lasting result.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Treatment</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Saving infected teeth with precision and care</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">Root canal treatment is one of the most effective ways to save a tooth that would otherwise need to be extracted. By removing the infected pulp and sealing the tooth, we eliminate pain and restore full function.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, root canal procedures are performed with modern anaesthesia and techniques to ensure the experience is as comfortable and efficient as possible.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Root canal treatment may be needed when</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>You have severe, persistent tooth pain or sensitivity.</li>
              <li>There is visible swelling or a dental abscess near a tooth.</li>
              <li>Decay has reached the inner pulp of the tooth.</li>
              <li>A tooth has been cracked or fractured deeply.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>When It's Needed</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Signs that root canal treatment may be required</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Early treatment prevents the infection from spreading and gives the tooth the best chance of long-term survival.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How root canal treatment is carefully completed</h2>
            <p className="text-[15px] leading-relaxed text-white/75">A successful root canal depends on thorough diagnosis, precise cleaning, and a strong final restoration to protect the tooth long-term.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why root canal treatment is worth it</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Save your tooth before it's too late</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">If you are experiencing tooth pain or suspect an infection, our team can assess your condition and recommend the most appropriate treatment to save your natural tooth.</p>
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
