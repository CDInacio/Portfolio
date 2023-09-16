import Image from "next/image";

import Icon from "../../components/ui/Icon";

const image = "/images/profile.svg";

export default function About() {
  const iconStl = "h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]";

  const stacks = ["html", "css", "js", "react", "next", "tailwind", "git"];

  return (
    <section className="h-[calc(100vh-80px)]  flex items-center mb-[101px] sm:mb-0">
      <div className="container px-[20px] mx-auto flex flex-col-reverse xl:flex-row items-center justify-between mt-[100px] sm:mt-[0px]">
        <div className=" max-w-[800px] mt-[40px]">
          <div className="flex">
            {stacks.map((stack, i) => (
              <Icon key={i} className={iconStl} text={stack} />
            ))}
          </div>
          <h1 className="text-primary font-neue text-4xl sm:text:4xl md:text-6xl mt-[10px] mb-[5px] ">
            Sobre mim
          </h1>
          <p className="text-neutral-800 text-justify dark:text-neutral-300">
            Olá, meu nome é Cláudio Vitor Dantas e sou natural de Serrinha, BA,
            mas atualmente, resido em João Monlevade, MG. Estou seguindo minha
            paixão pela tecnologia enquanto curso Sistemas de Informação na
            Universidade Federal de Ouro Preto, campus João Monlevade. Há
            aproximadamente um ano e meio, mergulhei de cabeça no mundo da
            programação web, e desde então, venho aprimorando minhas habilidades
            e conhecimentos nessa área. A programação web se tornou mais do que
            apenas uma disciplina para mim; é uma verdadeira paixão que pretendo
            transformar em uma carreira sólida e gratificante.
          </p>
          <div className="flex mt-[40px]">
            <Icon text="dart" className={iconStl} />
            <Icon text="flutter" className={iconStl} />
          </div>
          <h3 className="text-primary font-neue text-xl md:text-2xl  mt-[10px] mb-[5px]">
            Novos desafios...
          </h3>
          <p className="text-neutral-800 text-justify dark:text-neutral-300">
            Além da minha paixão pela programação web, estou super animado com
            os novos desafios que envolvem programação mobile e o aprendizado do
            Flutter. Tenho investido meu tempo e energia nisso para ganhar
            habilidades e experiência nessa área, e assim criar apps móveis
            incríveis.{" "}
          </p>
        </div>
        <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[400px] relative">
          <Image src={image} alt="user image" fill />
        </div>
      </div>
    </section>
  );
}
