import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Certificate } from "./Certificate";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function CertificateList() {
  const [skillCount, setSkillCount] = useState(1);
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const certificates = resumeData?.certificate || [];

  useEffect(() => {
    setResumeData((prevResumeData) => {
      const currentCertificate = prevResumeData?.certificate || [];
      if (prevResumeData?.certificate?.length !== 0) return prevResumeData;
      return {
        ...prevResumeData,
        certificate: [
          ...currentCertificate,
          {
            id: uuidv4(),
            certificateName: "",
            certificateDescription: "",
            accreditationDate: undefined,
          },
        ],
      };
    });
  }, [setResumeData]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 items-center gap-3 w-full">
          {Array.from({ length: skillCount }).map((_, i) => (
            <Certificate
              certificate={certificates[i]}
              key={certificates[i]?.id}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <Button
          className="cursor-pointer font-semibold hover:bg-gray-200 border"
          variant={"ghost"}
          onClick={() => setSkillCount(skillCount + 1)}
        >
          <CirclePlus />
          Add Certificate
        </Button>
      </div>
    </div>
  );
}
