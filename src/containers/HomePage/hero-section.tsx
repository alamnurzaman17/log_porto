"use client";
import "./home.css";
import BtnSecondary from "@/components/Button/BtnPrimary";
import BgHeroSection from "../../../public/imgs/img_home/bg-hero-section.png";
import { GoArrowDown } from "react-icons/go";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";
import officeImg from "../../../public/imgs/img_home/office.png";

export default function HeroSection() {
  const scrollToNextScreen = () => {
    const screenHeight = window.innerHeight;
    window.scrollBy({ top: screenHeight, behavior: "smooth" });
  };

  const pVariants = {
    offscreen: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  const h1Variants = {
    offscreen: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
      },
    },
  };

  const btnVariants = {
    offscreen: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const heroImgVariants = {
    offscreen: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <section
      className="text-Dark1 body-font border-b-2"
      style={{
        backgroundImage: `url(${BgHeroSection.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container min-h-screen mx-auto flex px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pb-14 pt-16 md:pt-24 flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        <div className="lg:flex-grow w-full sm:w-4/6 md:w-3/5 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center mt-14 sm:mt-14 md:mt-0">
          <MotionDiv
            variants={pVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <p className="leading-loose tracking-widest sm:tracking-widest2 lg:tracking-widest3 uppercase mb-1 text-base font-semibold text-Dark1 font-satoshi">
              ELEVATE YOUR BUSINESS
            </p>
          </MotionDiv>
          <MotionDiv
            variants={h1Variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1 className="tracking-normal md:tracking-tighter leading-snug sm:leading-tight uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black mb-8 font-satoshi w-11/12 sm:w-full lg:w-11/12">
              Bringing your vision to life with{" "}
              <span className="font-black tracking-tight font-lato text-gray-100 font-outline-1">
                innovative
              </span>{" "}
              software solutions.
            </h1>
          </MotionDiv>
          <MotionDiv
            variants={btnVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="flex justify-center"
          >
            <BtnSecondary
              onClick={scrollToNextScreen}
              componentStyle="bg-white hover:bg-black hover:text-white font-satoshi font-bold py-2 px-6 border border-black bg-white cursor-pointer"
            >
              Scroll down
            </BtnSecondary>
          </MotionDiv>
        </div>
        <MotionDiv
          variants={heroImgVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="relative h-[11rem] sm:h-[14rem] md:h-[19rem] lg:h-[20rem] xl:h-[22rem] 2xl:h-[24rem] w-full md:w-[19rem] lg:w-[20rem] xl:w-[22rem] 2xl:w-[24rem] border-2 border-black"
        >
          <button
            onClick={scrollToNextScreen}
            className="absolute right-7 -top-8 w-fit h-fit p-1 bg-white z-10"
          >
            <div className="w-10 lg:w-12 h-10 lg:h-12 p-2 lg:p-3.5 flex justify-center items-center bg-MainColor">
              <GoArrowDown size={22} className="w-full h-full" color="black" />
            </div>
          </button>
          <Image
            src={officeImg}
            width={1080}
            height={1080}
            alt="Office Image"
            priority
            className="absolute -top-1.5 lg:-top-2 xl:-top-3 -left-1.5 lg:-left-2 xl:-left-3 object-cover object-center aspect-square h-full w-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
