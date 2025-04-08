import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Resume3 } from "../resume-preview/Resume-3";
import { MyDocument } from "../pdf/document";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";

export function ResumeView() {
  const { resumeData } = useContext(ResumeDataContext);
  return (
    <div className="w-1/2 px-5 sticky top-10 h-fit">
      <Resume3 />
      <div className="w-full mt-2 flex">
        <PDFDownloadLink
          document={<MyDocument resumeData={resumeData || {}} />}
          fileName="ralph-resume.pdf"
          className="ml-auto"
        >
          {({ loading }) => (
            <Button className="font-semibold cursor-pointer">
              {loading ? "Preparing PDF..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
      <div>
        <PDFViewer width={"1000px"} height={"1000px"}>
          <MyDocument resumeData={resumeData || {}} />
        </PDFViewer>
      </div>
    </div>
  );
}
