import { createContext } from "react";
// import { Personal } from "@/types/templates/default-form";
// import { Experience } from "@/types/templates/default-form";
// import { Education } from "@/types/templates/default-form";
// import { Project } from "@/types/templates/default-form";
// import { Skill } from "@/types/templates/default-form";
// import { Summary } from "@/types/templates/default-form";

import { DefaultForm } from "@/types/templates/default-form";

interface ResumeDataContextInterface {
  resumeData: DefaultForm | null;
  setResumeData: React.Dispatch<React.SetStateAction<DefaultForm | null>>;
}

export const ResumeDataContext = createContext<ResumeDataContextInterface>({
  resumeData: {},
  setResumeData: () => {},
});
