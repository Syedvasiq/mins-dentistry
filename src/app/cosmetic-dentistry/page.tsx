import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Shimoga & Bangalore | MINS Dentistry",
  description:
    "Transform your smile with cosmetic dentistry at MINS Dentistry — teeth whitening, smile makeovers, and dental veneers.",
};

const TREATMENTS = [
  {
    label: "Teeth Whitening",
    href: "/teeth-whitening",
    description:
      "Professional whitening treatments designed to lift stains and brighten your smile with a cleaner, fresher appearance.",
  },
  {
    label: "Smile Makeover",
    href: "/smile-makeover",
    description:
      "A personalised approach that combines treatments to improve smile balance, facial harmony, and overall dental aesthetics.",
  },
  {
    label: "Dental Veneers",
    href: "/dental-veneers",
    description:
      "Refined veneer solutions for correcting discolouration, gaps, uneven edges, and other visible smile concerns.",
  },
];

const highlights = [
  { value: "Natural", label: "Smile enhancement approach" },
  { value: "Refined", label: "Aesthetic treatment planning" },
  { value: "Personalised", label: "Solutions for each patient" },
  { value: "Confident", label: "Results designed to feel authentic" },
];

const reasons = [
  {
    title: "Improve smile brightness",
    description:
      "Cosmetic dental treatments can help address staining, dullness, and visual imperfections that affect smile confidence.",
  },
  {
    title: "Enhance overall harmony",
    description:
      "The goal is not just whiter teeth, but a balanced, natural smile that complements the face and looks elegant in everyday life.",
  },
  {
    title: "Correct visible concerns",
    description:
      "Shape irregularities, worn edges, minor spacing, and surface flaws can often be improved with carefully selected aesthetic treatments.",
  },
  {
    title: "Support self-confidence",
    description:
      "A well-planned cosmetic dentistry journey often helps patients feel more confident in social, personal, and professional settings.",
  },
];

const process = [
  {
    step: "01",
    title: "Smile assessment",
    description:
      "We begin by understanding your concerns, evaluating tooth shape, shade, proportions, and how your smile relates to facial aesthetics.",
  },
  {
    step: "02",
    title: "Treatment planning",
    description:
      "A cosmetic plan is created around your goals, whether you need a subtle enhancement or a more comprehensive smile transformation.",
  },
  {
    step: "03",
    title: "Precision treatment",
    description:
      "Each procedure is carried out with attention to natural aesthetics, comfort, and long-term dental integrity.",
  },
  {
    step: "04",
    title: "Final refinement",
    description:
      "The completed result is reviewed for balance, appearance, and harmony so your smile looks polished rather than overdone.",
  },
];

const benefits = [
  "Enhances smile aesthetics with a natural-looking result",
  "Improves confidence in everyday interactions",
  "Offers personalised treatment based on visible concerns",
  "Can address colour, shape, proportion, and symmetry",
  "Combines beauty with a clinically guided approach",
  "Supports a more polished and confident appearance",
];

export default function CosmeticDentistryPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/cosmetic-dentistry-hero.png"
            alt="Cosmetic dentistry smile consultation at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.70)_40%,rgba(18,14,10,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Our Services
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Cosmetic Dentistry Designed for Natural, Confident Smiles
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              A beautiful smile builds confidence. At MINS Dentistry, our cosmetic
              dental treatments are designed to enhance the natural aesthetics of
              your teeth with a refined, personalised approach that looks elegant,
              balanced, and authentically you.
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
              About Cosmetic Care
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Aesthetic dentistry that respects natural beauty
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Cosmetic dentistry is about more than changing the appearance of teeth.
              It is about creating a smile that feels balanced, healthy-looking, and
              suited to your face, personality, and comfort.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, every smile enhancement is planned with attention to
              detail so the final result feels refined, proportionate, and naturally
              beautiful rather than artificial.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Cosmetic dentistry can help improve
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Tooth colour and visible staining.</li>
              <li>Minor gaps, uneven edges, and shape concerns.</li>
              <li>Smile symmetry and overall visual harmony.</li>
              <li>Confidence in everyday personal and professional life.</li>
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
              Treatments
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Explore our cosmetic dentistry treatments
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Each service below links directly to a dedicated treatment page, making
            it easier for patients to explore the option most relevant to their smile goals.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TREATMENTS.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="group block rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1F1A17] mb-3 group-hover:text-[#B8912A] transition-colors">
                      {t.label}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#5F574D]">
                      {t.description}
                    </p>
                  </div>
                  <span className="mt-1 text-[#C9A227] text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Why Patients Choose It
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Reasons patients consider cosmetic smile enhancement
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Cosmetic treatment is usually chosen when patients want a smile that
              looks brighter, more even, and more harmonious without losing its natural character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
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
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Smile Design Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              How cosmetic treatment is thoughtfully planned
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4"
                >
                  <p className="text-sm font-semibold text-[#B8912A] mb-2">{item.step}</p>
                  <h3 className="text-base font-semibold text-[#1F1A17] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#5F574D]">
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
              Benefits
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Cosmetic dentistry can elevate both smile aesthetics and confidence
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
                Schedule Appointment
              </Link>
              <Link
                href="/before-after"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                See Smile Transformations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}