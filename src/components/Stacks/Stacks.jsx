"use client";

import { AnimatePresence, motion } from "framer-motion";
import { STACKS } from "../../app/constants/constants";
import StackItem from "./StackItem";

// animate: defines animation
// initial: defines initial state of animation
// exit: defines animation when components exits

export default function Stacks() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: "easeInOut" },
        }}
        className="px-6 mt-36 container max-w-7xl mx-auto "
      >
        <h1 className="text-primary text-center text-5xl font-neue">STACK</h1>
        <p className="text-neutral-700 text-center">
          Tecnologias que utilizo em meus projetos
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-6 mt-14">
          {STACKS.map(({ id, stack }) => (
            <StackItem key={id} stackName={stack} />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
