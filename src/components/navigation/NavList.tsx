"use client";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { LINKS } from "../../data/constants";
import NavItem from "./NavItem";

export default function NavList() {
  const pathName = usePathname();
  const path = pathName.replace("/", "");
  const { setTheme } = useTheme();

  return (
    <ul className="md:flex hidden">
      {LINKS.map((link, i) => (
        <NavItem key={i} link={link.path} path={path} text={link.text} />
      ))}
      <BsFillMoonFill
        size={20}
        className={`cursor-pointer dark:text-white text-neutral-300 `}
        onClick={() => setTheme("dark")}
      />
      <BsFillSunFill
        size={20}
        className={`ml-[10px] dark:text-neutral-600 text-neutral-800  cursor-pointer`}
        onClick={() => setTheme("light")}
      />
    </ul>
  );
}
