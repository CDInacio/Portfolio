"use client";

import { useRef } from "react";

import { useSection } from "../../context/activeSection";
import { contacts } from "../../data/constants";
import useObserver from "../../hooks/useObserver";
import Reveal from "../commom/Reveal";
import TextInput from "../input/TextInput";
import ContactItem from "./ContactItem";

const Contact = ({ id }: { id: string }) => {
  const { setId } = useSection();

  const ref = useRef(null);
  useObserver(ref, setId, id);

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 lg:py-32 w-screen min-h-screen container mx-auto px-5 text-white"
    >
      <Reveal className="mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold font-poppins text-center">
          Entre em <span className="text-primary">contato.</span>
        </h1>
        <p className="text-center text-neutral-400 font-lato mt-5 text-sm md:text-base">
          Se você gostou do meu trabalho e quer entrar em contato comigo, pode
          me enviar um e-mail ou me encontrar em uma das minhas redes sociais.
        </p>
      </Reveal>
      <div className="flex flex-col md:flex-row justify-center mt-10">
        <div className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <Reveal key={contact.icon} className="w-full">
              <ContactItem {...contact} />
            </Reveal>
          ))}
        </div>
        <p className="h-[1px] w-full md:w-[1px] md:h-[200px] bg-neutral-600 my-10 md:my-0 md:mx-20"></p>
        <div className="flex flex-col  w-full md:w-[400px] ">
          <Reveal className="w-full">
            <TextInput
              id="name"
              type="text"
              className="w-full mb-4"
              autoComplete="off"
              placeholder="Nome"
            />
          </Reveal>
          <Reveal className="w-full">
            <TextInput
              id="email"
              type="email"
              className="w-full  mb-4"
              autoComplete="off"
              placeholder="Email"
            />
          </Reveal>
          <Reveal className="w-full">
            <textarea
              name=""
              id="message"
              cols={30}
              rows={10}
              className="bg-neutral-800 w-full  py-2 px-3  rounded border-[1px] border-transparent focus:border-[1px] focus:border-primary transtition duration-200"
              placeholder="Mensagem"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
