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
    <div className="flex flex-col lg:flex-row justify-between w-[95%] lg:w-full max-w-[1420px] py-5 px-5">
      <ResumeForm />
      <ResumeView />
    </div>
  );
}
