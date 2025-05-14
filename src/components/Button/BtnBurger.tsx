import { useState } from "react";
import { motion } from "framer-motion";
import "react-modern-drawer/dist/index.css";
import Drawer from "../Navigation/Drawer";

interface BtnBurgerProps {
  spanColor: string;
}

export default function BtnBurger({ spanColor }: BtnBurgerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 },
  };
  const topBarVariants = {
    open: {
      width: "100%",
      rotate: 45,
      y: 8,
    },
    closed: {
      width: "50%",
      rotate: 0,
      y: 0,
    },
  };
  const middleBarVariants = {
    open: {
      width: "100%",
      opacity: 0,
    },
    closed: {
      width: "100%",
      opacity: 1,
    },
  };
  const bottomBarVariants = {
    open: {
      width: "100%",
      rotate: -45,
      y: -8,
    },
    closed: {
      width: "50%",
      rotate: 0,
      y: 0,
    },
  };

  return (
    <>
      <motion.button
        onClick={toggleDrawer}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        className="py-1.5 px-1.5 ml-3 z-20"
      >
        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
          {/* span 1 */}
          <motion.span
            variants={topBarVariants}
            animate={isOpen ? "open" : "closed"}
            className={`absolute top-0.5 left-0 h-[4px] rounded ${
              isOpen ? "bg-black" : spanColor
            }`}
          />
          {/* span 2 */}
          <motion.span
            variants={middleBarVariants}
            animate={isOpen ? "open" : "closed"}
            className={`h-[4px] bg-black rounded ${
              isOpen ? "bg-black" : spanColor
            }`}
          />
          {/* span 3 */}
          <motion.span
            variants={bottomBarVariants}
            animate={isOpen ? "open" : "closed"}
            className={`absolute bottom-0.5 right-0 h-[4px] bg-black rounded ${
              isOpen ? "bg-black" : spanColor
            }`}
          />
        </div>
      </motion.button>

      <Drawer isOpen={isOpen} onClose={toggleDrawer} />
    </>
  );
}
