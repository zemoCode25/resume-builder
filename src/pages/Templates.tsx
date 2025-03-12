import { Overlay } from "../components/overlay/Overlay";
import { templates } from "../content/templates";
import { useState } from "react";

export function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isPreviewOpen, setPreview] = useState(false);

  function handleTemplateClick(key: number): void {
    setPreview((prevPreviewState) => !prevPreviewState);
    setSelectedTemplate(key);
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
            onClick={() => handleTemplateClick(template.id)}
            className="p-4 rounded-sm border border-gray-300 shadow-all-md cursor-pointer hover:border-gray-500 shadow-all-lg transition-shadow duration-200"
          >
            <img
              className="w-full h-full object-cover"
              src={template.src}
              alt={template.alt}
            />
          </div>
        ))}
      </div>

      {isPreviewOpen && (
        <div>
          <Preview />
          <Overlay />
        </div>
      )}
    </main>
  );
}

export function Preview() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 z-50">
      Centered Div
    </div>
  );
}
