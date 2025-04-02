import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { EducationType } from "@/types/templates/default-form";
import { useCallback, useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";

export function Education({ education }: { education: EducationType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const currentEducations = resumeData?.education || [];

  function handleSchoolChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedEducation = currentEducations.map((currentEducation) =>
      currentEducation?.id === education?.id
        ? { ...currentEducation, degreeProgram: e.target.value }
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
    const newValue = e.target.value.replace(/\D/g, "");
    const updatedEducation = currentEducations.map((currentEducation) =>
      currentEducation?.id === education?.id
        ? { ...currentEducation, GPA: parseFloat(newValue) }
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
          <DatePicker updateResumeDate={updateStartDate} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            End Date
          </label>
          <DatePicker updateResumeDate={updateEndDate} />
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
    </>
  );
}
