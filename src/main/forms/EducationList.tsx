import { Button } from "@/components/ui/button";
import { Education } from "./Education";
import { CirclePlus } from "lucide-react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function EducationList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const currentEducation = useMemo(
    () => resumeData?.education || [],
    [resumeData?.education]
  );

  const setInitialStateItem = useCallback(() => {
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
  }, [setResumeData]);

  useEffect(() => {
    if (currentEducation.length > 0) return;
    setInitialStateItem();
  }, [setInitialStateItem, currentEducation]); // ✅ Empty dependency array ensures it runs only on mount

  function handleAddEducationClick() {
    setInitialStateItem();
    setEducationCount((prevEducationCount) => (prevEducationCount += 1));
  }

  const [educationCount, setEducationCount] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: educationCount }).map((_, i) => (
        <Education education={currentEducation[i]} key={i} />
      ))}
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={handleAddEducationClick}
        >
          <CirclePlus />
          Add Education
        </Button>
      </div>
    </div>
  );
}
