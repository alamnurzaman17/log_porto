"use client";
import BgHeroProject from "../../../public/imgs/img_project/hero-project.png";

//framer motion
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="text-gray-600 body-font border-b-2 px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center bg-cover bg-center bg-no-repeat flex justify-center h-532 md:h-[400px] xl:h-[500px] 2xl:h-[532px]"
      style={{
        backgroundImage: `url(${BgHeroProject.src})`,
      }}
    >
      <motion.div
        className="max-w-3xl flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-[#cfc6c6de] text-opacity-75 text-base font-normal font-[satoshi] leading-tight  2xl:mt-12 mb-5 uppercase">
          Web Site
        </h2>
        <h1
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  text-center text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-[satoshi] leading-tight sm:leading-snug mb-6 md:mb-8"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffffff 10%, #6C6C6C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.2",
          }}
        >
          Koperasi Web
        </h1>
        <h2 className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center text-sm sm:text-base text-gray-300 font-[satoshi] leading-relaxed tracking-wide">
          Developing Koperasi Information System (Web App) for Koperasi Pekerja
          Indonesia Maju, Indonesia.
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
