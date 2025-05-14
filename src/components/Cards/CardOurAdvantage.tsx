"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

interface CardOurAdvantageProps {
  index: number;
  icon: string;
  title: string;
  desc: string;
  time: number;
}

export default function CardOurAdvantage({
  index,
  icon,
  title,
  desc,
  time,
}: CardOurAdvantageProps): JSX.Element {
  const FirstCardMd = 1;

  const baseGrid =
    "relative w-full bg-black h-[13rem] md:h-[18rem] lg:h-[15rem] xl:h-[15rem]";
  const firstGrid = "sm:h-[13rem] sm:col-span-2 md:col-span-1";
  const nextGrid = "sm:h-[18rem]";

  const classNames = clsx(baseGrid, {
    [firstGrid]: index === FirstCardMd,
    [nextGrid]: index !== FirstCardMd,
  });

  const cardVariants: Variants = {
    offscreen: { y: 10, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: time,
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        key={index}
        className={classNames}
      >
        <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-white border border-black px-10 md:px-7 py-10 sm:py-9 md:py-7">
          <div className="flex flex-row sm:flex-col items-center sm:items-start justify-start text-start gap-3 mb-3 md:mb-0">
            <Image
              src={icon}
              width="0"
              height="0"
              alt={icon}
              className="w-auto h-auto"
            />
            <h2 className="md:-mt-1 md:mb-3 text-xl font-bold font-satoshi text-black text-clip">
              {title}
            </h2>
          </div>
          <p className="font-lato">{desc}</p>
        </div>
      </motion.div>
    </>
  );
}
