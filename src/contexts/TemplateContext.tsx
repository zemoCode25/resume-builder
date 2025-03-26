import { createContext } from "react";
import { Template } from "@/types/templates/template-types";

interface TemplateContextInterface {
  template: Template | null;
}

export const TemplateContext = createContext<TemplateContextInterface>({
  template: null,
});
