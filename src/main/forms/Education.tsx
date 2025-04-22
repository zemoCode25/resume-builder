import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { EducationType } from "@/types/templates/default-form";
import { useCallback, useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function Education({ education }: { education: EducationType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const currentEducations = resumeData?.education || [];

  function handleSchoolChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedEducation = currentEducations.map((currentEducation) =>
      currentEducation?.id === education?.id
        ? { ...currentEducation, school: e.target.value }
        : currentEducation
    );

    setResumeData({ ...resumeData, education: [...updatedEducation] });
  }

  function handleDegreeProgramChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedEducation = currentEducations.map((currentEducation) =>
      currentEducation?.id === education?.id
        ? { ...currentEducation, degreeProgram: e.target.value }
        : currentEducation
    );

    setResumeData({ ...resumeData, education: [...updatedEducation] });
  }

  function handleGPAChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;

    // This regex allows: "", "34", "34.", "34.4", "0.99", etc.
    const isValidInput = /^(\d+)?(\.\d{0,2})?$/.test(input);

    if (!isValidInput) return; // Invalid input, ignore it

    const updatedEducation = currentEducations.map((currentEducation) =>
      currentEducation?.id === education?.id
        ? {
            ...currentEducation,
            GPA: input === "" ? undefined : input,
          }
        : currentEducation
    );

    setResumeData({ ...resumeData, education: [...updatedEducation] });
  }

  const updateStartDate = useCallback(
    (date: Date | undefined) => {
      setResumeData((prevResumeData) => {
        const updatedEducation = prevResumeData?.education?.map(
          (currentEducation) =>
            currentEducation.id === education?.id
              ? { ...currentEducation, startDate: date }
              : currentEducation
        );

        return { ...prevResumeData, education: updatedEducation };
      });
    },
    [setResumeData, education?.id]
  );

  const updateEndDate = useCallback(
    (date: Date | undefined) => {
      setResumeData((prevResumeData) => {
        const updatedEducation = prevResumeData?.education?.map(
          (currentEducation) =>
            currentEducation.id === education?.id
              ? { ...currentEducation, endDate: date }
              : currentEducation
        );

        return { ...prevResumeData, education: updatedEducation };
      });
    },
    [setResumeData, education?.id]
  );

  function deleteEducationForm() {
    setResumeData((prevResumeData) => {
      if (prevResumeData?.education?.length === 1) {
        return prevResumeData;
      }

      const updatedEducation = prevResumeData?.education?.filter(
        (educationItem) => educationItem?.id !== education?.id
      );

      return {
        ...prevResumeData,
        education: updatedEducation,
      };
    });
  }

  return (
    <div className="w-full bg-white shadow-sm px-5 pb-5 pt-2 rounded-md">
      <div className="w-full flex justify-end border-b border-b-gray-200 my-1">
        <Button
          className="cursor-pointer ml-auto"
          variant={"ghost"}
          onClick={deleteEducationForm}
        >
          <X strokeWidth={"2"} />
        </Button>
      </div>
      <form
        action=""
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
      >
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            School/University
          </label>
          <Input
            value={education?.school || ""}
            onChange={handleSchoolChange}
            placeholder="e.g. University of the Philippines - Diliman"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Degree Program
          </label>
          <Input
            value={education?.degreeProgram || ""}
            onChange={handleDegreeProgramChange}
            placeholder="e.g. Computer Science"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Start Date
          </label>
          <DatePicker
            currentDate={education?.startDate || null}
            updateResumeDate={updateStartDate}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            End Date
          </label>
          <DatePicker
            currentDate={education?.endDate || null}
            updateResumeDate={updateEndDate}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            GPA
          </label>
          <Input
            value={education?.GPA || ""}
            onChange={handleGPAChange}
            placeholder="e.g. 1.25"
          />
        </div>
      </form>
    </div>
  );
}
