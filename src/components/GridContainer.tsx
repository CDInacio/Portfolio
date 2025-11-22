import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GridContainer({
  children,
  className = "",
}: GridContainerProps) {
  return (
    <div className={`w-full border-b border-neutral-200 ${className}`}>
      {children}
    </div>
  );
}

export function GridItem({
  children,
  className = "",
  colSpan = "col-span-1",
}: GridContainerProps & { colSpan?: string }) {
  return (
    <div
      className={`${colSpan} border-r border-neutral-200 p-6 md:p-10 flex flex-col justify-between hover:bg-neutral-50 transition-colors duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}
