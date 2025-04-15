import { CVDataType } from "@/types/component-types/cv/cv-form";
import { CVDataContext } from "./CVDataContext";
import { useState } from "react";

interface CVDataProviderType {
  children: React.ReactNode;
}

export function CVDataProvider({ children }: CVDataProviderType) {
  const [CVData, updateCVData] = useState<CVDataType | null>(null);

  return (
    <CVDataContext.Provider value={{ CVData, updateCVData }}>
      {children}
    </CVDataContext.Provider>
  );
}
