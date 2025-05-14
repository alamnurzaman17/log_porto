import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MotionDiv } from "@/components/MotionDiv";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alam Nurzaman",
      role: "Frontend Developer",
      image: "/imgs/img_about/12.png", // Ganti dengan path gambar yang sesuai
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Reichan Muhammad Maulana",
      role: "Mobile Developer",
      image: "/imgs/img_about/13.png",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Angga Cahya Abadi",
      role: "UI/UX",
      image: "/imgs/img_about/14.png",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Dafa Rizky Fahreza",
      role: "Backend Developer",
      image: "/imgs/img_about/15.png",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Saeful Anwar Oktariansah",
      role: "Frontend Developer",
      image: "/imgs/img_about/16.png",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  const imageVariants = {
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
        duration: 2,
      },
    },
  };
  return (
    <section>
      <div className="container mx-auto px-4 xl:px-44 py-14 xl:py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We'd love to share our unique approach with you. Feel free to reach
          out to our entire team.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {teamMembers.map((member, index) => (
            <MotionDiv
              variants={imageVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              key={index}
              className="text-center"
            >
              <div className="relative group w-44 h-50 sm:w-52 sm:h-64 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={256}
                  className="border border-Dark1 object-cover"
                />
                <div className="absolute bottom-0 sm:bottom-5  left-0 w-full sm:w-[96%] h-10 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <div className="flex space-x-6 sm:space-x-5">
                    <a href={member.socials.instagram} className="text-white">
                      <FaInstagram />
                    </a>
                    <a href={member.socials.facebook} className="text-white">
                      <FaFacebookF />
                    </a>
                    <a href={member.socials.twitter} className="text-white">
                      <FaTwitter />
                    </a>
                    <a href={member.socials.linkedin} className="text-white">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-md sm:text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-md sm:text-lg text-gray-600">{member.role}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
