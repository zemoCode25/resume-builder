9import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";

export function Project({ project }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentProjects = resumeData?.project || [];

  // function handleProjectNameChange() {
  //   const updatedProject = currentProjects.map((currentProject) =>
  //     currentProject?.id === experience?.id
  //       ? { ...currentProject, company: e.target.value }
  //       : currentProject
  //   );

  //   setResumeData({ ...resumeData, experience: [...updatedProject] });
  // }

  return (
    <form
      action=""
      className="w-full flex flex-col gap-3 bg-white p-5 rounded-md shadow-all-sm"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project Name
        </label>
        <Input placeholder="e.g. Time Management" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project description
        </label>
        <textarea
          name=""
          id=""
          className="w-full p-3 text-sm border outline-none min-h-32 rounded-sm"
        ></textarea>
      </div>
    </form>
  );
}
