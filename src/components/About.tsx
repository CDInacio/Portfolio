import Image from "next/image";

export default function About() {
  return (
    <section className="bg-primary -skew-y-6 relative -z-50 py-48 -mt-28">
      <div className="skew-y-6 ">
        <div className="max-w-4xl  mx-auto text-white">
          <h1 className="font-neue text-5xl text-center mb-20">SOBRE MIM</h1>
          <div className="flex flex-1 items-center">
            <div className=" w-[130px] h-[130px] relative">
              <Image
                fill
                className=" object-cover"
                src="/images/profile.svg"
                alt="image de perfil"
              />
            </div>
            <p className="flex-1 ml-5 opacity-80 font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              cupiditate eaque tenetur sequi laudantium nihil ratione? Sunt aut
              odit porro quisquam veritatis, repellendus dicta pariatur sed
              blanditiis, sint earum natus autem assumenda , molestiae iure?
              Minus ea, officiis consequuntur eaque totam voluptatum sit
              laudantium numquam accusantium. Deleniti cumque quo praesentium
              dolores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
