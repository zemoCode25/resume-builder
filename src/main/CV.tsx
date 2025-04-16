import { CVView } from "./cover-letter/CVView";
import { CVForm } from "./cover-letter/CVForm";
import { useContext } from "react";
import { AppTypeContext } from "@/contexts/AppContext";
import { CVDataProvider } from "@/contexts/CVDataProvider";

export function CV() {
  const { appType } = useContext(AppTypeContext);

  if (appType !== "cover-letter") {
    return;
  }
  return (
    <div className="flex justify-between w-full p-5">
      <CVDataProvider>
        <CVForm />
        <CVView />
      </CVDataProvider>
    </div>
  );
}
