import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Dental Care | MINS Dentistry",
  description: "Urgent emergency dental care at MINS Dentistry, Shimoga & Bangalore. Call us now.",
};

const highlights = [
  { value: "Urgent", label: "Same-day emergency appointments" },
  { value: "Prompt", label: "Fast pain relief and treatment" },
  { value: "Expert", label: "Experienced emergency dental care" },
  { value: "Caring", label: "Calm and reassuring environment" },
];

const emergencies = [
  { title: "Severe toothache", description: "Intense or throbbing tooth pain that doesn't subside may indicate infection or nerve damage requiring immediate attention." },
  { title: "Knocked-out tooth", description: "A tooth that has been completely knocked out has the best chance of being saved if treated within the first hour." },
  { title: "Broken or chipped tooth", description: "A fractured tooth can expose sensitive inner layers and cause pain or risk of infection if left untreated." },
  { title: "Dental abscess or swelling", description: "Facial swelling, fever, or a painful lump near a tooth may indicate a serious infection that needs urgent care." },
];

const process = [
  { step: "01", title: "Call us immediately", description: "Contact MINS Dentistry as soon as possible. Describe your symptoms so we can prepare for your arrival." },
  { step: "02", title: "Emergency assessment", description: "We examine the affected area quickly to understand the cause and severity of your dental emergency." },
  { step: "03", title: "Pain relief first", description: "Immediate steps are taken to relieve pain and stabilise the situation before further treatment is planned." },
  { step: "04", title: "Treatment and follow-up", description: "The appropriate treatment is carried out and a follow-up plan is created to ensure full recovery." },
];

const benefits = [
  "Fast access to emergency dental care",
  "Immediate pain relief and stabilisation",
  "Experienced team for all dental emergencies",
  "Prevents minor issues from becoming major problems",
  "Clear guidance on next steps after emergency care",
  "Compassionate and reassuring treatment environment",
];

export default function EmergencyDentalCarePage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image src="/dental-consultaion-hero.png" alt="Emergency dental care at MINS Dentistry" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.86)_0%,rgba(18,14,10,0.72)_42%,rgba(18,14,10,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="hover:text-white/80 transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Emergency Dental Care</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5" style={{ fontFamily: "monospace" }}>Urgent Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">Emergency Dental Care When You Need It Most</h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">Dental emergencies don't wait. At MINS Dentistry, we provide prompt, expert emergency care to relieve pain, prevent further damage, and get you back to comfort as quickly as possible.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Call Now: +91 90081 13963</a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15">Book Online</Link>
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>About Emergency Care</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Fast, expert care for dental emergencies</h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">A dental emergency can happen at any time. Whether it's sudden pain, a broken tooth, or facial swelling, getting prompt professional care is essential to prevent the situation from worsening.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">At MINS Dentistry, our team is equipped to handle a wide range of dental emergencies with speed, skill, and a calm, reassuring approach.</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">Seek emergency care immediately if you have</h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Severe or persistent tooth pain that won't subside.</li>
              <li>A knocked-out, cracked, or broken tooth.</li>
              <li>Facial swelling, fever, or signs of dental infection.</li>
              <li>A lost filling, crown, or dental appliance causing pain.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Common Emergencies</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">Dental emergencies we treat</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">Don't wait — early treatment prevents minor dental issues from becoming serious, painful, and costly problems.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {emergencies.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>What to Expect</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">How we handle your dental emergency</h2>
            <p className="text-[15px] leading-relaxed text-white/75">Our emergency process is designed to be fast, clear, and focused on getting you out of pain and into a safe, stable condition.</p>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">Why prompt emergency dental care matters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.1rem] border border-[#E8DCC6] bg-white px-4 py-4 text-[14px] leading-relaxed text-[#5F574D]">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Call Now</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Don't wait — call us for immediate dental help</h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl">If you are experiencing a dental emergency, contact MINS Dentistry immediately. Our team is ready to help you get out of pain and back to health as quickly as possible.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+919008113963" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Call +91 90081 13963</a>
              <Link href="/general-restorative-dentistry" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Back to Restorative Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
