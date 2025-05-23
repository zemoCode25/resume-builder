import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skill } from "./Skill";
import { useContext, useEffect } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function SkillList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function handleAddSkillClick() {
    const currentSkills = resumeData?.skill?.map((skill) => skill) || [];
    setResumeData({
      ...resumeData,
      skill: [...currentSkills, { id: uuidv4(), skillName: "" }],
    });
  }

  useEffect(() => {
    setResumeData((preResumeData) => {
      const currentSkills = preResumeData?.skill || [];
      if (preResumeData?.skill?.length !== 0) return preResumeData;

      return {
        ...preResumeData,
        skill: [...currentSkills, { id: uuidv4(), skillName: "" }],
      };
    });
  });

  const skills = resumeData?.skill || [];
  return (
    <div className="w-full mb-2 flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center gap-3 w-full">
        {Array.from({ length: resumeData?.skill?.length || 1 }).map((_, i) => (
          <Skill skill={skills[i]} key={i} />
        ))}
      </div>
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={handleAddSkillClick}
        >
          <CirclePlus />
          Add Skill
        </Button>
      </div>
    </div>
  );
}
