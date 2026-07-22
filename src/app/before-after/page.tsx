import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SmileTransformations from "@/components/SmileTransformations";

export const metadata: Metadata = {
  title: "Before & After | MINS Dentistry",
  description:
    "See real patient before and after smile transformations at MINS Dentistry in Shimoga and Bangalore, with cosmetic, restorative, and alignment treatment results.",
};

const transformations = [
  {
    title: "Smile Designing",
    category: "Cosmetic Dentistry",
    description:
      "Natural-looking smile enhancements designed to improve tooth shape, symmetry, and overall facial harmony while preserving a refined, balanced appearance.",
  },
  {
    title: "Teeth Alignment",
    category: "Orthodontic Care",
    description:
      "Before and after cases highlighting improved alignment, spacing correction, and bite refinement through carefully planned orthodontic treatment.",
  },
  {
    title: "Dental Veneers",
    category: "Aesthetic Restoration",
    description:
      "Porcelain and cosmetic veneer cases focused on correcting discoloration, minor gaps, uneven edges, and worn enamel with elegant precision.",
  },
  {
    title: "Full Mouth Rehabilitation",
    category: "Advanced Dentistry",
    description:
      "Comprehensive restorative cases showing functional and aesthetic improvement for patients needing extensive smile and bite reconstruction.",
  },
];

const highlights = [
  {
    number: "100%",
    label: "Real patient cases",
  },
  {
    number: "Personalised",
    label: "Treatment planning",
  },
  {
    number: "Natural",
    label: "Aesthetic outcomes",
  },
  {
    number: "Expert-led",
    label: "Clinical evaluation",
  },
];

const process = [
  {
    step: "01",
    title: "Clinical Assessment",
    text: "Every transformation starts with a detailed diagnosis, digital evaluation, and a clear understanding of the patient’s oral health and smile goals.",
  },
  {
    step: "02",
    title: "Treatment Planning",
    text: "We map out the right solution based on function, facial balance, comfort, and long-term dental stability rather than a one-size-fits-all approach.",
  },
  {
    step: "03",
    title: "Precision Treatment",
    text: "Each procedure is performed with close attention to detail, helping create results that feel natural, comfortable, and aesthetically refined.",
  },
  {
    step: "04",
    title: "Outcome Review",
    text: "Before and after documentation helps patients understand the visible improvement and the quality of care delivered across each stage.",
  },
];

export default function BeforeAfterPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/before-and-after-hero-image.png"
            alt="Modern dental treatment room at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.82)_0%,rgba(18,14,10,0.68)_38%,rgba(18,14,10,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_30%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Smile Results
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white max-w-3xl">
              Before &amp; After Transformations That Reflect Precision Care
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Explore the visible outcomes of carefully planned dental treatments at
              MINS Dentistry. From aesthetic smile improvements to advanced
              restorative care, each case reflects our focus on precision,
              natural-looking results, and patient-first treatment planning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                Explore Treatments
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-md"
              >
                <p className="text-lg sm:text-xl font-semibold text-white">{item.number}</p>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/75">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              About Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Real outcomes, carefully documented
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Our before and after gallery is designed to give patients a clearer
              view of what thoughtful, clinically guided dentistry can achieve.
              Each transformation represents a personalised treatment journey,
              shaped by oral health needs, aesthetic goals, and long-term function.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              What this page will help patients understand
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Visible changes in smile aesthetics and tooth harmony.</li>
              <li>How different treatments address different concerns.</li>
              <li>Why personalised planning matters in achieving natural results.</li>
              <li>What quality-focused dentistry looks like in real patient cases.</li>
            </ul>
          </div>
        </div>
      </section>

      <SmileTransformations />

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Treatment Categories
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Transformations across key dental treatments
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            These result categories help patients quickly identify the type of
            improvements they may want to explore during consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {transformations.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8912A] mb-4"
                style={{ fontFamily: "monospace" }}
              >
                {item.category}
              </p>
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
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How every transformation is planned
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Great before and after results come from disciplined planning,
              precise execution, and a deep understanding of both aesthetics and
              oral health.
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
                <p className="text-sm leading-relaxed text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Gallery Status
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Full case gallery coming soon
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
              We are curating real patient before and after cases to present them
              with clarity, privacy sensitivity, and clinical relevance. Soon,
              this page will feature treatment-specific smile transformations from
              MINS Dentistry in Shimoga and Bangalore.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Start your own smile transformation
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">
              Whether you are considering cosmetic enhancement, alignment
              correction, or complete restorative treatment, our team can guide
              you with a personalised consultation and treatment roadmap.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}