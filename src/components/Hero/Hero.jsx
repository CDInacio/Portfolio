"use client";

import Typewriter from "typewriter-effect";

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="w-screen h-screen object-cover  bg-background">
      <div className="relative  max-w-7xl h-full flex items-center  mx-auto">
        <div>
          <h3 className=" text-neutral-600 font-bold mb-2">
            Seja Bem-Vindo, eu sou
          </h3>
          <h1 className=" font-neue text-9xl text-primary">Cláudio Dantas</h1>

          <p className="text-neutral-600  font-bold flex">
            <span className="mr-1">Desenvolvedor</span>
            <Typewriter
              options={{
                strings: [" Front-End", " React"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="flex absolute bottom-4 w-fit left-0 right-0 mx-auto ">
          <span className="mx-2 cursor-pointer">
            <BsLinkedin className="text-panel" size={25} />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsGithub className="text-panel" size={25} />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsInstagram className="text-panel" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}
