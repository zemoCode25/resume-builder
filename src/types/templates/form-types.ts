export interface DefaultForm {
  personal?: Personal;
  experience?: ExperienceType[];
  education?: EducationType[];
  project?: ProjectType[];
  skill?: SkillType[];
  summary?: Summary;
  certificate?: CertificateType[];
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
  jobDescription?: DescriptionType[];
}

export interface EducationType {
  readonly id?: string;
  school?: string;
  degreeProgram?: string;
  startDate?: Date;
  endDate?: Date;
  GPA?: string | undefined;
}

export interface ProjectType {
  readonly id?: string;
  projectName?: string;
  projectDescription?: DescriptionType[];
}

export interface SkillType {
  readonly id?: string;
  skillName?: string;
}

export interface Summary {
  summary?: string;
}

export interface DescriptionType {
  readonly id: string;
  description: string;
}

export interface CertificateType {
  readonly id: string;
  certificateName?: string;
  certificateDescription?: string;
  accreditationDate?: Date;
}
