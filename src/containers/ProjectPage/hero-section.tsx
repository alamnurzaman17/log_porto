"use client";
import BgHeroProject from "../../../public/imgs/img_project/hero-project.png";

//framer motion
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="text-gray-600 body-font border-b-2 px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center bg-cover bg-center bg-no-repeat flex justify-center  h-532 md:h-[400px] xl:h-[500px] 2xl:h-[532px]"
      style={{
        backgroundImage: `url(${BgHeroProject.src})`,
      }}
    >
      <motion.div
        className="items-center text-center flex flex-col 2xl:mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="w-96 text-center text-white 2xl:text-6xl xl:text-6xl lg:text-5xl text-4xl font-medium font-['Satoshi'] leading-10 mb-8"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffffff 10%, #6C6C6C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Works
        </h1>
        <h2 className="text-center 2xl:w-[600px] 2xl:text-[16px] text-sm text-[#cfc6c6de] text-opacity-75 font-normal font-['Satoshi'] leading-tight tracking-wide">
          Developing Koperasi Information System (Web App) for Koperasi Pekerja
          Indonesia Maju, Indonesia.
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
