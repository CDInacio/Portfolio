import Container from "../ui/Container";

export default function Hero() {
  return (
    <header className="h-[calc(100vh-80px)] mt-[80px]  flex items-center ">
      <Container>
        <div className="flex">
          <div className="flex flex-col text-7xl sm:text-8xl  md:text-9xl font-neue text-primary">
            <h1 className="font-neue">Cláudio</h1>
            <h1 className="mt-[-5px] font-neue">Dantas</h1>
          </div>
          <div className="flex  ml-[20px]">
            <div className="w-[3px] h-[70px] sm:h-[100px] md:h-[140px]  bg-neutral-800 dark:bg-neutral-300 ml-[-10px]"></div>
            <div className="flex flex-col ml-[10px] text-sm md:text-lg">
              <p className="text-primary font-bold">Desenvolvedor</p>
              <p className="mt-[-5px] text-neutral-800 dark:text-neutral-300">
                Front-end
              </p>
            </div>
          </div>
        </div>
        <p className="max-w-[600px] text-sm md:text-base text-neutral-700 dark:text-neutral-300">
          Desbravando o Universo Frontend: Transformando Códigos em
          Experiências, com Dedicação e Criatividade.
        </p>
      </Container>
    </header>
  );
}
