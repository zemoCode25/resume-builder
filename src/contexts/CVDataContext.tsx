import { createContext } from "react";
import { CVDataType } from "@/types/component-types/cv/cv-form";

interface CVDataContextType {
  CVData: CVDataType | null;
  updateCVData: React.Dispatch<React.SetStateAction<CVDataType | null>>;
}

export const CVDataContext = createContext<CVDataContextType>({
  CVData: {},
  updateCVData: () => {},
});
