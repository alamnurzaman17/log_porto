import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function SecondSection() {
  const data = [
    {
      index: 1,
      icon: "/icons/shake-hands-fill.svg",
      title: "Trusted Collaboration",
      desc: "We recognize that your success is our success, driving us to collaborate closely and effectively.",
    },
    {
      index: 2,
      icon: "/icons/payment-success-fill.svg",
      title: "Affordable Pricing",
      desc: "We believe that high-quality software shouldn't break the bank. That's why we offer competitive pricing options to fit your budget without compromising on quality or performance.",
    },
    {
      index: 3,
      icon: "/icons/team-fill.svg",
      title: "Passionate Team",
      desc: "Our team comprises passionate and dedicated individuals committed to delivering the best for our clients.",
    },
    {
      index: 4,
      icon: "/icons/user-fill.svg",
      title: "Costumer Satisfaction Focus",
      desc: "Our team is committed to deeply understanding your needs and providing an exceptional experience throughout the collaboration process.",
    },
  ];

  const headerVariants = {
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

  const cardVariants = {
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
    <section className="text-Dark2 body-font">
      <div className="container w-full h-fit mx-auto px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 py-24 flex flex-col items-center">
        <div className="w-full flex flex-col gap-2">
          <MotionDiv
            variants={headerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-2 mb-2"
          >
            <Image
              src="/imgs/logo-icon-bgWhite.png"
              width={48}
              height={48}
              alt="Logo LOG"
              className="border-2 w-auto h-auto border-black"
            />
            <h1 className="font-satoshi font-semibold text-3xl md:text-4xl text-black">
              Why Load on Global?
            </h1>
          </MotionDiv>
          <MotionDiv
            variants={headerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <p className="w-full md:w-[32rem] text-center md:text-left font-lato text-base">
              In the rapidly evolving digital landscape, we understand the
              importance of selecting the right partner to help you achieve your
              goals.
            </p>
          </MotionDiv>
        </div>
        {/* card */}
        <div className="w-full grid gap-6 md:gap-7 lg:gap-8 xl:gap-10 grid-cols-1 md:grid-cols-2 mt-12">
          {data.map((item) => (
            <MotionDiv
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              key={item.index}
              className="relative w-full h-[14rem] sm:h-[14.5rem] md:h-[18.5rem] lg:h-[17rem] xl:h-[15rem] bg-black"
            >
              <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-white border border-black px-7 md:px-10 py-7 md:py-10">
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 mb-4 sm:mb-2">
                  <Image
                    src={item.icon}
                    width={42}
                    height={42}
                    alt={item.icon}
                    className="w-auto h-auto"
                  />
                  <h2 className="text-xl font-semibold text-Dark1 font-satoshi">
                    {item.title}
                  </h2>
                </div>
                <p className="font-lato">{item.desc}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
