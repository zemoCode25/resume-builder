import { Input } from "@/components/ui/input";
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
