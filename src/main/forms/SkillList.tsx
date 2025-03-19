import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skill } from "./Skill";

export function SkillList() {
  const [skillCount, setSkillCount] = useState(1);
  return (
    <>
      <div className="w-3/4">
        <div className="grid grid-cols-2 items-center gap-3 w-full">
          {Array.from({ length: skillCount }).map((_, i) => (
            <Skill key={i} />
          ))}
        </div>
      </div>
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setSkillCount(skillCount + 1)}
        >
          <CirclePlus />
          Add Skill
        </Button>
      </div>
    </>
  );
}
