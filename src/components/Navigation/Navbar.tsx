"use client";
import { useState, useEffect } from "react";
import BtnLink from "../Button/BtnLink";
import BtnPrimary from "../Button/BtnPrimary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Variants, motion } from "framer-motion";
import logWhite from "/public/imgs/logWhite.svg";
import logBlack from "/public/imgs/logBlack.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");
  const pathname = usePathname();
  const [logo, setLogo] = useState(logWhite);
  const [textColor, setTextColor] = useState("text-Light2");
  const [btnColor, setBtnColor] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      // when routing to the home page
      setLogo(logBlack);
      setTextColor("text-Dark1");
      setBtnColor(
        "bg-white hover:bg-black text-Dark1 hover:text-white border border-black hover:border-black"
      );
      const handleScroll = () => {
        const position = window.scrollY;
        if (position > 0) {
          setNavbarBg("bg-white shadow-md pt-5");
          setLogo(logBlack);
        } else {
          setNavbarBg("bg-transparent pt-7");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // when routing to another page
      setLogo(logWhite);
      setTextColor("text-Light2");
      setBtnColor(
        "bg-black hover:bg-white text-white hover:text-Dark1 border border-white hover:border-black"
      );
      const handleScroll = () => {
        const position = window.scrollY;
        if (position > 0) {
          setNavbarBg("bg-white shadow-md pt-5");
          setLogo(logBlack);
          setTextColor("text-Dark1");
          setBtnColor(
            "bg-white hover:bg-black text-Dark1 hover:text-white border border-black hover:border-black"
          );
        } else {
          setNavbarBg("bg-transparent pt-7");
          setLogo(logWhite);
          setTextColor("text-Light2");
          setBtnColor(
            "bg-black hover:bg-white text-white hover:text-Dark1 border border-white hover:border-black"
          );
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  // handler function btn
  const handleClickId = () => {
    // dynamic function logic goes here
    router.push("/about");
  };

  const handleClickWhatsapp = () => {
    // dynamic function logic goes here
    router.push("https://wa.me/+6285156410744");
  };

  const containerVariants: Variants = {
    offscreen: {
      y: -20,
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
    <header
      className={`hidden md:block fixed top-0 right-0 left-0 ${textColor} body-font transition-all duration-300 z-50 py-5 ${navbarBg} font-satoshi`}
    >
      <motion.div
        variants={containerVariants}
        initial="offscreen"
        animate="onscreen"
        className="container mx-auto relative flex flex-wrap md:px-10 lg:px-16 xl:px-20 2xl:px-20 flex-col md:flex-row items-center justify-between"
      >
        <Link
          href="/"
          className="title-font flex font-medium items-center md:mb-0"
        >
          <Image
            src={logo}
            width={180}
            height={32}
            alt="Logo LOG"
            priority
            className="w-36 lg:w-auto h-auto"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto absolute inset-0 flex items-center text-base justify-center">
          <BtnLink href="/">Home</BtnLink>
          <BtnLink href="/about">About</BtnLink>
          <BtnLink href="/project">Projects</BtnLink>
          <BtnLink href="/contact">Contact</BtnLink>
        </nav>
        <div>
          <BtnPrimary
            onClick={handleClickId}
            componentStyle={`${btnColor} font-satoshi font-medium py-1 px-2 lg:py-1.5 lg:px-2.5 xl:py-2 xl:px-3 mr-2 cursor-pointer`}
          >
            EN
          </BtnPrimary>
          <BtnPrimary
            onClick={handleClickWhatsapp}
            componentStyle={`${btnColor} font-satoshi font-medium py-1 px-2 lg:py-1.5 lg:px-2.5 xl:py-2 xl:px-6 cursor-pointer`}
          >
            Whatsapp
          </BtnPrimary>
        </div>
      </motion.div>
    </header>
  );
}
