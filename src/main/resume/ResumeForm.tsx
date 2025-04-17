import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppTypeContext } from "@/contexts/AppContext";
import { useState, useContext } from "react";
import { TemplateContext } from "@/contexts/TemplateContext";

export function ResumeForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  const { template } = useContext(TemplateContext);
  const [carouselCount, setCarouselCount] = useState(0);

  const forms = template?.forms ?? [];
  console.log("TEMPLATE MO BOSS");
  console.log(template);

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
  return (
    <div className="lg:w-[60%] w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-3 mb-5">
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
        <div className="w-full flex justify-between items-center bg-gray-200 p-1 rounded-md">
          <button
            onClick={handleLeftCarouselCLick}
            className="cursor-pointer text-2xl px-3 hover:font-bold"
          >
            {"<"}
          </button>
          <p className="font-semibold">{activeForm.formName}</p>
          <button
            onClick={handleRightCarouselCLick}
            className="cursor-pointer text-2xl px-3 hover:font-bold"
          >
            {">"}
          </button>
        </div>
        {activeForm.formElement}
      </div>
    </div>
  );
}
