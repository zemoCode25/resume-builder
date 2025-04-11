// import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Resume3 } from "../resume-preview/Resume-3";
import { View } from "lucide-react";
import { useContext, useState } from "react";
import { ResumePDFViewer } from "../pdf/ResumePDFViewer";
import { Overlay } from "@/components/overlay/Overlay";
import { AppTypeContext } from "@/contexts/AppContext";

export function ResumeView() {
  // const { resumeData } = useContext(ResumeDataContext);
  const [isPDFViwerOpen, setPDFViewer] = useState<boolean>(false);
  const { appType } = useContext(AppTypeContext);
  if (appType !== "resume") return;
  return (
    <div className="w-1/2 px-5 sticky top-10 h-fit">
      <Resume3 />
      <div className="w-full mt-2 flex">
        <Button
          onClick={() => setPDFViewer((prevPDFState: boolean) => !prevPDFState)}
          className="font-semibold cursor-pointer ml-auto"
        >
          <View />
          View PDF
        </Button>
      </div>
      {isPDFViwerOpen && (
        <div>
          <ResumePDFViewer closePDFViewer={() => setPDFViewer(false)} />
          <Overlay closeOverlay={() => setPDFViewer(false)} />
        </div>
      )}
    </div>
  );
}
