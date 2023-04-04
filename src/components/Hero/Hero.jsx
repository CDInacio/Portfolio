import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="  w-screen h-screen object-cover bg-center  bg-[url('/images/hero4.png')] bg-fixed ">
      <div className="relative max-w-7xl h-full flex items-center justify-center mx-auto">
        <div>
          <h3 className="text-center text-white">Seja Bem-Vindo, eu sou</h3>
          <h1 className=" font-neue text-8xl text-primary">Cláudio Dantas</h1>
          <h3 className="text-center   text-white">Desenvolvedor Front-end</h3>
        </div>
        <div className="flex absolute bottom-3 ">
          <span className="mx-2 cursor-pointer">
            <BsLinkedin color="white" size={25} />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsGithub color="white" size={25} />
          </span>
          <span className="mx-2 cursor-pointer">
            <BsInstagram color="white" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}
