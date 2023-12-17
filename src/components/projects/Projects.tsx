"use client";

import { useRef } from "react";

import { useSection } from "../../context/activeSection";
import { projects } from "../../data/constants";
import useObserver from "../../hooks/useObserver";
import Reveal from "../commom/Reveal";
import ProjectItem from "./ProjectItem";

const Projects = ({ id }: { id: string }) => {
  const { setId } = useSection();

  const ref = useRef(null);

  useObserver(ref, setId, id);

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 lg:py-32 w-screen container mx-auto px-5 min-h-screen "
    >
      <Reveal className="w-full flex justify-end">
        <div className="flex items-center  text-white">
          <p className="hidden sm:flex sm:w-[300px] lg:w-[700px] h-[1px] bg-neutral-600 mr-3"></p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Meus{" "}
            <span className="text-primary">
              projetos<span>.</span>
            </span>
          </h1>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
