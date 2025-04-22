import { Input } from "@/components/ui/input";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";
import { SkillType } from "@/types/templates/default-form";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { deleteForm } from "./utils";

export function Skill({ skill = {} }: { skill: SkillType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  console.log(resumeData?.skill);

  /*
   
  * Check if the current input has an existing ID
  * If there is an existing ID, locate the ID and edit the element with the ID inside the array
  * If the input is unique/newly created, assign an ID and the initial characters 

   */

  function handleSkillChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentSkills = resumeData?.skill || [];

    const skillID = skill?.id;

    if (skillID) {
      const updatedSkills = currentSkills.map((skill) =>
        skillID.toLocaleString() === skill.id
          ? { ...skill, skillName: e.target.value }
          : skill
      );
      setResumeData({
        ...resumeData,
        skill: [...updatedSkills],
      });
    } else {
      setResumeData({
        ...resumeData,
        skill: [...currentSkills, { id: uuidv4(), skillName: e.target.value }],
      });
    }
  }

  function deleteProjectForm() {
    deleteForm("skill", skill?.id, setResumeData);
  }

  // Check whether skill has any element, if not, create a dummy array to render atleast 1 input
  return (
    <div className="w-full bg-white shadow-sm px-5 pb-5 pt-2 rounded-md">
      <div className="w-full flex justify-end border-b-gray-200">
        <Button
          className="cursor-pointer ml-auto !py-1.5 !px-2 h-fit"
          variant={"ghost"}
          onClick={deleteProjectForm}
        >
          <X strokeWidth={"2"} />
        </Button>
      </div>
      <form action="" className="w-full flex gap-3 bg-white">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Skill
          </label>
          <Input
            onChange={(e) => handleSkillChange(e)}
            value={skill?.skillName || ""}
            placeholder="e.g. Time Management"
          />
        </div>
      </form>
    </div>
  );
}
