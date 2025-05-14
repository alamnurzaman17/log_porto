import React from "react";
import { MotionDiv } from "../MotionDiv";

interface CardWhyChooseUse {
  index: number;
  icon: string;
  title: string;
  desc: string;
  totalItems: number;
}

export default function CardWhyChooseUse({
  index,
  icon,
  title,
  desc,
  totalItems,
}: CardWhyChooseUse): JSX.Element {
  const cardVariants = {
    offscreen: { y: 10, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.15,
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
        viewport={{ once: true, amount: 0.2 }}
        key={index}
        className={`flex gap-3 sm:gap-6 md:gap-4 lg:gap-6 w-full md:w-11/12 mt-4 sm:mt-8 md:mt-4 lg:mt-6 xl:mt-8 pb-4 sm:pb-8 md:pb-4 lg:pb-6 xl:pb-8 font-lato ${
          index !== totalItems - 1 ? "border-b" : ""
        }`}
      >
        <img
          src={icon}
          alt="icon"
          className="w-10 sm:w-12 md:w-10 xl:w-11 h-10 sm:h-12 md:h-10 xl:h-11"
        />
        <div>
          <h2 className="font-medium text-lg sm:text-2xl md:text-xl xl:text-2xl mb-2 sm:mb-4 md:mb-3 xl:mb-4 text-black">
            {title}
          </h2>
          <p className="text-sm text-Dark2 w-full sm:w-11/12 md:w-full">
            {desc}
          </p>
        </div>
      </MotionDiv>
    </>
  );
}
