import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { useSection } from "../../context/activeSection";
import { links } from "../../data/constants";

const NavbarScroll = () => {
  const { id } = useSection();

  return (
    <motion.nav
      key={1}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navAnimation}
      className="font-robotoMono text-sm fixed text-white z-50 w-full "
    >
      <ul className="flex justify-center h-20 px-3  items-center container mx-auto ">
        <div className="backdrop-blur-md bg-white/20 flex px-4 py-2 rounded-[30px]">
          {links.map((link, i) => (
            <Link key={link.id} to={link.text} smooth={true} duration={500}>
              <li
                className={`${
                  id === link.text ? "bg-primary" : "bg-neutral-800"
                } ${
                  i < 3 ? "mr-3" : null
                } px-4 py-2  rounded-[20px] flex ite cursor-pointer border-transparent   font-poppins text-sm `}
              >
                {link.text}
              </li>
            </Link>
          ))}
        </div>
      </ul>
    </motion.nav>
  );
};

export default NavbarScroll;

const navAnimation = {
  initial: {
    y: 30,
    x: "1%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "1%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: 5,
    opacity: 0,
  },
};
