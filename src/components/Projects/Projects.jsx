"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../../app/constants/constants";

import ProjectItem from "./ProjectItem";

const inView = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.9, ease: "easeInOut" },
};

export default function Projects() {
  return (
    <AnimatePresence>
      <section className="px-6 mt-36 mb-28 bg-primary -skew-y-6 relative -z-50 py-48 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={inView}>
          <div className="skew-y-6  max-w-7xl  mx-auto text-white">
            <h1 className="font-neue text-5xl text-center mb-20">Projetos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
              {PROJECTS.map(({ stacks, image, name, description, id }) => (
                <ProjectItem
                  key={id}
                  stacks={stacks}
                  image={image}
                  name={name}
                  description={description}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}
