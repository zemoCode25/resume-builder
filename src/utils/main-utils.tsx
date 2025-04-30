import { CertificateType, DefaultForm } from "@/types/templates/form-types";
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
