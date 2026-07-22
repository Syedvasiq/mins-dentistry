import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ceramic Braces | MINS Dentistry",
  description:
    "Discreet ceramic braces for teeth straightening at MINS Dentistry in Shimoga and Bangalore.",
};

const highlights = [
  { value: "Discreet", label: "Tooth-coloured orthodontic appearance" },
  { value: "Effective", label: "Controlled alignment correction" },
  { value: "Refined", label: "Aesthetic brace design" },
  { value: "Custom", label: "Treatment planning for each smile" },
];

const idealFor = [
  {
    title: "Appearance-conscious patients",
    description:
      "Ceramic braces are a preferred option for patients who want orthodontic treatment that is less noticeable during everyday life, work, or social interactions.",
  },
  {
    title: "Teens and adults",
    description:
      "They are commonly chosen by older teens and adults looking for dependable braces treatment with a more subtle visual appearance than metal brackets.",
  },
  {
    title: "Mild to complex alignment needs",
    description:
      "Ceramic braces can help address spacing, crowding, bite concerns, and alignment issues while maintaining a cleaner and more aesthetic look.",
  },
  {
    title: "Long-term smile improvement",
    description:
      "For patients focused on both function and appearance, ceramic braces offer a balance between orthodontic effectiveness and visual discretion.",
  },
];

const process = [
  {
    step: "01",
    title: "Orthodontic evaluation",
    description:
      "Your treatment begins with a detailed assessment of tooth position, bite alignment, facial balance, and overall orthodontic requirements.",
  },
  {
    step: "02",
    title: "Custom treatment planning",
    description:
      "A personalised braces plan is created based on your smile goals, alignment concerns, and the most effective path to predictable correction.",
  },
  {
    step: "03",
    title: "Precise ceramic bracket placement",
    description:
      "Tooth-coloured brackets are positioned carefully to guide movement with accuracy while maintaining a discreet and polished appearance.",
  },
  {
    step: "04",
    title: "Progress monitoring",
    description:
      "Regular review visits help ensure controlled movement, appliance adjustments, and smooth progress toward the final orthodontic result.",
  },
];

const benefits = [
  "Less noticeable than traditional metal braces",
  "Designed to blend better with natural teeth",
  "Suitable for effective tooth movement and bite correction",
  "Popular among adults and image-conscious patients",
  "Supports structured orthodontic treatment planning",
  "Offers a balance of function and aesthetics",
];

export default function CeramicBracesPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/cometic/Ceramic-Braces.png"
            alt="Ceramic braces treatment at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.70)_40%,rgba(18,14,10,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/orthodontics" className="text-white/50 hover:text-white transition-colors">Orthodontics</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Ceramic Braces</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Discreet Orthodontics
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Ceramic Braces for Effective and Aesthetic Teeth Straightening
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Ceramic braces work like traditional braces but use tooth-coloured or
              clear brackets that blend more naturally with your smile. They are an
              ideal option for patients who want dependable orthodontic correction
              with a more discreet and refined appearance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book an Orthodontic Consultation
              </Link>
              <Link
                href="/orthodontics"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                Explore Orthodontic Care
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
              A more subtle alternative to conventional braces
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Ceramic braces are designed to straighten teeth with the same core
              orthodontic principles used in traditional braces, while offering a
              less visible look. Their tooth-coloured appearance makes them a
              preferred option for patients who want confidence throughout the
              treatment journey.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, ceramic braces are recommended with careful
              planning, attention to bite correction, and a strong focus on both
              aesthetics and long-term smile function.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Ceramic braces may be ideal for
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Patients who want braces that look less noticeable.</li>
              <li>Adults and teens seeking aesthetic orthodontic care.</li>
              <li>People with crowding, spacing, or bite correction needs.</li>
              <li>Patients who want reliable alignment results with a refined appearance.</li>
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
              Who It Suits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Who commonly chooses ceramic braces
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            This treatment is often selected by patients who want the structured
            correction of braces without the more prominent metallic appearance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {idealFor.map((item) => (
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
              How ceramic braces treatment is planned
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Orthodontic results depend on accurate diagnosis, controlled tooth
              movement, and regular review throughout the treatment period.
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
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Why many patients prefer ceramic braces
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
              Discuss a more discreet braces option for your smile
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">
              Our team can assess your alignment needs and help you understand
              whether ceramic braces are the right fit for your smile goals,
              lifestyle, and orthodontic treatment plan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/orthodontics"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Back to Orthodontics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}