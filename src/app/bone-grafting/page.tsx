import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bone Grafting for Dental Implants | MINS Dentistry",
  description:
    "Bone grafting to rebuild jawbone support for dental implants at MINS Dentistry in Shimoga and Bangalore.",
};

const highlights = [
  { value: "Advanced", label: "Bone preservation and rebuilding approach" },
  { value: "Precise", label: "Implant foundation planning" },
  { value: "Personalised", label: "Treatment for each jaw condition" },
  { value: "Predictable", label: "Long-term implant support goals" },
];

const indications = [
  {
    title: "Bone loss after missing teeth",
    description:
      "When a tooth has been missing for a long time, the jawbone in that area can shrink and lose the volume needed for stable implant placement.",
  },
  {
    title: "Gum disease-related bone damage",
    description:
      "Advanced periodontal disease can reduce bone support around teeth and may require grafting before implant rehabilitation is planned.",
  },
  {
    title: "Preparation for dental implants",
    description:
      "Bone grafting is often recommended when implant placement needs stronger bone height, width, or density for long-term success.",
  },
  {
    title: "Socket preservation needs",
    description:
      "After tooth extraction, grafting may help preserve the site and reduce bone collapse before future implant treatment.",
  },
];

const process = [
  {
    step: "01",
    title: "Detailed evaluation",
    description:
      "We begin with a clinical assessment and imaging review to understand bone volume, quality, and the exact support needed for future implant placement.",
  },
  {
    step: "02",
    title: "Personalised graft plan",
    description:
      "The grafting technique is selected based on the location, extent of bone loss, healing goals, and the long-term implant strategy.",
  },
  {
    step: "03",
    title: "Bone graft procedure",
    description:
      "The graft is carefully placed to rebuild deficient bone and create a healthier foundation for a secure and functional implant outcome.",
  },
  {
    step: "04",
    title: "Healing and implant readiness",
    description:
      "Once the area has healed and integrated properly, the site is reassessed to determine readiness for implant placement.",
  },
];

const benefits = [
  "Rebuilds bone support needed for dental implants",
  "Improves stability for future implant placement",
  "Helps preserve jaw structure and facial support",
  "Allows treatment in sites affected by bone loss",
  "Supports more predictable long-term implant outcomes",
  "Creates a stronger restorative foundation",
];

export default function BoneGraftingPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/implants/bone-crafting.png"
            alt="Bone grafting treatment at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_40%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/dental-implants" className="text-white/50 hover:text-white transition-colors">Dental Implants</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Bone Grafting</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Implant Foundation
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Bone Grafting for a Stronger Implant Foundation
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Sufficient jawbone density is essential for successful implant placement.
              When bone loss has occurred due to missing teeth, gum disease, or
              long-term structural changes, bone grafting helps rebuild the
              foundation needed to support stable and long-lasting dental implants.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/dental-implants"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                Explore Implant Care
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
              Why bone grafting may be needed before implants
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Dental implants need healthy and sufficient jawbone for stable support.
              When bone has reduced over time, grafting helps rebuild the area so
              implant placement can be planned with better strength, structure, and
              long-term confidence.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              At MINS Dentistry, bone grafting is approached with careful diagnosis,
              personalised treatment planning, and a focus on creating a reliable
              foundation that supports both function and lasting implant success.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Bone grafting can help when
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Jawbone volume is not enough for implant support.</li>
              <li>A tooth has been missing for a long period.</li>
              <li>Bone has reduced because of periodontal disease.</li>
              <li>The extraction site needs preservation before implant placement.</li>
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
              Common Situations
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              When this procedure is commonly recommended
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Bone grafting is not the same for every patient. The need depends on the
            condition of the jawbone, the timing of implant placement, and the
            overall restorative plan.
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
              How bone grafting is carefully planned
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              Successful grafting depends on proper diagnosis, careful technique,
              and the right healing timeline before implant placement is considered.
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
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Recovery Guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              What to Expect: Recovery &amp; Healing Timeline
            </h2>
            <p className="text-[15px] leading-relaxed text-white/70">
              Bone grafting is a gradual process. Understanding each stage helps you
              feel prepared, confident, and in control of your recovery journey.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  period: "Days 1–7",
                  label: "Initial Healing",
                  color: "#D6B15A",
                  icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4a12 12 0 100 24A12 12 0 0016 4z"/>
                      <path d="M16 10v6l4 2"/>
                    </svg>
                  ),
                  points: [
                    { heading: "Swelling & Discomfort", body: "Some swelling and mild soreness is normal and usually peaks around day 2–3 before subsiding." },
                    { heading: "Diet", body: "Soft foods only — soups, yoghurt, mashed vegetables. Avoid hot liquids and hard or crunchy foods entirely." },
                    { heading: "Activity", body: "Rest is essential. Avoid strenuous exercise, bending, or anything that raises blood pressure." },
                    { heading: "Oral Care", body: "Gentle salt water rinses after 24 hours. Avoid brushing the graft site directly." },
                  ],
                },
                {
                  period: "Week 2–4",
                  label: "Early Integration",
                  color: "#C9A227",
                  icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 16s2-4 8-4 8 4 8 4-2 4-8 4-8-4-8-4z"/>
                      <circle cx="16" cy="16" r="2"/>
                    </svg>
                  ),
                  points: [
                    { heading: "Swelling", body: "Swelling and bruising continue to resolve. Most patients feel noticeably more comfortable by week 2." },
                    { heading: "Diet", body: "Gradually transition to softer semi-solid foods. Continue avoiding anything hard, chewy, or crunchy." },
                    { heading: "Activity", body: "Light daily activity is fine. Avoid contact sports and heavy lifting for the full 4 weeks." },
                    { heading: "Follow-up", body: "A check-up is usually scheduled to review healing progress and confirm the site is integrating well." },
                  ],
                },
                {
                  period: "Month 2–3",
                  label: "Bone Development",
                  color: "#B8912A",
                  icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 22l3-8 3 4 3-6 3 10"/>
                      <rect x="4" y="4" width="24" height="24" rx="4"/>
                    </svg>
                  ),
                  points: [
                    { heading: "Bone Growth", body: "New bone cells are actively forming around the graft material, gradually building density and volume." },
                    { heading: "Diet", body: "Most normal foods are well tolerated. Continue avoiding extremely hard or crunchy items near the graft area." },
                    { heading: "Activity", body: "Normal activity levels can generally resume. Regular light exercise is encouraged for overall healing." },
                    { heading: "Sensation", body: "The area may feel firm and pressure-free. Any persistent sensitivity should be reviewed with your doctor." },
                  ],
                },
                {
                  period: "Month 4–6+",
                  label: "Implant Readiness",
                  color: "#9E7C22",
                  icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 6v4M16 22v4M6 16h4M22 16h4"/>
                      <circle cx="16" cy="16" r="6"/>
                    </svg>
                  ),
                  points: [
                    { heading: "Implant Placement", body: "Once imaging confirms the graft has fully integrated, implant placement can be planned with confidence." },
                    { heading: "Diet", body: "No restrictions at this stage. A full normal diet is supported by the rebuilt bone foundation." },
                    { heading: "Activity", body: "Fully unrestricted. Your lifestyle should be completely back to normal before this stage." },
                    { heading: "Next Steps", body: "A final 3D assessment guides precise implant positioning for the best functional and aesthetic result." },
                  ],
                },
              ].map((stage, i) => (
                <div key={stage.period} className="flex flex-col gap-4">
                  {/* Period marker */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                      style={{ background: `${stage.color}22`, color: stage.color, border: `1px solid ${stage.color}44` }}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: "monospace" }}>{stage.period}</p>
                      <p className="text-[13px] font-semibold" style={{ color: stage.color }}>{stage.label}</p>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="flex flex-col gap-3">
                    {stage.points.map((pt) => (
                      <div
                        key={pt.heading}
                        className="rounded-[1.1rem] border p-4"
                        style={{ background: "rgba(255,255,255,0.04)", borderColor: `${stage.color}22` }}
                      >
                        <p className="text-[12px] font-bold uppercase tracking-widest mb-1" style={{ color: stage.color }}>
                          {pt.heading}
                        </p>
                        <p className="text-[13px] leading-relaxed text-white/65">{pt.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div
            className="mt-10 rounded-[1.25rem] border border-white/10 bg-white/5 px-6 py-5"
          >
            <p className="text-[13px] leading-relaxed text-white/60 max-w-3xl">
              <span className="font-semibold text-white/80">Note: </span>
              Healing timelines vary based on individual health, the extent of bone loss, graft type, and overall oral health. Your doctor at MINS Dentistry will monitor your progress at each stage and advise when implant placement is appropriate for you.
            </p>
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
              Key Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Benefits of rebuilding jawbone support
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
              Find out whether bone grafting is right for your implant plan
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">
              If you have been told that bone loss may affect implant treatment,
              our team can evaluate your condition and explain the most suitable
              restorative pathway with clarity and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/dental-implants"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Back to Implant Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}