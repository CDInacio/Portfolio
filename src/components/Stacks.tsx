import { STACKS } from "@/app/constants/constants";
import StackItem from "./StackItem";

export default function Stacks() {
  return (
    <section className="mt-36 container max-w-7xl mx-auto ">
      <h1 className="text-primary text-center text-5xl font-neue">STACK</h1>
      <p className="text-neutral-700 text-center">
        Tecnologias que utilizo em meus projetos
      </p>
      <div className="grid grid-cols-6 mt-14">
        {STACKS.map((stack) => (
          <StackItem key={stack.id} stackName={stack.stack} />
        ))}
      </div>
    </section>
  );
}
