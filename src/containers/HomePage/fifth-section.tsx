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
    <section className="text-Dark2 body-font bg-white">
      <div className="container text-center px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pb-12">
        <MotionDiv
          variants={headerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="font-semibold font-satoshi text-3xl md:text-4xl text-black mb-2">
            LOG Can Solve Your Business Problem
          </h1>
          <p className="text-base font-lato w-[400px] sm:w-[572px] mx-auto mb-10 sm:mb-14">
            Experience the difference with LOGs comprehensive solutions for your
            business.
          </p>
        </MotionDiv>
        <div className="w-full grid gap-5 px-5 md:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 text-start">
          {data.map((data) => (
            <CardOurAdvantage
              key={data.index}
              index={data.index}
              time={data.time}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
