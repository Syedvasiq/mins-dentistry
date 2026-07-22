import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Veneers | MINS Dentistry",
  description:
    "Porcelain and composite dental veneers at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Custom", label: "Crafted to suit your facial aesthetics" },
  { value: "Natural", label: "Designed to blend with surrounding teeth" },
  { value: "Refined", label: "Enhances shape, symmetry, and brightness" },
  { value: "Minimally", label: "Focused cosmetic smile correction" },
];

const concerns = [
  {
    title: "Tooth discolouration",
    description:
      "Veneers can improve the appearance of teeth affected by deep staining or uneven colour when surface whitening alone may not be enough.",
  },
  {
    title: "Chips and worn edges",
    description:
      "They help refine front teeth that have minor chips, irregular edges, or visible wear that affects smile aesthetics.",
  },
  {
    title: "Small gaps and uneven spacing",
    description:
      "In selected cosmetic cases, veneers can improve visual balance by closing minor gaps and creating a more harmonious smile line.",
  },
  {
    title: "Misshapen or disproportionate teeth",
    description:
      "Veneers can reshape teeth that look too short, uneven, narrow, or asymmetrical within the smile.",
  },
];

const veneerTypes = [
  {
    title: "Porcelain Veneers",
    description:
      "Porcelain veneers are known for excellent aesthetics, refined translucency, and long-term cosmetic appeal when crafted with precision.",
  },
  {
    title: "Composite Veneers",
    description:
      "Composite veneers can offer a more conservative aesthetic enhancement option for selected smile corrections and surface improvements.",
  },
  {
    title: "Custom Smile Design",
    description:
      "Every veneer case is tailored to the patient’s smile line, tooth proportions, facial features, and natural appearance goals.",
  },
];

const benefits = [
  "Creates a brighter and more balanced smile appearance",
  "Improves tooth shape, proportion, and visible symmetry",
  "Helps correct minor chips, spaces, and surface irregularities",
  "Supports a highly polished and natural-looking cosmetic finish",
  "Can be tailored for subtle enhancement or fuller smile refinement",
  "Designed around facial harmony rather than a generic smile template",
];

const process = [
  {
    step: "01",
    title: "Smile assessment",
    description:
      "We begin by understanding your cosmetic concerns, smile goals, facial proportions, and the current condition of your teeth.",
  },
  {
    step: "02",
    title: "Treatment planning",
    description:
      "A personalised veneer plan is created to improve balance, colour, contour, and smile harmony while preserving a natural look.",
  },
  {
    step: "03",
    title: "Design and preparation",
    description:
      "The teeth are prepared as needed and the veneer design is refined with close attention to size, proportion, and aesthetic integration.",
  },
  {
    step: "04",
    title: "Final veneer placement",
    description:
      "The veneers are bonded carefully to create a polished result that feels comfortable, refined, and visually natural.",
  },
];

const idealFor = [
  "People seeking a smile makeover with natural-looking refinement",
  "Patients with chipped, stained, uneven, or worn front teeth",
  "Individuals wanting cosmetic improvement with customised smile design",
  "Cases where tooth shape and smile symmetry need enhancement",
];

export default function DentalVeneersPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/cometic/dental-veeners.png"
            alt="Cosmetic dental veneer treatment at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.68)_40%,rgba(18,14,10,0.44)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/cosmetic-dentistry" className="hover:text-white/80 transition-colors">Cosmetic Dentistry</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dental Veneers</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Smile Enhancement
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Dental Veneers for Elegant, Natural-Looking Smile Transformation
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Dental veneers are ultra-thin cosmetic restorations placed on the front
              surface of teeth to improve colour, shape, symmetry, and smile harmony.
              At MINS Dentistry, veneer treatment is carefully planned to create a
              polished result that looks refined, balanced, and naturally beautiful.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book a Cosmetic Consultation
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
              About Veneers
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Cosmetic refinement designed around your natural smile
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Veneers are used to enhance the visible front surface of teeth and are
              often chosen by patients who want to improve the appearance of their
              smile in a refined, customised way.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Rather than creating an artificial result, well-planned veneers aim to
              improve tooth harmony, brightness, proportion, and smile balance while
              respecting your facial features and natural expression.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Veneers may be ideal for
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
              Cosmetic Concerns
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Common smile concerns veneers can help improve
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Veneers are often recommended in cosmetic dentistry when the goal is to
            improve visible imperfections in the front teeth with elegant refinement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {concerns.map((item) => (
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
              Veneer Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How veneer treatment is planned for a natural-looking finish
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              The success of veneer treatment depends on design precision, smile
              planning, material selection, and a final result that feels refined
              rather than artificial.
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
                <p className="text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Veneer Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Porcelain and composite veneer solutions
            </h2>

            <div className="space-y-4">
              {veneerTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-[#E8DCC6] bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-[#1F1A17] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5F574D]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Veneer Benefits
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Why veneers are a popular cosmetic smile treatment
            </h3>
            <div className="space-y-3 text-[15px] leading-relaxed text-white/85">
              {benefits.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/cosmetic-dentistry"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Explore Cosmetic Dentistry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}