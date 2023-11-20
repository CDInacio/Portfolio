import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="flex flex-col-reverse md:flex-row max-w-[1000px] mx-auto md:justify-between items-center py-24 px-6">
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[350px] xl:h-[350px] relative">
        <Image src="/images/contact.svg" fill alt="contact" />
      </div>
      <div className="flex flex-col items-center mb-10 md:mb-0">
        <h3 className="text-2xl md:text-4xl font-neue text-primary">
          Entre em contato:
        </h3>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <IoMailOutline size={20} />
            <p className="ml-[6px]">claudiodantas1996@gmail.com</p>
          </div>
          <p>ou</p>
          <div className="flex">
            <Link href="https://github.com/CDInacio" target="_blank">
              <FaGithub className="mx-[5px]" size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/devclaudio96/"
              target="_blank"
            >
              <FaInstagram className="mx-[5px]" size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/"
              target="_blank"
            >
              <FaLinkedin className="mx-[5px]" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
