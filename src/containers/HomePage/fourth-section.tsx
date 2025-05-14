import CardsServices from "@/components/Cards/CardsServices";
import { MotionDiv } from "@/components/MotionDiv";

export default function FourthSection() {
  const data = [
    {
      imageUrl: "/imgs/img_home/website-services.png",
      title: "Website Development",
      text: "Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan",
      href: "/about",
    },
    {
      imageUrl: "/imgs/img_home/mobile-services.png",
      title: "Mobile Development",
      text: "Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan",
      href: "/about",
    },
  ];

  const headerVariants = {
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
    <section className="text-Dark2 body-font">
      <div className="container text-center px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pt-24 pb-12">
        <MotionDiv
          variants={headerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="font-semibold font-satoshi text-3xl md:text-4xl text-black mb-2">
            Our Services
          </h1>
          <p className="text-base w-[400px] sm:w-[572px] mx-auto mb-10 sm:mb-14 font-lato">
            As your trusted software development partner, we are committed to
            delivering the best value and high-quality solutions to our
            customers.{" "}
          </p>
        </MotionDiv>
        <div className="">
          {data.map((item, index) => (
            <CardsServices
              href={item.href}
              key={index}
              index={index}
              imageUrl={item.imageUrl}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
