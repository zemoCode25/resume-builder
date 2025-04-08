import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CirclePlus } from "lucide-react";
import { Project } from "./Project";
import { Button } from "@/components/ui/button";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function ProjectList() {
  const [projectCount, setProjectCount] = useState(1);
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentProjects = useMemo(
    () => resumeData?.project || [],
    [resumeData]
  );

  const setInitialStateItem = useCallback(() => {
    setResumeData((prevResumeData) => {
      const currentProjects = prevResumeData?.project || [];

      if (prevResumeData?.project?.length || 0 > 0) return prevResumeData;
      return {
        ...prevResumeData,
        project: [
          ...currentProjects,
          {
            id: uuidv4(),
            projectName: "",
            projectDescription: [{ id: uuidv4(), description: "" }],
          },
        ],
      };
    });
  }, [setResumeData]);

  useEffect(() => {
    setResumeData((prevResumeData) => {
      const currentProjects = prevResumeData?.project || [];

      return {
        ...prevResumeData,
        project: [
          ...currentProjects,
          {
            id: uuidv4(),
            projectName: "",
            projectDescription: [{ id: uuidv4(), description: "" }],
          },
        ],
      };
    });
  }, [setResumeData]);

  function handleAddProjectClick() {
    setInitialStateItem();
    setProjectCount((prevProjectCount) => (prevProjectCount += 1));
  }

  return (
    <>
      <div className="w-3/4">
        <div className="grid grid-cols-1 items-center gap-3 w-full">
          {Array.from({ length: projectCount }).map((_, i) => (
            <Project project={currentProjects[i]} key={i} />
          ))}
        </div>
      </div>
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={handleAddProjectClick}
        >
          <CirclePlus />
          Add Project
        </Button>
      </div>
    </>
  );
}
