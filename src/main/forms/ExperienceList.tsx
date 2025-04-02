import { Experience } from "./Experience";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useMemo, useState } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function ExperienceList() {
  const [experienceCount, setExperienceCount] = useState(1);
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  // const currentExperience = resumeData?.experience || [];

  const currentExperience = useMemo(
    () => resumeData?.experience || [],
    [resumeData?.experience]
  );

  useEffect(() => {
    if (currentExperience.length > 0) return;

    setResumeData((prevResumeData) => {
      const currentExperience = prevResumeData?.experience || [];
      return {
        ...prevResumeData,
        experience: [
          ...currentExperience,
          {
            id: uuidv4(),
            company: "",
            position: "",
            startDate: new Date(),
            endDate: new Date(),
            jobDescription: "",
          },
        ],
      };
    });
  }, [setResumeData, currentExperience]); // ✅ Empty dependency array ensures it runs only on mount

  function handleAddExperienceClick() {
    setResumeData((prevResumeData) => {
      const currentExperience = prevResumeData?.experience || [];
      return {
        ...prevResumeData,
        experience: [
          ...currentExperience,
          {
            id: uuidv4(),
            company: "",
            position: "",
            startDate: new Date(),
            endDate: new Date(),
            jobDescription: "",
          },
        ],
      };
    });
    setExperienceCount((prevExperienceCount) => (prevExperienceCount += 1));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: experienceCount }).map((_, i) => (
        <Experience experience={currentExperience[i]} key={i} />
      ))}
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={handleAddExperienceClick}
        >
          + Add Experience
        </Button>
      </div>
    </div>
  );
}
