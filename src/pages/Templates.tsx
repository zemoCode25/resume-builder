import { Overlay } from "../components/overlay/Overlay";
import { templates } from "../content/templates";
import { useContext, useState } from "react";
import { Template } from "../types/templates/template-types";
import { NavButton } from "../components/navigation/NavButton";
import { TemplateContext } from "@/contexts/TemplateContext";

export function Templates() {
  const { template, setSelectedTemplate } = useContext(TemplateContext);

  const [isPreviewOpen, setPreview] = useState(false);

  function handleTemplateClick(id: number): void {
    setPreview((prevPreviewState) => !prevPreviewState);
    const clickedTemplate =
      templates.find((template) => template.id === id) || null;
    setSelectedTemplate(clickedTemplate);
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-stone-100 py-5">
      <div className="flex justify-center flex-col items-center mb-5">
        <h1 className="text-4xl font-bold text-center">
          Choose your template.
        </h1>
        <p className=" text-center">Select a Harvard style resume template</p>
      </div>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 px-10">
        {templates.map((template) => (
          <div
            key={template?.id}
            onClick={() => handleTemplateClick(template.id)}
            className="p-4 rounded-sm border border-gray-300 shadow-all-md cursor-pointer hover:border-gray-500 shadow-all-lg transition-shadow duration-200"
          >
            <img
              className="w-full h-auto object-cover aspect-[3/4]"
              src={template.src}
              alt={template.alt}
              loading="eager"
            />
          </div>
        ))}
      </div>

      {isPreviewOpen && (
        <div>
          <Preview template={template} />
          <Overlay closeOverlay={() => setPreview(false)} />
        </div>
      )}
    </main>
  );
}

interface PreviewProps {
  template: Template | null;
}

export function Preview({ template }: PreviewProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-5 rounded-sm z-50">
      <div className="flex flex-col items-center gap-3 w-[80vw] max-w-[500px] h-full">
        <img
          className="object-cover h-full"
          src={template?.src}
          alt={template?.alt}
        />
        <NavButton
          to="/main"
          className="text-center cursor-pointer rounded-md transition-all ease-in-out bg-black px-4 py-2 w-full text-white hover:shadow-lg font-bold font-manrope"
        >
          Create Resume
        </NavButton>
      </div>
    </div>
  );
}
