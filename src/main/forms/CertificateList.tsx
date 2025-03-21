import { Button } from "react-day-picker";
import { CirclePlus } from "lucide-react";
import { Certificate } from "./Certificate";
import { useState } from "react";

export function CertificateList() {
  const [skillCount, setSkillCount] = useState(1);
  return (
    <>
      <div className="w-3/4">
        <div className="grid grid-cols-2 items-center gap-3 w-full">
          {Array.from({ length: skillCount }).map((_, i) => (
            <Certificate key={i} />
          ))}
        </div>
      </div>
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setSkillCount(skillCount + 1)}
        >
          <CirclePlus />
          Add Certificate
        </Button>
      </div>
    </>
  );
}
