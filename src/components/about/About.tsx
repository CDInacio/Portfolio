"use client";

import { useRef } from "react";

import Image from "next/image";

import { useSection } from "../../context/activeSection";
import { techIcons } from "../../data/constants";
import useObserver from "../../hooks/useObserver";
import Reveal from "../commom/Reveal";
import Icon from "../ui/icon";

const About = ({ id }: { id: string }) => {
  const { setId } = useSection();

  const ref = useRef(null);

  useObserver(ref, setId, id);

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 lg:py-32 w-screen min-h-screen bg-bgDark container mx-auto text-white font-poppins px-5"
    >
      <Reveal>
        <div className="flex items-center ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold">
            Sobre{" "}
            <span className="text-primary">
              mim<span>.</span>
            </span>
          </h1>
          <p className="hidden sm:flex sm:w-[300px] lg:w-[700px] h-[1px] bg-neutral-600 ml-3 "></p>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col lg:flex-row items-center  mt-20">
          <div className="h-[200px] w-[200px] lg:min-w-[450px] lg:h-[250px]  relative">
            <Image
              src="/images/about.jpg"
              fill
              alt="about image"
              className="rounded-full lg:rounded"
            />
          </div>
          <p className="text-neutral-400 max-w-[800px] lg:ml-10 mt-10 lg:mt-0 text-sm sm:text-base  text-justify font-lato font-medium">
            Sou recém-formado em Sistemas de Informação pela Universidade Federal de Ouro Preto, campus João Monlevade, 
            e atualmente resido em João Monlevade, MG, sendo natural de Serrinha, BA. Comecei a estudar e praticar
            programação web há cerca de dois anos e meio, desde então, tenho focado em aprimorar minhas habilidades 
            na área. Meu objetivo é me tornar um desenvolvedor full-stack, além de expandir meus conhecimentos no 
            desenvolvimento mobile.


          </p>
        </div>
      </Reveal>
      <div className=" flex flex-col items-center mt-48">
        <div className=" flex flex-col items-center">
          <Reveal>
            <h2 className="text-xl lg:text-3xl font-poppins font-bold">
              Tecnologias que uso em{" "}
              <span className="text-primary">
                meus projetos<span>.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <div className=" flex justify-center flex-wrap max-w-[500px] gap-10 mt-20">
              {techIcons.map((tech, index) => (
                <Icon
                  key={index}
                  iconType={tech.text}
                  className="w-[40px] sm:w-[60px] h-[40px] sm:h-[60px]"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
