import { Button } from "@/components/ui/button";
import { Education } from "./Education";
import { CirclePlus } from "lucide-react";
import { useCallback, useContext, useEffect } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function EducationList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentEducation = resumeData?.education || [];

  console.log(currentEducation.length);
  const setInitialStateItem = useCallback(() => {
    setResumeData((prevResumeData) => {
      const currentEducation = prevResumeData?.education || [];

      if (currentEducation?.length || 0 !== 0) return prevResumeData;
      return {
        ...prevResumeData,
        education: [
          ...currentEducation,
          {
            id: uuidv4(),
            school: "",
            degreeProgram: "",
            startDate: undefined,
            endDate: undefined,
            GPA: undefined,
          },
        ],
      };
    });
  }, [setResumeData]);

  useEffect(() => {
    setInitialStateItem();
  }, [setInitialStateItem]);

  function handleAddEducationClick() {
    setResumeData((prevResumeData) => {
      const currentEducation = prevResumeData?.education || [];

      return {
        ...prevResumeData,
        education: [
          ...currentEducation,
          {
            id: uuidv4(),
            school: "",
            degreeProgram: "",
            startDate: new Date(),
            endDate: new Date(),
            GPA: undefined,
          },
        ],
      };
    });
  }
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: resumeData?.education?.length || 1 }).map(
        (_, i) => (
          <Education education={currentEducation[i]} key={i} />
        )
      )}
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={handleAddEducationClick}
        >
          <CirclePlus />
          Add Education
        </Button>
      </div>
    </div>
  );
}
