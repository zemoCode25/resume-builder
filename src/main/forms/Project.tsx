import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { ProjectType } from "@/types/templates/default-form";

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
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const updatedProject = currentProjects.map((currentProject) =>
      currentProject?.id === project?.id
        ? { ...currentProject, projectDescription: e.target.value }
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
        <label htmlFor="" className="font-semibold text-gray-700">
          Project description
        </label>
        <textarea
          onChange={handleProjectDescriptionChange}
          name=""
          id=""
          className="w-full p-3 text-sm border outline-none min-h-32 rounded-sm"
        ></textarea>
      </div>
    </form>
  );
}
