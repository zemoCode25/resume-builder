import { CVDataContext } from "@/contexts/CVDataContext";
import { CVPDFViewer } from "../pdf/cover-letter/CVPDFViewer";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";
import { Overlay } from "@/components/overlay/Overlay";

export function CVView() {
  const { CVData } = useContext(CVDataContext);
  const { personal, employer, company, letterBody } = CVData || {};
  const [isPDFViwerOpen, setPDFViewer] = useState<boolean>(false);
  return (
    <div className="w-full lg:px-5 lg:sticky lg:top-10 h-fit flex flex-col-reverse lg:flex-col gap-3">
      <section className="font-serif bg-white p-12 flex flex-col gap-5">
        <article>
          <p>{`${employer?.firstName || ""} ${employer?.lastName || ""}`}</p>
          <p>{employer?.title || ""}</p>
          <p>{company?.companyName || ""}</p>
          <p>{company?.streetAddress || ""}</p>
          <p>{`${company?.city || ""}, ${company?.zipCode || ""}`}</p>
        </article>
        <article className="flex flex-col gap-5">
          <p>
            Dear {`${employer?.firstName || ""} ${employer?.lastName || ""}`}
          </p>
          <p>{letterBody?.openingBody || ""}</p>
          <p>{letterBody?.middleBody || ""}</p>
          <p>{letterBody?.closingBody || ""}</p>
          <p>Sincerely,</p>
          <p>{`${personal?.firstName || ""} ${personal?.lastName || ""}`}</p>
        </article>
      </section>
      <div className="w-full mt-2 flex justify-end">
        <Button
          onClick={() => setPDFViewer((prevPDFState: boolean) => !prevPDFState)}
          className="font-semibold cursor-pointer ml-auto w-full lg:w-fit"
        >
          <View />
          View PDF
        </Button>
      </div>
      {isPDFViwerOpen && (
        <div>
          <CVPDFViewer closePDFViewer={() => setPDFViewer(false)} />
          <Overlay closeOverlay={() => setPDFViewer(false)} />
        </div>
      )}
    </div>
  );
}
