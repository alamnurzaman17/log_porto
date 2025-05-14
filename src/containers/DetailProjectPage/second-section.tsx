"use client";

import Image from "next/image";

//framer motion
import { motion } from "framer-motion";

const Secondsection = () => {
  const projectData = [
    {
      id: 1,
      image: "/imgs/img_project/test.png",
      name: "Example Project 1",
      category: "Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 2,
      image: "/imgs/img_project/test.png",
      name: "Example Project 2",
      category: "Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 3,
      image: "/imgs/img_project/test.png",
      name: "Example Project 3",
      category: "Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 4,
      image: "/imgs/img_project/test.png",
      name: "Example Project 4",
      category: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 5,
      image: "/imgs/img_project/test.png",
      name: "Example Project 5",
      category: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 6,
      image: "/imgs/img_project/test.png",
      name: "Example Project 6",
      category: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 7,
      image: "/imgs/img_project/test.png",
      name: "Example Project 7",
      category: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      id: 8,
      image: "/imgs/img_project/test.png",
      name: "Example Project 8",
      category: "Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
  ];
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
        duration: 1,
      },
    },
  };

  return (
    <section className="xl:mx-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto mt-10"
      >
        <div className="flex items-center justify-between mb-8 w-full">
          <p className="text-black text-xs sm:text-sm font-normal font-['Satoshi'] md:w-72 xl:w-full xl:max-w-[200px]">
            Posted on December 31, 2021
          </p>
          <div className="border border-black max-w-[1440px] xl:w-full md:w-[100%] sm:w-[66%] w-[55%]"></div>
        </div>

        <div className=" md:mb-32 mb-16">
          <h1 className="font-['Satoshi'] text-2xl sm:text-4xl xl:text-6xl font-medium">
            Koperasi Information System Web App Development
          </h1>
        </div>
      </motion.div>
      {/* Image Card */}
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="container mx-auto"
      >
        <div className="relative flex justify-center items-center w-full h-[400px]">
          <div className="absolute top-[100px] sm:top-[43px] md:top-[20px] lg:top-[25px] xl:top-0 2xl:-top-11 left-4 lg:left-0 lg:ml-[17%] xl:mx-[15%] 2xl:ml-[10%] 2xl:left-20 transform -translate-x-4 -translate-y-4 h-[230px] sm:h-[350px] md:h-[400px] lg:h-[380px] lg:-max-h-[500px] xl:h-[440px] xl:max-h-[500px] 2xl:h-[520px] 2xl:max-h-[520px] w-full lg:w-[68.6%] xl:w-[72.4%] 2xl:w-[70%] border-4 border-black"></div>
          <div className="relative z-10 mx-auto bg-white border-2 border-black w-[90%] sm:w-[90%] md:w-[90%] lg:w-[660px] lg:max-w-[60%]  xl:w-[1280px]">
            <Image
              src={projectData[0].image}
              width={1920}
              height={1080}
              alt=""
              className="bg-[#232729] p-5 sm:p-10 md:p-9 lg:p-10 xl:p-16 2xl:p-24 mr-10"
            />
            <div className="flex justify-between mx-9 my-5 sm:my-10 md:my-10 lg:my-10 xl:my-25 2xl:my-30">
              <div className="text-center xl:ml-7">
                <h1 className="font-['Satoshi'] text-xs font-medium">KPIM</h1>
                <p className="text-xs text-gray-500">Client</p>
              </div>
              <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

              <div className="text-center">
                <h1 className="font-['Satoshi'] text-xs font-medium">
                  Web App
                </h1>
                <p className="text-xs text-gray-500">Services</p>
              </div>

              <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

              <div className="text-center">
                <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                  16.12.2023
                </h1>
                <p className="text-xs text-gray-500">Date</p>
              </div>

              <div className="mx-2 border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

              <div className="text-center xl:mr-9">
                <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                  Live Link<hr className="border-MainColor"></hr>
                </h1>
                <p className="text-xs text-gray-500">Website</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" mx-auto max-w-[1100px] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-100%]">
          <div className="h-[230px] sm:h-[350px] md:h-[380px] lg:h-[480px] lg:-max-h-[500px] xl:h-[560px] xl:max-h-[700px] 2xl:h-[680px] 2xl:max-h-[700px] border-4 border-black">
            <div className="mx-auto bg-white border-2 border-black w-[90%] sm:w-[90%] md:w-[93%] lg:w-[95%]  xl:w-[95%] xl:max-w-[95%]">
              <Image
                src={projectData[0].image}
                width={1920}
                height={1080}
                alt=""
                className="bg-[#232729] p-5 sm:p-10 md:p-9 lg:p-10 xl:p-16 2xl:p-24 mr-10"
              />
              <div className="flex justify-between mx-9 my-5 sm:my-10 md:my-10 lg:my-10 xl:my-25 2xl:my-30">
                <div className="text-center xl:ml-7">
                  <h1 className="font-['Satoshi'] text-xs font-medium">KPIM</h1>
                  <p className="text-xs text-gray-500">Client</p>
                </div>
                <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center">
                  <h1 className="font-['Satoshi'] text-xs font-medium">
                    Web App
                  </h1>
                  <p className="text-xs text-gray-500">Services</p>
                </div>

                <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center">
                  <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                    16.12.2023
                  </h1>
                  <p className="text-xs text-gray-500">Date</p>
                </div>

                <div className="mx-2 border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center xl:mr-9">
                  <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                    Live Link<hr className="border-MainColor"></hr>
                  </h1>
                  <p className="text-xs text-gray-500">Website</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
      {/* end */}
    </section>
  );
};

export default Secondsection;
