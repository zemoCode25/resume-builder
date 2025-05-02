// import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Resume3 } from "../resume-preview/Resume-3";
import { View } from "lucide-react";
import { useContext, useState } from "react";
import { ResumePDFViewer } from "../pdf/resume/ResumePDFViewer";
import { Overlay } from "@/components/overlay/Overlay";
import { AppTypeContext } from "@/contexts/AppContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { getTemplate } from "@/utils/main-utils";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { TemplateContext } from "@/contexts/TemplateContext";
import { Download } from "lucide-react";

export function ResumeView() {
  // const { resumeData } = useContext(ResumeDataContext);
  const [isPDFViwerOpen, setPDFViewer] = useState<boolean>(false);
  const { appType } = useContext(AppTypeContext);
  const { resumeData } = useContext(ResumeDataContext);
  const { template } = useContext(TemplateContext);
  const templateID = template?.id;

  const selectedTemplate = getTemplate(templateID, resumeData);

  if (appType !== "resume") return;
  return (
    <div className="w-full flex lg:px-5 lg:sticky flex-col-reverse lg:flex-col lg:top-10 h-fit gap-3">
      <Resume3 />
      <div className="w-full mt-2 flex ">
        <Button
          onClick={() => setPDFViewer((prevPDFState: boolean) => !prevPDFState)}
          className="hidden lg:flex font-semibold cursor-pointer ml-auto w-full lg:w-fit"
        >
          <View />
          <span>View PDF</span>
        </Button>
        <PDFDownloadLink
          document={selectedTemplate}
          className="w-full flex lg:hidden"
        >
          <Button className="font-semibold cursor-pointer w-full">
            <Download /> <span>Download PDF</span>
          </Button>
        </PDFDownloadLink>
      </div>
      {isPDFViwerOpen && (
        <div className="hidden lg:block">
          <ResumePDFViewer closePDFViewer={() => setPDFViewer(false)} />
          <Overlay closeOverlay={() => setPDFViewer(false)} />
        </div>
      )}
    </div>
  );
}
