"use client";

import Image from "next/image";

import Gallery1 from "../../../public/imgs/img_project/photogallery1.svg";
import Gallery2 from "../../../public/imgs/img_project/photogallery2.svg";
import Gallery3 from "../../../public/imgs/img_project/photogallery3.svg";
import Gallery4 from "../../../public/imgs/img_project/photogallery4.svg";

//framer motion
import { motion } from "framer-motion";

const FourtSection = () => {
  const imgVariants1 = {
    offscreen: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };
  const imgVariants2 = {
    offscreen: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };

  return (
    <section className="container mx-auto">
      {/* image gallery */}
      <div className=" h-full bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 xl:gap-y-8 xl:gap-x-8">
            {/*  Start 1 */}
            <motion.div
              variants={imgVariants1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="group relative flex h-56 items-end overflow-hidden bg-[#efefef] xl:col-span-1 xl:h-[75%] sm:h-[75%] md:h-[83%] lg:h-[80%]"
            >
              <Image
                src={Gallery1}
                loading="lazy"
                width={1920}
                height={1080}
                alt=""
                className="absolute inset-0 aspect-auto"
              />
            </motion.div>
            {/*end */}

            {/*  Start 2*/}
            <motion.div
              variants={imgVariants2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="group relative flex h-[300px] w-full items-end overflow-hidden bg-[#efefef]   lg:h-[360px] sm:h-[230px] md:h-[250px] xl:h-[494px] sm:w-full"
            >
              <Image
                src={Gallery2}
                loading="lazy"
                width={1920}
                height={1080}
                alt=""
                className="absolute inset-0 aspect-auto"
              />
            </motion.div>
            {/*end */}

            {/*  Start 3*/}
            <motion.div
              variants={imgVariants1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="group relative flex h-[310px] w-full items-end overflow-hidden bg-[#efefef] lg:h-[400px] sm:h-[230px] md:h-[280px] xl:h-[555px] 2xl:h-[580px] lg:-mt-16 md:-mt-10 sm:-mt-12 xl:-mt-28"
            >
              <Image
                src={Gallery3}
                loading="lazy"
                width={1920}
                height={1080}
                alt=""
                className="absolute inset-0 aspect-auto"
              />
            </motion.div>
            {/*end */}

            {/*  Start 4*/}
            <motion.div
              variants={imgVariants2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="group relative flex h-52 items-end overflow-hidden bg-[#efefef] xl:h-[98%]  sm:h-[95%] lg:h-[97%] sm:mt-[10px]"
            >
              <Image
                src={Gallery4}
                loading="lazy"
                width={1920}
                height={1080}
                alt=""
                className="absolute inset-0 aspect-auto xl:mt-9 md:mt-2"
              />
            </motion.div>
            {/*end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourtSection;
