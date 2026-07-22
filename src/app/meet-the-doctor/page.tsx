import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Doctor | MINS Dentistry",
  description: "Meet Dr. Sabiha Kouser — Periodontist, Implantologist & Laser Dentistry Specialist at MINS Dentistry, Shimoga & Bangalore.",
};

const credentials = ["BDS", "MDS", "MPerio (RCSEd, UK)", "MICIO (USA)", "FAALD (EAU)"];

const expertise = [
  { title: "Periodontics", description: "Specialist-level diagnosis and treatment of gum disease, from non-surgical therapy to advanced surgical procedures." },
  { title: "Dental Implants", description: "Single tooth, multiple tooth, and full-mouth implant restorations planned and placed with precision." },
  { title: "Laser Dentistry", description: "Minimally invasive laser techniques for gum treatment, depigmentation, and soft tissue procedures." },
  { title: "Digital Smile Design", description: "Technology-driven smile planning that lets patients visualise their results before treatment begins." },
  { title: "Full Mouth Rehabilitation", description: "Comprehensive reconstruction of worn, damaged, or missing dentition to restore function and aesthetics." },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile makeovers tailored to each patient's facial features and goals." },
];

const memberships = [
  "Royal College of Surgeons, Edinburgh",
  "International Congress of Implantologists",
  "European Academy of Aesthetic Dentistry",
];

const values = [
  { label: "10+ Years", description: "Clinical experience across general, cosmetic, and specialist dentistry." },
  { label: "International", description: "Trained and certified at institutions across the UK, USA, and Europe." },
  { label: "Patient-First", description: "Every treatment plan is built around the patient's comfort and long-term health." },
  { label: "Evidence-Based", description: "All techniques are grounded in current clinical research and best practice." },
];

export default function MeetTheDoctorPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">

      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/about-us-hero-image.png" alt="MINS Dentistry clinic" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.88)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Meet the Doctor</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Our Specialist</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Meet Dr. Sabiha Kouser</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Periodontist, Implantologist &amp; Laser Dentistry Specialist with over a decade of clinical experience and international training across the UK, USA, and Europe.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Call +91 90081 13963</a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            {values.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-md">
                <p className="text-lg sm:text-xl font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor profile — left image, right details */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — circle image with spinning gold ring, same as homepage */}
          <div className="relative flex items-center justify-center">

            {/* Radial gold glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: "min(560px, 95vw)", height: "min(560px, 95vw)", background: "radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 70%)" }} />

            {/* Spinning dashed ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "min(590px, 98vw)", height: "min(590px, 98vw)", animation: "ring-spin 22s linear infinite" }}>
              <svg viewBox="0 0 590 590" className="h-full w-full" aria-hidden="true">
                <circle cx="295" cy="295" r="285" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="12 18" opacity="0.45" />
              </svg>
            </div>

            {/* Circle-clipped portrait */}
            <div className="relative z-10 overflow-hidden rounded-full" style={{ width: "min(520px, 90vw)", height: "min(520px, 90vw)" }}>
              <Image
                src="/dr-sabiha.png"
                alt="Dr. Sabiha Kouser — Periodontist at MINS Dentistry"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </div>
          </div>

          <style>{`
            @keyframes ring-spin {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to   { transform: translate(-50%, -50%) rotate(360deg); }
            }
          `}</style>

          {/* Right — details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Dr. Sabiha Kouser</h2>
              <p className="mt-2 text-[15px] font-medium text-[#B8912A]">Periodontist, Implantologist &amp; Laser Dentistry Specialist</p>
              <p className="mt-1 text-sm text-[#8A7E72]" style={{ fontFamily: "monospace" }}>10+ Years of Clinical Experience</p>
            </div>
            <div className="h-px w-16 bg-[linear-gradient(to_right,#C9A227,transparent)]" />
            <p className="text-[15px] leading-relaxed text-[#5F574D]">
              Dr. Sabiha Kouser brings over a decade of clinical expertise to every patient interaction. Trained at some of the world&apos;s most prestigious institutions, she combines international-standard techniques with a deeply personal, compassionate approach to care. Her philosophy is simple — every patient deserves to understand their treatment, feel at ease, and leave with a smile they are proud of.
            </p>
            <div className="rounded-[1.5rem] bg-[#1F1A17] border border-white/10 p-6">
              <p className="text-[15px] italic leading-relaxed text-white/80">
                &ldquo;Every smile tells a story. Our mission is to ensure yours reflects confidence, health, and happiness.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#D6B15A]">— Dr. Sabiha Kouser</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8A7E72] mb-3" style={{ fontFamily: "monospace" }}>Qualifications</p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <span key={c} className="rounded-full border border-[#C9A22755] bg-[#C9A2270d] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-[#B8912A]">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8A7E72] mb-3" style={{ fontFamily: "monospace" }}>Professional Memberships</p>
              <ul className="flex flex-col gap-2">
                {memberships.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-[14px] text-[#5F574D]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#C9A227]" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="self-start inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Clinical Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Areas of specialist focus</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Dr. Sabiha&apos;s training spans multiple disciplines, allowing her to manage complex cases from diagnosis through to final restoration.</p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]">
              <h3 className="text-lg font-semibold text-[#1F1A17] mb-3">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#5F574D]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team image banner */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "16/7" }}>
          <Image src="/meet-team-image.png" alt="The MINS Dentistry team" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.2)_55%,transparent_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-wide mb-6">The MINS Family</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book an Appointment</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Get in Touch</p>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Ready to meet Dr. Sabiha in person?</h3>
              <p className="text-[15px] leading-relaxed text-white/85 max-w-2xl">Book a consultation and experience the MINS Dentistry difference — expert care, a welcoming environment, and a team that genuinely cares about your smile.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:flex-col lg:items-stretch">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8] whitespace-nowrap">Book a Consultation</Link>
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 whitespace-nowrap">Call +91 90081 13963</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
