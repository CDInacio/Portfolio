"use client";

import { AnimatePresence } from "framer-motion";

import useSize from "../../hooks/useSize";
import NavbarFixed from "./NavbarFixed";
import NavbarScroll from "./NavbarScroll";

const Navbar = () => {
  const { height } = useSize();

  return (
    <AnimatePresence>
      {height != undefined ? (
        height > 50 ? (
          <NavbarScroll />
        ) : (
          <NavbarFixed />
        )
      ) : null}
    </AnimatePresence>
  );
};

export default Navbar;
