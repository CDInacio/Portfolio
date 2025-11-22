import React from "react";

import type { TechItem } from "../../types";
import { useInView } from "../hooks/useInView";

const stack: TechItem[] = [
  { name: "React / Next.js", category: "Core" },
  { name: "TypeScript", category: "Core" },
  { name: "Tailwind CSS", category: "Core" },
  { name: "Node.js", category: "Core" },
  { name: "Figma", category: "Ferramentas" },
  { name: "Git / Github", category: "Ferramentas" },
];

export function Stack() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="tecnologias"
      className="border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 sticky top-24">
            (03) — Tecnologias
          </h2>
        </div>
        <div className="md:col-span-8 border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-12">
          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 reveal-on-scroll ${
              isVisible ? "is-visible" : ""
            }`}
          >
            {["Core", "Ferramentas"].map((cat) => (
              <div key={cat}>
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                  {cat}
                </h3>
                <ul className="space-y-2">
                  {stack
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <li
                        key={item.name}
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2 hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></span>
                        {item.name}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
