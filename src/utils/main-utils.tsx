import {
  CertificateType,
  DefaultForm,
  ExperienceType,
  PersonalType,
  ProjectType,
} from "@/types/templates/form-types";
type DeletableSections =
  | "experience"
  | "education"
  | "project"
  | "skill"
  | "certificate";

export function deleteForm(
  property: DeletableSections,
  idToDelete: string | undefined,
  updateResume: React.Dispatch<React.SetStateAction<DefaultForm | null>>
) {
  updateResume((prevResumeData) => {
    if (!prevResumeData || prevResumeData[property]?.length === 1) {
      return prevResumeData;
    }

    const updatedItems = prevResumeData[property]?.filter(
      (item) => item.id !== idToDelete
    );

    return {
      ...prevResumeData,
      [property]: updatedItems,
    };
  });
}

export const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
};

export function findCertificateWithData(certificateList: CertificateType[]) {
  for (const certificateItem of certificateList) {
    const { id: _unused, ...certificateData } = certificateItem;

    const isValueFound = Object.values(certificateData).some(
      (certificateItemData) => certificateItemData
    );
    if (isValueFound) return true;
  }
  return false;
}

export function findProjectWithData(projectList: ProjectType[]) {
  // Check whether there is a value present in the state
  for (const projectItem of projectList) {
    // Excluded id because it is a default data
    // Excluded projectDescription from projectData as it has a value by default
    const { id: _id, projectDescription, ...projectData } = projectItem;

    const isValueFound = Object.values(projectData).some(
      (projectItemData) => projectItemData
    );

    const isDescriptionFound = projectDescription?.some(
      (projectDescriptionItem) => projectDescriptionItem?.description
    );

    if (isValueFound || isDescriptionFound) {
      return true;
    }
  }
  return false;
}

export function findExperienceWithData(experienceList: ExperienceType[]) {
  // Check whether there is a value present in the state
  for (const experiencetItem of experienceList) {
    // Excluded id because it is a default data
    // Excluded projectDescription from projectData as it has a value by default
    const { id: _id, jobDescription, ...experienceData } = experiencetItem;

    const isValueFound = Object.values(experienceData).some(
      (experienceItemData) => experienceItemData
    );

    const isDescriptionFound = jobDescription?.some(
      (jobDescriptionItem) => jobDescriptionItem?.description
    );

    if (isValueFound || isDescriptionFound) {
      return true;
    }
  }
  return false;
}

export function findPersonalWithData(personalData: PersonalType) {
  const isValueFound = Object.values(personalData).some(
    (personalItem) => personalItem
  );

  return isValueFound ? true : false;
}
