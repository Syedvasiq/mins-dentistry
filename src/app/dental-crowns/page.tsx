import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Crowns | MINS Dentistry",
  description:
    "Custom dental crowns to restore damaged or weakened teeth at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Custom", label: "Designed for precise tooth restoration" },
  { value: "Durable", label: "Built for daily strength and function" },
  { value: "Natural", label: "Aesthetic blend with your smile" },
  { value: "Protective", label: "Support for weakened teeth" },
];

const indications = [
  {
    title: "Damaged or broken teeth",
    description:
      "Crowns are often recommended when a tooth has been fractured, worn down, or structurally damaged and needs full coverage protection.",
  },
  {
    title: "Large restorations",
    description:
      "When a tooth has a large filling and limited remaining structure, a crown can provide better support and long-term reinforcement.",
  },
  {
    title: "After root canal treatment",
    description:
      "Teeth that have undergone root canal treatment may need a crown to restore strength and reduce the risk of fracture.",
  },
  {
    title: "Cosmetic and functional improvement",
    description:
      "In selected cases, crowns can improve both the appearance and function of teeth that are misshapen, weakened, or heavily restored.",
  },
];

const materials = [
  {
    title: "Porcelain Crowns",
    description:
      "Porcelain crowns are valued for their refined appearance and ability to closely resemble natural tooth colour and translucency.",
  },
  {
    title: "Zirconia Crowns",
    description:
      "Zirconia crowns offer excellent strength and durability while still supporting a clean, natural-looking restoration.",
  },
  {
    title: "Custom Shade Matching",
    description:
      "Each crown is planned to harmonise with surrounding teeth so the final result looks balanced, polished, and aesthetically seamless.",
  },
];

const process = [
  {
    step: "01",
    title: "Tooth evaluation",
    description:
      "We assess the tooth's condition, function, structure, and restorative needs before recommending a crown.",
  },
  {
    step: "02",
    title: "Treatment planning",
    description:
      "The most suitable crown material and design are chosen based on durability, aesthetics, and the location of the tooth.",
  },
  {
    step: "03",
    title: "Custom crown fabrication",
    description:
      "Your crown is designed to restore shape, support, and appearance with close attention to fit and natural smile integration.",
  },
  {
    step: "04",
    title: "Final placement",
    description:
      "The crown is placed and adjusted carefully so it feels comfortable, functions properly, and looks natural within the smile.",
  },
];

const benefits = [
  "Restores the shape and strength of weakened teeth",
  "Protects damaged teeth from further breakdown",
  "Supports normal biting and chewing function",
  "Improves the visible appearance of compromised teeth",
  "Provides long-lasting coverage with quality materials",
  "Blends function and aesthetics in one restoration",
];

const selfCheck = [
  {
    q: "Do you have a cracked or chipped tooth?",
    detail: "Cracks can worsen over time. A crown seals and protects the tooth before the damage spreads.",
  },
  {
    q: "Is a large filling failing or loose?",
    detail: "When a filling takes up most of a tooth, a crown provides more reliable long-term coverage.",
  },
  {
    q: "Have you had a root canal recently?",
    detail: "Root canal treated teeth become brittle. A crown restores strength and prevents fracture.",
  },
  {
    q: "Does a tooth feel sensitive or painful when biting?",
    detail: "Bite pain can signal structural weakness that a crown can address by stabilising the tooth.",
  },
  {
    q: "Is a tooth visibly worn down or misshapen?",
    detail: "Crowns can rebuild worn teeth to restore both function and a more balanced appearance.",
  },
  {
    q: "Has your dentist mentioned a crown before?",
    detail: "If a crown has been recommended in the past, it may be time to revisit that conversation.",
  },
];

export default function DentalCrownsPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/dental-crown-hero.png"
            alt="Dental crown treatment at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.70)_40%,rgba(18,14,10,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dental Crowns</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Tooth Restoration
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Dental Crowns to Restore Strength, Function, and Natural Appearance
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              A dental crown is a custom-made cap that covers a damaged, weakened,
              or heavily restored tooth. At MINS Dentistry, crowns are designed to
              rebuild shape, protect structure, and create a result that feels both
              durable and aesthetically natural.
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

      {/* About Crowns */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              About Crowns
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Full-coverage restoration for teeth that need stronger support
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              When a tooth has lost strength because of decay, fracture, wear, or
              previous treatment, a crown can help protect it by covering and
              reinforcing the remaining structure.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, crowns are planned not only for structural support
              but also for comfort, bite balance, and a finish that blends naturally
              with your surrounding teeth.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Dental crowns may be recommended when
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>A tooth is cracked, damaged, or structurally weak.</li>
              <li>A large filling no longer provides enough support.</li>
              <li>A root canal treated tooth needs protection.</li>
              <li>Both function and appearance need restoration together.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Indications */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Common Indications
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Situations where crowns are often advised
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Crown treatment is commonly chosen when a tooth needs more complete
            protection than a regular filling can provide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {indications.map((item) => (
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

      {/* Treatment Process */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
          <div className="max-w-3xl mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Treatment Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How crown treatment is carefully completed
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              A successful crown depends on diagnosis, careful planning, precise fit,
              and a restoration that works comfortably in daily use.
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

      {/* Check for Yourself */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[2rem] border border-[#E8DCC6] bg-[#FFFDF9] px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>
              Self Assessment
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-4">
              Could you need a dental crown?
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D]">
              Check the signs below. If any of these apply to you, a crown consultation may be worth considering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selfCheck.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-[#E8DCC6] bg-white p-6 shadow-[0_8px_24px_rgba(44,31,10,0.04)]">
                <div className="w-8 h-8 rounded-full bg-[#FBF4E4] border border-[#E8DCC6] flex items-center justify-center mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#B8912A" strokeWidth="1.4" />
                    <path d="M7 4.5v3M7 9.5v.25" stroke="#B8912A" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-[15px] font-semibold text-[#1F1A17] mb-2">{item.q}</p>
                <p className="text-[14px] leading-relaxed text-[#5F574D]">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
            >
              Book a Crown Consultation
            </Link>
            <Link
              href="tel:+919008113963"
              className="inline-flex items-center justify-center rounded-full border border-[#E8DCC6] bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
            >
              Call +91 90081 13963
            </Link>
          </div>
        </div>
      </section>

      {/* Crown Materials + Key Benefits */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Crown Materials
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Materials selected for strength and aesthetics
            </h2>

            <div className="space-y-4">
              {materials.map((item) => (
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
              Key Benefits
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Why dental crowns remain a trusted restorative choice
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
