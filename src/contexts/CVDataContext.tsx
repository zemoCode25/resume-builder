import { createContext } from "react";
import { CVDataType } from "@/types/component-types/cv/cv-form";

interface CVDataContextType {
  cvData: CVDataType | null;
  updateCVData: React.Dispatch<React.SetStateAction<CVDataType | null>>;
}

export const CVDataContext = createContext<CVDataContextType>({
  cvData: {},
  updateCVData: () => {},
});
