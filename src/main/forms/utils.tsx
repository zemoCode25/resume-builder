import { DefaultForm } from "@/types/templates/default-form";
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
