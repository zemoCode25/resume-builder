import { Input } from "@/components/ui/input";

import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";
import { SkillType } from "@/types/templates/default-form";

export function Skill() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const skills = resumeData?.skill || [];

  console.log(resumeData?.skill);

  function handleSkillChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentSkillArr = resumeData?.skill?.map((skill) => skill) || [];

    setResumeData({
      ...resumeData,
      skill: [...currentSkillArr, { skillName: e.target.value }],
    });
  }
  // Check whether skill has any element, if not, create a dummy array to render atleast 1 input
  return (
    <form action="" className="w-full flex gap-3 bg-white p-5 rounded-md">
      {(skills.length > 0 ? skills : [{ skillName: "" }]).map(
        (skill: SkillType, key: number) => (
          <div className="w-full flex flex-col gap-1" key={key}>
            <label htmlFor="" className="font-semibold text-gray-700">
              Skill
            </label>
            <Input
              onChange={handleSkillChange}
              value={skill.skillName || ""}
              placeholder="e.g. Time Management"
            />
          </div>
        )
      )}
    </form>
  );
}
