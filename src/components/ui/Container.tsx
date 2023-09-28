import React from "react";

import { twMerge } from "tailwind-merge";

interface ContainerI {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerI) {
  return (
    <div
      className={twMerge(
        "container  px-[20px] mx-auto overflow-x-hidden mb-[100px] sm:mb-0",
        className
      )}
    >
      {children}
    </div>
  );
}
