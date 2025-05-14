import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-2 w-2 rounded-full transition-all duration-300 bg-indigo-400":
                true,
              "opacity-90": !selected,
            })}
            key={index}
          >
            a
          </div>
        );
      })}
    </div>
  );
};
export default Dots;
