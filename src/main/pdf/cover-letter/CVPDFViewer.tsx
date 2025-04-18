import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { CVDataContext } from "@/contexts/CVDataContext";
import { CVDocument } from "./CVDocument";
import { useContext } from "react";

export function CVPDFViewer({
  closePDFViewer,
}: {
  closePDFViewer: () => void;
}) {
  const { CVData } = useContext(CVDataContext);
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-[50vw] h-[80vh] p-5 bg-white flex flex-col rounded-md">
        <div className="w-full flex gap-1 items-center justify-end mb-2">
          <PDFDownloadLink document={<CVDocument CVData={CVData} />}>
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
        <div className="h-full">
          <PDFViewer width="100%" height="100%">
            <CVDocument CVData={CVData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
