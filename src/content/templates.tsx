import { Template } from "../types/templates/template-types";
import { Personal } from "@/main/forms/Personal";
import { Summary } from "@/main/forms/Summary";
import { SkillList } from "@/main/forms/SkillList";
import { EducationList } from "@/main/forms/EducationList";
import { ExperienceList } from "@/main/forms/ExperienceList";
import { ProjectList } from "@/main/forms/ProjectList";

export const templates: Template[] = [
  {
    id: 1,
    src: "/assets/harvard-resume-free-google-docs-template-t.jpg",
    alt: "Harvard standard template 1",
    forms: [
      {
        formName: "Personal",
        formElement: <Personal />,
      },
      {
        formName: "Summary",
        formElement: <Summary />,
      },
      {
        formName: "Skills",
        formElement: <SkillList />,
      },
      {
        formName: "Education",
        formElement: <EducationList />,
      },
      {
        formName: "Experience",
        formElement: <ExperienceList />,
      },
      {
        formName: "Project",
        formElement: <ProjectList />,
      },
    ],
    defaultFormState: {
      personal: {},
      experience: [],
      education: [],
      project: [],
      skill: [],
      summary: {},
    },
  },
  {
    id: 2,
    src: "/assets/Stanford-Resume-Template-Example.svg",
    alt: "Harvard standard template 2",
    forms: [
      {
        formName: "Personal",
        formElement: <Personal />, // ✅ Fix this
      },
      {
        formName: "Summary",
        formElement: <Summary />,
      },
      {
        formName: "Skills",
        formElement: <SkillList />,
      },
      {
        formName: "Education",
        formElement: <EducationList />,
      },
      {
        formName: "Experience",
        formElement: <ExperienceList />,
      },
      {
        formName: "Project",
        formElement: <ProjectList />,
      },
    ],
    defaultFormState: {
      personal: {},
      experience: [],
      education: [],
      project: [],
      skill: [],
      summary: {},
    },
  },
  {
    id: 3,
    src: "/assets/Harvard-Resume-Template-Example.svg",
    alt: "Harvard standard template 3",
    forms: [
      {
        formName: "Personal",
        formElement: <Personal />, // ✅ Fix this
      },
      {
        formName: "Summary",
        formElement: <Summary />,
      },
      {
        formName: "Skills",
        formElement: <SkillList />,
      },
      {
        formName: "Education",
        formElement: <EducationList />,
      },
      {
        formName: "Experience",
        formElement: <ExperienceList />,
      },
      {
        formName: "Project",
        formElement: <ProjectList />,
      },
    ],
    defaultFormState: {
      personal: {},
      experience: [],
      education: [],
      project: [],
      skill: [],
      summary: {},
    },
  },
  {
    id: 4,
    src: "/assets/resume_4.png",
    alt: "Harvard standard template 4",
    forms: [
      {
        formName: "Personal",
        formElement: <Personal />, // ✅ Fix this
      },
      {
        formName: "Summary",
        formElement: <Summary />,
      },
      {
        formName: "Skills",
        formElement: <SkillList />,
      },
      {
        formName: "Education",
        formElement: <EducationList />,
      },
      {
        formName: "Experience",
        formElement: <ExperienceList />,
      },
      {
        formName: "Project",
        formElement: <ProjectList />,
      },
    ],
    defaultFormState: {
      personal: {},
      experience: [],
      education: [],
      project: [],
      skill: [],
      summary: {},
    },
  },
];
