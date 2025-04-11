import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { PDFDocument } from "./Document";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

export function ResumePDFViewer({
  closePDFViewer,
}: {
  closePDFViewer: () => void;
}) {
  const { resumeData } = useContext(ResumeDataContext);
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-[50vw] h-[80vh] p-5 bg-white flex flex-col rounded-md">
        <div className="w-full flex gap-1 items-center justify-end mb-2">
          <PDFDownloadLink document={<PDFDocument resumeData={resumeData} />}>
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
            <PDFDocument resumeData={resumeData || {}} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
