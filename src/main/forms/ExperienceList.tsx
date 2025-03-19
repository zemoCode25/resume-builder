import { Experience } from "./Experience";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ExperienceList() {
  const [experienceCount, setExperienceCount] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: experienceCount }).map((_, i) => (
        <Experience key={i} />
      ))}
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setExperienceCount(experienceCount + 1)}
        >
          + Add Experience
        </Button>
      </div>
    </div>
  );
}
