import { CVView } from "./cover-letter/CVView";
import { CVForm } from "./cover-letter/CVForm";
import { useState, useContext } from "react";
import { AppTypeContext } from "@/contexts/AppContext";
import { CVDataType } from "@/types/component-types/cv/cv-form";

export function CV() {
  const [CVData, setCVData] = useState<CVDataType | null>(null);
  const { appType } = useContext(AppTypeContext);

  if (appType !== "cover-letter") {
    return;
  }
  return (
    <div className="flex justify-between w-full p-5">
      <CVForm cvData={CVData} updateCVData={setCVData} />
      <CVView cvData={CVData} updateCVData={setCVData} />
    </div>
  );
}
