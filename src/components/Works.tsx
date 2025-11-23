import React from "react";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "../../types";
import { projects } from "../data/constants";
import { useInView } from "../hooks/useInView";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group border-b border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between h-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-500 cursor-pointer ${
        index % 2 === 0 ? "md:border-r" : ""
      } reveal-on-scroll ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-8 overflow-hidden relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900">
        <Image
          fill
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
        />
      </div>

      <div>
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-neutral-400">
            {project.year}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 max-w-[80%]">
            {project.description}
          </p>
          <Link
            href={project.link ?? "#"}
            className="w-8 h-8 border  border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:border-black dark:group-hover:border-white transition-colors"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L9 1M9 1H3M9 1V7"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-400 group-hover:text-white dark:group-hover:text-black"
              />
            </svg>
          </Link>
        </div>
        <div className="flex ">
          {project.stack.map((stack) => (
            <p key={stack} className="mt-2 text-neutral-400 mr-2 text-sm">
              #{stack}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Works() {
  return (
    <section
      id="projetos"
      className="border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 sticky top-24">
            (02) — Projetos
          </h2>
        </div>
        <div className="md:col-span-8 border-r border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
