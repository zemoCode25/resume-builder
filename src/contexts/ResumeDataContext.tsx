import { createContext } from "react";
import { DefaultForm } from "@/types/templates/default-form";

interface ResumeDataContextInterface {
  resumeData: DefaultForm | null;
  setResumeData: React.Dispatch<React.SetStateAction<DefaultForm | null>>;
}

export const ResumeDataContext = createContext<ResumeDataContextInterface>({
  resumeData: {},
  setResumeData: () => {},
});
