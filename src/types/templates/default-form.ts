export interface DefaultForm {
  personal?: Personal;
  experience?: Experience[];
  education?: Education[];
  project?: Project[];
  skill?: Skill[];
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

export interface Experience {
  company?: string;
  position?: string;
  startDate?: Date;
  endDate?: Date;
  jobDescription?: string;
}

export interface Education {
  school?: string;
  degreeProgram?: string;
  startDate?: Date;
  endDate?: Date;
  GPA?: number;
}

export interface Project {
  projectName?: string;
  projectDescription?: string;
}

export interface Skill {
  projectName?: string;
  projectDescription?: string;
}

export interface Summary {
  summary?: string;
}
