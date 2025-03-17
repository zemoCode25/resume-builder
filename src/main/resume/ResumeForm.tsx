import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResumeForm() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
      <div className="w-1/2 flex justify-between items-center bg-gray-200 p-1 rounded-lg">
        <button className="cursor-pointer py-1 px-3 hover:font-bold">
          {"<"}
        </button>
        <p className=" font-semibold">Personal details</p>
        <button className="cursor-pointer py-1 px-3 hover:font-bold">
          {">"}
        </button>
      </div>
      <form action="" className="w-3/4 grid grid-cols-2 gap-10">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Job Title
          </label>
          <Input></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            First Name
          </label>
          <Input></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Last Name
          </label>
          <Input></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Email
          </label>
          <Input placeholder="ralphbryancarlos@gmail.com"></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Country
          </label>
          <Input placeholder="ralphbryancarlos@gmail.com"></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            City
          </label>
          <Input placeholder="ralphbryancarlos@gmail.com"></Input>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Photo
          </label>
          <Input type="file"></Input>
        </div>
      </form>
    </div>
  );
}
