import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Implants in Shimoga & Bangalore | MINS Dentistry",
  description:
    "Permanent, natural-looking dental implants at MINS Dentistry. Restore your smile with single tooth, multiple tooth, or full mouth implant solutions.",
};

const TREATMENTS = [
  {
    label: "Single Tooth Implant",
    href: "/single-tooth-implant",
    description:
      "A precise implant solution for replacing one missing tooth with stability, function, and a natural-looking finish.",
  },
  {
    label: "Multiple Tooth Implants",
    href: "/multiple-tooth-implants",
    description:
      "Planned solutions for replacing several missing teeth while restoring comfort, bite support, and smile continuity.",
  },
  {
    label: "Full Mouth Rehabilitation",
    href: "/full-mouth-rehabilitation",
    description:
      "Comprehensive implant-based rehabilitation for patients with extensive tooth loss or advanced restorative needs.",
  },
  {
    label: "Bone Grafting",
    href: "/bone-grafting",
    description:
      "Bone support rebuilding procedures that help create a stronger foundation for predictable implant placement.",
  },
  {
    label: "Implant Consultation",
    href: "/implant-consultation",
    description:
      "A detailed consultation to assess your oral condition, bone support, and suitability for implant treatment.",
  },
];

const highlights = [
  { value: "Permanent", label: "Replacement approach for missing teeth" },
  { value: "Natural", label: "Smile aesthetics and functional comfort" },
  { value: "Precise", label: "Implant planning and placement workflow" },
  { value: "Long-term", label: "Support for jawbone and daily function" },
];

const whyImplants = [
  {
    title: "Replace missing teeth securely",
    description:
      "Dental implants are designed to replace missing teeth with a stable solution that feels more integrated than removable options.",
  },
  {
    title: "Restore chewing confidence",
    description:
      "Implants help support day-to-day function, allowing patients to regain comfort while eating and speaking.",
  },
  {
    title: "Support jawbone preservation",
    description:
      "Implant treatment helps maintain stimulation in the jawbone area where teeth are missing, supporting long-term structural health.",
  },
  {
    title: "Achieve a natural-looking smile",
    description:
      "When planned properly, implants can restore missing teeth with a result that blends naturally with surrounding teeth and facial aesthetics.",
  },
];

const implantJourney = [
  {
    step: "01",
    title: "Consultation and diagnosis",
    description:
      "We begin with a detailed clinical evaluation to understand your oral health, missing tooth pattern, bone support, and treatment goals.",
  },
  {
    step: "02",
    title: "Implant planning",
    description:
      "A personalised plan is created based on the number of teeth missing, jaw condition, restorative requirements, and long-term outcome goals.",
  },
  {
    step: "03",
    title: "Implant placement",
    description:
      "The implant is placed carefully into the jawbone to act as an artificial tooth root and create a stable restorative foundation.",
  },
  {
    step: "04",
    title: "Healing and integration",
    description:
      "Over time, the implant integrates with the surrounding bone, building the support needed for the final restoration.",
  },
  {
    step: "05",
    title: "Crown or prosthetic restoration",
    description:
      "Once the area is ready, the final restoration is designed and fitted to restore appearance, comfort, and bite function.",
  },
  {
    step: "06",
    title: "Review and maintenance",
    description:
      "Ongoing follow-up helps maintain implant health, monitor stability, and support long-term function and oral care.",
  },
];

const idealFor = [
  "Patients missing a single tooth who want a fixed replacement",
  "People missing multiple teeth and seeking stronger support",
  "Patients looking for a long-term alternative to removable options",
  "Individuals who want both aesthetic and functional restoration",
  "Cases that need bone support assessment before implant placement",
  "Patients planning full mouth restorative rehabilitation",
];

const benefits = [
  "Restores missing teeth with a stable and fixed solution",
  "Supports chewing comfort and clearer oral function",
  "Helps preserve the jawbone in missing-tooth areas",
  "Maintains smile balance and facial support",
  "Avoids reliance on removable tooth replacement alone",
  "Offers highly natural-looking restorative results when planned properly",
];

export default function DentalImplantsPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/implants/single-tooth-implant.png"
            alt="Dental implant treatment at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dental Implants</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Our Services
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Dental Implants for Permanent, Natural-Looking Smile Restoration
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Dental implants are widely considered one of the most advanced solutions
              for replacing missing teeth. At MINS Dentistry, implant treatment is
              planned with precision to restore missing teeth with long-term support,
              natural aesthetics, and a strong foundation for confident everyday function.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book Implant Consultation
              </Link>
              <Link
                href="/before-after"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                View Smile Results
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-md"
              >
                <p className="text-lg sm:text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/75">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              About Dental Implants
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              A modern solution for replacing missing teeth with stability and confidence
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Dental implants are designed to replace the root of a missing tooth
              and support a crown, bridge, or full restorative solution above it.
              This makes them a strong option for patients who want a fixed,
              functional, and natural-looking replacement rather than a temporary approach.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, implant treatment is planned carefully around oral
              health, bone condition, bite requirements, and smile aesthetics so the
              result feels secure and well integrated into daily life.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Dental implants may be ideal for
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              {idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Why Choose Implants
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Why implants are considered a premium tooth replacement option
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Implant treatment focuses on restoring missing teeth in a way that supports
            function, aesthetics, and long-term oral structure together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {whyImplants.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"
            >
              <h3 className="text-xl font-semibold text-[#1F1A17] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#5F574D]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Implant Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How dental implant treatment is carefully planned and completed
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Successful implant care depends on proper diagnosis, structured planning,
              precise placement, healing, and the right final restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {implantJourney.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-[#D6B15A] mb-4">{item.step}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/72">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant Services */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] border border-[#E8DCC6] bg-[#FFFDF9] overflow-hidden">
          <div className="px-8 sm:px-12 lg:px-16 pt-12 pb-8 border-b border-[#E8DCC6] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-3" style={{ fontFamily: "monospace" }}>Our Implant Services</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Implant solutions tailored to your needs</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-sm">From a single missing tooth to full mouth restoration — each pathway is planned with precision.</p>
          </div>

          <ul className="divide-y divide-[#EFE6D4]">
            {TREATMENTS.map((t, i) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="group flex items-center justify-between gap-6 px-8 sm:px-12 lg:px-16 py-7 transition-colors duration-200 hover:bg-[#FBF5E8]"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <span
                      className="shrink-0 w-10 h-10 rounded-full border border-[#E8DCC6] bg-white flex items-center justify-center text-xs font-semibold text-[#B8912A] group-hover:bg-[#B8912A] group-hover:border-[#B8912A] group-hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[17px] font-semibold text-[#1F1A17] group-hover:text-[#B8912A] transition-colors duration-200 mb-1">{t.label}</h3>
                      <p className="text-[14px] leading-relaxed text-[#5F574D] truncate max-w-xl">{t.description}</p>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-[#C9A227] opacity-40 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Long-term advantages of implant-based tooth replacement
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Consultation
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Find the right implant solution for your smile and oral health needs
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">
              Whether you need to replace one missing tooth or require a more advanced
              full-mouth solution, our team can assess your condition and recommend
              the most suitable implant pathway with clarity and precision.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/implant-consultation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Implant Consultation
              </Link>
              <Link
                href="/bone-grafting"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Learn About Bone Grafting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}