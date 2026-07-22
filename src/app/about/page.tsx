import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeamBanner from "@/components/about/AboutTeamBanner";
import AboutComprehensiveCare from "@/components/about/AboutComprehensiveCare";
import AboutLocationsElevated from "@/components/about/AboutLocationsElevated";
import EmergencyCTA from "@/components/EmergencyCTA";

export const metadata = {
  title: "About Us | Mins Dentistry",
  description: "Learn about Mins Dentistry — our story, philosophy, doctor, technology, and commitment to exceptional patient care in Shimoga, Karnataka.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeamBanner />
      <AboutComprehensiveCare />
      <AboutLocationsElevated />
      <EmergencyCTA />
    </>
  );
}
