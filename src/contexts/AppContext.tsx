import { createContext } from "react";

interface AppTypeContextInterface {
  appType: string;
  setAppType: React.Dispatch<React.SetStateAction<string>>;
}

export const AppTypeContext = createContext<AppTypeContextInterface>(
  { appType: "resume", setAppType: () => {} } // Placeholder function
);
