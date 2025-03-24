import { AppTypeContext } from "./AppContext";
import React, { useState } from "react";

interface AppTypeProviderProps {
  children: React.ReactNode;
}

export function AppTypeProvider({ children }: AppTypeProviderProps) {
  const [appType, setAppType] = useState("resume");

  return (
    <AppTypeContext.Provider value={{ appType, setAppType }}>
      {children}
    </AppTypeContext.Provider>
  );
}
