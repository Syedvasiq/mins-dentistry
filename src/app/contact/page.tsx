import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact MINS Dentistry | Shimoga & Bangalore",
  description:
    "Contact MINS Dentistry for appointments, consultations, and location details in Shimoga and Bangalore.",
};

const contactCards = [
  {
    title: "Call Us",
    value: "+91 00000 00000",
    description:
      "Speak with our team for appointments, treatment guidance, and general enquiries.",
    href: "tel:+910000000000",
    action: "Call Now",
  },
  {
    title: "Email Us",
    value: "care@minsdentistry.com",
    description:
      "Send us your questions or appointment requests and our team will get back to you.",
    href: "mailto:care@minsdentistry.com",
    action: "Send Email",
  },
  {
    title: "WhatsApp",
    value: "+91 00000 00000",
    description:
      "Connect with us for quick assistance, consultation coordination, and appointment support.",
    href: "https://wa.me/910000000000",
    action: "Chat on WhatsApp",
  },
];

const locations = [
  {
    city: "Shimoga Clinic",
    address:
      "Add your full Shimoga clinic address here, including landmark and pin code.",
    timing: "Mon – Sat | 10:00 AM – 8:00 PM",
    mapHref: "#",
  },
  {
    city: "Bangalore Clinic",
    address:
      "Add your full Bangalore clinic address here, including landmark and pin code.",
    timing: "Mon – Sat | 10:00 AM – 8:00 PM",
    mapHref: "#",
  },
];

const reasons = [
  {
    title: "Book a consultation",
    description:
      "Reach out to schedule a consultation for cosmetic, restorative, implant, or general dental care.",
  },
  {
    title: "Ask about treatments",
    description:
      "Our team can guide you to the right department based on your concern, treatment goal, or smile requirement.",
  },
  {
    title: "Discuss appointment options",
    description:
      "Get support with clinic availability, preferred location, and visit planning before you book.",
  },
  {
    title: "Plan your visit",
    description:
      "Use our contact page to quickly find the right location, working hours, and communication channel.",
  },
];

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can contact the clinic by phone, email, or WhatsApp to request an appointment and confirm availability.",
  },
  {
    question: "Can I choose between Shimoga and Bangalore?",
    answer:
      "Yes, patients can enquire about consultation availability at either clinic location based on convenience and treatment needs.",
  },
  {
    question: "Can I contact the clinic for cosmetic dentistry consultations?",
    answer:
      "Yes, this page can be used to enquire about cosmetic dentistry, dental implants, smile designing, veneers, and other services.",
  },
  {
    question: "What details should I share while contacting the clinic?",
    answer:
      "It helps to mention your concern, preferred location, preferred time, and whether you are a new or existing patient.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src=""
            alt="Reception and consultation environment at MINS Dentistry"
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
            <span className="text-[#D6B15A]">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Contact MINS Dentistry for Appointments, Consultations, and Care Guidance
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Whether you are planning your first consultation, exploring treatment
              options, or reaching out for clinic information, our team is here to
              help you connect with the right dental care at our Shimoga and Bangalore locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="tel:+910000000000"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Call the Clinic
              </Link>
              <Link
                href="https://wa.me/910000000000"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
              >
                Message on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Contact Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              Reach the clinic through the channel that suits you best
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            Use direct contact actions so patients can quickly call, email, or message
            the clinic without extra steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {contactCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,31,10,0.09)]"
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8912A] mb-4"
                style={{ fontFamily: "monospace" }}
              >
                {item.title}
              </p>
              <h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.value}</h3>
              <p className="text-[15px] leading-relaxed text-[#5F574D] mb-5">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center rounded-full border border-[#D8C7A6] px-5 py-2.5 text-sm font-medium text-[#1F1A17] transition duration-300 hover:border-[#B8912A] hover:text-[#B8912A]"
              >
                {item.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Visit Our Clinics
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              Two locations for accessible, premium dental care
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              MINS Dentistry welcomes patients at both Shimoga and Bangalore. You can
              choose the clinic location that is most convenient for your consultation,
              treatment planning, or follow-up care.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              Before contacting us, it helps to share
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Your main dental concern or treatment interest.</li>
              <li>Your preferred clinic location.</li>
              <li>Your preferred appointment timing.</li>
              <li>Your contact number for call-back confirmation.</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          {locations.map((location) => (
            <div
              key={location.city}
              className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-7 sm:p-8 shadow-[0_16px_40px_rgba(44,31,10,0.05)]"
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8912A] mb-4"
                style={{ fontFamily: "monospace" }}
              >
                Clinic Location
              </p>
              <h3 className="text-2xl font-semibold text-[#1F1A17] mb-4">{location.city}</h3>
              <p className="text-[15px] leading-relaxed text-[#5F574D] mb-4">{location.address}</p>
              <p className="text-[15px] leading-relaxed text-[#5F574D] mb-6">{location.timing}</p>
              <Link
                href={location.mapHref}
                className="inline-flex items-center rounded-full border border-[#D8C7A6] px-5 py-2.5 text-sm font-medium text-[#1F1A17] transition duration-300 hover:border-[#B8912A] hover:text-[#B8912A]"
              >
                View Location
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Contact Us ── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Why Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              A clear first step toward the right treatment path
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            A well-structured contact page helps patients quickly move from enquiry
            to action with less friction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)]"
            >
              <h3 className="text-xl font-semibold text-[#1F1A17] mb-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#5F574D]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQ + Quick Nav ── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-stretch">

          {/* Quick nav — gold gradient card */}
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#B8912A_0%,#8D6A1D_100%)] p-8 sm:p-10 text-white shadow-[0_20px_60px_rgba(120,88,23,0.2)]">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Quick Navigation
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-5">
              Explore key treatment pages before you contact the clinic
            </h2>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl mb-8">
              Patients often want to understand the treatment category first, then
              get in touch for the next step. These links make that journey easier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dental-implants" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Dental Implants</Link>
              <Link href="/cosmetic-dentistry" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Cosmetic Dentistry</Link>
              <Link href="/general-restorative-dentistry" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Restorative Dentistry</Link>
              <Link href="/before-after" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10">Before &amp; After</Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-6">
              Helpful answers before your first contact
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.2rem] border border-[#E8DCC6] bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-[#1F1A17] mb-2">{faq.question}</h3>
                  <p className="text-[15px] leading-relaxed text-[#5F574D]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
