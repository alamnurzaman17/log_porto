"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

//framer motion
import { motion, AnimatePresence } from "framer-motion";

const SecondSection = (projects: any) => {
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
  const [categoryFilter, setCategoryFilter] = useState("All work");
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    // Set the default category filter to "All Work" when the component mounts
    setCategoryFilter("All Work");
  }, []);

  const handleCategoryFilterChange = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const filteredProjects = projectData.filter((project) =>
    categoryFilter === "All Work" ? true : project.category === categoryFilter
  );

  const categories = projectData
    .map((project) => project.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  //pagination
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //motion
  const contentVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
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
    <section>
      {/* Category filter buttons */}
      <motion.div
        className=" flex flex-row items-center justify-center w-full pt-12"
        initial={{ x: -100, opacity: 0 }} // State awal sebelum animasi dimulai
        animate={{ x: 0, opacity: 1 }} // State akhir setelah animasi
        transition={{ type: "spring", stiffness: 260, damping: 80 }} // Transisi animasi
        exit={{ opacity: 0 }}
      >
        <button
          className={`font-satoshi font-bold tracking-wide border px-4 py-1 mr-5 hover:bg-MainColor transition-all ${
            categoryFilter === "All Work"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleCategoryFilterChange("All Work")}
        >
          All Work
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`font-satoshi font-bold tracking-wide border px-4 py-1 mr-5 hover:bg-MainColor hover:text-white transition-all ${
              categoryFilter === category
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleCategoryFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-screen-2xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-2 ">
          {currentProjects.map((project) => {
            return (
              <motion.div
                className="px-9 py-6  border-black border-2 "
                key={project.id}
                variants={contentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* card 1 */}
                <Image
                  className="w-full mb-8"
                  src={project.image}
                  width={1080}
                  height={1080}
                  alt=""
                  loading="lazy"
                />
                <div>
                  <span className="inline-block px-3 py-1 mb-4 text-sm font-base tracking-normal text-MainColor border border-MainColor">
                    {project.category}
                  </span>
                </div>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  {project.name}
                </h1>
                <p className="mx-auto sm:text-base text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={`/project/projects`}
                    className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0  hover:bg-MainColor border bg-[#232729] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
                    title="read more"
                  >
                    See Case Study »
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* pagination */}
        <div className="flex justify-center mt-8">
          {/* Arrow previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 mr-2 bg-black text-white"
          >
            <ChevronLeftIcon size={20} />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
              className={`px-3 py-2 mx-2  font-satoshi font-semibold text-lg ${
                currentPage === index + 1
                  ? "border-2 border-MainColor"
                  : "border-2 border-black"
              } ${
                // Add responsive styles using media queries
                window.innerWidth < 640
                  ? "w-12" // Smaller screen sizes
                  : window.innerWidth < 768
                  ? "w-10" // Medium screen sizes
                  : "w-14" // Larger screen sizes
              }`}
            >
              {index + 1}
            </button>
          ))}
          {/* Arrow Nextpage */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 ml-2 bg-black text-white"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
