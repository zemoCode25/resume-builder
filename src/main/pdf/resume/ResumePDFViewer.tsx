import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { TechDocument } from "./resume-document/TechDocument";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { TemplateContext } from "@/contexts/TemplateContext";
import { getTemplate } from "@/utils/main-utils";

export function ResumePDFViewer({
  closePDFViewer,
}: {
  closePDFViewer: () => void;
}) {
  const { resumeData } = useContext(ResumeDataContext);
  const { template } = useContext(TemplateContext);
  const templateID = template?.id;

  const selectedTemplate = getTemplate(templateID, resumeData);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-[90vw] max-w-[700px] h-[90vh] p-5 bg-white flex flex-col rounded-md">
        <div className="w-full flex gap-1 items-center justify-end mb-2">
          <PDFDownloadLink document={selectedTemplate}>
            <Button className="self-end font-semibold cursor-pointer">
              <Download /> Download PDF
            </Button>
          </PDFDownloadLink>
          <Button
            onClick={closePDFViewer}
            className="cursor-pointer"
            variant={"ghost"}
          >
            <X strokeWidth={"3"} />
          </Button>
        </div>
        <div className="flex-1">
          <PDFViewer width="100%" height="100%">
            <TechDocument resumeData={resumeData || {}} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
