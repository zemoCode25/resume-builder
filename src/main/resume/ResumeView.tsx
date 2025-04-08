import { Button } from "@/components/ui/button";
import { Resume3 } from "../resume-preview/Resume-3";
export function ResumeView() {
  return (
    <div className="w-1/2 px-5 sticky top-10 h-fit">
      <Resume3 />
      <div className="w-full mt-2 flex">
        <Button className="font-semibold cursor-pointer ml-auto">
          Generate PDF
        </Button>
      </div>
    </div>
  );
}
