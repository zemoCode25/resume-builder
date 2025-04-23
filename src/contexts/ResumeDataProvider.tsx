import { ResumeDataContext } from "./ResumeDataContext";
import { TemplateContext } from "./TemplateContext";
import { useState, useContext } from "react";
import { DefaultForm } from "@/types/templates/form-types";

interface ResumeDataProviderProps {
  children: React.ReactNode;
}

export function ResumeDataProvider({ children }: ResumeDataProviderProps) {
  const { template } = useContext(TemplateContext);
  const [resumeData, setResumeData] = useState<DefaultForm | null>(
    template?.defaultFormState || {
      personal: {},
      experience: [],
      education: [],
      project: [],
      skill: [],
      summary: {},
    }
  );

  return (
    <ResumeDataContext.Provider
      value={{ resumeData: resumeData, setResumeData: setResumeData }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
}
