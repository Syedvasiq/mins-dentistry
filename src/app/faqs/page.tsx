import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs | MINS Dentistry",
  description: "Frequently asked questions about dental treatments at MINS Dentistry, Shimoga & Bangalore.",
};

const categories = [
  {
    title: "General & Appointments",
    faqs: [
      { q: "How do I book an appointment at MINS Dentistry?", a: "You can call, email, or message us on WhatsApp. Visit our Contact page for direct links to all channels." },
      { q: "Do you offer same-day appointments?", a: "Same-day appointments may be available depending on availability. Contact us early in the day for the best chance of a same-day slot." },
      { q: "Do you have clinics in both Shimoga and Bangalore?", a: "Yes. MINS Dentistry has clinics in both locations. You can choose the one most convenient for your consultation or treatment." },
      { q: "What are your clinic hours?", a: "Our clinics are open Monday to Saturday, 10:00 AM to 8:00 PM. Please contact us to confirm specific availability." },
    ],
  },
  {
    title: "Dental Implants",
    faqs: [
      { q: "Am I suitable for dental implants?", a: "Most adults with good general health and sufficient jawbone are suitable. A consultation with our implant specialist will confirm this." },
      { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown placed on top typically lasts 15–20 years before needing replacement." },
      { q: "Is the implant procedure painful?", a: "The procedure is performed under local anaesthesia, so you will not feel pain during treatment. Mild soreness afterwards is managed with medication." },
      { q: "What is bone grafting and do I need it?", a: "Bone grafting rebuilds the jawbone if it has shrunk after tooth loss. Not everyone needs it — your doctor will assess this at consultation." },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    faqs: [
      { q: "How long does teeth whitening last?", a: "Professional whitening results typically last 12–24 months depending on diet, oral hygiene, and lifestyle habits." },
      { q: "What is the difference between veneers and a smile makeover?", a: "Veneers are porcelain shells applied to specific teeth. A smile makeover combines multiple treatments — whitening, veneers, contouring — for a complete transformation." },
      { q: "Are veneers reversible?", a: "Traditional veneers require some enamel removal and are not fully reversible. We discuss all options during consultation to ensure an informed decision." },
      { q: "Can I get invisible aligners for crooked teeth?", a: "Yes. Invisible aligners are effective for mild to moderate alignment concerns. A clinical assessment will confirm whether they are suitable for your case." },
    ],
  },
  {
    title: "Gum Care",
    faqs: [
      { q: "How do I know if I have gum disease?", a: "Common signs include bleeding when brushing, red or swollen gums, bad breath, and gums that appear to be receding from the teeth." },
      { q: "Is gum disease treatable?", a: "Yes. Early-stage gum disease (gingivitis) is highly treatable. Advanced stages can be managed effectively with proper periodontal care and maintenance." },
      { q: "Does gum treatment hurt?", a: "Treatment is performed with local anaesthesia where needed. Post-treatment sensitivity is usually mild and short-lived." },
      { q: "Can gum recession be reversed?", a: "Gum tissue does not grow back on its own, but recession can be treated with grafting procedures that restore coverage and prevent further loss." },
    ],
  },
  {
    title: "Payments & Insurance",
    faqs: [
      { q: "Do you accept dental insurance?", a: "Please contact the clinic directly to discuss your insurance provider and coverage. Our team will help you understand what is applicable." },
      { q: "Are payment plans available?", a: "We can discuss flexible payment options during your consultation. Please speak with our team about what is available for your treatment." },
      { q: "How much does a consultation cost?", a: "Consultation fees vary. Please contact the clinic for current pricing or to ask about any promotional consultation offers." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">

      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-36 sm:pt-40 pb-14">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8912A]/60 mb-6" style={{ fontFamily: "monospace" }}>
          <Link href="/" className="hover:text-[#B8912A] transition-colors">Home</Link>
          <span className="text-[#B8912A]/30">/</span>
          <span className="text-[#B8912A]">FAQs</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Help Centre</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[#1F1A17] mb-5">Frequently Asked Questions</h1>
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5F574D] max-w-2xl">
          Answers to the most common questions about our treatments, procedures, and clinic. If you do not find what you are looking for, contact our team directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]">Contact the Clinic</Link>
          <Link href="/dental-implants" className="inline-flex items-center justify-center rounded-full border border-[#B8912A]/40 px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:border-[#B8912A]">Explore Treatments</Link>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-5" style={{ fontFamily: "monospace" }}>{cat.title}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-[1.5rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_8px_24px_rgba(44,31,10,0.05)]">
                    <h3 className="text-[15px] font-semibold text-[#1F1A17] mb-2">{faq.q}</h3>
                    <p className="text-[14px] leading-relaxed text-[#5F574D]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-[2rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4" style={{ fontFamily: "monospace" }}>Still Have Questions?</p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Our team is happy to help</h2>
          <p className="text-[15px] leading-relaxed text-white/85 max-w-xl mb-7">If you have a specific concern or your question is not listed here, reach out directly and our team will get back to you promptly.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]">Get in Touch</Link>
            <Link href="https://wa.me/910000000000" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10">WhatsApp Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
