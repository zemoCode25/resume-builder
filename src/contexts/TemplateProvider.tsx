import React, { useEffect, useState } from "react";
import { TemplateContext } from "./TemplateContext";
import { Template } from "@/types/templates/template-types";
import { templates } from "@/content/templates";

interface TemplateProviderProps {
  children: React.ReactNode;
}

export function TemplateProvider({ children }: TemplateProviderProps) {
  function getInitialTemplate() {
    const storedTemplateID = localStorage.getItem("templateID") || "";
    return templates.find(
      (template) => template.id === parseInt(storedTemplateID)
    );
  }

  const initialTemplate = getInitialTemplate() || null;

  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    initialTemplate
  );

  useEffect(() => {
    if (selectedTemplate) {
      localStorage.setItem("templateID", JSON.stringify(selectedTemplate.id));
    }
  }, [selectedTemplate]);

  return (
    <TemplateContext.Provider
      value={{
        template: selectedTemplate,
        setSelectedTemplate: setSelectedTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
