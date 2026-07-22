import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implant Consultation | MINS Dentistry",
  description: "Book your dental implant consultation at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Thorough", label: "Complete oral and bone assessment" },
  { value: "Clear", label: "Honest guidance on suitability" },
  { value: "Personalised", label: "Plan tailored to your needs" },
  { value: "Informed", label: "Full understanding before you decide" },
];
const whatWeAssess = [
  { title: "Bone density and volume", description: "We evaluate whether sufficient jawbone exists to support implants, or whether bone grafting may be needed first." },
  { title: "Gum health", description: "Healthy gums are essential for implant success. Any gum disease is identified and addressed before treatment begins." },
  { title: "Overall oral health", description: "We assess the condition of remaining teeth, bite alignment, and any other factors that may affect the implant outcome." },
  { title: "Treatment suitability", description: "Not everyone is immediately suitable for implants. We provide honest guidance on your options and the best pathway forward." },
];
const process = [
  { step: "01", title: "Medical and dental history", description: "We review your health background, medications, and dental history to understand any factors that may affect treatment." },
  { step: "02", title: "Clinical examination", description: "A thorough examination of your teeth, gums, and bite is conducted to assess your current oral health status." },
  { step: "03", title: "Imaging and bone assessment", description: "X-rays or 3D scans are taken to evaluate bone density, volume, and the precise positioning needed for implant placement." },
  { step: "04", title: "Treatment plan and discussion", description: "A personalised implant plan is presented with clear information on procedures, timelines, and expected outcomes." },
];
const benefits = [
  "Understand your implant suitability clearly",
  "Receive an honest assessment of your bone and gum health",
  "Get a personalised treatment plan before committing",
  "Ask all your questions in a relaxed, informative setting",
  "Understand costs, timelines, and expected outcomes",
  "Start your implant journey with full confidence",
];

export default function ImplantConsultationPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/dental-consultaion-hero.png" alt="Implant consultation at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/dental-implants" className="hover:text-white/80 transition-colors">Dental Implants</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Implant Consultation</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Start Your Implant Journey</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Implant Consultation for a Clear, Confident Treatment Plan</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Your implant journey begins with a thorough consultation. Our specialists assess your oral health, bone density, and overall suitability — then walk you through every step so you can make a fully informed decision.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Book Your Consultation</Link>
              <Link href="/dental-implants" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Explore Implant Services</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About the Consultation</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">The right starting point for your implant treatment</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">An implant consultation is more than just a check-up. It is a detailed assessment of your oral health, bone structure, and treatment goals that forms the foundation of a successful implant outcome.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, we take the time to explain every aspect of the process so you feel fully informed and confident before any treatment begins.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Book a consultation if you want to</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Find out if you are suitable for dental implants.</li>
              <li>Understand the full implant process and timeline.</li>
              <li>Get a personalised treatment plan and cost estimate.</li>
              <li>Ask questions before committing to any treatment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>What We Assess</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">What your implant consultation covers</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">A thorough assessment ensures your implant plan is built on accurate information and realistic expectations.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {whatWeAssess.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Consultation Process</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">What happens during your implant consultation</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Each step is designed to give you a complete picture of your oral health and the most suitable implant pathway for your situation.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why starting with a consultation matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Book Now</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Take the first step toward your new smile</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">Book your implant consultation at MINS Dentistry today and get the clarity, guidance, and personalised plan you need to move forward with confidence.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Schedule Consultation</Link>
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Call +91 90081 13963</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
