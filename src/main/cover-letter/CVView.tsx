import { CVDataType } from "@/types/component-types/cv/cv-form";

export function CVView({
  cvData,
  updateCVData,
}: {
  cvData: CVDataType | null;
  updateCVData: React.Dispatch<React.SetStateAction<CVDataType | null>>;
}) {
  return (
    <div className="w-1/2 px-5 sticky top-10 h-fit">
      <h1>CV VIEW</h1>
    </div>
  );
}
