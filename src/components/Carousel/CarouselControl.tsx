// components/CarouselControls.tsx
import classNames from "classnames";
import Image from "next/image";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

const CarouselControls = (props: Props) => {
  return (
    <div className="hidden md:flex justify-end gap-2">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-2.5 py-2.5 text-white border": true,
          "bg-black border-white": !props.canScrollPrev,
          "bg-white border-black": props.canScrollPrev,
        })}
      >
        <Image
          src="/icons/chevron-left.svg"
          width={16}
          height={16}
          color="red"
          alt="chevron left icons"
        />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-2.5 py-2.5 text-white border": true,
          "bg-black border-white": !props.canScrollNext,
          "bg-white border-black": props.canScrollNext,
        })}
      >
        <Image
          src="/icons/chevron-right.svg"
          width={16}
          height={16}
          color="red"
          alt="chevron left icons"
          className="stroke-white"
        />
      </button>
    </div>
  );
};
export default CarouselControls;
