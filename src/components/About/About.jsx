"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import styles from "../style.module.css";

const inView = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.9, ease: "easeInOut" },
};

export default function About() {
  return (
    <AnimatePresence>
      <section
        className={`bg-primary -skew-y-6 relative  mt-28  py-48 ${styles.gradient}`}
      >
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={inView}>
          <div className="skew-y-6 px-6">
            <div className="max-w-4xl  mx-auto text-white">
              <h1 className="font-neue text-5xl text-center mb-10">
                SOBRE MIM
              </h1>
              <div className="flex flex-col md:flex-row flex-1 items-center">
                <div className=" w-[150px] h-[150px] relative">
                  <Image
                    fill
                    className=" object-cover rounded-full"
                    src="/images/profile.jpeg"
                    alt="imagem de perfil"
                  />
                </div>
                <p className="flex-1 ml-0 mt-10 md:mt-0 md:ml-10 opacity-80 font-light drop-shadow-md">
                   Olá, me chamo Cláudio Vitor Dantas e atualmente curso        
                            Sistemas de Informação. Eu descobri a programação
                  Web a pouco                   mais de um ano e meio, e foi aí
                  que me dei conta da área da                   programação que
                  gostaria de seguir. Meus estudos estão                  
                  voltados mais para a parte do Front-End, utilizando          
                          tecnologias como React, Next.js, TailWind CSS, etc.
                  Neste                   site você encontrará as principais
                  tecnologias que utilizo em                   meus projetos
                  pessoais, além dos projetos em si e suas                  
                  descrições.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}
