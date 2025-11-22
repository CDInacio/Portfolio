import React from "react";

import Link from "next/link";

import { useInView } from "../hooks/useInView";

export function Contact() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <footer id="contato" className="bg-neutral-100 dark:bg-black text-white ">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Label */}
        <div className="md:col-span-4 border-r border-neutral-200 p-8 md:p-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500">
            (04) — Contato
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-8 border-r border-neutral-800 p-8 md:p-20">
          <div
            ref={ref}
            className={`reveal-on-scroll ${isVisible ? "is-visible" : ""}`}
          >
            <h3 className="text-4xl md:text-6xl text-neutral-800 dark:text-neutral-200 font-bold tracking-tighter mb-12">
              Entre em contato.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs text-neutral-500 uppercase mb-4 tracking-widest">
                  Email
                </h4>
                <a
                  href="mailto:claudiodantas1996@gmail.com"
                  className="text-xl hover:text-neutral-400 text-neutral-800 dark:text-neutral-200 transition-colors border-b border-transparent hover:border-neutral-400 pb-1 inline-block"
                >
                  claudiodantas1996@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-xs text-neutral-500 uppercase mb-4 tracking-widest">
                  Redes sociais
                </h4>
                <div className="flex flex-col gap-2 items-start">
                  <Link
                    href="https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/"
                    className="text-xl text-neutral-800 dark:text-neutral-200 hover:text-neutral-400 transition-colors flex items-center gap-2"
                  >
                    LinkedIn
                    <span className="text-xs">↗</span>
                  </Link>
                  <Link
                    href="https://github.com/CDInacio"
                    className="text-xl hover:text-neutral-400 text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2"
                  >
                    GitHub
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-neutral-800 flex justify-between text-xs text-neutral-600 uppercase tracking-widest">
              <span>© 2025 Cláudio Dantas</span>
              <span>Minas Gerais, BR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
