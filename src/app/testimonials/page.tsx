import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Testimonials | MINS Dentistry",
  description: "Read what patients say about MINS Dentistry, Shimoga & Bangalore.",
};

const testimonials = [
  { name: "Priya R.", location: "Shimoga", treatment: "Dental Implants", rating: 5, review: "I was nervous about getting implants, but the team at MINS Dentistry made every step feel completely manageable. The results are incredible — I genuinely forget they are not my natural teeth." },
  { name: "Arjun M.", location: "Bangalore", treatment: "Smile Makeover", rating: 5, review: "From the first consultation to the final result, the experience was exceptional. Dr. Sabiha took the time to understand exactly what I wanted. My smile has completely transformed." },
  { name: "Kavitha S.", location: "Shimoga", treatment: "Root Canal Treatment", rating: 5, review: "I had been avoiding a root canal for months out of fear. The procedure was painless, the team was incredibly calm and reassuring, and I felt no discomfort whatsoever." },
  { name: "Ravi K.", location: "Bangalore", treatment: "Teeth Whitening", rating: 5, review: "Professional, efficient, and genuinely caring. My teeth are noticeably brighter and the results have lasted well beyond what I expected. Highly recommend." },
  { name: "Suman T.", location: "Shimoga", treatment: "Gum Treatment", rating: 5, review: "I had been told by another clinic that my gum disease was severe. MINS Dentistry gave me a clear treatment plan, explained every step, and the improvement has been remarkable." },
  { name: "Deepa N.", location: "Bangalore", treatment: "Dental Veneers", rating: 5, review: "I always felt self-conscious about my smile. The veneers look completely natural and the care throughout the process was outstanding. Worth every single visit." },
  { name: "Harish P.", location: "Shimoga", treatment: "Invisible Aligners", rating: 5, review: "I had avoided orthodontic treatment as an adult because I didn't want visible braces. The aligners from MINS Dentistry were discreet, comfortable, and the results speak for themselves." },
  { name: "Anita B.", location: "Bangalore", treatment: "Full Mouth Rehabilitation", rating: 5, review: "After years of dental problems, I finally have a smile I am proud of. The planning and care that went into my full mouth rehabilitation was thorough and genuinely life-changing." },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[#F7F1E8] text-[#1F1A17]">

      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-36 sm:pt-40 pb-14">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8912A]/60 mb-6" style={{ fontFamily: "monospace" }}>
          <Link href="/" className="hover:text-[#B8912A] transition-colors">Home</Link>
          <span className="text-[#B8912A]/30">/</span>
          <span className="text-[#B8912A]">Testimonials</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8912A] mb-4" style={{ fontFamily: "monospace" }}>Patient Stories</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[#1F1A17] mb-5">What Our Patients Say</h1>
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5F574D] max-w-2xl">
          Real experiences from patients who have trusted MINS Dentistry with their oral health, smile transformations, and long-term dental care across Shimoga and Bangalore.
        </p>
      </section>

      {/* Testimonials grid */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-[1.75rem] border border-[#E8DCC6] bg-[#FFFDF9] p-6 shadow-[0_16px_40px_rgba(44,31,10,0.05)] flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="#B8912A">
                    <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.3 3.5 8.6 4 5.9 2 4l2.7-.4z" />
                  </svg>
                ))}
              </div>
              {/* Review */}
              <p className="text-[14px] leading-relaxed text-[#5F574D] flex-1">&ldquo;{t.review}&rdquo;</p>
              {/* Meta */}
              <div className="pt-3 border-t border-[#E8DCC6]">
                <p className="text-[14px] font-semibold text-[#1F1A17]">{t.name}</p>
                <p className="text-[12px] text-[#B8912A] font-medium mt-0.5">{t.treatment}</p>
                <p className="text-[11px] text-[#8C877A] mt-0.5">{t.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="rounded-[2rem] bg-[#1F1A17] px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B15A] mb-4" style={{ fontFamily: "monospace" }}>Your Turn</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Begin your own smile transformation</h2>
            <p className="text-[15px] leading-relaxed text-white/75 max-w-xl">Join thousands of patients who have trusted MINS Dentistry for their oral health. Book your first consultation and take the first step toward a healthier, more confident smile.</p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#B8912A] px-7 py-3.5 text-sm font-medium text-white whitespace-nowrap transition duration-300 hover:bg-[#9E7C22]">Book a Consultation</Link>
            <Link href="/before-after" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white whitespace-nowrap transition duration-300 hover:bg-white/10">View Before &amp; After</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
