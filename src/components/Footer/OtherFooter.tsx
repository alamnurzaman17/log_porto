import Link from "next/link";
import Image from "next/image";

//images
import logoiconbgWhite from "../../../public/imgs/footer1.png";

//icons
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export default function OtherFooter() {
  //links
  const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/project" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer>
      <div className="w-full h-4 bg-MainColor"></div>
      <div className="w-full h-5 bg-Darker"></div>

      <div className="w-full lg:h-[520px] h-[510px] xl:h-[490px] bg-[#121212] relative">
        <div className="absolute w-auto top-20 xl:top-28 left-1/2 xl:left-[15%] transform -translate-x-1/2 -translate-y-1/2 text-white">
          <Image width={280} height={47} src={logoiconbgWhite} alt="" />
        </div>
        <div className="absolute flex flex-col gap-2 w-full xl:w-auto top-1/3 xl:top-48 left-1/2 xl:left-[11.5%] -translate-x-1/2 -translate-y-1/2 text-white items-center xl:items-start font-lato">
          <p className="xl:hidden">Lead on Global Indonesia</p>
          <p>
            <span className="xl:hidden">phone :</span> +62 938 4314 135
          </p>
          <p>
            <span className="xl:hidden">email : </span>loghq.business@gmail.com
          </p>
        </div>
        <div className="absolute w-full xl:w-auto flex flex-grow xl:flex-col justify-center gap-5 text-white font-light font-lato top-64 xl:top-20 xl:left-[60%]">
          <p className="hidden xl:block text-Dark2 ">Social</p>
          <p className="flex items-center gap-3">
            <BsInstagram className="w-5 h-5 " />
            <span className="hidden xl:block">lead_on_global</span>
          </p>
          <p className="flex items-center gap-3">
            <GrLinkedin className="w-5 h-5" />
            <span className="hidden xl:block">Lead On Global</span>
          </p>
          <p className="flex items-center gap-3">
            <FaFacebook className="w-5 h-5" />
            <span className="hidden xl:block">Lead On Global</span>
          </p>
          <p className="flex items-center gap-3">
            <BsTwitterX className="w-5 h-5" />
            <span className="hidden xl:block">lead_on_global</span>
          </p>
        </div>
        <div className="absolute xl:hidden w-10 h-10 p-3 text-black top-80 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
          <BsChevronUp className="w-4 h-4"></BsChevronUp>
        </div>

        <div className="absolute w-full xl:w-auto px-4 flex xl:flex-col justify-center gap-6 text-white font-light font-lato top-96 xl:top-20 xl:left-[35%] ">
          <h1 className="hidden xl:block text-Dark2 ">Resources</h1>
          {routes.map((route, index) => (
            <Link key={index} href={route.href}>
              {route.title}
            </Link>
          ))}
        </div>
        <hr className="absolute w-[90%] md:w-[85%] top-[85%] lg:top-[85%] xl:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#262626]" />

        <span className="absolute top-[91%] xl:top-[88%] w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          © 2024 Lead on Global. All rights reserved
        </span>
      </div>
    </footer>
  );
}
