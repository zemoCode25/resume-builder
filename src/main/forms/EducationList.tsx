import { Button } from "@/components/ui/button";
import { Education } from "./Education";
import { useState } from "react";
import { CirclePlus } from "lucide-react";

export function EducationList() {
  const [educationCount, setEducationCount] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: educationCount }).map((_, i) => (
        <Education key={i} />
      ))}
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setEducationCount(educationCount + 1)}
        >
          <CirclePlus />
          Add Education
        </Button>
      </div>
    </div>
  );
}
