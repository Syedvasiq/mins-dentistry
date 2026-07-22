import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smile Makeover | MINS Dentistry",
  description: "Complete smile makeover treatments at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Personalised", label: "Designed around your unique smile" },
  { value: "Comprehensive", label: "Multiple treatments in one plan" },
  { value: "Natural", label: "Results that look authentically you" },
  { value: "Transformative", label: "Complete aesthetic improvement" },
];
const treatments = [
  { title: "Teeth whitening", description: "Brightening stained or discoloured teeth is often the first step in a smile makeover for an immediate visual improvement." },
  { title: "Dental veneers", description: "Veneers correct shape, colour, and minor spacing issues to create a more balanced and polished smile appearance." },
  { title: "Dental bonding", description: "Composite bonding repairs chips, closes small gaps, and reshapes teeth with a minimally invasive approach." },
  { title: "Gum contouring", description: "Reshaping the gum line creates better tooth proportions and a more symmetrical, harmonious smile frame." },
];
const process = [
  { step: "01", title: "Smile consultation", description: "We discuss your concerns, aesthetic goals, and what you want to change or improve about your smile." },
  { step: "02", title: "Smile design", description: "A personalised makeover plan is created combining the most suitable treatments for your unique smile and facial features." },
  { step: "03", title: "Treatment delivery", description: "Each procedure is carried out with precision, comfort, and a focus on achieving a natural, harmonious result." },
  { step: "04", title: "Final review", description: "The completed smile is reviewed for balance, aesthetics, and your satisfaction before the journey is complete." },
];
const benefits = [
  "Addresses multiple smile concerns in one cohesive plan",
  "Personalised to your facial features and aesthetic goals",
  "Combines treatments for maximum visual impact",
  "Creates a natural, balanced, and confident smile",
  "Improves both aesthetics and self-confidence",
  "Planned with long-term dental health in mind",
];

export default function SmileMakeoverPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/cometic/smile-makeover.png" alt="Smile makeover at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/cosmetic-dentistry" className="hover:text-white/80 transition-colors">Cosmetic Dentistry</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Smile Makeover</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Smile Transformation</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Smile Makeover Designed Around Your Unique Facial Aesthetics</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">A smile makeover combines multiple cosmetic treatments — whitening, veneers, bonding, contouring — to completely transform your smile. MINS Dentistry designs each makeover around your facial features, skin tone, and personal goals.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book a Smile Consultation</Link>
              <Link href="/before-after" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">View Smile Results</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Smile Makeovers</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">A complete approach to smile transformation</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">A smile makeover is not a single treatment — it is a carefully planned combination of cosmetic procedures that work together to address all your smile concerns in one cohesive journey.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, every makeover is designed around your facial proportions, natural features, and personal aesthetic goals to create a result that looks genuinely beautiful and authentically you.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">A smile makeover may be right for you if</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>You have multiple cosmetic concerns about your smile.</li>
              <li>You want a comprehensive transformation rather than one fix.</li>
              <li>You are preparing for a special occasion or life event.</li>
              <li>You want a smile that reflects your personality and confidence.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Treatments Included</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Common treatments in a smile makeover</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">The specific combination of treatments is tailored to your smile goals and the concerns you want to address.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {treatments.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Makeover Process</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How your smile makeover is planned and delivered</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Every makeover begins with understanding your goals and ends with a smile that feels completely natural and uniquely yours.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why a smile makeover is worth the investment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Consultation</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Begin your smile transformation today</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Book a smile makeover consultation at MINS Dentistry and discover what a personalised, comprehensive smile transformation can do for your confidence and appearance.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Consultation</Link>
              <Link href="/cosmetic-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Explore Cosmetic Dentistry</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
