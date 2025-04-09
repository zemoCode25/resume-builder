import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { CertificateType } from "@/types/templates/default-form";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useCallback, useContext } from "react";

export function Certificate({ certificate }: { certificate: CertificateType }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const currentCertificates = resumeData?.certificate || [];
  const { certificateName, certificateDescription, accreditationDate } =
    certificate || [];

  function updateCertificateField(field: string = "", value: string = "") {
    const updatedCertificate = currentCertificates?.map((certificateItem) =>
      certificateItem?.id === certificate?.id
        ? {
            ...certificate,
            [field]: value,
          }
        : certificateItem
    );
    setResumeData((prevResumeData) => {
      return { ...prevResumeData, certificate: [...updatedCertificate] };
    });
  }

  function handleCertificateNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateCertificateField("certificateName", e.target.value);
  }

  function handleCertificateDescriptionChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    updateCertificateField("certificateDescription", e.target.value);
  }

  const updateAccreditationDate = useCallback(
    (date: Date | undefined) => {
      setResumeData((prevResumeData) => {
        const updatedCertificate = prevResumeData?.certificate?.map(
          (certificateItem) =>
            certificateItem?.id === certificate?.id
              ? {
                  ...certificateItem,
                  accreditationDate: date,
                }
              : certificateItem
        );

        return {
          ...prevResumeData,
          certificate: updatedCertificate,
        };
      });
    },
    [setResumeData, certificate?.id]
  );

  return (
    <form
      action=""
      className="w-full grid grid-cols-1 gap-3 bg-white p-5 rounded-md"
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Cerficate Name
        </label>
        <Input
          onChange={handleCertificateNameChange}
          value={certificateName || ""}
          placeholder="e.g. Time Management"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Project description
        </label>
        <textarea
          value={certificateDescription || ""}
          onChange={handleCertificateDescriptionChange}
          name=""
          id=""
          className="w-full p-3 text-sm border outline-none min-h-24 rounded-sm"
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Date of accreditation
        </label>
        <DatePicker
          currentDate={accreditationDate || null}
          updateResumeDate={updateAccreditationDate}
        />
      </div>
    </form>
  );
}
