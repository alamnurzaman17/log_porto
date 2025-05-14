import WhoWeAreImg from "../../../public/imgs/img_about/who-we-are.png";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

export default function SecondSection() {
  const textVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const imageVariants = {
    offscreen: {
      x: 20,
      opacity: 0,
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

  return (
    <section>
      <div className="container w-full h-fit mx-auto px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pt-12 flex flex-col-reverse gap-8 md:gap-10 md:flex-row items-center xl:justify-between">
        <MotionDiv
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center gap-4 md:items-start"
        >
          <h1 className="font-satoshi py-1.5 px-3.5 border-2 border-black font-semibold w-fit text-lg">
            Who We Are
          </h1>
          <h2 className="w-full sm:w-10/12 md:w-full leading-tight font-satoshi text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-center md:text-start font-semibold">
            Our team leads the way to your <br className="hidden 2xl:block" />{" "}
            global success
          </h2>
          <p className="font-lato text-center text-Dark2 md:text-start 2xl:w-11/12">
            Lead On Global, established in Bandung, Indonesia, in 2023, is
            dedicated to providing top-quality software solutions. Our team of
            skilled developers and designers prioritizes user-friendly
            interfaces and experiences. We specialize in affordable yet
            high-quality applications tailored to our clients needs. With our
            collaborative and diverse approach, we deliver professional results
            for clients worldwide.
          </p>
        </MotionDiv>
        <MotionDiv
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <Image
            src={WhoWeAreImg}
            width={612}
            height={390}
            alt="Who We Are"
            className="w-full h-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
