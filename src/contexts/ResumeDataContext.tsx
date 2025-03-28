import { createContext } from "react";
import { Personal } from "@/types/templates/default-form";
import { Experience } from "@/types/templates/default-form";
import { Education } from "@/types/templates/default-form";
import { Project } from "@/types/templates/default-form";
import { Skill } from "@/types/templates/default-form";
import { Summary } from "@/types/templates/default-form";

interface ResumeDataContext {
  personal?: Personal;
  experience?: Experience[];
  education?: Education[];
  project?: Project[];
  skill?: Skill[];
  summary?: Summary;
}

export const ResumeData = createContext<ResumeDataContext>({
  personal: {},
  experience: [],
  education: [],
  project: [],
  skill: [],
  summary: {},
});
