import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ResumeForm() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
      <div className="w-3/4 flex justify-between items-center bg-gray-200 p-1 rounded-lg">
        <button className="cursor-pointer text-2xl px-3 hover:font-bold">
          {"<"}
        </button>
        <p className=" font-semibold">Summary</p>
        <button className="cursor-pointer text-2xl px-3 hover:font-bold">
          {">"}
        </button>
      </div>
      <EducationContainer />
    </div>
  );
}

export function EducationContainer() {
  const [educationCount, setEducationCount] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: educationCount }).map((_, i) => (
        <Education key={i} />
      ))}
      <div className="flex justify-end w-3/4">
        <Button
          className="cursor-pointer font-semibold"
          onClick={() => setEducationCount(educationCount + 1)}
        >
          + Add Education
        </Button>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <form
      action=""
      className="w-3/4 grid grid-cols-2 gap-3 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          School/University
        </label>
        <Input placeholder="e.g. University of the Philippines - Diliman" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Degree Program
        </label>
        <Input placeholder="e.g. Computer Science" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Start Date
        </label>
        <Input type="date" placeholder="ralphbryancarlos@gmail.com" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          End Date
        </label>
        <Input type="date" placeholder="ralphbryancarlos@gmail.com" />
      </div>
    </form>
  );
}
