"use client";
import BtnPrimary from "@/components/Button/BtnPrimary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CardsServicesProps {
  index: number;
  imageUrl: string;
  title: string;
  text: string;
  href: string;
}

export default function CardsServices({
  index,
  imageUrl,
  title,
  text,
  href,
}: CardsServicesProps): JSX.Element {
  const isEven = index % 2 === 0;
  const router = useRouter();

  const handleClickId = () => {
    router.push(`${href}`);
  };

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        className={`w-full mx-auto flex ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }  flex-col items-center justify-center mb-16`}
      >
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className="relative w-[21rem] sm:w-[25rem] md:w-[19rem] lg:w-[32rem] xl:w-[34rem] h-[13rem] sm:h-[17rem] md:h-[12rem] lg:h-[20rem] xl:h-[22rem] mb-4 border-2 border-black"
        >
          <Image
            src={imageUrl}
            alt="hero"
            width={1920}
            height={1080}
            className="absolute -top-2.5 -left-1.5 w-[21rem] sm:w-[25rem] md:w-[19rem] lg:w-[32rem] xl:w-[34rem] h-[13rem] sm:h-[17rem] md:h-[12rem] lg:h-[20rem] xl:h-[22rem] object-cover object-center z-10"
          />
        </motion.div>
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: isEven ? 20 : -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h2 className="title-font text-2xl md:text-3xl mb-2 md:mb-7 font-semibold text-Dark1 font-satoshi">
            {title}
          </h2>
          <p className="mb-6 md:mb-7 font-lato text-Dark2 w-[400px] sm:w-[570px] md:w-[330px] xl:w-[530px]">
            {text}
          </p>
          <div className="flex justify-center">
            <BtnPrimary
              onClick={handleClickId}
              componentStyle="bg-white hover:bg-black text-Dark1 hover:text-white font-satoshi font-bold py-2 px-6 border border-black bg-white cursor-pointer"
            >
              Learn More
            </BtnPrimary>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
