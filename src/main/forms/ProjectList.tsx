import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Project } from "../resume/ResumeForm";
import { Button } from "react-day-picker";

export function ProjectList() {
  const [skillCount, setSkillCount] = useState(1);
  return (
    <>
      <div className="w-3/4">
        <div className="grid grid-cols-1 items-center gap-3 w-full">
          {Array.from({ length: skillCount }).map((_, i) => (
            <Project key={i} />
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
