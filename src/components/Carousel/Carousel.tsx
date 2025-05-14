"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";
import CarouselControls from "./CarouselControl";

type Props = PropsWithChildren;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">{children}</div>
        {/* <Dots itemsLength={length} selectedIndex={selectedIndex} /> uncomment kalo mau pake dots */}
        <CarouselControls
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      </div>
    </>
  );
};
export default Carousel;
