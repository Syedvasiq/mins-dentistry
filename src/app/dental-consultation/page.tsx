import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Consultation | MINS Dentistry",
  description:
    "Book a comprehensive dental consultation at MINS Dentistry, Shimoga & Bangalore.",
};

const highlights = [
  { value: "Comprehensive", label: "Evaluation of oral health concerns" },
  { value: "Personalised", label: "Treatment planning approach" },
  { value: "Clear", label: "Guidance on next treatment steps" },
  { value: "Patient-first", label: "Consultation with comfort and care" },
];

const consultationBenefits = [
  {
    title: "Understand your dental concerns",
    description:
      "A detailed consultation helps identify the cause of pain, discomfort, visible dental issues, or long-term oral health concerns.",
  },
  {
    title: "Get a clear treatment direction",
    description:
      "You receive clarity on what treatment may be needed, what the priorities are, and how the next steps can be planned properly.",
  },
  {
    title: "Plan preventive or restorative care",
    description:
      "Consultations are important not only for active problems, but also for preventive guidance, smile improvement, and restorative planning.",
  },
  {
    title: "Make informed decisions confidently",
    description:
      "A proper consultation allows patients to understand treatment options, timelines, and goals before beginning care.",
  },
];

const process = [
  {
    step: "01",
    title: "Listening to your concerns",
    description:
      "We begin by understanding your symptoms, dental history, aesthetic goals, and any specific concerns that brought you in.",
  },
  {
    step: "02",
    title: "Clinical examination",
    description:
      "Your oral health is examined carefully to assess teeth, gums, bite, visible issues, and the overall condition of your smile.",
  },
  {
    step: "03",
    title: "Treatment discussion",
    description:
      "Based on the findings, suitable treatment options are explained clearly so you can understand the most appropriate path forward.",
  },
  {
    step: "04",
    title: "Personalised care planning",
    description:
      "A plan is created around your needs, priorities, comfort, and long-term oral health goals.",
  },
];

const visitIncludes = [
  "Discussion of your symptoms, concerns, and dental goals",
  "Clinical assessment of teeth, gums, bite, and oral condition",
  "Guidance on suitable treatment options and priorities",
  "Clear explanation of the recommended next steps",
  "A personalised plan tailored to your needs",
  "A comfortable starting point for long-term dental care",
];

export default function DentalConsultationPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/dental-consultaion-hero.png"
            alt="Dental consultation at MINS Dentistry"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,0.84)_0%,rgba(18,14,10,0.70)_40%,rgba(18,14,10,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,145,42,0.16),transparent_32%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "monospace" }}>
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/general-restorative-dentistry" className="text-white/50 hover:text-white transition-colors">General &amp; Restorative</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#D6B15A]">Dental Consultation</span>
          </nav>

          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-5"
              style={{ fontFamily: "monospace" }}
            >
              Start Your Care
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
              Dental Consultation for Clear Answers and Personalised Care
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-2xl">
              A thorough dental consultation is the starting point for all great
              dental care. At MINS Dentistry, we take the time to understand your
              concerns, examine your oral health carefully, and create a treatment
              plan tailored to your needs, comfort, and long-term goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Book Consultation
              </a>
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

      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              About Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              The right starting point for better dental decisions
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Dental treatment works best when it begins with a clear understanding
              of the patient’s condition, concerns, and priorities. A consultation
              creates that foundation by helping identify issues early and guiding
              the next steps with confidence.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F574D] max-w-2xl">
              Whether you are experiencing discomfort, planning restorative care,
              or simply looking for expert guidance, a consultation helps bring
              clarity to your oral health journey.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E6D8BC] bg-[#FCF8F1] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,31,10,0.06)]">
            <h3 className="text-lg font-semibold text-[#1F1A17] mb-4">
              A consultation is ideal when you want to
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#5F574D]">
              <li>Understand pain, discomfort, or dental concerns better.</li>
              <li>Get advice on treatment options before starting care.</li>
              <li>Plan preventive, restorative, or cosmetic dentistry.</li>
              <li>Receive a personalised direction based on your needs.</li>
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
              Why It Matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17]">
              What a dental consultation helps you achieve
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5F574D] max-w-xl">
            A professional consultation gives patients the information and direction
            needed to begin treatment with more confidence and less uncertainty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {consultationBenefits.map((item) => (
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
              Consultation Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              What happens during your visit
            </h2>
            <p className="text-[15px] leading-relaxed text-white/75">
              A well-structured consultation helps us understand your oral health
              clearly and recommend the most suitable path forward.
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
        <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-12 items-stretch">
          <div className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FCF8F1] p-8 sm:p-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Your Visit Includes
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-5">
              What you can expect from the consultation
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {visitIncludes.map((item) => (
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
              Appointment Form
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Begin with a dental consultation tailored to your needs
            </h3>
            <p className="text-[15px] leading-relaxed text-white/85 max-w-xl mb-8">
              Share a few details below and our team can connect with you to help
              plan the right next step for your dental care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919008113963"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F1A17] transition duration-300 hover:bg-[#F7F1E8]"
              >
                Call Now: +91 90081 13963
              </a>
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="consultation-form"
        className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24"
      >
        <div className="rounded-[2rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(44,31,10,0.05)]">
          <div className="max-w-3xl mb-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4"
              style={{ fontFamily: "monospace" }}
            >
              Book Now
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1A17] mb-4">
              Request your dental consultation
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5F574D]">
              Fill out the form below and our team can get in touch with you to
              confirm your consultation request.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#1F1A17]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="h-12 rounded-xl border border-[#D8CBB5] bg-white px-4 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-[#1F1A17]">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="h-12 rounded-xl border border-[#D8CBB5] bg-white px-4 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#1F1A17]">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="h-12 rounded-xl border border-[#D8CBB5] bg-white px-4 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-sm font-medium text-[#1F1A17]">
                Preferred Clinic
              </label>
              <select
                id="location"
                name="location"
                className="h-12 rounded-xl border border-[#D8CBB5] bg-white px-4 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select preferred clinic
                </option>
                <option value="shimoga">Shimoga</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="concern" className="text-sm font-medium text-[#1F1A17]">
                Reason for Consultation
              </label>
              <input
                id="concern"
                name="concern"
                type="text"
                placeholder="Eg: tooth pain, smile improvement, missing teeth, general checkup"
                className="h-12 rounded-xl border border-[#D8CBB5] bg-white px-4 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-[#1F1A17]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Share any symptoms, concerns, or preferred appointment details"
                className="rounded-xl border border-[#D8CBB5] bg-white px-4 py-3 text-[15px] text-[#1F1A17] outline-none transition focus:border-[#B8912A]"
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-[13px] leading-relaxed text-[#7A6F61] max-w-xl">
                By submitting this form, you are requesting contact from the MINS
                Dentistry team regarding your consultation enquiry.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#9E7C22]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}