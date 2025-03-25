import { CVView } from "./cover-letter/CVView";
import { CVForm } from "./cover-letter/CVForm";
import { useContext } from "react";
import { AppTypeContext } from "@/contexts/AppContext";

export function CV() {
  const { appType } = useContext(AppTypeContext);

  if (appType !== "cover-letter") {
    return;
  }
  return (
    <div>
      <CVView />
      <CVForm />
    </div>
  );
}
