import { useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

import Button from "../commom/Button";
import Reveal from "../commom/Reveal";
import TextInput from "../input/TextInput";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => emailjs.init("auysF4xos2fmIxTmh"), []);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_yybusgw";
    const templateId = "template_fed459f";
    try {
      //   setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        recipient: "claudiodantas1996@gmail.com",
        message: messageRef.current?.value,
      });
      nameRef.current!.value = "";
      messageRef.current!.value = "";
      alert("Email enviado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      //   setLoading(false);
    }
  };

  return (
    <div className="flex flex-col  w-full md:w-[400px] ">
      <form onSubmit={handleSendEmail}>
        <Reveal className="w-full">
          <TextInput
            ref={nameRef}
            name="user_name"
            type="text"
            className="w-full mb-4"
            autoComplete="off"
            placeholder="Nome"
          />
        </Reveal>
        <Reveal className="w-full">
          <textarea
            ref={messageRef}
            name="message"
            cols={30}
            rows={10}
            className="bg-neutral-800 w-full mb-4  py-2 px-3  rounded border-[1px] border-transparent focus:border-[1px] focus:border-primary transtition duration-200"
            placeholder="Mensagem"
          />
        </Reveal>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default ContactForm;
