import BgHeroSection from "../../../public/imgs/hero-section.png";
import { MotionDiv } from "@/components/MotionDiv";

export default function HeroSection() {
  const containerVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-top md:bg-top w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px] flex flex-row items-center justify-center"
      style={{
        backgroundImage: `url(${BgHeroSection.src})`,
        // height: "300px",
      }}
    >
      <MotionDiv
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="container flex flex-col items-center justify-center font-satoshi text-Light1 px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pb-14 pt-24 md:pt-24"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          About Us
        </h1>
        <p className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center text-sm sm:text-base text-gray-300 font-[satoshi] leading-relaxed tracking-wide">
          Alright Lets Get To Know About History of Lead On Global
        </p>
      </MotionDiv>
    </section>
  );
}
