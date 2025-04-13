// import { useState, useEffect } from "react";
import { ResumeForm } from "./resume/ResumeForm";
import { ResumeView } from "./resume/ResumeView";
import { AppTypeContext } from "@/contexts/AppContext";
import { useContext } from "react";
export function Resume() {
  const { appType } = useContext(AppTypeContext);

  if (appType !== "resume") {
    return;
  }
  return (
    <div className="flex justify-between w-full p-5">
      <ResumeForm />
      <ResumeView />
    </div>
  );
}
