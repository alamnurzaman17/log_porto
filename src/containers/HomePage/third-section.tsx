// "use client";
import BtnSecondary from "@/components/Button/BtnSecondary";
import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";
import useApi from "@/hooks/useApi";
import { Project } from "@/interface/Project";

export default function ThirdSection() {
  // const endpoint = "http://127.0.0.1:3658/m1/500294-475654-default/projects/";
  // const { data, loading, error } = useApi<Project[]>(endpoint);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  const data = [
    {
      ulid: 1,
      title: "Koperasi Web App",
      subTitle: "Aplikasi koperasi pekerja indonesia maju.",
      buttonText: "See all projects",
      buttonLink: "/project",
    },
    {
      ulid: 2,
      title: "Melodimix",
      subTitle: "Aplikasi rekomendasi musik dan daftar putar musik.",
      buttonText: "See all projects",
      buttonLink: "/project",
    },
    {
      ulid: 3,
      title: "TokoPedia",
      subTitle:
        "Sebuah platform perdagangan elektronik (e-commerce) terbesar di Indonesia.",
      buttonText: "See all projects",
      buttonLink: "/project",
    },
    {
      ulid: 4,
      title: "Wibukan",
      subTitle: "Penyedia layanan streaming anime dan forum untuk pada Wibu.",
      buttonText: "See all projects",
      buttonLink: "/project",
    },
    {
      ulid: 5,
      title: "BMCampus",
      subTitle: "Layanan penyedia bimbingan daring.",
      buttonText: "See all projects",
      buttonLink: "/project",
    },
  ];

  const headerVariants = {
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

  const carouselVariants = {
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
    <section className="text-white body-font bg-black">
      <div className="container w-full h-fit mx-auto px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 py-24">
        <div className="md:flex relative justify-between gap-10">
          <div className="md:w-full mb-11 md:mb-0 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start gap-4 justify-between">
            <div className="w-fit">
              <MotionDiv
                variants={headerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <h1 className="font-semibold font-satoshi text-4xl mb-6">
                  Our Projects
                </h1>
              </MotionDiv>
              <MotionDiv
                variants={headerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <p className="w-4/5 sm:w-[350px] md:w-full lg:w-[380px] xl:w-[480px] font-lato font-light text-base lg:text-xl mb-6">
                  Explore our portfolio to see examples of the projects we have
                  delivered and how we can help bring your digital vision to
                  life.
                </p>
              </MotionDiv>
            </div>
            <MotionDiv
              variants={headerVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="sm:mt-16"
            >
              <BtnSecondary
                href="/project"
                componentStyle="py-2 px-4 bg-white text-black"
                BtnHover="transform delay-200 hover:bg-black hover:text-white"
              >
                See all projects
              </BtnSecondary>
            </MotionDiv>
          </div>
          <MotionDiv
            variants={carouselVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <Carousel>
              {data?.map((project) => {
                return (
                  <div
                    className="relative flex-[0_0_100%] flex-col text-white"
                    key={project.ulid}
                  >
                    <div className="grid grid-cols-2 gap-2 mb-[24px]">
                      <div className="grid grid-cols-1 gap-2">
                        <Image
                          alt="project image 1"
                          className="w-full object-cover object-center block"
                          src="/imgs/img_home/dummy-1.png"
                          width={1080}
                          height={1080}
                        />
                        <Image
                          alt="project image 2"
                          className="w-full object-cover object-center block"
                          src="/imgs/img_home/dummy-2.png"
                          width={1080}
                          height={1080}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Image
                          alt="project image 3"
                          className="w-full object-cover object-center block"
                          src="/imgs/img_home/dummy-3.png"
                          width={1080}
                          height={1080}
                        />
                        <Image
                          alt="project image 4"
                          className="w-full object-cover object-center block"
                          src="/imgs/img_home/dummy-4.png"
                          width={1080}
                          height={1080}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-medium font-satoshi">
                        {project.title}
                      </h4>
                      <span className="p-1.5 border border-white text-xs font-lato">
                        Website
                      </span>
                    </div>
                    <p className="text-base font-light w-80 font-lato">
                      {project.subTitle}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
