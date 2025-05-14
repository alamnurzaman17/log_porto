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
import BtnBurger from "../Button/BtnBurger";

export default function MobileHeader() {
  const router = useRouter();
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");
  const pathname = usePathname();
  const [logo, setLogo] = useState(logWhite);
  const [textColor, setTextColor] = useState("text-Light2");
  const [btnColor, setBtnColor] = useState("");
  const [spanColor, setSpanColor] = useState("bg-black");

  useEffect(() => {
    if (pathname === "/") {
      // when routing to the home page
      setLogo(logBlack);
      setTextColor("text-Dark1");
      setBtnColor(
        "bg-white hover:bg-black text-Dark1 hover:text-white border border-black hover:border-black"
      );
      setSpanColor("bg-black");
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
      setSpanColor("bg-white");
      const handleScroll = () => {
        const position = window.scrollY;
        if (position > 0) {
          setNavbarBg("bg-white shadow-md pt-5");
          setLogo(logBlack);
          setTextColor("text-Dark1");
          setBtnColor(
            "bg-white hover:bg-black text-Dark1 hover:text-white border border-black hover:border-black"
          );
          setSpanColor("bg-black");
        } else {
          setNavbarBg("bg-transparent pt-7");
          setLogo(logWhite);
          setTextColor("text-Light2");
          setBtnColor(
            "bg-black hover:bg-white text-white hover:text-Dark1 border border-white hover:border-black"
          );
          setSpanColor("bg-white");
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
      className={`block md:hidden fixed top-0 right-0 left-0 ${textColor} body-font transition-all duration-300 z-50 py-5 ${navbarBg} font-satoshi`}
    >
      <motion.div
        variants={containerVariants}
        initial="offscreen"
        animate="onscreen"
        className="relative container flex flex-wrap items-center justify-between"
      >
        <Link href="/" className="title-font flex font-medium items-center">
          <Image
            src={logo}
            width={180}
            height={32}
            alt="Logo LOG"
            priority
            className="w-36 lg:w-auto h-auto"
          />
        </Link>
        <nav className="hidden sm:flex items-center text-base justify-center absolute inset-0">
          <BtnLink href="/">Home</BtnLink>
          <BtnLink href="/about">About</BtnLink>
          <BtnLink href="/project">Projects</BtnLink>
        </nav>
        <div className="flex">
          <BtnPrimary
            onClick={handleClickId}
            componentStyle={`${btnColor} font-satoshi font-medium py-1 px-2 mr-2 cursor-pointer`}
          >
            EN
          </BtnPrimary>
          <BtnBurger spanColor={spanColor} />
        </div>
      </motion.div>
    </header>
  );
}
