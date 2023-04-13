"use client";

import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import Typewriter from "typewriter-effect";

export default function Hero() {
  const handleSendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="w-screen h-screen object-cover  bg-background">
      <div className="relative px-6  max-w-7xl h-full flex items-center  mx-auto">
        <div className="">
          <h3 className=" text-neutral-800 sm:text-lg font-bold -mb-3 sm:mb-3">
            Seja Bem-vindo, eu sou
          </h3>
          <h1 className=" font-neue text-[60px] sm:text-8xl lg:text-9xl text-primary">
            Cláudio Dantas
          </h1>

          <div className="text-neutral-800 -mt-3   font-bold sm:text-lg flex">
            <p className="mr-1">Desenvolvedor</p>
            <Typewriter
              options={{
                strings: [" Front-end", " React"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="flex absolute bottom-4 w-fit left-0 right-0 mx-auto ">
          <a
            href="https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/"
            target="_blank"
            className="mx-2 cursor-pointer"
          >
            <IoLogoLinkedin className="text-dark hover:text-primary duration-200 text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://github.com/CDInacio"
            target="_blank"
            className="mx-2 cursor-pointer "
          >
            <IoLogoGithub className="text-dark hover:text-primary duration-200 text-2xl sm:text-3xl" />
          </a>
          <a
            onClick={() => handleSendEmail("claudiodantas1996@gmail.com")}
            className="mx-2 cursor-pointer "
          >
            <IoMailOutline className="text-dark hover:text-primary duration-200 text-2xl sm:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
