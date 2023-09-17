"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import MobileNav from "./MobileNav";
import NavList from "./NavList";

export default function Navbar() {
  const { theme } = useTheme();
  const image =
    theme === "dark" ? "/images/logo-darkmode.svg" : "/images/logo.svg";

  return (
    <nav
      className={`fixed top-0  py-[25px] bg-white w-full dark:bg-neutral-800  z-[100]`}
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
