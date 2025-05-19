import CardOurAdvantage from "@/components/Cards/CardOurAdvantage";
import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function FifthSection() {
  const data = [
    {
      index: 1,
      time: 0.1,
      icon: "/icons/eye.svg",
      title: "Our Vision",
      desc: "To be the leader in delivering world-changing, innovative software solutions, bringing positive impact to our clients.",
    },
    {
      index: 2,
      time: 0.3,
      icon: "/icons/target.svg",
      title: "Our Mission",
      desc: "Commit to making a positive impact on society and the environment through sustainable and responsible projects.",
    },
    {
      index: 3,
      time: 0.5,
      icon: "/icons/gem.svg",
      title: "Our Values",
      desc: "We adhere to the values of integrity, transparency, and honesty in every aspect of our business.",
    },
  ];

  const headerVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <section className="text-Dark2 body-font bg-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={headerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="font-semibold font-satoshi text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white mb-3 sm:mb-4">
            LOG Can Solve Your Business Problem
          </h1>
          <p className="text-base md:text-lg font-lato text-gray-700 dark:text-gray-300  w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
            Experience the difference with LOGs comprehensive solutions for your
            business.
          </p>
        </MotionDiv>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      gap-6 md:gap-8 lg:gap-10  {/* Gap responsif */}
                      text-left"
        >
          {data.map((item) => (
            <CardOurAdvantage
              key={item.index}
              index={item.index}
              time={item.time}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
