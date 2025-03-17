import { ResumeForm } from "./resume/ResumeForm";
import { ResumeView } from "./resume/ResumeView";
export function Resume() {
  return (
    <div className="flex justify-between">
      <ResumeForm />
      <ResumeView />
    </div>
  );
}
