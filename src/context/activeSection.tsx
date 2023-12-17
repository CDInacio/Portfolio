"use client";

import { createContext, useContext, useState } from "react";

type SectionContextType = {
  id: string;
  setId: React.Dispatch<any>;
};

const DEFAULT_VALUE = {
  id: "home",
  setId: () => {},
};

const SectionContext = createContext<SectionContextType>(DEFAULT_VALUE);

export const SectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [id, setId] = useState(DEFAULT_VALUE.id);

  return (
    <SectionContext.Provider value={{ id, setId }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (): SectionContextType => {
  const context = useContext(SectionContext);

  if (context === undefined) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }

  return context;
};
