import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col-reverse md:flex-row max-w-[1000px] mx-auto md:justify-between items-center  mt-[70px]">
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[350px] xl:h-[350px] relative mt-[50px] ">
        <Image src="/images/contact.svg" fill alt="contact" />
      </div>
      <div className="flex flex-col items-center ">
        <h3 className="text-2xl font-neue text-primary">Entre em contato:</h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <IoMailOutline size={20} />
            <p className="ml-[6px]">claudiodantas1996@gmail.com</p>
          </div>
          <p>ou</p>
          <div className="flex">
            <FaGithub className="px-[5px]" size={30} />
            <FaInstagram className="px-[5px]" size={30} />
            <FaLinkedin className="px-[5px]" size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
