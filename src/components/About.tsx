import React from "react";

import { useInView } from "../hooks/useInView";

export function About() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="sobre"
      className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="md:col-span-4 border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 sticky top-24">
          (01) — Sobre
        </h2>
      </div>
      <div
        ref={ref}
        className={`md:col-span-8 border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-12 lg:p-20 bg-white dark:bg-neutral-950 transition-colors duration-300 reveal-on-scroll ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="text-2xl md:text-4xl leading-tight font-normal text-neutral-800 dark:text-neutral-200 mb-8">
          Eu sou Cláudio Dantas, um desenvolvedor frontend focado em transformar
          variadas ideias em soluções digitais elegantes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <h3 className="font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
              Background
            </h3>
            <p className="leading-relaxed">
              Formado em sistemas de informação pela Universidade Federal de
              Ouro Preto (UFOP), construo interfaces web responsivas e
              acessíveis que priorizam a experiência do usuário.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
              Filosofia
            </h3>
            <p className="leading-relaxed">
              Acredito que tecnologia deve ser simples, acessível e
              significativa. Busco criar produtos que resolvem problemas reais,
              valorizando clareza, empatia e colaboração em cada etapa do
              desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
