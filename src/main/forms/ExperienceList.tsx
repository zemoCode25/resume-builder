import { Experience } from "./Experience";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function ExperienceList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentExperience = resumeData?.experience || [];

  // Initialize the first form data onmount
  useEffect(() => {
    setResumeData((prevResumeData) => {
      const currentExperience = prevResumeData?.experience || [];

      if (prevResumeData?.experience?.length || 0 !== 0) return prevResumeData; // Check if this is the first render

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
            jobDescription: [{ id: uuidv4(), description: "" }],
          },
        ],
      };
    });
  }, [setResumeData]);

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
            jobDescription: [{ id: uuidv4(), description: "" }],
          },
        ],
      };
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: resumeData?.experience?.length || 1 }).map(
        (_, i) => (
          <Experience experience={currentExperience[i]} key={i} />
        )
      )}
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={handleAddExperienceClick}
        >
          <CirclePlus /> Add Experience
        </Button>
      </div>
    </div>
  );
}
