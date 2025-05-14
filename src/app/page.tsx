import * as React from "react";
import HeroSection from "@/containers/HomePage/hero-section";
import DividingSection from "@/containers/HomePage/dividing-section";
import FooterHomePage from "@/components/Footer/FooterHomePage";
import SecondSection from "@/containers/HomePage/second-section";
import ThirdSection from "@/containers/HomePage/third-section";
import FourthSection from "@/containers/HomePage/fourth-section";
import FifthSection from "@/containers/HomePage/fifth-section";
import SixthSection from "@/containers/HomePage/sixth-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <DividingSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterHomePage />
    </div>
  );
}
