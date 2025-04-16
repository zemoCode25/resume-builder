import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppTypeContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
import { CVDataContext } from "@/contexts/CVDataContext";

export function CVForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <div className="w-3/4 flex flex-col justify-center items-center gap-3">
        <Tabs
          defaultValue={appType}
          className="w-full"
          onValueChange={setAppType}
        >
          <TabsList className="w-full bg-gray-200">
            <TabsTrigger className="cursor-pointer" value="resume">
              Resume
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="cover-letter">
              Cover Letter
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Personal />
        <Employer />
        <Company />
        <LetterBody />
      </div>
    </div>
  );
}

export function Personal() {
  const { CVData, updateCVData } = useContext(CVDataContext);
  const { personal } = CVData || {};

  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    updateCVData((prevCVData) => ({
      ...prevCVData,
      personal: { ...prevCVData?.personal, firstName: e.target.value },
    }));
  }

  function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    updateCVData((prevCVData) => ({
      ...prevCVData,
      personal: { ...prevCVData?.personal, lastName: e.target.value },
    }));
  }

  return (
    <div className="w-full flex flex-col bg-white rounded-sm p-5 shadow-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-800">Personal Details</h2>
      <form action="">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              First Name
            </label>
            <Input
              onChange={handleFirstName}
              value={personal?.firstName || ""}
            ></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Last Name
            </label>
            <Input
              value={personal?.lastName || ""}
              onChange={handleLastName}
            ></Input>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Employer() {
  const { CVData, updateCVData } = useContext(CVDataContext);
  const { employer } = CVData || {};

  function updateEmployerField(property: string = "", value: string = "") {
    updateCVData((prevCVData) => ({
      ...prevCVData,
      employer: { ...prevCVData?.employer, [property]: value },
    }));
  }

  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    updateEmployerField("firstName", e.target.value);
  }

  function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    updateEmployerField("lastName", e.target.value);
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateEmployerField("title", e.target.value);
  }

  return (
    <div className="w-full flex flex-col bg-white rounded-sm p-5 shadow-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-800">Employer Details</h2>
      <form action="">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              First Name
            </label>
            <Input
              onChange={handleFirstName}
              value={employer?.firstName || ""}
            ></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Last Name
            </label>
            <Input
              onChange={handleLastName}
              value={employer?.lastName || ""}
            ></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Title
            </label>
            <Input
              onChange={handleTitleChange}
              value={employer?.title || ""}
            ></Input>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Company() {
  return (
    <div className="w-full flex flex-col bg-white rounded-sm p-5 shadow-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-800">Company Details</h2>
      <form action="">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Company Name
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Street Address
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              City
            </label>
            <Input></Input>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Zip Code
            </label>
            <Input></Input>
          </div>
        </div>
      </form>
    </div>
  );
}

export function LetterBody() {
  return (
    <div className="w-full flex flex-col bg-white rounded-sm p-5 shadow-sm">
      <h2 className="mb-2 text-lg font-bold text-gray-800">Company Details</h2>
      <form action="">
        <div className="grid grid-cols-1 gap-x-10 gap-y-5">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Opening Body
            </label>
            <textarea className="w-full min-h-32 p-2 outline-none border text-sm rounded-sm shadow-xs"></textarea>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Middle Body
            </label>
            <textarea className="w-full min-h-32 p-2 outline-none border text-sm rounded-sm shadow-xs"></textarea>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700" htmlFor="">
              Closing Body
            </label>
            <textarea className="w-full min-h-32 p-2 outline-none border text-sm rounded-sm shadow-xs"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
