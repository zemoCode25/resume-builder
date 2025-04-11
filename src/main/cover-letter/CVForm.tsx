import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppTypeContext } from "@/contexts/AppContext";
import { useContext } from "react";

export function CVForm() {
  const { appType, setAppType } = useContext(AppTypeContext);
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3">
      <Tabs defaultValue={appType} className="w-3/4" onValueChange={setAppType}>
        <TabsList className="w-full">
          <TabsTrigger className="cursor-pointer" value="resume">
            Resume
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="cover-letter">
            Cover Letter
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
