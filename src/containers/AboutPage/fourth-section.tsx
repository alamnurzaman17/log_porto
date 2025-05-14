import React from "react";
import CardOurSpecialty from "@/components/Cards/CardOurSpecialty";

export default function FourthFection() {
  const data = [
    {
      index: 1,
      title: "Crafted With Care",
      desc: "A successful launch starts with careful planning. We tailor our services to fit your schedule and goals precisely.",
    },
    {
      index: 2,
      title: "User-Centered Design",
      desc: "Your vision guides us. We make intuitive applications that meet user needs and go beyond expectations.",
    },
    {
      index: 3,
      title: "Seamless Execution",
      desc: "Innovation is about finding smarter solutions.  We specialize in creating easy-to-use applications for smooth navigation, ensuring a seamless experience from start to finish.",
    },
  ];
  return (
    <section>
      <div className="container w-full h-fit mx-auto px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 py-20 flex flex-col items-center justify-center">
        <h1 className="font-satoshi text-black text-3xl sm:text-4xl md:text-3xl xl:text-4xl font-medium sm:font-bold">
          Our Specialty
        </h1>
        <p className="font-lato text-Dark2 text-base sm:text-xl md:text-lg xl:text-xl">
          Our Innovative Methodologies and Strategies
        </p>
        <div className="w-full h-fit flex flex-col md:flex-row gap-5 md:gap-3 items-center justify-center mt-9">
          {/* card */}
          {data.map((item) => (
            <CardOurSpecialty
              key={item.index}
              index={item.index}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
