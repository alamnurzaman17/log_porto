import FooterOtherPage from "@/components/Footer/FooterOtherPage";
import ResponsiveDesign from "@/components/ResDesign";
import HeroSection from "@/containers/ContactPage/hero-section";
import SecondSection from "@/containers/ContactPage/second-section";

export default function contact() {
  return (
    <section className="w-full min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <SecondSection />
      <FooterOtherPage />
      {/* <ResponsiveDesign /> */}
      {/* <h1 className="text-6xl font-bold">Contact Page</h1>
      <p className="text-xl mt-4">This is a Next.js app with Tailwind CSS.</p> */}
    </section>
  );
}
