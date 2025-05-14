import React from "react";
import { MotionDiv } from "../MotionDiv";

interface CardOurSpecialty {
  index: number;
  title: string;
  desc: string;
}

export default function CardOurSpecialty({
  index,
  title,
  desc,
}: CardOurSpecialty): JSX.Element {
  const cardVariants = {
    offscreen: { y: 10, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.25,
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <>
      <MotionDiv
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="w-11/12 h-fit md:h-[340px] lg:h-[300px] xl:h-[260px] py-12 sm:py-8 lg:py-12 px-8 md:px-6 xl:px-10 border-2 border-black text-center md:text-start"
      >
        <h2 className="font-satoshi text-2xl sm:text-2xl md:text-xl xl:text-2xl font-medium sm:font-bold">
          {title}
        </h2>
        <p className="mt-3 text-Dark2 font-lato w-full sm:w-1/2 md:w-full mx-auto text-base sm:text-lg md:text-base xl:text-base">
          {desc}
        </p>
      </MotionDiv>
    </>
  );
}
