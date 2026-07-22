import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oral Surgery | MINS Dentistry",
  description:
    "Expert oral surgery at MINS Dentistry — safe, precise surgical procedures performed by experienced specialists.",
};

export default function OralSurgeryPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1600px] mx-auto">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>
        Our Services
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold text-[#1F1A17] mb-6">Oral Surgery</h1>
      <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl mb-8">
        When dental issues require surgical intervention, MINS Dentistry provides safe, precise oral
        surgery in a comfortable, sterile environment. Our experienced surgeons prioritise your
        wellbeing at every step — from pre-operative planning to post-operative care.
      </p>
      <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
        Our oral surgery services include wisdom tooth removal, cyst removal, biopsies, and other
        surgical procedures. Contact us to discuss your specific needs and we will create a
        personalised treatment plan for you.
      </p>
      <div className="mt-12">
        <a
          href="tel:+919008113963"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#C9A227] via-[#EBD08C] to-[#C9A227] px-8 py-4 text-[15px] font-bold text-black"
        >
          Book a Consultation
        </a>
      </div>
    </main>
  );
}
