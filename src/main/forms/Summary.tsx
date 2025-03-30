import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { useContext } from "react";

export function Summary() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  const summary = resumeData?.summary || {};

  function handleSummaryChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setResumeData({
      ...resumeData,
      summary: { ...resumeData?.summary, summary: e.target.value },
    });
  }

  return (
    <form action="" className="w-3/4 gap-10 bg-white p-5 rounded-md">
      <div className="w-full flex flex-col gap-1">
        <p className="font-semibold text-gray-500 text-sm pb-2">
          Write 2-4 short, energetic sentences about how great you are. Mention
          the role and what you did. What were the big achievements? Describe
          your motivation and list your skills.
        </p>
        <textarea
          value={summary?.summary}
          onChange={handleSummaryChange}
          className="w-full p-3 text-sm border outline-none min-h-32"
          name="summary"
          id="summary"
        ></textarea>
      </div>
    </form>
  );
}
