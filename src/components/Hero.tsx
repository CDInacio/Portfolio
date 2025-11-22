import React from "react";

import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20 flex flex-col lg:flex-row min-h-screen border-b border-gray-200 dark:border-gray-800">
      {/* LEFT PANEL: Typography & Hero */}
      <div className="lg:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-gray-100 dark:border-gray-800 relative">
        <div className="mt-12 lg:mt-0">
          <h1
            className={`text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 `}
          >
            FRONT
            <br />
            END
            <br />
            <span className="text-gray-400">DEV.</span>
          </h1>

          <p className="max-w-md text-lg md:text-xl font-light leading-relaxed text-gray-500 dark:text-gray-400 mb-12">
            Criando experiências digitais envolventes e responsivas com
            tecnologias de ponta. Vamos transformar suas ideias em realidade!
          </p>
        </div>
      </div>

      <div
        className={`lg:w-1/2 flex items-center justify-center p-12 relative`}
      >
        <div className="relative w-full max-w-md aspect-square border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center group">
          {/* Radar Lines */}
          <div className="absolute inset-0 border rounded-full border-gray-200 dark:border-gray-700 scale-75"></div>
          <div className="absolute inset-0 border rounded-full border-gray-200 dark:border-gray-700 scale-50"></div>

          {/* Profile Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10 transition-all duration-500 ease-out group-hover:scale-105">
            <Image
              fill
              src="/images/profile4.png"
              alt="Cláudio Dantas"
              className="w-full h-full object-cover  filter grayscale contrast-125 brightness-105 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay for artistic effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none mix-blend-overlay"></div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-gray-400 bg-white dark:bg-black px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800 z-20">
            Cláudio Vitor Dantas
          </div>
        </div>
      </div>
    </section>
  );
}
