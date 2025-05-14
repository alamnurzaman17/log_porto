import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logBlack from "/public/imgs/logo-icon-bgWhite.png";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps): JSX.Element {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 w-full bg-white z-10"
        >
          <div className="w-full h-screen bg-white text-Dark1 container flex flex-col items-center py-10">
            <Image
              src={logBlack}
              width={128}
              height={128}
              alt="Logo LOG"
              priority
              className="w-16 lg:w-auto h-auto"
            />
            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-2xl font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-2xl font-medium"
              >
                About
              </Link>
              <Link
                href="/project"
                onClick={handleLinkClick}
                className="text-2xl font-medium"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="text-2xl font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
