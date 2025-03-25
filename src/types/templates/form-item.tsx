import { JSX } from "react";

export interface Form {
  formName: string;
  formElement: JSX.Element; // ✅ Correct
}
