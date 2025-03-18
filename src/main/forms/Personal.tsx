import { Input } from "@/components/ui/input";
export function Personal() {
  return (
    <form
      action=""
      className="w-3/4 grid grid-cols-2 gap-10 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Job Title
        </label>
        <Input />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          First Name
        </label>
        <Input />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Last Name
        </label>
        <Input />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Email
        </label>
        <Input placeholder="ralphbryancarlos@gmail.com" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Country
        </label>
        <Input placeholder="ralphbryancarlos@gmail.com" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          City
        </label>
        <Input placeholder="" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Photo
        </label>
        <Input type="file" />
      </div>
    </form>
  );
}
