import { useState } from "react";

import { LINKS } from "../../data/constants";

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const genericHamburgerLine = `h-[3px] w-full my-1 rounded ${
    showMenu ? "bg-white" : "bg-primary"
  } transition ease transform duration-300`;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex md:hidden ">
      <button
        className="flex  flex-col h-10 w-[30px]  rounded justify-center items-center group z-[200]"
        onClick={() => setShowMenu(!showMenu)}
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
        className={`fixed top-0 left-0 w-full h-[50vh] bg-primary z-[150] transition-transform transform ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <ul className="flex flex-col items-center justify-center h-full text-white">
          {LINKS.map((link, i) => (
            <li
              key={i}
              className="my-[10px] border-2 border-white px-[15px] rounded py-[5px]"
            >
              {link.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
