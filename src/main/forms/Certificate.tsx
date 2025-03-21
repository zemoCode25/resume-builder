import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";

export function Certificate() {
  return (
    <form
      action=""
      className="w-full flex flex-col gap-3 bg-white p-5 rounded-md shadow-all-sm"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Cerficate Name
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
          className="w-full p-3 text-sm border outline-none min-h-24 rounded-sm"
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Date of accreditation
        </label>
        <DatePicker />
      </div>
    </form>
  );
}
