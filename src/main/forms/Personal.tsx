import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
export function Personal() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function handleJobTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, jobTitle: e.target.value },
    });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, firstName: e.target.value },
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, lastName: e.target.value },
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, email: e.target.value },
    });
  }

  function handlePhoneNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    console.log(e.target.value);

    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, phoneNumber: newValue },
    });
  }

  function handleCountryChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, country: e.target.value },
    });
  }

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setResumeData({
      ...resumeData,
      personal: { ...resumeData?.personal, city: e.target.value },
    });
  }

  return (
    <form
      action=""
      className="w-3/4 grid grid-cols-2 gap-10 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1 col-span-2">
        <label htmlFor="" className="font-semibold text-gray-700">
          Job Title
        </label>
        <Input onChange={handleJobTitleChange} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          First Name
        </label>
        <Input onChange={handleFirstNameChange} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Last Name
        </label>
        <Input onChange={handleLastNameChange} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Email
        </label>
        <Input
          onChange={handleEmailChange}
          placeholder="ralphbryancarlos@gmail.com"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Phone Number
        </label>
        <Input onChange={handlePhoneNumberChange} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Country
        </label>
        <Input onChange={handleCountryChange} placeholder="e.g. Philippines" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          City
        </label>
        <Input onChange={handleCityChange} placeholder="" />
      </div>
    </form>
  );
}
