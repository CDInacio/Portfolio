"use client";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Element } from "react-scroll";

import Image from "next/image";

import Arrow from "./components/arrow/Arrow";
import Navbar from "./components/navigation/Navbar";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden snap-y snap-mandatory">
        <header className="w-screen h-screen relative">
          <Image
            src="/images/hero.jpg"
            className="object-cover"
            fill
            alt="imagem de cabeçalho"
          />
          <Navbar />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white  text-center">
            <h1 className="font-roboto text-8xl font-bold">CLÁUDIO DANTAS</h1>
            <p className="text-xl font-robotoMono">
              ESTUDANTE & PROGRAMADOR WEB
            </p>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/"
                target="_blank"
              >
                <IoLogoLinkedin size={20} className="mx-1 hover:text-sky-600" />
              </a>
              <a href="https://github.com/CDInacio" target="_blank">
                <IoLogoGithub size={20} className="mx-1" />
              </a>
            </div>
          </div>
          <Arrow />
        </header>
        <section className="w-screen h-screen bg-backgroundDark shadow-custom-inset">
          <Element name="sobre()"></Element>
        </section>
        <section className="w-screen h-screen bg-sky-800">
          <Element name="projetos()"></Element>
        </section>
      </main>
    </>
  );
}
