import React from "react";

import { twMerge } from "tailwind-merge";

interface ContainerI {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerI) {
  return <div className={twMerge("", className)}>{children}</div>;
}
