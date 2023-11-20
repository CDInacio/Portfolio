import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LINKS } from "../../data/constants";

export default function MobileNav() {
  const path = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const genericHamburgerLine = `h-[3px] w-full my-1 rounded ${
    showMenu ? "bg-white" : "bg-primary"
  } transition ease transform duration-300`;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { setTheme } = useTheme();

  useEffect(() => {
    setShowMenu(false);
  }, [path]);

  return (
    <div className="flex md:hidden ">
      <button
        className="flex  flex-col h-10 w-[30px]  rounded justify-center items-center group z-[200]"
        onClick={toggleMenu}
      >
        <div
          className={`${genericHamburgerLine} ${
            showMenu
              ? "rotate-45 translate-y-3  group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showMenu ? "opacity-0" : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showMenu
              ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-neutral-900 transition-opacity ${
          showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <nav
        className={`fixed top-0 left-0 w-full h-[50vh] bg-primary overflow-hidden z-[150] transition-transform transform ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <ul className="flex flex-col items-center justify-center h-full text-white">
          {LINKS.map((link, i) => (
            <Link href={link.path} key={i}>
              <li className="my-[10px] border-2 border-white px-[15px] rounded py-[5px]">
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
        <div className="absolute bottom-[20px] right-0 left-0 mx-auto w-fit  flex">
          <BsFillMoonFill
            size={20}
            className={`cursor-pointer dark:text-white dark:opacity-100 opacity-20 `}
            onClick={() => setTheme("dark")}
          />
          <BsFillSunFill
            size={20}
            className={`ml-[10px] dark:opacity-20 text-white  cursor-pointer`}
            onClick={() => setTheme("light")}
          />
        </div>
      </nav>
    </div>
  );
}
