import { useCallback, useContext, useEffect, useState } from "react";
import { CirclePlus } from "lucide-react";
import { Project } from "./Project";
import { Button } from "@/components/ui/button";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";

export function ProjectList() {
  const [skillCount, setSkillCount] = useState(1);
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentProjects = resumeData?.project || [];

  const setInitialStateItem = useCallback(() => {
    setResumeData((prevResumeData) => {
      const currentProjects = prevResumeData?.project || [];
      return {
        ...prevResumeData,
        project: [
          ...currentProjects,
          { projectName: "", projectDescription: "" },
        ],
      };
    });
  }, [setResumeData]);

  useEffect(() => {
    setInitialStateItem();
  }, [setInitialStateItem]);

  return (
    <>
      <div className="w-3/4">
        <div className="grid grid-cols-1 items-center gap-3 w-full">
          {Array.from({ length: skillCount }).map((_, i) => (
            <Project project={currentProjects[i]} key={i} />
          ))}
        </div>
      </div>
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setSkillCount(skillCount + 1)}
        >
          <CirclePlus />
          Add Project
        </Button>
      </div>
    </>
  );
}
