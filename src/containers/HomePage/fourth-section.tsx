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
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <MotionDiv
          variants={headerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="font-semibold font-satoshi text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white mb-3 sm:mb-4">
            Our Services
          </h1>
          <p
            className="text-base md:text-lg 
                      w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  mx-auto mb-10 sm:mb-12 md:mb-16 font-lato text-gray-700 dark:text-gray-300"
          >
            As your trusted software development partner, we are committed to
            delivering the best value and high-quality solutions to our
            customers.{" "}
          </p>
        </MotionDiv>
        <div>
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
