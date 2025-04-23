import { Form } from "./form-item";
import { DefaultForm } from "./form-types";

export type Template = {
  readonly id: number;
  src: string;
  alt: string;
  forms: Form[];
  defaultFormState: DefaultForm;
};
