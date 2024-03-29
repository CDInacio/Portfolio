"use client";

import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={twMerge("overflow-hidden relative w-fit", className)}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--primary)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
