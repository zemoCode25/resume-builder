import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { DescriptionType, ProjectType } from "@/types/templates/default-form";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

export function Project({ project }: { project: ProjectType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentProjects = resumeData?.project || [];

  function handleProjectNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedProject = currentProjects.map((currentProject) =>
      currentProject?.id === project?.id
        ? { ...currentProject, projectName: e.target.value }
        : currentProject
    );

    setResumeData({ ...resumeData, project: [...updatedProject] });
  }

  function handleProjectDescriptionChange(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    currentDescription: DescriptionType
  ) {
    const projectUpdatedDescription = project?.projectDescription?.map(
      (description) =>
        description?.id === currentDescription?.id
          ? { ...currentDescription, description: e.target.value }
          : description
    );

    const updatedProject = currentProjects.map((currentProject) =>
      currentProject?.id === project?.id
        ? { ...currentProject, projectDescription: projectUpdatedDescription }
        : currentProject
    );

    setResumeData({ ...resumeData, project: [...updatedProject] });
  }

  const currentDescriptions = project?.projectDescription || [];

  function handleAddDescriptionClick() {
    const updatedDescription = [
      ...(project?.projectDescription || []),
      { id: uuidv4(), description: "" },
    ];

    const updatedProject = currentProjects?.map((currentProject) =>
      currentProject?.id === project?.id
        ? { ...project, projectDescription: updatedDescription }
        : currentProject
    );

    setResumeData({ ...resumeData, project: [...updatedProject] });
  }

  return (
    <form
      action=""
      className="w-full flex flex-col gap-3 bg-white p-5 rounded-md shadow-all-sm"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project Name
        </label>
        <Input
          onChange={handleProjectNameChange}
          placeholder="e.g. Time Management"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between align-middle items-center py-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Job Description
          </label>
          <Button
            type="button"
            onClick={handleAddDescriptionClick}
            className="cursor-pointer hover:shadow-sm font-semibold"
            variant={"secondary"}
          >
            + Add description
          </Button>
        </div>
        {Array.from({ length: project?.projectDescription?.length || 1 }).map(
          (_, i) => (
            <textarea
              value={currentDescriptions[i]?.description}
              onChange={(e) =>
                handleProjectDescriptionChange(e, currentDescriptions[i])
              }
              className="w-full p-3 text-sm border outline-none rounded-sm min-h-20"
            />
          )
        )}
      </div>
    </form>
  );
}
