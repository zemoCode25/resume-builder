import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Course } from "./Course";

export function CourseList() {
  const [courseCount, setCourseCount] = useState(1);
  return (
    <div className="w-3/4">
      <div className="grid grid-cols-2 items-center gap-3 w-full">
        {Array.from({ length: courseCount }).map((_, i) => (
          <Course key={i} />
        ))}
      </div>
      <div className="flex w-3/4">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={() => setCourseCount(courseCount + 1)}
        >
          <CirclePlus />
          Add Course
        </Button>
      </div>
    </div>
  );
}
