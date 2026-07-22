import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Doctor from "@/components/Doctor";
import SmileTransformations from "@/components/SmileTransformations";
import Testimonials from "@/components/Testimonials";
import BookAppointment from "@/components/BookAppointment";
import PaymentInsurance from "@/components/PaymentInsurance";
import FAQ from "@/components/FAQ";
import EmergencyCTA from "@/components/EmergencyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Doctor />
      <WhyChooseUs />
      <Services />
      <SmileTransformations />
      <Testimonials />
      <BookAppointment />
      <PaymentInsurance />
      <FAQ />
      <EmergencyCTA />
    </>
  );
}
