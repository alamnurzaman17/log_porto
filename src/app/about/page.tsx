import ResponsiveDesign from "@/components/ResDesign";
import HeroSection from "@/containers/AboutPage/hero-section";
import SecondSection from "@/containers/AboutPage/second-section";
import ThirdSection from "@/containers/AboutPage/third-section";
import FourthSection from "@/containers/AboutPage/fourth-section";
import TeamSection from "@/containers/AboutPage/team-section";
import FooterOtherPage from "@/components/Footer/FooterOtherPage";

export default function about() {
  return (
    <section className="w-full min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <TeamSection />
      {/* <ResponsiveDesign /> */}
      <FooterOtherPage />
    </section>
  );
}
