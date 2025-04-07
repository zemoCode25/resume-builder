import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { ExperienceType } from "@/types/templates/default-form";
import { useCallback, useContext, useState } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { DescriptionType } from "@/types/templates/default-form";

export function Experience({ experience }: { experience: ExperienceType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const [descriptionCount, setDescriptionCount] = useState(
    experience?.jobDescription?.length || 1
  );
  const currentExperiences = resumeData?.experience || [];
  const currentDescriptions = experience?.jobDescription || [];
  console.log("EXPERIENCE MO BOI?");
  console.log(experience);

  function handleAddDescriptionClick() {
    setDescriptionCount((prevCount) => (prevCount += 1));

    // Updating the current experience with the added description item
    const experienceUpdatedDescription = {
      ...experience,
      jobDescription: [
        ...(experience?.jobDescription || []),
        { id: uuidv4(), description: "" },
      ],
    };

    setResumeData((preResumeData) => {
      const updatedExperience = preResumeData?.experience?.map(
        (experienceItem) =>
          experience?.id === experienceItem?.id
            ? experienceUpdatedDescription
            : experienceItem
      );

      return {
        ...preResumeData,
        experience: updatedExperience,
      };
    });
  }

  function handleCompanyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedExperience = currentExperiences.map((currentExperience) =>
      currentExperience?.id === experience?.id
        ? { ...currentExperience, company: e.target.value }
        : currentExperience
    );

    setResumeData({ ...resumeData, experience: [...updatedExperience] });
  }

  function handlePositionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedExperience = currentExperiences.map((currentExperience) =>
      currentExperience?.id === experience?.id
        ? { ...currentExperience, position: e.target.value }
        : currentExperience
    );

    setResumeData({ ...resumeData, experience: [...updatedExperience] });
  }

  function handleJobDescriptionChange(
    e: React.ChangeEvent<HTMLInputElement>,
    currentDescription: DescriptionType
  ) {
    const updatedExperience = currentExperiences.map((currentExperience) =>
      currentExperience?.id === experience?.id
        ? {
            ...currentExperience,
            jobDescription: currentExperience?.jobDescription?.map(
              (decription) =>
                currentDescription?.id === decription?.id
                  ? { ...currentDescription, decription: e.target.value }
                  : decription
            ),
          }
        : currentExperience
    );

    setResumeData({ ...resumeData, experience: [...updatedExperience] });
  }

  // [
  //   ...(currentExperience?.jobDescription || []),
  //   { description: e.target.value },
  // ]

  const updateStartDate = useCallback(
    (date: Date | undefined) => {
      setResumeData((prevResumeData) => {
        const updatedExperience = prevResumeData?.experience?.map(
          (currentExperience) =>
            currentExperience.id === experience?.id
              ? { ...currentExperience, startDate: date }
              : currentExperience
        );

        return { ...prevResumeData, experience: updatedExperience };
      });
    },
    [setResumeData, experience?.id]
  );

  const updateEndDate = useCallback(
    (date: Date | undefined) => {
      setResumeData((prevResumeData) => {
        const updatedExperience = prevResumeData?.experience?.map(
          (currentExperience) =>
            currentExperience.id === experience?.id
              ? { ...currentExperience, endDate: date }
              : currentExperience
        );

        return { ...prevResumeData, experience: updatedExperience };
      });
    },
    [setResumeData, experience?.id]
  );

  return (
    <form
      action=""
      className="w-3/4 grid grid-cols-2 gap-3 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Company
        </label>
        <Input
          onChange={handleCompanyChange}
          placeholder="e.g. Resume Builder Inc."
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Position
        </label>
        <Input
          onChange={handlePositionChange}
          placeholder="e.g. Software Developer"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Start Date
        </label>
        <DatePicker formType="experience" updateResumeDate={updateStartDate} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          End Date
        </label>
        <DatePicker formType="experience" updateResumeDate={updateEndDate} />
      </div>
      <div className="w-full flex flex-col gap-1 col-span-2">
        <div className="flex justify-between align-middle items-center py-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Job Description
          </label>
          <Button
            type="button"
            onClick={handleAddDescriptionClick}
            className="cursor-pointer hover:shadow-sm font-semibold"
            variant={"secondary"}
          >
            + Add Experience
          </Button>
        </div>
        {Array.from({ length: descriptionCount }).map((_, i) => (
          <DescriptionInput
            handleJobDescriptionChange={handleJobDescriptionChange}
            currentDescription={currentDescriptions[i]}
            key={i}
          />
        ))}
      </div>
    </form>
  );
}

type DescriptionInputProps = {
  handleJobDescriptionChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    currentDescription: DescriptionType
  ) => void;
  currentDescription: DescriptionType;
};

export function DescriptionInput({
  handleJobDescriptionChange,
  currentDescription,
}: DescriptionInputProps) {
  return (
    <Input
      type="text"
      onChange={(e) => handleJobDescriptionChange(e, currentDescription)}
      className="w-full p-3 text-sm border outline-none rounded-sm"
    />
  );
}
