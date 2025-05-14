"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { delay, motion } from "framer-motion";

export default function FooterHomePage() {
  const socialMedia = [
    {
      title: "Instagram",
      href: "/",
    },
    {
      title: "Twitter",
      href: "/",
    },
    {
      title: "LinkedIn",
      href: "/",
    },
  ];

  const route = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/project",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const container = {
    offscreen: { opacity: 1, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemSocialMediaVariants = {
    offscreen: { x: 20, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const itemRouteVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const headerVariants = {
    offscreen: { x: -20, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const btnVariants = {
    offscreen: { x: -20, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <footer className="font-satoshi text-Dark1 bg-MainColor flex justify-center">
      <div className="container w-full h-fit px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pt-16">
        <div className="flex justify-between">
          <div>
            <motion.h2
              variants={headerVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              className="font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black leading-tight sm:leading-snug md:leading-tight"
            >
              {" "}
              Want to Start <br /> a Project?
            </motion.h2>
            <motion.button
              variants={btnVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              className="flex items-center gap-3 mt-10 w-fit h-fit py-1 px-1 bg-Light1 border-2 border-black"
            >
              <span className="ml-2 text-lg">Let's Talk</span>
              <GoArrowRight color="white" className="w-10 h-10 p-2 bg-black" />
            </motion.button>
          </div>
          <div>
            <motion.nav
              variants={container}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              className="text-right flex flex-col gap-2 text-xl font-medium"
            >
              {socialMedia.map((socialMedia, index) => (
                <motion.div
                  variants={itemSocialMediaVariants}
                  key={index}
                  viewport={{ once: true, amount: 1 }}
                >
                  <Link href={socialMedia.href} className="hover:text-black">
                    {socialMedia.title}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </div>
        <div className="w-full relative border-b-2 border-black flex items-center justify-between pb-10 mt-10">
          <motion.h3
            variants={headerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
            className="font-semibold text-3xl text-black"
          >
            LeadOnGlobal
          </motion.h3>
          <motion.nav
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
            className="absolute -top-24 sm:top-0 right-0 sm:right-7 pt-3 sm:pt-0 w-2/6 flex flex-col sm:flex-row justify-between text-right gap-2 sm:gap-4 font-medium"
          >
            {route.map((route, index) => (
              <motion.div
                variants={itemRouteVariants}
                key={index}
                viewport={{ once: true, amount: 0.8 }}
              >
                <Link href={route.href} className="hover:text-black">
                  {route.title}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
        <span className="w-full h-fit font-medium flex items-center justify-center py-4 text-black">
          © 2024 Lead on Global. All rights reserved
        </span>
      </div>
    </footer>
  );
}
