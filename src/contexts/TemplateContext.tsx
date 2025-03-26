import { createContext } from "react";
import { Template } from "@/types/templates/template-types";

export interface TemplateContextInterface {
  template: Template | null;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template | null>>;
}

export const TemplateContext = createContext<TemplateContextInterface>({
  template: null,
  setSelectedTemplate: () => {},
});
