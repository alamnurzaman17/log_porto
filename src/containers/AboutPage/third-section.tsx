import WhyChooseUsImg from "../../../public/imgs/img_about/why-choose-us.png";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";
import CardWhyChooseUse from "@/components/Cards/CardWhyChooseUs";

export default function ThirdSection() {
  const data = [
    {
      index: 0,
      icon: "/icons/shake-hands-fill.svg",
      title: "Trusted Collaboration",
      desc: "We recognize that your success is our success, driving us to collaborate closely and effectively.",
    },
    {
      index: 1,
      icon: "/icons/payment-success-fill.svg",
      title: "Affordable Pricing",
      desc: "We believe that high-quality software shouldn't break the bank. That's why we offer competitive pricing options to fit your budget without compromising on quality or performance.",
    },
    {
      index: 2,
      icon: "/icons/team-fill.svg",
      title: "Passionate Team",
      desc: "Our team comprises passionate and dedicated individuals committed to delivering the best for our clients.",
    },
    {
      index: 3,
      icon: "/icons/user-fill.svg",
      title: "Costumer Satisfaction Focus",
      desc: "Our team is committed to deeply understanding your needs and providing an exceptional experience throughout the collaboration process.",
    },
  ];

  const imageVariants = {
    offscreen: {
      x: -20,
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
      <div className="container w-full h-fit mx-auto px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pt-20 flex flex-col gap-8 md:gap-10 md:flex-row-reverse items-center xl:justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="font-satoshi py-1.5 px-3.5 border-2 border-black font-semibold w-fit text-lg mb-7 sm:mb-5 md:mb-3 lg:mb-5 xl:mb-7">
            Why Choose Us
          </h1>
          {data.map((item, index) => (
            <CardWhyChooseUse
              key={index}
              index={item.index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              totalItems={data.length}
            />
          ))}
        </div>
        <MotionDiv
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2 flex items-center justify-center md:justify-between"
        >
          <Image
            src={WhyChooseUsImg}
            width={612}
            height={390}
            alt="Why Choose Us"
            className="w-11/12 sm:w-7/12 md:w-11/12 xl:w-10/12 h-full"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
