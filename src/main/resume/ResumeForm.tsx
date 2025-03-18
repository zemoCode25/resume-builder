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
        <p className=" font-semibold">Experience</p>
        <button className="cursor-pointer text-2xl px-3 hover:font-bold">
          {">"}
        </button>
      </div>
      <ExperienceList />
    </div>
  );
}

export function ExperienceList() {
  const [experienceCount, setExperienceCount] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {Array.from({ length: experienceCount }).map((_, i) => (
        <Experience key={i} />
      ))}
      <div className="flex justify-end w-3/4">
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

export function Experience() {
  return (
    <form
      action=""
      className="w-3/4 grid grid-cols-2 gap-3 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Company
        </label>
        <Input placeholder="e.g. Resume Builder Inc." />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Position
        </label>
        <Input placeholder="e.g. Software Developer" />
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
      <div className="w-full flex flex-col gap-1 col-span-2">
        <label htmlFor="" className="font-semibold text-gray-700">
          Job Description
        </label>
        <textarea
          name=""
          id=""
          className="w-full p-3 text-sm border outline-none min-h-32"
        ></textarea>
      </div>
    </form>
  );
}
