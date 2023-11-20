"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import useHeight from "../../app/hooks/useHeight";
import MobileNav from "./MobileNav";
import NavList from "./NavList";

export default function Navbar() {
  const { theme } = useTheme();
  const image =
    theme === "dark" ? "/images/logo-darkmode.svg" : "/images/logo.svg";

  const { pageHeight } = useHeight();
  console.log(pageHeight);
  return (
    <nav
      className={`fixed top-0    bg-backgroundLightMain  w-full dark:bg-backgroundDarkMain  z-[100] ${
        pageHeight > 100 ? "shadow-md h-16" : "h-24"
      } transition-all duration-300 }`}
    >
      <div className="flex justify-between items-center container h-full px-[20px] mx-auto">
        <Link href="/">
          <Image src={image} alt="logo" height={30} width={30} />
        </Link>
        <MobileNav />
        <NavList />
      </div>
    </nav>
  );
}
