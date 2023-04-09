"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdMenu, IoMdPerson, IoIosBuild } from "react-icons/io";

import { LINKS } from "@/constants/constants";

export default function Navbar() {
  const lastScrollTop = useRef(0);
  const [toggle, setToggle] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  function handleScroll() {
    const { scrollY } = window;
    setScrollPos(scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className=" fixed top-0 pl-20  px-20  z-50 ">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className={` ${
          scrollPos >= 300 ? "mt-0" : "mt-10"
        }  shadow-xl bg-white duration-300  cursor-pointer  rounded-sm   flex flex-col `}
      >
        <div className="flex items-center px-5 py-2">
          <IoMdMenu color="#e76f51" className="cursor-pointer" size={35} />
          <span className="ml-3 text-slate-800 font-bold text-lg">Menu</span>
        </div>
        <ul
          className={`text-slate-700 font-medium flex flex-col duration-300 ${
            !toggle ? "h-[0px]" : "h-[150px] my-5 "
          } `}
        >
          {LINKS.map((link, i) => (
            <li
              key={`${link.text} ${i}`}
              className={`flex flex-1 items-center ${
                !toggle ? "opacity-0" : "opacity-100"
              } px-5 py-2  w-full hover:ml-3 hover:text-primary duration-300 cursor-pointer `}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
