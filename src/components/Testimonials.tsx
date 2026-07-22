"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ACCENT = "#C9A227";

const TESTIMONIALS = [
  {
    quote: "I had been putting off dental implants for years out of fear. From the very first consultation, Dr. Sabiha took the time to walk me through every single step of the process. She explained what the implant procedure would involve, how long recovery would take, and what I could expect at each stage. The surgery itself was completely painless — I was genuinely shocked. Six months later, my implant looks and feels exactly like a natural tooth. I cannot recommend MINS Dentistry enough to anyone who has been hesitating.",
    name: "Kavitha Gowda",
    role: "Dental Implant Patient",
  },
  {
    quote: "After years of hiding my smile in photos and avoiding social situations because of my teeth, I finally decided to look into veneers. Dr. Sabiha spent an entire appointment just listening to what I wanted — she never rushed me or made me feel like my concerns were trivial. The veneers she designed are absolutely flawless. The shape, the shade, the way they catch the light — everything is perfect. For the first time in my adult life I actually want to smile in photographs. It has genuinely changed how I carry myself every single day.",
    name: "Riyaz Ahmed",
    role: "Smile Makeover Patient",
  },
  {
    quote: "My full mouth rehabilitation took nearly a year from start to finish, and throughout every appointment Dr. Sabiha and her team were nothing short of exceptional. I came in with severe wear on almost every tooth and significant bone loss in two areas. The treatment plan she put together was thorough, realistic, and clearly explained. She never oversold what was possible and delivered exactly what she promised. The results have completely transformed not just my smile but my ability to eat comfortably for the first time in years. I am so grateful I found this clinic.",
    name: "Suma Hegde",
    role: "Full Mouth Rehabilitation",
  },
  {
    quote: "From the moment I walked through the door I felt like a person, not just another appointment. The reception staff remembered my name on my second visit, the clinic itself is spotlessly clean and beautifully designed, and Dr. Sabiha has a warmth about her that immediately puts you at ease. I came in for a routine check-up and ended up having a thorough discussion about my overall oral health that no previous dentist had ever bothered to have with me. I left with a clear plan and a genuine sense that someone actually cared about my long-term dental health.",
    name: "Manjunath Bhat",
    role: "General Dentistry Patient",
  },
  {
    quote: "I had a root canal done at MINS and I want to be honest — I was absolutely terrified going in. I had heard horror stories and had been avoiding it for two years despite the pain. Dr. Sabiha was incredibly patient with my anxiety. She explained every instrument she was using, checked in with me constantly throughout the procedure, and made sure I was completely numb before starting anything. The whole thing took about ninety minutes and I felt nothing. The relief afterwards was immediate. I genuinely wish I had come sooner instead of suffering for so long.",
    name: "Farhana Begum",
    role: "Root Canal Patient",
  },
  {
    quote: "My teenage daughter had been self-conscious about her crooked teeth for years and refused to consider metal braces. We came to MINS to discuss invisible aligners and Dr. Sabiha was absolutely brilliant with her — patient, encouraging, and honest about the timeline and what the aligners could and could not achieve. Fourteen months later the results are remarkable. My daughter smiles constantly now and her confidence has transformed completely. As a parent watching that change happen has been incredibly moving. The whole team at MINS made the journey so smooth.",
    name: "Shantha Naik",
    role: "Invisible Aligners — Parent",
  },
  {
    quote: "I had severe gum disease that had been left untreated for far too long and I was genuinely worried I was going to lose several teeth. Dr. Sabiha was honest with me about the severity of the situation without being alarmist. She laid out a clear treatment plan involving deep cleaning and flap surgery, explained exactly what each procedure would do, and supported me through the entire process. The improvement has been dramatic. My gums are healthy, I have not lost a single tooth, and I now understand how to maintain my oral health properly going forward. Truly life-changing care.",
    name: "Venkatesh Rao",
    role: "Gum Treatment Patient",
  },
  {
    quote: "I came to MINS for teeth whitening before my wedding and the results were beyond anything I had hoped for. Dr. Sabiha assessed my teeth carefully first and was upfront that some of my older restorations would not whiten the same way as my natural teeth — she suggested a plan that accounted for this so everything would look consistent. On my wedding day multiple guests asked if I had veneers because my smile looked so polished. I have since recommended MINS to four of my friends and every single one of them has had an equally wonderful experience.",
    name: "Nandini Kulkarni",
    role: "Teeth Whitening Patient",
  },
  {
    quote: "I broke a front tooth in an accident and was in a complete panic. I called MINS and they fit me in the very same day. Dr. Sabiha was calm, reassuring, and incredibly skilled. She assessed the damage, explained my options clearly — a crown versus a veneer — and helped me make an informed decision without any pressure. The crown she placed looks completely natural. Nobody who has seen me since has been able to tell which tooth was damaged. The speed, the quality, and the compassion I received that day were extraordinary. This clinic is genuinely exceptional.",
    name: "Imran Pasha",
    role: "Emergency Dental Patient",
  },
  {
    quote: "I have been a patient at MINS for three years now and every single visit has been consistent — professional, thorough, and genuinely caring. Dr. Sabiha remembers details about my dental history without having to look at notes, she always asks about previous concerns before starting, and she never makes me feel rushed. I have had fillings, a cleaning, and a crown done here and the quality of every procedure has been outstanding. Finding a dentist you truly trust is rare. I would not go anywhere else and I recommend MINS to everyone I know.",
    name: "Rekha Shetty",
    role: "Long-Term General Patient",
  },
  {
    quote: "My son has severe dental anxiety stemming from a bad experience as a child. Getting him to attend any dental appointment has been a battle for years. A friend recommended Dr. Sabiha specifically because of how she handles anxious patients. She spent the first appointment just talking to him — no instruments, no examination, just building trust. By the third visit he was comfortable enough for a full check-up. He has now had two fillings done without any distress whatsoever. As a mother this means everything to me. Dr. Sabiha has a rare gift for connecting with patients.",
    name: "Savitha Murthy",
    role: "Parent of Anxious Patient",
  },
  {
    quote: "I needed three teeth extracted and bone grafting done in preparation for implants. I was nervous about the complexity of the treatment but Dr. Sabiha mapped out the entire journey for me at the very first consultation — a clear timeline, realistic cost breakdown, and honest expectations about healing. Every procedure was performed with precision and care. The grafting sites healed beautifully and my implants are now in place and fully integrated. The whole process took about eight months and I was supported every step of the way. Exceptional clinical skill combined with genuine human warmth.",
    name: "Abdul Razak",
    role: "Bone Grafting & Implant Patient",
  },
  {
    quote: "I had been told by another dentist that I needed four crowns urgently and was quoted an enormous sum. I came to MINS for a second opinion and Dr. Sabiha was refreshingly honest — two of those crowns were genuinely necessary, the other two could be monitored for now with good home care. She saved me a significant amount of money and I appreciated her integrity enormously. The two crowns she did place are beautifully crafted and fit perfectly. I trust her completely and that trust is not something I give easily when it comes to dental care.",
    name: "Deepa Joshi",
    role: "Crown Restoration Patient",
  },
  {
    quote: "I had ceramic braces fitted at MINS and the entire experience from consultation to debond was handled with such professionalism. Dr. Sabiha was meticulous about the placement, checked my progress at every appointment, and made small adjustments with real attention to detail. The treatment took sixteen months and the final result is a perfectly aligned smile that I am incredibly proud of. The ceramic brackets were barely noticeable throughout and I received so many compliments even while the treatment was ongoing. I could not be happier with the outcome or the care I received.",
    name: "Suresh Poojari",
    role: "Ceramic Braces Patient",
  },
  {
    quote: "I came to MINS after years of neglecting my teeth due to financial constraints and a deep-seated fear of being judged. Dr. Sabiha was the opposite of judgmental — she was kind, matter-of-fact, and focused entirely on what we could do going forward rather than dwelling on the past. She prioritised my treatment plan so we could address the most urgent issues first within my budget. Over eighteen months we have worked through everything systematically and my oral health is now the best it has ever been in my adult life. I am genuinely proud of my smile for the first time.",
    name: "Zareena Kousar",
    role: "Comprehensive Restorative Patient",
  },
  {
    quote: "The smile makeover Dr. Sabiha designed for me involved whitening, two veneers on my upper laterals, and composite bonding on my lower teeth. She took photographs, digital scans, and spent time showing me a preview of the expected outcome before we started anything. The attention to detail throughout was remarkable — she adjusted the shade of the veneers twice until they matched my natural teeth perfectly under different lighting conditions. The final result looks completely natural, not overdone. People notice my smile but they cannot pinpoint why — they just say I look well. That is exactly what I wanted.",
    name: "Preethi Kamath",
    role: "Smile Makeover Patient",
  },
  {
    quote: "I had a frenectomy procedure done at MINS to address a tongue tie that had been causing speech difficulties and discomfort for years. Dr. Sabiha explained the procedure thoroughly, answered every question I had, and performed it with such precision that my recovery was remarkably quick. Within two weeks I noticed a significant improvement in my speech and the discomfort I had lived with for so long was completely gone. The aftercare instructions were clear and the follow-up appointment confirmed everything had healed perfectly. I only wish I had addressed this years earlier.",
    name: "Girish Nayak",
    role: "Frenectomy Patient",
  },
  {
    quote: "As someone who works in healthcare myself I have high standards when it comes to clinical environments and infection control. MINS exceeds every expectation. The sterilisation protocols are rigorous, the equipment is modern and well-maintained, and the clinical team clearly takes hygiene seriously at every level. Beyond the clinical standards, Dr. Sabiha is an outstanding clinician — precise, knowledgeable, and genuinely invested in her patients' outcomes. I have referred several colleagues to her and every one of them has reported the same high standard of care. This is what dentistry should look like.",
    name: "Dr. Roopa Srinivas",
    role: "Healthcare Professional & Patient",
  },
  {
    quote: "I had dentures fitted at MINS after losing several teeth over the years and I was dreading the process — I had heard so many stories about ill-fitting dentures and the discomfort involved. Dr. Sabiha took multiple impressions, made careful adjustments at each fitting, and did not consider the job done until I was completely comfortable and satisfied. The dentures fit perfectly, look natural, and have given me back the ability to eat foods I had been avoiding for years. The difference to my quality of life has been profound. I am so grateful for the patience and skill she brought to my care.",
    name: "Nagamma Devaru",
    role: "Denture Patient",
  },
  {
    quote: "I came to MINS for a dental bridge to replace a missing molar and the experience was seamless from start to finish. Dr. Sabiha assessed the adjacent teeth carefully, explained why a bridge was the most appropriate solution in my case, and took impressions that resulted in a bridge that fits so naturally I forget it is there. The colour match to my surrounding teeth is perfect. The procedure itself was comfortable and the temporary bridge she placed while the permanent one was being made was equally well-fitted. I have since returned for a check-up and everything remains in excellent condition.",
    name: "Mohammed Irfan",
    role: "Dental Bridge Patient",
  },
];

/* ── Word-by-word reveal with one-time shimmer sweep ─────────── */
function GoldenQuote({ text, active }: { text: string; active: boolean }) {
  const words = text.split(" ");
  return (
    <p className={`${display.className} text-[1.75rem] font-medium italic leading-[1.7] sm:text-[2rem] lg:text-[2.15rem] xl:text-[2.35rem]`}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`gold-word inline${active ? " gold-word--active" : ""}`}
          style={{
            transition: "none",
            animationDelay: `${i * 0.07}s`,
          }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = TESTIMONIALS[current];

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(1), 8000);
  };

  useEffect(() => {
    if (visible) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [visible]);

  const advance = (dir: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
      setTransitioning(false);
    }, 450);
  };

const fadeUp = (delay = "0s") => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 1s cubic-bezier(.2,.8,.2,1) ${delay}, transform 1s cubic-bezier(.2,.8,.2,1) ${delay}`,
  });

  return (
    <>
      <style>{`
        /* One-time shimmer sweep: bright flash passes left→right, then settles on steady gold */
        @keyframes goldSweep {
          0%   { background-position: 200% center; }
          55%  { background-position: -20% center; }
          100% { background-position: -20% center; }
        }
        @keyframes wordReveal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .gold-word {
          background: linear-gradient(
            90deg,
            #8A8A8A 0%,
            #C0C0C0 30%,
            #F0F0F0 50%,
            #C0C0C0 70%,
            #8A8A8A 100%
          );
          background-size: 250% auto;
          background-position: -20% center;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          opacity: 0;
        }
        .gold-word--active {
          animation: wordReveal 0.8s cubic-bezier(.2,.8,.2,1) both, goldSweep 1.6s cubic-bezier(.4,0,.2,1) 1 forwards;
        }
        @keyframes imgReveal {
          from { clip-path: inset(0 100% 0 0 round 1.5rem); }
          to   { clip-path: inset(0 0% 0 0 round 1.5rem); }
        }
        .img-reveal { animation: imgReveal 1.1s cubic-bezier(.65,0,.35,1) 0.2s both; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ background: "#070706" }}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
            style={{ background: `radial-gradient(circle, ${ACCENT}0e 0%, transparent 65%)` }} />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px]"
            style={{ background: `radial-gradient(circle, ${ACCENT}08 0%, transparent 65%)` }} />
        </div>

        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}50, transparent)` }} />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}50, transparent)` }} />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">

          {/* Eyebrow */}
          <div className="mb-14" style={fadeUp()}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: ACCENT, fontFamily: "monospace" }}>
              Patient Stories
            </p>
            <span
              className="mt-3 block h-px w-14"
              style={{
                background: `linear-gradient(to right, ${ACCENT}, transparent)`,
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.9s ease 0.2s",
              }}
            />
            <h2 className={`${display.className} mt-5 text-4xl font-semibold text-white/70 sm:text-5xl`} style={fadeUp("0.1s")}>
              Words From Our <span className="italic" style={{ color: ACCENT }}>Patients</span>
            </h2>
          </div>

          {/* Single centered quote layout */}
          <div
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "translateX(-16px)" : "translateX(0)",
              transition: "opacity 0.45s ease, transform 0.45s ease",
            }}
          >
              <span
                className={`${display.className} block leading-none select-none -mb-4`}
                style={{ fontSize: "clamp(5rem,10vw,8rem)", color: ACCENT, opacity: 0.12 }}
                aria-hidden
              >
                &ldquo;
              </span>

              <GoldenQuote text={t.quote} active={visible && !transitioning} />

              <div className="mt-10 flex items-center gap-4">
                <span className="block h-px w-12" style={{ background: `linear-gradient(to right, ${ACCENT}, transparent)` }} />
                <div>
                  <p className="text-[15px] font-semibold tracking-wide text-white/85">{t.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.3em] text-white/30" style={{ fontFamily: "monospace" }}>{t.role}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-12 flex items-center gap-5">
                <button
                  onClick={() => { advance(-1); startTimer(); }}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{ border: `1px solid ${ACCENT}45`, color: ACCENT }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  onClick={() => { advance(1); startTimer(); }}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{ border: `1px solid ${ACCENT}45`, color: ACCENT }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <span className="ml-2 text-[11px] text-white/20" style={{ fontFamily: "monospace" }}>
                  {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
