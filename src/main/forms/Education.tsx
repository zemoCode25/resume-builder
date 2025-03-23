import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";

export function Education() {
  return (
    <>
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
          <DatePicker />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            End Date
          </label>
          <DatePicker />
        </div>
      </form>
    </>
  );
}
