"use client";
import React from "react";
import BtnPrimary from "@/components/Button/BtnPrimary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MotionDiv } from "@/components/MotionDiv";

export default function SixthSection() {
  const router = useRouter();

  const handleClickId = () => {
    // Your dynamic function logic goes here
    router.push("/project");
  };

  const containerVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
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
    <section className="hidden md:block relative text-Dark2 body-font">
      <div className="w-full h-60 bg-white" />
      <div className="w-full h-40 bg-MainColor" />
      <MotionDiv
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="absolute top-0 bottom-0 right-0 left-1 container text-center px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 py-24"
      >
        <div className="relative w-full h-72 bg-black">
          <div className="absolute w-36 md:w-20 xl:w-36 md:bottom-12 lg:bottom-14 md:right-10 lg:right-12 xl:bottom-16 xl:right-10 z-10">
            <Image
              src="/icons/pattern.svg"
              width={0}
              height={0}
              alt="Group 1"
              className="w-auto h-auto"
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center -top-1.5 -left-1.5 w-full h-full bg-white border border-black px-10 md:px-7 py-10 sm:py-9 md:py-7">
            <h1 className="font-semibold md:text-2xl lg:text-3xl text-black md:mb-2 xl:mb-4 font-satoshi">
              Contact us so we can help with what you need
            </h1>
            <p className="md:mb-8 lg:mb-12 md:w-5/6 font-lato">
              At Lead on Global, we are committed to providing high-quality
              development services that deliver exceptional{" "}
              <br className="hidden xl:flex" /> value. We believe that a diverse
              team, innovative approaches, and transparency are key to our
              success.
            </p>
            <BtnPrimary
              onClick={handleClickId}
              componentStyle="text-white hover:text-Dark1 font-satoshi font-bold py-2 px-6 border border-black cursor-pointer bg-black hover:bg-white"
            >
              Contact us now
            </BtnPrimary>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
