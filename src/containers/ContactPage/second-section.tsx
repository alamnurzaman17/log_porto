import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

// components/ContactForm.js
export default function SecondSection() {
  const contactData = [
    {
      imgIcon: "/imgs/img_contact/icon-wa.png",
      altText: "Whatsapp",
      contactInfo: "+62 888-2819-9488",
    },
    {
      imgIcon: "/imgs/img_contact/icon-email.png",
      altText: "Email",
      contactInfo: "loghq.business@gmail.com",
    },
    {
      imgIcon: "/imgs/img_contact/icon-location.png",
      altText: "Location",
      contactInfo: "Jl. lorem ipsum dolor sit amet no.10",
    },
  ];

  const socialMedia = [
    {
      iconsrc: "/imgs/img_contact/contact-ig.svg",
      altText: "Instagram",
    },
    {
      iconsrc: "/imgs/img_contact/contact-linkedin.svg",
      altText: "Linkedin",
    },
    {
      iconsrc: "/imgs/img_contact/contact-facebook.svg",
      altText: "Facebook",
    },
    {
      iconsrc: "/imgs/img_contact/contact-twitter.svg",
      altText: "Twitter",
    },
  ];

  const leftContent = {
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

  const rightContent = {
    offscreen: {
      x: 20,
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
  return (
    <div className="container flex flex-col xl:flex-row justify-between p-8 md:px-20 lg:px-28 lg:py-20">
      {/* Bagian Kiri: Informasi Kontak */}
      <MotionDiv
        variants={leftContent}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.8 }}
        className="xl:w-1/2 mb-8 xl:mb-0 border-2 border-Dark1"
      >
        <h1 className="text-3xl text-center xl:text-left md:text-4xl font-satoshi font-medium md:font-bold mb-4 md:mb-0 px-5 md:px-40 pt-10 xl:pl-10 md:pt-10">
          Lets level up your brand, together
        </h1>
        <p className="text-Dark2 text-center xl:text-left mb-8 lg:mb-10 md:px-10 md:py-5">
          You can reach us anytime via
        </p>

        <div className="flex flex-col items-center xl:items-start px-10 mb-4">
          {/* Contact Data (Rata ke bawah secara vertikal) */}
          <div className="flex flex-col mb-4 sm:mb-8 lg:mb-10 xl:mb-20">
            {contactData.map((data, index) => (
              <div key={index} className="flex items-center mb-4">
                <Image
                  src={data.imgIcon}
                  alt={data.altText}
                  width={70}
                  height={70}
                  className="w-12 h-12 lg:w-14 lg:h-14"
                />
                <p className="ml-4 font-semibold md:text-normal">
                  {data.contactInfo}
                </p>
              </div>
            ))}
          </div>

          {/* Social Media (Di bawah Contact Data) */}
          <div className="flex justify-start space-x-4 mb-14  xl:mb-0">
            {/* justify-start agar berada di awal (rata kiri) */}
            {socialMedia.map((data, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={data.iconsrc}
                  alt={data.altText}
                  width={70}
                  height={70}
                  className="w-12 h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>

      {/* Bagian Kanan: Form Kontak */}
      <MotionDiv
        variants={rightContent}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.8 }}
        className="xl:w-1/2 xl:ml-14"
      >
        <h1 className="text-2xl md:text-4xl font-satoshi font-bold mb-4 text-center">
          Contact Us
        </h1>
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-md font-medium">
              Name
            </label>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-black h-full w-full translate-x-1 translate-y-1"></div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="relative w-full p-3 border border-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium">
              Email
            </label>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-black h-full w-full translate-x-1 translate-y-1"></div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="relative w-full p-3 border border-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-md font-medium">
              Phone number
            </label>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-black h-full w-full translate-x-1 translate-y-1"></div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+62 (555) 000-0000"
                className="relative w-full p-3 border border-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-md font-medium">
              How can we help?
            </label>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-black h-full w-full translate-x-1 translate-y-1"></div>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a little about the project..."
                className="relative w-full p-3 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
                rows={4}
              ></textarea>
            </div>
          </div>

          <div className="flex space-x-4">
            <div>
              <input
                type="checkbox"
                id="mobile-app"
                name="service"
                value="mobile-app"
                className="mr-2"
              />
              <label htmlFor="mobile-app">Mobile Application</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="website"
                name="service"
                value="website"
                className="mr-2"
              />
              <label htmlFor="website">Website</label>
            </div>
          </div>

          <div>
            <label className="block text-md font-medium mb-2">
              When we can reach you?
            </label>
            <div className="flex space-x-4">
              <div>
                <input
                  type="radio"
                  id="morning"
                  name="time"
                  value="morning"
                  className="mr-2"
                />
                <label htmlFor="morning">Morning</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="noon"
                  name="time"
                  value="noon"
                  className="mr-2"
                />
                <label htmlFor="noon">Noon</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="afternoon"
                  name="time"
                  value="afternoon"
                  className="mr-2"
                />
                <label htmlFor="afternoon">Afternoon</label>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-black text-white p-3">
            Get started
          </button>
        </form>
      </MotionDiv>
    </div>
  );
}
