import { ResumeForm } from "./resume/ResumeForm";
import { ResumeView } from "./resume/ResumeView";
export function Resume() {
  return (
    <div className="flex justify-between w-full p-5">
      <ResumeForm />
      <ResumeView />
    </div>
  );
}
