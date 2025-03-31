import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { ExperienceType } from "@/types/templates/default-form";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";

export function Experience({ experience }: { experience: ExperienceType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const currentExperiences = resumeData?.experience || [];

  // function handleCompanyChange() {
  //   if(experience)
  // }

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
        <DatePicker />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          End Date
        </label>
        <DatePicker />
      </div>
      <div className="w-full flex flex-col gap-1 col-span-2">
        <label htmlFor="" className="font-semibold text-gray-700">
          Job Description
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
