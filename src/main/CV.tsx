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
    <div className="flex flex-col lg:flex-row justify-between w-[90%] lg:w-full max-w-[1420px] py-5 px-5">
      <CVForm />
      <CVView />
    </div>
  );
}
