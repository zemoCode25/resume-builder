export interface DefaultForm {
  personal?: Personal;
  experience?: ExperienceType[];
  education?: EducationType[];
  project?: Project[];
  skill?: SkillType[];
  summary?: Summary;
}

export interface Personal {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
}

export interface ExperienceType {
  readonly id?: string;
  company?: string;
  position?: string;
  startDate?: Date;
  endDate?: Date;
  jobDescription?: string;
}

export interface EducationType {
  readonly id?: string;
  school?: string;
  degreeProgram?: string;
  startDate?: Date;
  endDate?: Date;
  GPA?: number | undefined;
}

export interface Project {
  projectName?: string;
  projectDescription?: string;
}

export interface SkillType {
  readonly id?: string;
  skillName?: string;
}

export interface Summary {
  summary?: string;
}
