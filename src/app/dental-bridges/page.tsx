import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Bridges | MINS Dentistry",
  description:
    "Fixed dental bridges to replace missing teeth at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Fixed", label: "Tooth replacement solution" },
  { value: "Functional", label: "Restoration for chewing and speech" },
  { value: "Natural", label: "Aesthetic smile integration" },
  { value: "Stable", label: "Support for surrounding teeth" },
];

const uses = [
  {
    title: "Replace one or more missing teeth",
    description:
      "Dental bridges are commonly used when one or more teeth are missing and a fixed replacement option is preferred.",
  },
  {
    title: "Restore smile continuity",
    description:
      "By filling the visible gap, bridges help recreate a more complete and balanced smile appearance.",
  },
  {
    title: "Maintain bite support",
    description:
      "Missing teeth can affect chewing balance and how your teeth meet. Bridges help restore support in the affected area.",
  },
  {
    title: "Reduce shifting of nearby teeth",
    description:
      "Replacing missing teeth may help limit movement of adjacent teeth into the empty space over time.",
  },
];

const process = [
  {
    step: "01",
    title: "Clinical assessment",
    description:
      "We examine the missing tooth area, surrounding teeth, bite condition, and restorative goals before recommending a bridge.",
  },
  {
    step: "02",
    title: "Treatment planning",
    description:
      "The bridge design is selected according to the number of missing teeth, the support available, and the most suitable long-term option.",
  },
  {
    step: "03",
    title: "Bridge fabrication",
    description:
      "Your restoration is designed to provide strength, comfort, and a natural appearance that blends with your existing smile.",
  },
  {
    step: "04",
    title: "Fit and review",
    description:
      "The final bridge is carefully placed and adjusted so it feels stable, functions properly, and looks seamless in the smile.",
  },
];

const benefits = [
  "Replaces missing teeth with a fixed restorative solution",
  "Helps restore chewing efficiency and speaking comfort",
  "Supports a more complete and natural-looking smile",
  "May help maintain facial structure and dental balance",
  "Reduces the gap that can encourage tooth shifting",
  "Provides functional and aesthetic restoration together",
];

export default function DentalBridgesPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/resorative/dental-bridges.png"
            alt="Dental bridge consultation at MINS Dentistry"
            fill
            priority
            className="object-cover scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.70)_40%,rgba(18,14,10,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="text-white/50 hover:text-white transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dental Bridges</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Fixed Tooth Replacement
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Dental Bridges to Restore Missing Teeth with Strength and Balance
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              A dental bridge literally bridges the gap left by one or more missing
              teeth. Anchored to adjacent teeth or supported in selected cases by
              implants, bridges help restore smile continuity, maintain function,
              and create a result that feels stable, comfortable, and aesthetically natural.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/general-restorative-dentistry"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                Explore Restorative Care
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
              About Treatment
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              A reliable way to close the gap left by missing teeth
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Missing teeth can affect far more than appearance. They may influence
              bite balance, chewing comfort, speech, and the stability of nearby teeth.
              Dental bridges offer a fixed restorative option designed to rebuild the
              missing area with both function and aesthetics in mind.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, bridges are planned carefully to create a restoration
              that feels secure, integrates naturally with the smile, and supports
              long-term oral balance.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Dental bridges may be recommended to
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Replace one or multiple missing teeth.</li>
              <li>Restore a more complete and natural smile line.</li>
              <li>Improve support for chewing and day-to-day function.</li>
              <li>Help reduce movement of neighbouring teeth into the gap.</li>
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
              Common Uses
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              How dental bridges help restore function and appearance
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Bridge treatment is often chosen when patients want a fixed restorative
            solution that addresses both missing tooth replacement and smile continuity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {uses.map((item) => (
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
              Treatment Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How your dental bridge is carefully planned
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              A successful bridge depends on proper planning, accurate fit, and a
              restorative design that supports both comfort and durability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {process.map((item) => (
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

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Why dental bridges remain a trusted restorative option
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
              Explore whether a dental bridge is the right solution for your smile
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">
              If you have one or more missing teeth, our team can assess your oral
              condition and guide you toward the most suitable restorative option
              with clarity, comfort, and long-term planning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/general-restorative-dentistry"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Back to Restorative Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}