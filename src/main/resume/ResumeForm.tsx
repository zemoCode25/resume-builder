import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
// import { DatePicker } from "@/components/DatePicker";
import { CirclePlus } from "lucide-react";

export function ResumeForm() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
      <div className="w-3/4 flex justify-between items-center bg-gray-200 p-1 rounded-lg">
        <button className="cursor-pointer text-2xl px-3 hover:font-bold">
          {"<"}
        </button>
        <p className=" font-semibold">Projects</p>
        <button className="cursor-pointer text-2xl px-3 hover:font-bold">
          {">"}
        </button>
      </div>
      <ProjectList />
    </div>
  );
}

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

export function Project() {
  return (
    <form
      action=""
      className="w-full flex flex-col gap-3 bg-white p-5 rounded-md shadow-all-sm"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project Name
        </label>
        <Input placeholder="e.g. Time Management" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project description
        </label>
        <textarea
          name=""
          id=""
          className="w-full p-3 text-sm border outline-none min-h-32 rounded-sm"
        ></textarea>
      </div>
    </form>
  );
}
