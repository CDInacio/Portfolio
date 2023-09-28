import { useState } from "react";

import { PROJECTS } from "../../data/constants";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className=" w-screen bg-[#D6D6D6] py-24 dark:bg-neutral-700">
      <div className="max-w-[1000px] mx-auto  ">
        <h1 className="text-4xl sm:text:4xl md:text-6xl font-neue text-primary text-center ">
          Projetos
        </h1>
        <div className="flex flex-col items-center mt-[70px] ">
          {PROJECTS.slice(0, showMore ? PROJECTS.length : 3).map(
            (project: Project, i) => (
              <ProjectItem key={i} project={project} />
            )
          )}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className=" border-b-2 border-neutral-700 "
          >
            {!showMore ? "Mostrar mais..." : "Mostrar menos..."}
          </button>
        </div>
      </div>
    </section>
  );
}
