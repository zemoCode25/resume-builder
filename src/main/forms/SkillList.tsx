import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skill } from "./Skill";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { v4 as uuidv4 } from "uuid";

export function SkillList() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const [skillCount, setSkillCount] = useState(resumeData?.skill?.length || 1);

  function handleAddSkillClick() {
    const currentSkills = resumeData?.skill?.map((skill) => skill) || [];
    setResumeData({
      ...resumeData,
      skill: [...currentSkills, { id: uuidv4(), skillName: "" }],
    });
    setSkillCount((prevSkillCount) => (prevSkillCount += 1));
  }

  const skills = resumeData?.skill || [];
  return (
    <div className="w-3/4">
      <div className="grid grid-cols-2 items-center gap-3 w-full">
        {Array.from({ length: skillCount }).map((_, i) => (
          <Skill skill={skills[i]} key={i} />
        ))}
      </div>
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold"
          onClick={handleAddSkillClick}
        >
          <CirclePlus />
          Add Skill
        </Button>
      </div>
    </div>
  );
}
