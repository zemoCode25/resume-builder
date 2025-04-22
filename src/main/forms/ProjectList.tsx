import { useCallback, useContext, useEffect, useMemo } from "react";
import { CirclePlus } from "lucide-react";
import { Project } from "./Project";
import { Button } from "@/components/ui/button";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function ProjectList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentProjects = useMemo(
    () => resumeData?.project || [],
    [resumeData]
  );

  const setInitialStateItem = useCallback(() => {
    setResumeData((prevResumeData) => {
      const currentProjects = prevResumeData?.project || [];

      if (prevResumeData?.project?.length || 0 !== 0) return prevResumeData;
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
    setInitialStateItem();
  }, [setInitialStateItem]);

  function handleAddProjectClick() {
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
  }

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 items-center gap-3 w-full">
          {Array.from({ length: resumeData?.project?.length || 1 }).map(
            (_, i) => (
              <Project project={currentProjects[i]} key={i} />
            )
          )}
        </div>
      </div>
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={handleAddProjectClick}
        >
          <CirclePlus />
          Add Project
        </Button>
      </div>
    </>
  );
}
