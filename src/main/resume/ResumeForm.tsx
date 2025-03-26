import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationList } from "../forms/EducationList";
import { AppTypeContext } from "@/contexts/AppContext";
import { useState, useContext } from "react";

import { Personal } from "../forms/Personal";
import { ExperienceList } from "../forms/ExperienceList";
import { ProjectList } from "../forms/ProjectList";
import { Summary } from "../forms/Summary";
import { SkillList } from "../forms/SkillList";

// import { CourseList } from "../forms/CourseList";
// import { SkillList } from "../forms/SkillList";

/*
*TODO LIST for 03/26/25

- create context for the selected template
- Setup the state in the resume component
- Implement controlled input elements for each form
- Create a state for each form then update the main resume state.
*/

export function ResumeForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  const [carouselCount, setCarouselCount] = useState(0);

  const forms = [
    {
      formName: "Personal",
      formElement: <Personal />,
    },
    {
      formName: "Summary",
      formElement: <Summary />,
    },
    {
      formName: "Skills",
      formElement: <SkillList />,
    },
    {
      formName: "Education",
      formElement: <EducationList />,
    },
    {
      formName: "Experience",
      formElement: <ExperienceList />,
    },
    {
      formName: "Project",
      formElement: <ProjectList />,
    },
  ];

  function handleLeftCarouselCLick() {
    if (carouselCount - 1 < 0) {
      setCarouselCount(forms.length - 1);
      return;
    }
    setCarouselCount(carouselCount - 1);
  }

  function handleRightCarouselCLick() {
    const updatedCount = carouselCount + 1;

    if (updatedCount > forms.length - 1) {
      setCarouselCount(0);
      return;
    }
    setCarouselCount(updatedCount);
  }

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
