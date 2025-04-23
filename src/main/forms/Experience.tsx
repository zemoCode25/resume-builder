import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { DatePicker } from "@/components/DatePicker";
import { ExperienceType } from "@/types/templates/form-types";
import { useCallback, useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { DescriptionType } from "@/types/templates/form-types";
import { deleteForm } from "./utils";

export function Experience({ experience }: { experience: ExperienceType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentExperiences = resumeData?.experience || [];
  const currentDescriptions = experience?.jobDescription || [];

  function handleAddDescriptionClick() {
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
              (description) =>
                currentDescription?.id === description?.id
                  ? { ...currentDescription, description: e.target.value }
                  : description
            ),
          }
        : currentExperience
    );

    setResumeData({ ...resumeData, experience: [...updatedExperience] });
  }

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

  function deleteExperienceForm() {
    deleteForm("experience", experience?.id, setResumeData);
  }

  function handleDeleteJobDescription(selectedDescriptionID: string) {
    if (!experience || experience?.jobDescription?.length === 1) {
      return;
    }
    const updatedExperience = currentExperiences.map((currentExperience) =>
      currentExperience?.id === experience?.id
        ? {
            ...currentExperience,
            jobDescription: currentExperience?.jobDescription?.filter(
              (descriptionItem) => descriptionItem?.id !== selectedDescriptionID
            ),
          }
        : currentExperience
    );

    setResumeData({ ...resumeData, experience: [...updatedExperience] });
  }

  return (
    <div className="w-full bg-white shadow-sm px-5 pb-5 pt-2 rounded-md">
      <div className="w-full flex justify-end border-b border-b-gray-200 my-1">
        <Button
          className="cursor-pointer ml-auto"
          variant={"ghost"}
          onClick={deleteExperienceForm}
        >
          <X strokeWidth={"2"} />
        </Button>
      </div>
      <form
        action=""
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Company
          </label>
          <Input
            value={experience?.company || ""}
            onChange={handleCompanyChange}
            placeholder="e.g. Resume Builder Inc."
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Position
          </label>
          <Input
            value={experience?.position || ""}
            onChange={handlePositionChange}
            placeholder="e.g. Software Developer"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            Start Date
          </label>
          <DatePicker
            formType="experience"
            updateResumeDate={updateStartDate}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-semibold text-gray-700">
            End Date
          </label>
          <DatePicker formType="experience" updateResumeDate={updateEndDate} />
        </div>
        <div className="w-full flex flex-col gap-1 col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
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
          {Array.from({ length: experience?.jobDescription?.length || 1 }).map(
            (_, i) => (
              <div className="w-full flex justify-between items-center gap-1">
                <Input
                  type="text"
                  value={currentDescriptions[i]?.description}
                  onChange={(e) =>
                    handleJobDescriptionChange(e, currentDescriptions[i])
                  }
                  className="w-full p-3 text-sm border outline-none rounded-sm"
                />
                <Button
                  onClick={() =>
                    handleDeleteJobDescription(currentDescriptions[i]?.id || "")
                  }
                  className="cursor-pointer"
                  variant={"ghost"}
                >
                  <X />
                </Button>
              </div>
            )
          )}
        </div>
      </form>
    </div>
  );
}
