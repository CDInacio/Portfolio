"use client";

import { useRef } from "react";
import { Link } from "react-scroll";

import Image from "next/image";

import { useSection } from "../../context/activeSection";
import useObserver from "../../hooks/useObserver";
import useSize from "../../hooks/useSize";
import Button from "../commom/Button";
import Reveal from "../commom/Reveal";

const Header = ({ id }: { id: string }) => {
  const { setId } = useSection();
  const { width } = useSize();
  const ref = useRef(null);

  useObserver(ref, setId, id);

  return (
    <header ref={ref} id={id} className="w-screen h-screen  z-10 relative">
      <div className="absolute top-0 left-0 z-[-90px] w-full h-full ">
        <Image
          src="/images/pattern1.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto z-0 relative h-full flex px-5">
        <div className="text-white  flex flex-col justify-center items-start">
          <Reveal>
            <h1 className="font-bold font-poppins lg:text-6xl text-3xl md:text-4xl">
              {Array.from("CLÁUDIO DANTAS").map((char, index) => (
                <span
                  key={index}
                  className="hover:text-primary transition-colors"
                >
                  {char}
                </span>
              ))}
              <span className="text-primary">.</span>
            </h1>
          </Reveal>

          <Reveal>
            {" "}
            <h4 className="font-medium text-lg md:text-xl">
              Estudante & <span className="text-primary">Programador Web</span>
            </h4>
          </Reveal>
          <Reveal>
            <p className="text-neutral-400 text-sm md:text-base w-[100%] font-medium md:w-[700px] my-3 font-lato">
              Estudante de Sistemas de Informação buscando transformar ideias
              complexas em soluções digitais elegantes.
            </p>
          </Reveal>
          <Reveal>
            <Button intent="primary" size="md">
              <Link to="Contato" smooth={true} duration={500}>
                Entre em contato
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>

      {/* <HeaderIcons /> */}
      {/* <div className="xl:hidden flex absolute left-1/2 transform -translate-x-1/2 bottom-10">
        {contactIcons.map((contact) => (
          <a href={contact.link} target="_blank" className="cursor-pointer">
            <Icon
              iconType={contact.text}
              key={contact.id}
              className="text-neutral-200 mx-2"
            />
          </a>
        ))}
      </div> */}
    </header>
  );
};

export default Header;
