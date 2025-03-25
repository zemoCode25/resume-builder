import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationList } from "../forms/EducationList";
import { AppTypeContext } from "@/contexts/AppContext";
import { useState, useContext } from "react";

import { Personal } from "../forms/Personal";
import { ExperienceList } from "../forms/ExperienceList";

// import { CourseList } from "../forms/CourseList";
// import { SkillList } from "../forms/SkillList";

export function ResumeForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  const [carouselCount, setCarouselCount] = useState(0);

  const forms = [
    {
      formName: "Personal",
      formElement: <Personal />,
    },
    {
      formName: "Experience",
      formElement: <ExperienceList />,
    },
    {
      formName: "Education",
      formElement: <EducationList />,
    },
  ];

  const activeForm = forms[carouselCount];

  if (appType !== "resume") return;
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
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
      <div className="w-3/4 flex justify-between items-center bg-gray-200 p-1 rounded-lg">
        <button
          onClick={handleLeftCarouselCLick}
          className="cursor-pointer text-2xl px-3 hover:font-bold"
        >
          {"<"}
        </button>
        <p className=" font-semibold">{activeForm.formName}</p>
        <button
          onClick={handleRightCarouselCLick}
          className="cursor-pointer text-2xl px-3 hover:font-bold"
        >
          {">"}
        </button>
      </div>
      {activeForm.formElement}
    </div>
  );
}
