import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppTypeContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";

export function CVForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-4">
      <Tabs defaultValue={appType} className="w-3/4" onValueChange={setAppType}>
        <TabsList className="w-full">
          <TabsTrigger className="cursor-pointer" value="resume">
            Resume
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="cover-letter">
            Cover Letter
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Personal />
      <Company />
    </div>
  );
}

export function Personal() {
  return (
    <div className="w-3/4 flex flex-col bg-white rounded-sm p-5 shadow-all-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Personal Details</h2>
      <form action="">
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              First Name
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Last Name
            </label>
            <Input></Input>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Company() {
  return (
    <div className="w-3/4 flex flex-col bg-white rounded-sm p-5 shadow-all-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Company Details</h2>
      <form action="">
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              First Name
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Last Name
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Title
            </label>
            <Input></Input>
          </div>
        </div>
      </form>
    </div>
  );
}
