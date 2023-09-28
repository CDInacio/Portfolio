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
      className={`fixed top-0  py-[25px] bg-[#F5F5F5] w-full dark:bg-neutral-800  z-[100] ${
        pageHeight > 100 ? "shadow-md" : ""
      } transition-all duration-300 }`}
    >
      <div className="flex justify-between items-center container px-[20px] mx-auto">
        <Link href="/">
          <Image src={image} alt="logo" height={30} width={30} />
        </Link>
        <MobileNav />
        <NavList />
      </div>
    </nav>
  );
}
